import { Component, OnInit } from "@angular/core";
import { FeriadosService } from "src/app/services/feriados.service";
import { LoadingController } from "@ionic/angular";
import { InfiniteScrollCustomEvent } from "@ionic/angular";
import { IFeriados } from "../interfaces/interfaces";

@Component({
  selector: "app-feriados",
  templateUrl: "./feriados.page.html",
  styleUrls: ["./feriados.page.scss"],
})
export class FeriadosPage {
  feriados: IFeriados[] = [];

  constructor(
    private feriadosService: FeriadosService,
    private loadingCtrl: LoadingController
  ) {}

  ionViewWillEnter() {
    this.loadFeriados();
  }

  async loadFeriados(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: "Cargando..",
      spinner: "bubbles",
    });
    await loading.present();

    this.feriadosService.ObtenerTodosFeriados().subscribe({
      next: (resp) => {
        console.log(resp);
        loading.dismiss();
        let listString = JSON.stringify(resp);
        this.feriados = JSON.parse(listString);
        event?.target.complete();
        console.log(this.feriados);
      },
      error: (err) => {
        console.log(err.error.message);
        loading.dismiss();
      },
    });
  }
}
