const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const weatherTableEl = document.querySelector("#weather-table");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  weatherTableEl.innerHTML = "Loading....";
  fetch("/weather?address=" + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        weatherTableEl.innerHTML = `<p>${data.error}</p>`;
      } else {
        const { current = {}, location = {}, request = {} } = data.data;
        weatherTableEl.innerHTML = "";
        const table = document.createElement("table");
        table.setAttribute("id", "weather");
        table.innerHTML = `
            <tr>
                <th>Current</th>
                <th>Location</th>
                <th>Request</th>
            </tr>
            <tr>
                <td>Temperature - ${current.temperature}</td>
                <td>Country - ${location.country}</td>
                <td>Language - ${request.language}</td>
            </tr>
            <tr>
                <td>Humidity - ${current.humidity}</td>
                <td>Name - ${location.name}</td>
                <td>Query - ${request.query}</td>
            </tr>
            <tr>
                <td>Pressure - ${current.pressure}</td>
                <td>Region - ${location.region}</td>
                <td>Type - ${request.type}</td>
            </tr>
            <tr>
                <td>Day - ${current.is_day}</td>
                <td>Localtime - ${location.localtime}</td>
                <td>Unit - ${request.unit}</td>
            </tr>
            <tr>
                <td>Observed at - ${current.observation_time}</td>
                <td>Time Zone - ${location.timezone_id}</td>
                <td>Service provider - Weather Stack</td>
            </tr>
        `;
        weatherTableEl.append(table);
      }
    });
  });
});
