class Usuario {
  constructor(usuario,contrasena,tipo,nombre) {
    this.usuario = usuario
    this.contrasena = contrasena
    this.tipo = tipo
    this.nombre = nombre
  }
}

// class Persona extends Usuario {
//   constructor(usuario,contrasena,tipo,nombrePersona) {
//     super(usuario,contrasena,tipo)
//     this.nombrePersona = nombrePersona
//   }
// }

class Local extends Usuario {
  constructor(usuario,contrasena,tipo,nombre,tipoLocal,permiteReservas,cupoMaximo) {
    super(usuario,contrasena,tipo,nombre)
    this.tipoLocal = tipoLocal
    this.permiteReservas = permiteReservas
    this.cupoMaximo = cupoMaximo
  }
}

class Reserva {
  constructor(usuarioPersona,usuarioLocal,cuposReserva,estadoReserva,calificacionReserva) {
    this.usuarioPersona = usuarioPersona
    this.usuarioLocal = usuarioLocal
    this.cuposReserva = cuposReserva
    this.estadoReserva = estadoReserva
    this.calificacionReserva = calificacionReserva
  }
}