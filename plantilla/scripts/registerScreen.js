window.addEventListener('load',onWindowLoad)

function onWindowLoad() {

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

  function loginBtnClick() {
    iframe.style.setProperty('display','none')
    frmLogin.style.setProperty('display','block')
    PANTALLA_ACTIVA.pop()
    PANTALLA_ACTIVA.push('frmLogin')
  }
}