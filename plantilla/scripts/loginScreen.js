// window.addEventListener('DOMContentLoaded',onWindowLoad)
function loginScreenLoaded() {
  PANTALLA_ACTIVA.push('frmLogin')
  const loginFrame = document.getElementById('frmLogin')
  const frmLogin = loginFrame.contentDocument

  const loginUser = frmLogin.getElementById('loginUser')
  const loginPassword = frmLogin.getElementById('loginPassword')
  const loginBtn = frmLogin.getElementById('loginBtn')
  const registerBtn = frmLogin.getElementById('registerBtn')

  loginBtn.addEventListener('click',loginBtnClick)
  registerBtn.addEventListener('click',registerBtnClick)

  function loginBtnClick() {
    let usuario = loginUser.value.toLowerCase()
    let contrasena = loginPassword.value

    if (usuario && contrasena) {
      if (validoSimbolosUsuario(usuario)) {
        let posUsuario = validoUsuario(usuario) //Si encuentra el usuario devuelve la posicion, si no devuelve -1

        if (posUsuario > -1) {
          validoContrasena(posUsuario,contrasena) ? loginCorrecto(posUsuario) : alert('Datos de ingreso incorrectos') //Si la contrasena es correcta para el usuario ejecuto logica del login correcto
        } else {
          alert('Datos de ingreso incorrectos')
        }
      } else {
        alert('El usuario no puede contener símbolos')
      }
    } else {
      alert('Debe ingresar nombre de usuario y contraseña')
    }
    
  }

  function registerBtnClick() {
    const registerFrame = document.getElementById('frmRegister')

    loginFrame.style.setProperty('display','none')
    PANTALLA_ACTIVA.pop()
    PANTALLA_ACTIVA.push('frmRegister')
    registerFrame.style.setProperty('display','block')
  }
  
  function validoUsuario(usuario) {
    let encontre = false
    let indice = 0
    let posUsuario = -1
  
    do {
      if (usuario == USUARIOS_APP[indice].usuario) {
        encontre = true
        posUsuario = indice
      }
      indice += 1
    } while (!encontre && indice != USUARIOS_APP.length) //Busco nombre de usuario en el array y me quedo con la posicion si lo encuentro
    return posUsuario
  }
  
  function validoSimbolosUsuario(usuario) {
    for (let i = 0;i<usuario.length;i++) {
      //Valido que cada caracter sea un numero o una letra
      if (!((usuario.charCodeAt(i) >= 48 && usuario.charCodeAt(i) <= 57) || (usuario.charCodeAt(i) >= 97 && usuario.charCodeAt(i) <= 122))) {
        return false
      }
      return true
    }
  }
  
  function validoContrasena(posUsuario,contrasena) {
    return USUARIOS_APP[posUsuario].contrasena == contrasena ? true : false
  }
  
  function loginCorrecto(posUsuario) {
    loginUser.value = ''
    loginPassword.value = ''

    //Establezco el usuario activo
    USUARIO_ACTIVO.push(USUARIOS_APP[posUsuario])
    //Muestro barra de navegacion en base al tipo de usuario
    actualizarNavegacion(USUARIOS_APP[posUsuario])

    //Oculto el login
    loginFrame.style.setProperty('display','none')

    //Quito el login de pantalla activa y agrego el form principal
    PANTALLA_ACTIVA.pop()
    PANTALLA_ACTIVA.push('frmPrincipal')

    //Muestro el btn de cerrar sesion
    toggleCerrarSesion()

    //Le paso el Nombre del usuario para la pantalla principal
    principalTitle(USUARIOS_APP[posUsuario].nombre)

    if (USUARIO_ACTIVO[0].tipo == 'P') {
      recargarReservasCancelar()
      recargarReservasCalificar()
      recargarTablaReservasPendientes()
      cargarLocalFavorito()
    } else{
      modDisponibilidad()
      recargarModificarReservas()
      estadisticaLocalLoaded()
    }
    
  }
}