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
  selector: "app-olvidar-contra",
  templateUrl: "./olvidar-contra.page.html",
  styleUrls: ["./olvidar-contra.page.scss"],
})
export class OlvidarContraPage implements OnInit {
  userdata: any;
  emailForm: FormGroup;
  usuario = {
    id: 0,
    nombre: "",
    email: "",
    password: "",
    asignaturas: [],
    isactive: true,
  };

  constructor(
    private authservice: AuthService,
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController,
    private builder: FormBuilder
  ) {
    this.emailForm = this.builder.group({
      email: new FormControl("", [
        Validators.required,
        Validators.minLength(4), // Agregamos el validador de email
      ]),
    });
  }

  checkmail() {
    if (this.emailForm.valid) {
      this.authservice
        .GetUserByEmail(this.emailForm.value.email)
        .subscribe((resp) => {
          this.userdata = resp;
          console.log(this.userdata);
          if (this.userdata.length > 0) {
            this.usuario = {
              id: this.userdata[0].id,
              nombre: this.userdata[0].nombre,
              email: this.userdata[0].email,
              asignaturas: this.userdata[0].asignaturas,
              password: this.userdata[0].password,
              isactive: this.userdata[0].isactive,
            };
            // Redirigir a la página de recuperación de contraseña
            this.router.navigate(["/nueva-contra", this.usuario.id]);
          } else {
            this.NoExiste();
            this.emailForm.reset();
          }
        });
    }
  }

  async showToast(msg: any) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
    });
    toast.present();
  }

  async UserInactivo() {
    const alerta = await this.alertController.create({
      header: "Usuario inactivo",
      message: "Contactar a admin@admin.cl",
      buttons: ["OK"],
    });
    alerta.present();
  }

  async Error() {
    const alerta = await this.alertController.create({
      header: "Error",
      message: "Revise sus credenciales",
      buttons: ["OK"],
    });
    alerta.present();
  }

  async NoExiste() {
    const alerta = await this.alertController.create({
      header: "No existe",
      message: "No hay correo vinculado",
      buttons: ["OK"],
    });
    alerta.present();
  }
  ngOnInit() {}
}
