
    const Entrada = document.querySelector('.busqueda input');
    const Busqueda = document.querySelector('.busqueda button');
    const iconoClima = document.querySelector('.icono-clima');
    const clima = document.querySelector('.clima');
    const error = document.querySelector('.error');

    async function verClima(city) {
        const apiKey = '605525e6282f6a6046ab32359cd7c7d3';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


        const respuesta = await fetch(apiUrl);
        const data = await respuesta.json();

        console.log(data);
        
        actualizarClima(data);

    }

    function actualizarClima(data){
        document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}&deg;C`;
        document.querySelector('.ciudad').innerHTML = data.name;
        document.querySelector('.humedad').innerHTML = `${data.main.humidity}%`;
        document.querySelector('.viento').innerHTML = `${data.wind.speed}km/h`;

        const iconosClima = {
            Clear: 'images/clear.png',
            Snow: 'images/snow.png',
            Rain: 'images/rain.png',
            Clouds: 'images/clouds.png'
        }

        iconoClima.src = iconosClima[data.weather[0].main] || 'images/rain.png';

        clima.style.display = 'block';
    }




    Busqueda.addEventListener('click', () => {
        verClima(Entrada.value);
    });

