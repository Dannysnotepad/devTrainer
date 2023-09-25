

let userId = document.getElementById('userId')
let userPassword = document.getElementById('userPassword')
let form = document.querySelector('form')
let submit = document.getElementById('submit')
let url = '../Home.html'
let userCredentials = localStorage.getItem('userCredentials') ? JSON.parse(localStorage.getItem('userCredentials')) : [];

//function to validate inputs
function checkCredentials(){
  console.log(userCredentials)
  
  let error = document.querySelector('.errorTxt2')
  let decryptedPassword = atob(userCredentials[0]. encryptedPassword)
  
  if (userId.value == '' || isNaN(userId.value)){
    return false
  }
  
  let value = userId.value
  let filteredId = userCredentials.filter((userCredentials) => {
    return userCredentials.id == value
  }).map((userCredentials) => {
    return userCredentials.id
  })
  
  
  if (filteredId == userId.value && decryptedPassword == userPassword.value ){
    
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
  }
}


form.addEventListener('submit', (e) => {
  e.preventDefault()
})

submit.addEventListener('click', () => {
  checkCredentials()
})