import { Component, OnInit } from "@angular/core";
import { MenuController } from "@ionic/angular";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.page.html",
  styleUrls: ["./inicio.page.scss"],
})
export class InicioPage implements OnInit {
  constructor(
    private menuController: MenuController,
    private authService: AuthService
  ) {}

  usuario = this.authService.GetName();

  estaLoggeado = this.authService.IsLoggedIn();

  cerrarSesion() {
    this.authService.logout();
  }

  ngOnInit() {}

  mostrarMenu() {
    this.menuController.open("first");
  }
}
