function principalTitle(title) {
  const principalFrame = document.getElementById('frmPrincipal')
  const frmPrincipal = principalFrame.contentDocument

  const principalTitle = frmPrincipal.getElementById('principalTitle')
  principalTitle.innerHTML = `Bienvenido ${title}`
  
  principalFrame.style.setProperty('display','block')
}