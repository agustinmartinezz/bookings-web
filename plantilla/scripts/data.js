const USUARIOS_APP = []
const RESERVAS_APP = []
const USUARIO_ACTIVO = []
const PANTALLA_ACTIVA = []

const usuarioIni1 = new Usuario('agustin','12345','P','Agustin Martinez')
const usuarioIni2 = new Local('local1','12345','L','La pasiva','Restaurante','S',100,'./img/foto1.jpg')
const usuarioIni3 = new Local('local2','12345','L','El mundo de la pizza','Restaurante','S',100,'./img/foto2.jpg')
const usuarioIni4 = new Local('local3','12345','L','McDonalds','Restaurante','S',150,'./img/foto3.jpg')
const usuarioIni5 = new Local('local4','12345','L','Subway','Restaurante','S',10,'./img/foto4.jpg')

USUARIOS_APP.push(usuarioIni1,usuarioIni2,usuarioIni3,usuarioIni4,usuarioIni5)

const reservaIni1 = new Reserva('agustin','local1',3,'P',0)
const reservaIni2 = new Reserva('agustin','local2',4,'P',0)
const reservaIni3 = new Reserva('agustin','local3',2,'P',0)
const reservaIni4 = new Reserva('agustin','local4',6,'F',0)
const reservaIni5 = new Reserva('agustin','local4',6,'F',0)
const reservaIni6 = new Reserva('agustin','local1',6,'F',0)
const reservaIni7 = new Reserva('agustin','local2',6,'F',0)
const reservaIni8 = new Reserva('agustin','local3',6,'F',0)

RESERVAS_APP.push(reservaIni1,reservaIni2,reservaIni3,reservaIni4,reservaIni5,reservaIni6,reservaIni7,reservaIni8)