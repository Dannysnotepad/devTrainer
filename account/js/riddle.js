let form = document.querySelector('form')
let riddleTxt = document.querySelector('.riddle')
let answer = document.getElementById('answer')
let submit = document.getElementById('submit')


//Riddle automation
let riddles = [
  {
    riddle: 'I eat and feed anything thing i come across, but i take a drink i die. What am i?',
    answer: 'fire'
    },
  {
    riddle: 'Am so fragile that saying my name can break me. What am i?',
    answer: 'silence'
    },
  {
    riddle: 'Am as weight less as a feather, yet the strongest man on earth can\'t hold me for 3 minutes. What am i?',
    answer: 'air'
    },
  {
    riddle: 'What is it that is always on it\'s way but never arrives?',
    answer: 'tommorow'
    }
    ]

let randomRiddle = Math.floor(Math.random() * riddles.length)

riddleTxt.textContent = `"${riddles[randomRiddle].riddle}"`

function checkAnswer(){
  let error = document.querySelector('.errorTxt')
  let value = answer.value.toLowerCase()
  //console.log(riddles[randomRiddle].answer)
  //console.log(value)
  if (value == '' || value == null || !isNaN(value)){
    
    answer.focus()
    return false
  }else if(value != riddles[randomRiddle].answer){
    answer.style.border = '1px solid darkred'
    error.textContent = 'Incorrect answer'
    setTimeout(() => {
      answer.style.border = ''
      error.textContent = ''
    },2000)
    
    answer.focus()
    return false
    
  }else if(value == riddles[randomRiddle].answer){
    answer.style.border = '1px solid green'
    location.replace('Reset_password.html')
  }
}


form.addEventListener('submit', (e) => {
  e.preventDefault()
})

submit.addEventListener('click', () => {
  checkAnswer()
})