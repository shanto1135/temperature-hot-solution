const apiKey = `743e799dea221e1882ff7e5e1ea9ee57`;
const getData = () => {
    const inputs = document.getElementById('inputFild').value
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${inputs}&appid=${apiKey}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => temperatureDisplayShow(data))
}

// display show part

const setInnerText = (id , text) => {
    document.getElementById(id).innerText = text;
}

const temperatureDisplayShow = (temp) => {
    setInnerText('city',temp.name)
    setInnerText('temp', temp.main.temp)
    setInnerText('weather-type', temp.weather[0].main)

    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    const iconImg = document.getElementById('img')
    iconImg.setAttribute('src', url)
    console.log(temp);
}