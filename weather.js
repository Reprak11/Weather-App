const components = {
    "myCity": document.getElementById("city"),
    "myTemp": document.getElementById("temp"),
    "inputCity": document.getElementById("cityInput"),
    "weatherImg": document.getElementById("myImg")
}
const button = document.getElementById("findCity"); 
let datares;

window.onload = async () => {
    let keyres = await fetch("./assets/key.json");
    datares = await keyres.json();
}

button.addEventListener('click',
    async () => {
        let response = await fetch
        (`https://api.openweathermap.org/data/2.5/weather?q=${components["inputCity"].value}&appid=${datares['key']}&units=metric`)
        let data = await response.json()
        console.log(data);
        components["myCity"].innerHTML=data.name
        components["myTemp"].innerHTML=Math.round(data.main.temp)+" °C"
        components["weatherImg"].src=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    }
)