function updateTime() {
  // Edinburgh

  let edinburghElement = document.querySelector("#edinburgh");
  if (edinburghElement) {
    let edinburghDateElement = edinburghElement.querySelector(".date");
    let edinburghTimeElement = edinburghElement.querySelector(".time");
    let edinburghTime = moment().tz("Europe/London");
    edinburghDateElement.innerHTML = edinburghTime.format("MMMM Do YYYY");
    edinburghTimeElement.innerHTML = edinburghTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // New York City

  let newyorkElement = document.querySelector("#new-york-city");
  if (newyorkElement) {
    let newyorkDateElement = newyorkElement.querySelector(".date");
    let newyorkTimeElement = newyorkElement.querySelector(".time");
    let newyorkTime = moment().tz("America/New_York");
    newyorkDateElement.innerHTML = newyorkTime.format("MMMM Do YYYY");
    newyorkTimeElement.innerHTML = newyorkTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Lyon

  let lyonElement = document.querySelector("#lyon");
  if (lyonElement) {
    let lyonDateElement = lyonElement.querySelector(".date");
    let lyonTimeElement = lyonElement.querySelector(".time");
    let lyonTime = moment().tz("Europe/Paris");
    lyonDateElement.innerHTML = lyonTime.format("MMMM Do YYYY");
    lyonTimeElement.innerHTML = lyonTime.format("h:mm:ss [<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
