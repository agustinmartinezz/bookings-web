const USUARIOS_APP = []
const RESERVAS_APP = []
const USUARIO_ACTIVO = []
const PANTALLA_ACTIVA = []


const usuarioPersona0 = new Usuario('agustin','Agustin123','P','Agustin')

//Usuarios con reservas pendientes
const usuarioPersona1 = new Usuario('javier','Javier123','P','Javier')
const usuarioPersona2 = new Usuario('cecilia','Cecilia123','P','Cecilia')
const usuarioPersona3 = new Usuario('pedro','Pedro123','P','Pedro')

//Usuarios con reservas finalizadas y pendientes
const usuarioPersona4 = new Usuario('nora','Nora123','P','Nora')
const usuarioPersona5 = new Usuario('octavio','Octavio123','P','Octavio')

//Usuarios sin reservas
const usuarioPersona6 = new Usuario('carlos','Carlos123','P','Carlos')
const usuarioPersona7 = new Usuario('sabrina','Sabrina123','P','Sabrina')

//Restaurantes
const usuarioLocal1 = new Local('local1','Local1','L','El Roble','Restaurante','S',120,'./img/foto4.jpg')
const usuarioLocal2 = new Local('local2','Local2','L','Sal Negra','Restaurante','S',80,'./img/foto5.jpg')
const usuarioLocal3 = new Local('local3','Local3','L','La Chopera','Restaurante','S',160,'./img/foto6.jpg')

//Museos
const usuarioLocal4 = new Local('local4','Local4','L','Museo Tecnologico','Museo','S',10,'./img/foto7.jpg')
const usuarioLocal5 = new Local('local5','Local5','L','Museo de Arte Moderno','Museo','S',10,'./img/foto2.jpg')

//Teatros
const usuarioLocal6 = new Local('local6','Local6','L','Teatro Astral','Teatro','S',10,'./img/foto8.jpg')
const usuarioLocal7 = new Local('local7','Local7','L','Teatro Metro','Teatro','S',10,'./img/foto1.jpg')

USUARIOS_APP.push(usuarioPersona0,usuarioPersona1,usuarioPersona2,usuarioPersona3,usuarioPersona4,usuarioPersona5,usuarioPersona6,usuarioPersona7,usuarioLocal1,usuarioLocal2,usuarioLocal3,usuarioLocal4,usuarioLocal5,usuarioLocal6,usuarioLocal7)

//Reservas Pendientes
const reservaIni1 = new Reserva(1,'javier','local1',10,'P',0)
const reservaIni2 = new Reserva(2,'cecilia','local2',11,'P',0)
const reservaIni3 = new Reserva(3,'pedro','local3',5,'P',0)

//Reservas Finalizadas y Pendientes
const reservaIni4 = new Reserva(4,'nora','Local4',5,'P',0)
const reservaIni5 = new Reserva(5,'nora','local4',7,'F',0)
const reservaIni6 = new Reserva(6,'octavio','local5',8,'P',0)
const reservaIni7 = new Reserva(7,'octavio','local5',4,'F',0)

//Resto de reservas
const reservaIni8 = new Reserva(8,'pedro','local6',3,'P',0)
const reservaIni9 = new Reserva(9,'pedro','local7',5,'P',0)
const reservaIni10 = new Reserva(10,'nora','local1',4,'F',0)
const reservaIni11 = new Reserva(11,'nora','local2',6,'F',0)
const reservaIni12 = new Reserva(12,'nora','local3',3,'F',0)
const reservaIni13 = new Reserva(13,'octavio','local6',4,'F',0)
const reservaIni14 = new Reserva(14,'octavio','local7',2,'F',0)
const reservaIni15 = new Reserva(15,'agustin','local1',1,'C',0)
const reservaIni16 = new Reserva(16,'agustin','local2',1,'C',0)
const reservaIni17 = new Reserva(17,'agustin','local3',1,'C',0)
const reservaIni18 = new Reserva(18,'agustin','local4',1,'C',0)
const reservaIni19 = new Reserva(19,'agustin','local5',1,'C',0)
const reservaIni20 = new Reserva(20,'agustin','local6',1,'C',0)
const reservaIni21 = new Reserva(21,'agustin','local7',1,'C',0)

RESERVAS_APP.push(reservaIni1,reservaIni2,reservaIni3,reservaIni4,reservaIni5,reservaIni6,reservaIni7,reservaIni8,reservaIni9,reservaIni10,reservaIni11,reservaIni12,reservaIni13,reservaIni14,reservaIni15,reservaIni16,reservaIni17,reservaIni18,reservaIni19,reservaIni20,reservaIni21)