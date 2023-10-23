import { Component } from "@angular/core";

interface Componente {
  name: string;
  redirecTo: string;
  icon: string;
}

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor() {}

  componentes: Componente[] = [
    {
      name: "Inicio",
      redirecTo: "/inicio",
      icon: "home-outline",
    },
    {
      name: "Login",
      redirecTo: "/login",
      icon: "person-add-outline",
    },
    {
      name: "Registro",
      redirecTo: "/registro",
      icon: "log-in-outline",
    },
    {
      name: "Feriados",
      redirecTo: "/feriados",
      icon: "happy-outline",
    },
    {
      name: "Información",
      redirecTo: "/info",
      icon: "help-circle-outline",
    },
  ];
}
