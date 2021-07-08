const URL = 'https://covid-api.mmediagroup.fr/v1/cases?country=Argentina';
const URLvaccines =
  'https://covid-api.mmediagroup.fr/v1/vaccines?country=Argentina';

const covid = document.querySelector('.covid');
async function covidCases() {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);

  // DESTRUCTURING;

  const confirm = data.All.confirmed;
  const deaths = data.All.deaths;
  const population = data.All.population;
  const recovered = data.All.recovered;

  // porcetanjePer1000
  const porcetanjePer1000 = (confirm * 1000) / population;

  // porcetangedeath;
  const porcetangedeath = (deaths * 1000) / population;

  covid.innerHTML = `<div class="card-top">
          <h4>Confirmed</h4>
          <h3>${confirm.toLocaleString()}</h3>
        </div>
        <div class="card-button">
          <h4>Population</h4>
          <p>${population.toLocaleString()}</p>
          <h4>Recovered</h4>
          <p>${recovered.toLocaleString()}</p>
          <h4>Deaths</h4>
          <p>${deaths.toLocaleString()}</p>
          <h4>Infection per thousand</h4>
          <p>${Math.round(porcetanjePer1000).toLocaleString()}</p>
          <h4>Mortality Rate</h4>
          <p>${porcetangedeath.toLocaleString()} %</p>
         
        </div>`;
}
covidCases();

const vaccine = document.querySelector('.vaccines-info');
async function vaccines() {
  const result = await fetch(URLvaccines);
  const data = await result.json();
  const vacunados = data.All.administered;
  vaccine.innerHTML = `<h4>applied vaccines <span class="vaccine">${vacunados.toLocaleString()}</span></h4>`;
}
vaccines();
// Months
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const date = document.querySelector('.date');

const getDay = new Date().getDate();
let getMonth = new Date().getMonth();
const getYear = new Date().getFullYear();
const newMonth = getMonth;

date.textContent = `${months[newMonth]} ${getDay} ${getYear}`;
