import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IAsignaturas } from "../pages/interfaces/interfaces";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiCrudService {
  constructor(private httpclient: HttpClient) {}

  GetUserById(id: any): Observable<IAsignaturas> {
    return this.httpclient.get<IAsignaturas>(
      `${environment.apiUrl}/asignaturas/?nombre=${id}`
    );
  }
}
