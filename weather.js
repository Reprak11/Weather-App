const components = {
    "myCity": document.getElementById("city"),
    "myTemp": document.getElementById("temp"),
    "inputCity": document.getElementById("cityInput"),
    "weatherImg": document.getElementById("myImg"),
    "desc": document.getElementById("desc")
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
        components["myCity"].innerText=data.name;
        components["myTemp"].innerText=Math.round(data.main.temp)+" °C";
        components["weatherImg"].src=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        components["desc"].innerText=data.weather[0].description;
        components["inputCity"].value=""
        if(data.weather[0].icon.includes("d")){
            document.body.style.background= "linear-gradient(78deg, rgba(146,230,238,0.9868989832261029) 8%, rgba(87,223,232,1) 22%, rgba(92,185,232,1) 72%, rgba(0,212,255,1) 100%)";
        } else {
            document.body.style.background= "linear-gradient(337deg, rgba(13,174,207,1) 14%, rgba(0,122,131,1) 60%, rgba(0,25,37,1) 99%, rgba(0,0,0,1) 100%)";
        }
    }
)