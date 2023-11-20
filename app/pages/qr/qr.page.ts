import { Component, OnInit } from "@angular/core";
import { QrService } from "src/app/services/qr.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-qr",
  templateUrl: "./qr.page.html",
  styleUrls: ["./qr.page.scss"],
})
export class QrPage implements OnInit {
  asignaturas = this.authService.GetAsignaturas();

  fechaActual = new Date();
  formatoFecha = `${this.fechaActual.getFullYear()}-${
    this.fechaActual.getMonth() + 1
  }-${this.fechaActual.getDate()}`;

  asistencia = {
    docente: this.authService.GetName(),
    asignatura: "",
    fecha: this.formatoFecha,
  };

  qrCodeValue: string = "";

  constructor(private qrservice: QrService, private authService: AuthService) {}

  ngOnInit() {
    this.generarQR();
  }

  generarQR() {
    this.qrCodeValue = this.formatoFecha;
  }
}
