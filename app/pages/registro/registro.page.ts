import { Component, OnInit } from "@angular/core";
import { ApiCrudService } from "src/app/services/api-crud.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-registro",
  templateUrl: "./registro.page.html",
  styleUrls: ["./registro.page.scss"],
})
export class RegistroPage implements OnInit {
  newProfesor = {
    nombre: "",
    email: "",
    password: "",
    role: "usuario",
    isactive: true,
  };

  constructor(private apiCrud: ApiCrudService, private router: Router) {}
  ngOnInit() {}

  crearProfesor() {
    this.apiCrud.CrearProfesor(this.newProfesor).subscribe();
    this.router.navigateByUrl("/inicio");
  }
}
