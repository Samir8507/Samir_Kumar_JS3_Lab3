let search = document.getElementById("search")
search.addEventListener("keypress", (event) =>{
    if(event.keyCode==13){
        callApi(search.value)
    }
})

function callApi(cityName){
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=7e3f21edee540e6110af347b55eb1ab2`
    fetch(url)
    .then(res=> res.json())
    .then(res=>displayData(res))
}
function displayData(res){
    console.log(res)
    let city = document.querySelector(".city")
    let datefield = document.querySelector(".date")
    let temp = document.querySelector(".temp")
    let weather = document.querySelector(".weather")
    let highlowtemprature = document.querySelector(".hi-low")

    city.innerText = res.name + "," + res.sys.country
    temp.innerText = Math.round(res.main.temp) + "˚c"

    weather.innerText = res.weather[0].main
    highlowtemprature.innerText = Math.round(res.main.temp_min) + "˚c /"  +Math.round(res.main.temp_max) + "˚c"
    datefield.innerText = formDate()
}
function formDate(){
    let months = ["january","february","march","april","may","june","july","august","september","october","november","december"];
    let days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    let todaysDate = new Date();
    let day = days[todaysDate.getDay()];
    let month = months[todaysDate.getMonth()];
    let year = todaysDate.getFullYear();
    let date = todaysDate.getDate();
    return `${day}, ${date} ${month} ${year}`;
}