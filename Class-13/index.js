const temperatureField = document.querySelector(".temp");
const cityField = document.querySelector(".time_location p");
const dateField = document.querySelector(".time_location span");
const emojiField = document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather_condition span");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");


let target = 'milan'


form.addEventListener('submit' , search )


function search(e){

    e.preventDefault()
    target = searchField.value

    fetchData(target)
}



async function fetchData(target){
    try {
        let url = `https://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=${target}&aqi=no`

        const response = await fetch(url)

        const data = await response.json()

        console.log(data)


        let currentTemp = data.current.temp_c
        let currentCondition = data.current.condition.text
        let locationName = data.location.name
        let localTime = data.location.localtime
        let conditionEmoji = data.current.condition.icon

        console.log(currentTemp ,currentCondition ,locationName , localTime , conditionEmoji )


       updateDOM(currentTemp , locationName ,localTime ,conditionEmoji , currentCondition)

    } catch (error) {
        console.log(error)
    }
}



function updateDOM(temp , locationName , time , emoji , condition){


    console.log(time)

    const exactTime = time.split(" ")[1]
    const exactdate = time.split(' ')[0]




    const exactDay = getDayFullName(new Date(exactdate).getDay())
    console.log(exactDay)
           


    temperatureField.innerText = temp

    cityField.innerText = locationName

    dateField.innerText = `${exactTime}   ${exactDay}   ${exactdate}`


    emojiField.src = emoji

    weatherField.innerText = condition
     

}



function getDayFullName(num) {
    switch (num) {
      case 0:
        return "Sunday";
  
      case 1:
        return "Monday";
  
      case 2:
        return "Tuesday";
  
      case 3:
        return "Wednesday";
  
      case 4:
        return "Thursday";
  
      case 5:
        return "Friday";
  
      case 6:
        return "Saturday";
  
      default:
        return "Don't Know";
    }
  }


fetchData(target)