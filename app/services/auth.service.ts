import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { UsersProfesores } from "../pages/interfaces/interfaces";
import { Observable } from "rxjs";
import { RouterLink } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  GetAllUsers(): Observable<UsersProfesores> {
    return this.httpClient.get<UsersProfesores>(
      `${environment.apiUrl}/profesores`
    );
  }

  GetUserById(id: any): Observable<UsersProfesores> {
    return this.httpClient.get<UsersProfesores>(
      `${environment.apiUrl}/profesores/?username=${id}`
    );
  }

  IsLoggedIn() {
    return sessionStorage.getItem("nombre") != null;
  }

  GetName() {
    return sessionStorage.getItem("nombre");
  }

  GetUserrole() {
    return sessionStorage.getItem("userrole") != null
      ? sessionStorage.getItem("userrole")?.toString()
      : "";
  }

  logout() {
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("nombre");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("userrole");
    sessionStorage.removeItem("ingresado");
  }
}
