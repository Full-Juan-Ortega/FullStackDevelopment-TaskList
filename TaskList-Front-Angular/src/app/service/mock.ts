export class Objx {
  p1: String;
  p2: String;

  constructor(p1: String, p2: String) {
    this.p1 = p1;
    this.p2 = p2;
  }
}

//rol 1 ADMINISTRADOR.
//rol 2 USUARIO_RESTRINGIDO.

export enum Rol {
  ADMINISTRADOR,
  USUARIO_RESTRINGIDO,
}

export interface Usuario {
  name: String;
  password: String;
  email: String;
  rol: String;
}

export class UsuarioLoginDTO {
  email?: String;
  clave?: String;
  nombreUsuario?: String;
  rol?: String;
  token?: String;

  constructor(
    email?: String,
    clave?: String,
    nombreUsuario?: String,
    rol?: String,
    token?: String
  ) {
    this.email = email;
    this.clave = clave;
    this.nombreUsuario = nombreUsuario;
    this.rol = rol;
    this.token = token;
  }
}
