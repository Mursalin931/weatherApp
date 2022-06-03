const tempTitle = document.querySelector('.temp-title');
const cl = document.getElementById('clouds');
const him = document.getElementById('humidity');
const win = document.getElementById('wind');
const cntry = document.getElementById('country');
const place = document.getElementById('place');




async function getData() {
    const myData = await fetch('http://api.weatherapi.com/v1/current.json?key=2f5666025936459187e163032220306&q=Bangladesh&aqi=yes');
    const realData = await myData.json();
    console.log(realData)
    cntry.innerHTML = realData.location.country;
    place.innerHTML = realData.location.name;
    tempTitle.innerHTML = realData.current.temp_c + '℃';
    cl.innerHTML = realData.current.cloud + '%';
    cl.innerHTML = realData.current.cloud + '%';
    him.innerHTML = "Humidity " + realData.current.humidity + '% .';
    win.innerHTML = 'Wind ' + realData.current.wind_kph + 'Kp/h';
    console.log(realData.current.cloud)
}
getData();