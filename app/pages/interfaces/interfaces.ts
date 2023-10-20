export interface UsersProfesores{
    id: Number;
    nombre: String;
    email: String;
    password: String;
    role: String;
    isactive: Boolean;
}

export interface IAsignaturas{
    id: Number;
    nombre: String;
    anno: Number;
    semestre: Number,
    hrsSemanal: Number;
}