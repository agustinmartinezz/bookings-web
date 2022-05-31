function registerScreenLoaded() {

  const frmLogin = document.getElementById('frmLogin')
  const iframe = document.getElementById('frmRegister')
  const frmRegister = iframe.contentDocument

  const registerName = frmRegister.getElementById('registerName')
  const registerUsername = frmRegister.getElementById('registerUsername')
  const registerPassword = frmRegister.getElementById('registerPassword')
  const registerVerifyPassword = frmRegister.getElementById('registerVerifyPassword')
  const registerBtn = frmRegister.getElementById('registerBtn')
  const loginBtn = frmRegister.getElementById('loginBtn')

  loginBtn.addEventListener('click',loginBtnClick)
  registerBtn.addEventListener('click',registerBtnClick)

  function loginBtnClick() {
    iframe.style.setProperty('display','none')
    frmLogin.style.setProperty('display','block')
    PANTALLA_ACTIVA.pop()
    PANTALLA_ACTIVA.push('frmLogin')
  }

  function registerBtnClick() {
    let nombre = registerName.value
    let usuario = registerUsername.value.toLowerCase()
    let contrasena = registerPassword.value
    let verifycontrasena = registerVerifyPassword.value

    if (nombre) {
      if (usuario && contrasena && verifycontrasena){
        if (validoSimbolosUsuario(usuario)){
          if (validoContrasena(contrasena,verifycontrasena)){
            alert(creoUsuarioNuevo(usuario,nombre,contrasena))
          } else {
            alert('La contraseña debe tener 6 caracteres, al menos una mayúscula, un número y deben coincidir')
          }
        } else {
          alert('El usuario no puede contener símbolos')
        }
      } else {
        alert('Debe ingresar nombre de usuario y contraseña')
      }
    } else {
      alert('Debe ingresar un nombre')
    }
    
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

  function validoContrasena(contrasena,verifycontrasena) {
    let tieneMinus = false
    let tieneMayus = false
    let tieneNumero = false

    for (let i=0;i<contrasena.length;i++) {
      if (contrasena.charCodeAt(i) >= 48 && contrasena.charCodeAt(i) <= 57) {
        tieneNumero = true
      }
      if (contrasena.charCodeAt(i) >= 65 && contrasena.charCodeAt(i) <= 90) {
        tieneMayus = true
      }
      if (contrasena.charCodeAt(i) >= 97 && contrasena.charCodeAt(i) <= 122) {
        tieneMinus = true
      }
    }

    if ((tieneMinus & tieneMayus & tieneNumero) && (contrasena == verifycontrasena)) {
      return true
    } 
    return false
  }

  function creoUsuarioNuevo(usuario,nombre,contrasena) {
    let encontre = false
    let indice = 0

    do {
      if (usuario == USUARIOS_APP[indice].usuario) {
        encontre = true
      }
      indice += 1
    } while (indice != USUARIOS_APP.length)

    if (encontre) {
      return 'El usuario ingresado ya existe'
    }

    let nuevoUsuario = new Usuario(usuario,contrasena,'P',nombre)
    USUARIOS_APP.push(nuevoUsuario)
    registerName.value = ''
    registerUsername.value = ''
    registerPassword.value = ''
    registerVerifyPassword.value = ''
    return 'Usuario creado correctamente'
  }
}