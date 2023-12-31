import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { ApiCrudService } from "src/app/services/api-crud.service";
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";
import { IAsignaturas, UserProfesor } from "../interfaces/interfaces";

@Component({
  selector: "app-registro",
  templateUrl: "./registro.page.html",
  styleUrls: ["./registro.page.scss"],
})
export class RegistroPage implements OnInit {
  newUsers: UserProfesor = {
    nombre: "",
    email: "",
    asignaturas: [],
    password: "",
    isactive: true,
  };

  registroForm: FormGroup;

  constructor(
    private authservice: AuthService,
    private alertcontroller: AlertController,
    private router: Router,
    private fBuilder: FormBuilder,
    private apicrud: ApiCrudService
  ) {
    this.registroForm = this.fBuilder.group({
      nombre: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      asignaturas: new FormControl([], [Validators.required]),
    });
  }

  ngOnInit() {}

  registrarUsuario() {
    if (this.registroForm.valid) {
      this.newUsers.nombre = this.registroForm.value.nombre;
      this.newUsers.email = this.registroForm.value.email;
      this.newUsers.password = this.registroForm.value.password;
      this.newUsers.asignaturas = this.registroForm.value.asignaturas;

      this.authservice.CrearUsuario(this.newUsers).subscribe(() => {
        this.Enviar();
        this.router.navigateByUrl("/inicio");
      });
    } else {
      this.MostrarAlerta("Por favor, completa todos los campos.");
    }
  }

  async MostrarAlerta(mensaje: string) {
    const alert = await this.alertcontroller.create({
      header: "Error",
      message: mensaje,
      buttons: ["OK"],
    });

    await alert.present();
  }

  async MostrarMensaje() {
    const alert = await this.alertcontroller.create({
      header: "Registrado",
      message: "Se ha registrado correctamente",
      buttons: ["OK"],
    });

    await alert.present();
  }

  Enviar() {
    console.log("Usuario registrado");
    this.MostrarMensaje();
  }
}
