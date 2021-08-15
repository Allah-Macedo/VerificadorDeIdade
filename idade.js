// adicionar animação no botão ao click
// mudar a cor do radio gender quando radio checkd

const verifica = document.querySelector('#verifica')
verifica.addEventListener('click',verificar)

function verificar() {
  const date     = new Date()
  const anoAtual = date.getFullYear()
  const bornDate = document.querySelector('#born_date') 
  const born  = Number(bornDate.value)
  

  if (born > anoAtual || born == 0) {
    alert('[ERRO!] Tente novamente , use um valor válido.')
    mensage.innerHTML = ``
    image = ``
  }else { 
     const mensage  = document.querySelector('#mensage')
     const radio    = document.getElementsByName('radio')
     const image    = document.createElement('img')
     image.classList.add('image')
     const idade = anoAtual - born
     let gender = ''

    if (radio[0].checked) { 
      gender = 'Homem'
      if (idade <= 15) {
        image.src = 'assets/criançaH.jpg'
      }else if (idade <= 20) {
         image.src = 'assets/jovemH.jpg'
      }else if (idade <= 40) {
         image.src = 'assets/adultoH.jpg'
      }else {
         image.src = 'assets/idosoH.jpg'
      }
    }

    if (radio[1].checked) {
      gender = 'Mulher'
      if (idade <= 15) {
        image.src = 'assets/criançaM.jpg'
      }else if (idade < 20) {
         image.src = 'assets/jovemM.jpg'
      }else if (idade < 50) {
         image.src = 'assets/adultoM.jpg'
      }else {
         image.src = 'assets/idosoM.jpg'
      }
    } 
    mensage.innerHTML = `${gender} de ${idade} anos de idade.`
    mensage.appendChild(image)
  } 
}