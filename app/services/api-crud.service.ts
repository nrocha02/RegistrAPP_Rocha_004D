import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserProfesor } from "../pages/interfaces/interfaces";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiCrudService {
  constructor(private httpclient: HttpClient) {}

  CrearProfesor(newProfesor: UserProfesor): Observable<UserProfesor> {
    return this.httpclient.post<UserProfesor>(
      `${environment.apiUrl}/profesores`,
      newProfesor
    );
  }
}
