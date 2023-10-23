import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IFeriados } from "../pages/interfaces/interfaces";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class FeriadosService {
  constructor(private httpClient: HttpClient) {}

  ObtenerTodosFeriados(): Observable<IFeriados> {
    return this.httpClient.get<IFeriados>(`${environment.apiUrl}/feriados`);
  }
}
