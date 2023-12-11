import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
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

  @ViewChild("formRef", { static: false }) formRef!: NgForm;

  fecha = this.formatoFecha;
  asignatura: string = "";
  docente = this.authService.GetName();

  constructor(private qrservice: QrService, private authService: AuthService) {}

  ngOnInit() {}

  generarQR() {
    this.asignatura = this.formRef.value.asignatura || "";
    this.qrCodeString = this.fecha + " " + this.docente + " " + this.asignatura;
  }
}
