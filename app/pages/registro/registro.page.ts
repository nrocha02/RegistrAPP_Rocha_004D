import { Component, OnInit } from "@angular/core";
import { ApiCrudService } from "src/app/services/api-crud.service";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { IAsignaturas } from "../interfaces/interfaces";

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
    asignaturas: [],
    isactive: true,
  };

  asignaturas: IAsignaturas[] = [];

  registerForm: FormGroup;

  constructor(
    private apiCrud: ApiCrudService,
    private router: Router,
    private builder: FormBuilder
  ) {
    this.registerForm = this.builder.group({
      nombre: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }
  ngOnInit() {}

  crearProfesor() {
    /*this.newProfesor.asignaturas = this.asignaturas
      .filter((asignatura) => asignatura.selected)
      .map((asignatura) => asignatura.nombre);*/

    this.apiCrud.CrearProfesor(this.newProfesor).subscribe(() => {
      this.router.navigateByUrl("/inicio");
    });
  }
}
