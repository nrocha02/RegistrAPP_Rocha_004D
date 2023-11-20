import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { IAsistencias } from "../pages/interfaces/interfaces";

@Injectable({
  providedIn: "root",
})
export class QrService {
  constructor(private httpclient: HttpClient) {}

  GenerarAsistencia(newAsistencia: IAsistencias): Observable<IAsistencias> {
    return this.httpclient.post<IAsistencias>(
      `${environment.apiUrl}/asistencias`,
      newAsistencia
    );
  }
}
