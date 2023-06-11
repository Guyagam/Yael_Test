const input = document.querySelector(".date_input")
const HebrewDiv = document.querySelector('.hebrew_date')


async function getHebrewDate() {
  const response = await fetch(`https://www.hebcal.com/converter?cfg=json&date=${input.value}&g2h=1&strict=1`);
  const jsonData = await response.json();
  HebrewDiv.innerHTML = jsonData.hebrew
  HebrewDiv.innerHTML += '<h6>: אירועים החודש</h6>'
  HebrewDiv.innerHTML += '<ul class="event_list"></ul>'
  const events = jsonData.events.map((item) => {
    document.querySelector('.event_list').innerHTML += `<li class="events">${item}</li>`
  })

}


