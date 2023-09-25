

let userName = document.getElementById('userName')
let userEmail = document.getElementById('userEmail')
let userPassword = document.getElementById('userPassword')
let confirmPassword = document.getElementById('confirmPassword')
let submit = document.getElementById('submit')
let form = document.querySelector('form')
let formm = document.querySelector('.form')
let url = 'Login.html'
let userCredentialsArray = []
let idTxt = document.getElementById('userId')
let copyTxt = document.querySelector('.hi')

function copy() {
  userCredentials.id.select
  navigator.clipboard.writeText(userCredentials.id)

  idTxt.textContent = 'Id copied'
  setTimeout(() => {
    idTxt.textContent = userCredentials.id
  }, 000)

  redirect()
}



copyTxt.addEventListener('click', () => {
  copy()
})

/*MODAL*/
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// close modal function
const closeModal = function() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  redirect()
};

// close the modal when the close button and overlay is clicked
overlay.addEventListener("click", closeModal);

// open modal function
const openModal = function() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

/*MODAL END*/

//function to validate input
function validateFields(){
  
  let passwordVal = userPassword.value
  //first if function to check if all fields are empty
  if((userName.value == '' || userName.value == null) && (userEmail.value == '' || userEmail.value == null) && (userPassword.value == '' || userPassword.value == null) && (confirmPassword.value == '' || confirmPassword.valu == null)){
    //making the border red if all fields are empty
    userName.style.border = '1px solid darkred'
    userEmail.style.border = '1px solid darkred'
    userPassword.style.border = '1px solid darkred'
    confirmPassword.style.border = '1px solid darkred'
    
    //returning back to their normal state
    setTimeout(() => {
      userName.style.border = ''
      userEmail.style.border = ''
      userPassword.style.border = ''
      confirmPassword.style.border = ''
    },2000)
    
    userName.focus()
    return false
  }else if (userName.value == '' || userName.value == null){
    
    userName.style.border = '1px solid darkred'
    
    setTimeout(() => {
      userName.style.border = ''
    },2000)
    
    userName.focus()
    return false
  }else if(userEmail.value == '' || userEmail.value == null){
    //making the border red if all fields are empty
    userEmail.style.border = '1px solid darkred'
    
    //returning back to their normal state
    setTimeout(() => {
      userEmail.style.border = ''
    }, 2000)
    
    userEmail.focus()
    return false
  }else if(userPassword.value == '' || userPassword.value == null){
    //making the border red if all fields are empty
    userPassword.style.border = '1px solid darkred'
    
    //returning back to their normal state
    setTimeout(() => {
      userPassword.style.border = ''
    },2000)
    
    userPassword.focus()
    return false
  }else if (userPassword.value == '' || userPassword.value == null) {
    //making the border red if all fields are empty
    userPassword.style.border = '1px solid darkred'
  
    //returning back to their normal state
    setTimeout(() => {
      userPassword.style.border = ''
    }, 2000)
  
    userPassword.focus()
    return false
  }else if (passwordVal.length < 8) {
    //making the border red if all fields are empty
    userPassword.style.border = '1px solid darkred'
    document.querySelector('.errorTxt1').textContent = 'Password can\'t be lower than 8 characters'
  
    //returning back to their normal state
    setTimeout(() => {
      userPassword.style.border = ''
      document.querySelector('.errorTxt1').textContent = ''
    }, 2000)
  
    userPassword.focus()
    return false
  }else if (passwordVal.length > 20) {
    //making the border red if all fields are empty
    userPassword.style.border = '1px solid darkred'
    document.querySelector('.errorTxt1').textContent = 'Password can\'t be higher than 20 characters'
  
    //returning back to their normal state
    setTimeout(() => {
      userPassword.style.border = ''
      document.querySelector('.errorTxt1').textContent = ''
    }, 2000)
  
    userPassword.focus()
    return false
  }else if(confirmPassword.value == '' || confirmPassword.value == null){
    //making the border red if all fields are empty
    confirmPassword.style.border = '1px solid darkred'
    
    //returning back to their normal state
    setTimeout(() => {
      confirmPassword.style.border = ''
    },2000)
    
    confirmPassword.focus()
    return false
  }else if (confirmPassword.value != userPassword.value) {
  
    document.querySelector('.errorTxt').textContent = 'Passwords does not match'
    //making the border red if all fields are empty
    confirmPassword.style.border = '1px solid darkred'
    submit.style.marginTop = '5px'
  
    //returning back to their normal state
    setTimeout(() => {
      confirmPassword.style.border = ''
      document.querySelector('.errorTxt').textContent = ''
      submit.style.marginTop = ''
    }, 2000)
  
    confirmPassword.focus()
    return false
  }
  
  saveToDB()
}

//function to create, save and encrypt user credentials
function saveToDB(){
  let value = userPassword.value
  let userFullName = userName.value
  let userEmailAddress = userEmail.value
  let encryptedPassword = btoa(value)
  let userCredentials = {
    userFullName,
    userEmailAddress,
    encryptedPassword,
    id: Date.now()
  }
  userCredentialsArray.push(userCredentials)
  localStorage.setItem('userCredentials', JSON.stringify(userCredentialsArray))
  
  idTxt.textContent = userCredentials.id
}

//function to empty inputfields if save == success
function redirect(){
  userName.value = ''
  userEmail.value = ''
  userPassword.value = ''
  confirmPassword.value = ''
  
  location.replace(url)
}

formm.addEventListener('submit', (e) => {
  e.preventDefault()
})
form.addEventListener('submit', (e) => {
  e.preventDefault()
})

submit.addEventListener('click', () => {
  validateFields()
  openModal()
})