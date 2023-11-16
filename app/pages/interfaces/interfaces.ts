export interface IUsersProfesores {
  id: Number;
  nombre: String;
  email: String;
  password: String;
  asignaturas: [];
  isactive: Boolean;
}

export interface UserProfesor {
  nombre: String;
  email: String;
  password: String;
  asignaturas: [];
  isactive: Boolean;
}

export interface IAsignaturas {
  id: Number;
  nombre: String;
  anno: Number;
  semestre: Number;
  hrsSemanal: Number;
  selected: Boolean;
}

export interface IFeriados {
  date: String;
  title: String;
  type: String;
  inalienable: Boolean;
  extra: String;
}
