import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AlertController, ToastController } from "@ionic/angular";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-nueva-contra",
  templateUrl: "./nueva-contra.page.html",
  styleUrls: ["./nueva-contra.page.scss"],
})
export class NuevaContraPage implements OnInit {
  usuarioForm: FormGroup;
  usuario = {
    id: 0,
    nombre: "",
    email: "",
    password: "",
    asignaturas: [],
    isactive: true,
  };
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController,
    private formBuilder: FormBuilder // Inyectar FormBuilder
  ) {
    this.usuarioForm = this.formBuilder.group({
      txtPass: ["", Validators.required], // Agregar el control para la nueva contraseña
    });
  }

  ngOnInit() {}

  getIdFromUrl() {
    let url = this.router.url;
    let arr = url.split("/", 3);
    let id = parseInt(arr[2]);
    return id;
  }

  ionViewWillEnter() {
    this.getUsuarioById(this.getIdFromUrl());
  }

  getUsuarioById(usuarioID: number) {
    this.authService.GetUserById(usuarioID).subscribe((resp: any) => {
      console.log(resp);
      this.usuario = {
        id: resp[0].id,
        nombre: resp[0].nombre,
        email: resp[0].email,
        password: "",
        asignaturas: resp[0].asignaturas,
        isactive: resp[0].isactive,
      };
    });
  }

  ActualizarContra() {
    this.authService.ActualizarProfesor(this.usuario).subscribe(() => {
      this.mostrarMensaje();
      this.router.navigateByUrl("/inicio");
    });
  }

  async mostrarMensaje() {
    const alerta = await this.alertController.create({
      header: "Usuario Actualizado ",
      message: "Su contraseña a sido reestablecida",
      buttons: ["OK"],
    });
    alerta.present();
  }
}
