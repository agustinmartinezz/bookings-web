const USUARIOS_APP = []
const RESERVAS_APP = []
const USUARIO_ACTIVO = []
const PANTALLA_ACTIVA = []

const usuarioIni1 = new Usuario('agustin','12345','P','Agustin')
const usuarioIni9 = new Usuario('bruno','12345','P','Bruno')
const usuarioIni2 = new Local('local1','12345','L','La pasiva','Restaurante','S',100,'./img/foto1.jpg')
const usuarioIni3 = new Local('local2','12345','L','El mundo de la pizza','Restaurante','S',100,'./img/foto2.jpg')
const usuarioIni4 = new Local('local3','12345','L','McDonalds','Restaurante','S',150,'./img/foto3.jpg')
const usuarioIni5 = new Local('local4','12345','L','Subway','Restaurante','S',10,'./img/foto4.jpg')
const usuarioIni6 = new Local('local5','12345','L','BurgerKing','Restaurante','S',10,'./img/foto5.jpg')
const usuarioIni7 = new Local('local6','12345','L','Teatro Metro','Teatro','S',10,'./img/foto6.jpg')
const usuarioIni8 = new Local('local7','12345','L','Antel Arena','Teatro','S',10,'./img/foto7.jpg')

USUARIOS_APP.push(usuarioIni1,usuarioIni2,usuarioIni3,usuarioIni4,usuarioIni5,usuarioIni6,usuarioIni7,usuarioIni8,usuarioIni9)

const reservaIni1 = new Reserva('agustin','local1',3,'P',0)
const reservaIni2 = new Reserva('agustin','local2',4,'P',0)
const reservaIni3 = new Reserva('agustin','local3',2,'P',0)

const reservaIni4 = new Reserva('agustin','local1',6,'F',0)
const reservaIni5 = new Reserva('agustin','local2',6,'F',0)
const reservaIni6 = new Reserva('agustin','local3',6,'F',0)
const reservaIni7 = new Reserva('agustin','local4',6,'F',0)
const reservaIni8 = new Reserva('agustin','local5',6,'F',0)
const reservaIni9 = new Reserva('agustin','local6',6,'F',0)
const reservaIni10 = new Reserva('agustin','local7',6,'F',0)
const reservaIni11 = new Reserva('bruno','local1',6,'F',0)
const reservaIni12 = new Reserva('bruno','local1',6,'C',0)
const reservaIni13 = new Reserva('bruno','local7',6,'C',0)
const reservaIni14 = new Reserva('bruno','local7',6,'C',0)
const reservaIni15 = new Reserva('bruno','local7',6,'P',0)
const reservaIni16 = new Reserva('bruno','local5',6,'P',0)
const reservaIni17 = new Reserva('bruno','local5',6,'P',0)


RESERVAS_APP.push(reservaIni1,reservaIni2,reservaIni3,reservaIni4,reservaIni5,reservaIni6,reservaIni7,reservaIni8,reservaIni9,reservaIni10,reservaIni11,reservaIni12,reservaIni13,reservaIni14,reservaIni15,reservaIni16,reservaIni17)