import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.page.html",
  styleUrls: ["./perfil.page.scss"],
})
export class PerfilPage implements OnInit {
  profesor = {
    id: 0,
    nombre: "",
    email: "",
    password: "",
    asignaturas: [],
    isactive: false,
  };
  constructor(private authService: AuthService, private router: Router) {}

  ionViewWillEnter() {
    this.getProfesorById(this.getIdFromUrl());
  }

  ngOnInit() {}

  getIdFromUrl() {
    let url = this.router.url;
    let arr = url.split("/", 3);
    let id = parseInt(arr[2]);
    return id;
  }

  getProfesorById(profesorID: number) {
    this.authService.GetUserById(profesorID).subscribe((resp: any) => {
      this.profesor = {
        id: resp[0].id,
        nombre: resp[0].nombre,
        email: resp[0].email,
        password: resp[0].password,
        asignaturas: resp[0].asignaturas,
        isactive: resp[0].isactive,
      };
    });
  }

  updateProfesor() {
    this.authService.ActualizarProfesor(this.profesor).subscribe();
  }
}
