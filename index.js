function updateTime() {
  // Edinburgh

  let edinburghElement = document.querySelector("#edinburgh");
  let edinburghDateElement = edinburghElement.querySelector(".date");
  let edinburghTimeElement = edinburghElement.querySelector(".time");
  let edinburghTime = moment().tz("Europe/London");
  edinburghDateElement.innerHTML = edinburghTime.format("MMMM Do YYYY");
  edinburghTimeElement.innerHTML = edinburghTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // New York City

  let newyorkElement = document.querySelector("#new-york-city");
  let newyorkDateElement = newyorkElement.querySelector(".date");
  let newyorkTimeElement = newyorkElement.querySelector(".time");
  let newyorkTime = moment().tz("America/New_York");
  newyorkDateElement.innerHTML = newyorkTime.format("MMMM Do YYYY");
  newyorkTimeElement.innerHTML = newyorkTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Lyon

  let lyonElement = document.querySelector("#lyon");
  let lyonDateElement = lyonElement.querySelector(".date");
  let lyonTimeElement = lyonElement.querySelector(".time");
  let lyonTime = moment().tz("Europe/Paris");
  lyonDateElement.innerHTML = lyonTime.format("MMMM Do YYYY");
  lyonTimeElement.innerHTML = lyonTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
