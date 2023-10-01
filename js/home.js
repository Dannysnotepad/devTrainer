
let updateDay = () => {
  
  let date = new Date()
  let day = date.getUTCDay()
  let dayEl = document.querySelector('.day')
  
  if(day == 1){
    dayEl.textContent = 'Monday'
  }else if(day == 2){
    dayEl.textContent = 'Tuesday'
  }else if(day == 3){
    dayEl.textContent = 'Wenesday'
  }else if(day == 4){
    dayEl.textContent = 'Thursday'
  }else if(day == 5){
    dayEl.textContent = 'Friday'
  }else if(day == 6){
    dayEl.textContent = 'Saturday'
  }else if(day == 7){
    dayEl.textContent = 'Sunday'
  }

}

updateDay()