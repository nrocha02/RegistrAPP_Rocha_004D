export interface UsersProfesores {
  id: Number;
  nombre: String;
  email: String;
  password: String;
  role: String;
  isactive: Boolean;
}

export interface UserProfesor {
  nombre: String;
  email: String;
  password: String;
  role: String;
  isactive: Boolean;
}

export interface IAsignaturas {
  id: Number;
  nombre: String;
  anno: Number;
  semestre: Number;
  hrsSemanal: Number;
}

export interface RespuestaFeriados {
  date: String;
  title: String;
  type: String;
  inalienable: Boolean;
  extra: String;
}
