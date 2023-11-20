import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { IUsersProfesores, UserProfesor } from "../pages/interfaces/interfaces";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  CrearUsuario(newUsuario: UserProfesor): Observable<UserProfesor> {
    return this.httpClient.post<UserProfesor>(
      `${environment.apiUrl}/profesores`,
      newUsuario
    );
  }

  GetAllUsers(): Observable<IUsersProfesores> {
    return this.httpClient.get<IUsersProfesores>(
      `${environment.apiUrl}/profesores`
    );
  }

  GetUserByEmail(email: any): Observable<IUsersProfesores> {
    return this.httpClient.get<IUsersProfesores>(
      `${environment.apiUrl}/profesores/?email=${email}`
    );
  }

  GetUserById(id: any): Observable<IUsersProfesores> {
    return this.httpClient.get<IUsersProfesores>(
      `${environment.apiUrl}/profesores/?id=${id}`
    );
  }

  ActualizarProfesor(usuario: any): Observable<IUsersProfesores> {
    return this.httpClient.put<IUsersProfesores>(
      `${environment.apiUrl}/profesores/${usuario.id}`,
      usuario
    );
  }

  IsLoggedIn() {
    return sessionStorage.getItem("nombre") != null;
  }

  GetName() {
    return sessionStorage.getItem("nombre");
  }

  GetAsignaturas() {
    return sessionStorage.getItem("asignatuas");
  }

  GetUserrole() {
    return sessionStorage.getItem("userrole") != null
      ? sessionStorage.getItem("userrole")?.toString()
      : "";
  }

  logout() {
    sessionStorage.clear();
  }
}
