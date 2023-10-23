import { Component, OnInit } from "@angular/core";
import { MenuController } from "@ionic/angular";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.page.html",
  styleUrls: ["./inicio.page.scss"],
})
export class InicioPage implements OnInit {
  constructor(
    private menuController: MenuController,
    private authService: AuthService,
    private router: Router
  ) {}

  usuario = this.authService.GetName();

  estaLoggeado = this.authService.IsLoggedIn();

  cerrarSesion() {
    this.authService.logout();
    this.router.navigateByUrl("/inicio");
  }

  ngOnInit() {}

  mostrarMenu() {
    this.menuController.open("first");
  }
}
