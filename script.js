async function search() {
    let city = document.querySelector(".box input").value.trim();// /// form  tag ke anar value hoti hai and container tag ke andar innerhtml lagate hai
 if (city === "") {
alert("Please enter a city name");
return;
    }
    const key="c7856c2c256de05a3109c65819f760df";
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ key}&units=metric`;

  let res= await fetch(url)  //promis ka server se data lana bo bolega data rha hai baad me doonga //Await se promise ka data aane tk wait karega agewe execute nhi karega 
let data=await res.json();
   console.log(data);
document.querySelector(".box h3").innerHTML=` City - ${data.name}`
 document.querySelector(".box h4").innerHTML=` Temp - ${data.main.temp}℃`
 document.querySelector(".box .h").innerHTML=` Humidity - ${data.main.humidity}%`
 document.querySelector(".box .p").innerHTML=` Pressure - ${data.main.pressure}hPa`
document.querySelector(".wind").innerHTML =`Wind Speed - ${Math.round(data.wind.speed * 3.6)} km/h`;
document.querySelector(".weather").innerHTML =`Weather - ${data.weather[0].description}`;
}
