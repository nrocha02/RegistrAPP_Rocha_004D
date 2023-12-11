import { Component, OnInit } from "@angular/core";
import { QrService } from "src/app/services/qr.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-qr",
  templateUrl: "./qr.page.html",
  styleUrls: ["./qr.page.scss"],
})
export class QrPage implements OnInit {
  qrCodeString: string = "";

  fechaActual = new Date();
  formatoFecha = `${this.fechaActual.getFullYear()}-${
    this.fechaActual.getMonth() + 1
  }-${this.fechaActual.getDate()}`;

  fecha = this.formatoFecha;
  asignaturas = this.authService.GetAsignaturas();
  docente = this.authService.GetName();

  constructor(private qrservice: QrService, private authService: AuthService) {}

  ngOnInit() {
    this.generarQR();
  }

  generarQR() {
    this.qrCodeString = this.fecha + this.docente;
  }
}
