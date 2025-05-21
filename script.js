async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "1acfff1e9a0a31821969d3b5bc87648d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    const weatherBox = document.getElementById("weatherResult");
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      console.log(data); // 👈 Add this to see the response in browser console
  
      if (data.cod !== 200) {
        weatherBox.innerHTML = `<p>Error: ${data.message}</p>`;
        return;
      }
  
      const weather = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Condition:</strong> ${data.weather[0].main}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
      `;
      weatherBox.innerHTML = weather;
    } catch (error) {
      console.log("Error:", error); // 👈 Add this for more debugging info
      weatherBox.innerHTML = `<p>Error fetching weather data.</p>`;
    }
  }
  