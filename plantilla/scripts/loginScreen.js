window.addEventListener('load',onWindowLoad)
function onWindowLoad() {
  const loginFrame = document.getElementById('frmLogin')
  const frmLogin = loginFrame.contentDocument

  const loginUser = frmLogin.getElementById('loginUser')
  const loginPassword = frmLogin.getElementById('loginPassword')
  const loginBtn = frmLogin.getElementById('loginBtn')
  const registerBtn = frmLogin.getElementById('registerBtn')

  registerBtn.addEventListener('click',registerBtnClick)

  function registerBtnClick() {
    const registerFrame = document.getElementById('frmRegister')
    // const frmRegister = registerFrame.contentDocument

    loginFrame.style.setProperty('display','none')
    registerFrame.style.setProperty('display','block')
    console.log('Hice click en register')
  }

}