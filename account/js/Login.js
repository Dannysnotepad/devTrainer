

let userId = document.getElementById('userId')
let userPassword = document.getElementById('userPassword')
let form = document.querySelector('form')
let submit = document.getElementById('submit')

//function to validate inputs
function checkCredentials(){
  
  if (userId.value == '' || isNaN(userId.value)){
    return false
  }
  
  /*if (filteredId == userId.value && decryptedPassword == userPassword.value ){
    
    location.replace(url)
  }else if(filteredId != userId.value){
    
    userId.style.border = '1px solid darkred'
    error.textContent = 'User does not exist'
    
    setTimeout(() => {
      userId.style.border = ''
      error.textContent = ''
    },2000)
    
    userId.focus()
  }else if(decryptedPassword != userPassword.value){
    
    error = document.querySelector('.errorTxt1')
    userPassword.style.border = '1px solid darkred'
    error.textContent = 'Incorrect Password'
    
    setTimeout(() => {
      userPassword.style.border = ''
      error.textContent = ''
    }, 2000)
    
    userPassword.focus()
  }*/
}


form.addEventListener('submit', (e) => {
  e.preventDefault()
})

submit.addEventListener('click', () => {
  checkCredentials()
})