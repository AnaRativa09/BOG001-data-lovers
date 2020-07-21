import data from './data/lol/lol.js';
import {searchData, sortData, filterData, computeStats} from './data.js';
let lolData = Object.values(data.data);

/*------ Champions Page-------*/
const championsCards = document.querySelector('.card-champions');
const selectRoles = document.querySelector('.roles-select');
const searchChampions = document.querySelector('.search');
const sortSelect = document.querySelector('.sort-select');

/*------ Map Page -------*/
const championsCardsLanes = document.querySelector('.card-champions-lanes');
const selectLanes = document.querySelector('.filter-lane');
const mapLanes = document.querySelector('.mapSummonerRift');
const rolesLanes = document.querySelector('.roles-lanes');
const titlePage = document.querySelector('.title-page-name');

/*------ Changing Pages -------*/
const buttonChampions = document.getElementById('champions-button'); //Botón de cambio de página a champions desktop
const buttonChampionsMob = document.getElementById('champions-button-mob'); //Botón de cambio de página a champions Móvil
const championsPage = document.getElementById('champions-page'); 
const buttonLane = document.getElementById('lanes-button'); // Botón de cambio de página a lanes desktop
const buttonLaneMob = document.getElementById('lanes-button-mob'); // Botón de cambio de página a lanes móvil
const lanesPage = document.getElementById('map-page');
const buttonHome = document.getElementById('home-button'); // Botón de cambio de página a home desktop
const buttonHomeMob = document.getElementById('home-button-mob'); // Botón de cambio de página a home móvil
const homePage = document.getElementById('home-page')

buttonLane.addEventListener('click', showLane);
buttonLaneMob.addEventListener('click', showLane);
buttonChampions.addEventListener('click', showChampions);
buttonChampionsMob.addEventListener('click', showChampions);
buttonHome.addEventListener('click',showHome);
buttonHomeMob.addEventListener('click', showHome);


function showLane(){
  /* location.reload(); Chistoso */
  lanesPage.classList.remove('hidden');
  championsPage.classList.add('hidden');
  homePage.classList.add('hidden');
  showingChamps(computeStats(lolData));
  titlePage.textContent = 'LANES';
}

function showChampions(){
  championsPage.classList.remove('hidden');
  lanesPage.classList.add('hidden');
  homePage.classList.add('hidden');
  showingChamps(lolData);
  titlePage.textContent = 'CHAMPIONS';
}

function showHome(){
  homePage.classList.remove('hidden');
  lanesPage.classList.add('hidden');
  championsPage.classList.add('hidden');
  titlePage.textContent = 'HOME';
}

/*------ Creating Cards -------*/

const showingChamps = (data) =>{
const attribute = data.map(champions=> `

    <article style= "background-image:url('${champions.splash}')" class="card">
      <div class="name-title-container">
        <h2>${champions.name}</h2>
        <p>${champions.title}</p>
        
      </div>
    </article>

    <div class="overlay hidden" id ="overlay" >
    <div class="card-modal hidden" id ="cardModal${lolData.id}" > 
      <div class = "title-modal">
        <img src="${champions.img}" class="champ-img" alt="imagen-pequeña">
        <h1>${champions.name}</h1>
        <button class = "close-modal"> &times;</button>
      </div>
      <div class = "container-modal">
        <p>${champions.blurb}</p>
        <ul class="attribute-list">
          <li>Attack: ${champions.info.attack}</li>
          <li>Defense: ${champions.info.defense}</li>
          <li>Magic: ${champions.info.magic}</li>
          <li>Difficulty: ${champions.info.difficulty}</li>
          <li>Tags: ${champions.tags.join(', ')}</li>
        </ul>
      </div>
    </div>
    </div>
    `
  ).join('');
  championsCards.innerHTML= attribute;
  championsCardsLanes.innerHTML= attribute;
};

window.onload = function(){showingChamps(lolData)}

/* window.cardModal = cardModal ----> Intento Modal
function cardModal (id) {  
  let cardModal = document.getElementById("cardModal"+ id);
  console.log(cardModal)
  cardModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
console.log(lolData.id)
 */

/* -----Charts ---- */
const ctx = document.getElementById('myChart').getContext('2d');
Chart.defaults.global.defaultFontColor = '#cb954a';

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Assassins','Marksmans', 'Supports', 'Fighters', 'Mages', 'Tanks'],
        datasets: [{
            label: '# Champs for roles',
            data: [
              filterData(lolData,'Assassin').length,
              filterData(lolData,'Marksman').length,
              filterData(lolData,'Support').length,
              filterData(lolData,'Fighter').length,
              filterData(lolData,'Mage').length,
              filterData(lolData,'Tank').length
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: '#cb954a',
                    beginAtZero: true
                }
            }]
        }
    }
});



/*------ Searchig names -------*/
searchChampions.addEventListener('keyup', searching);
function searching (){
  let champName = event.target.value;
  let searchingChamp = searchData(lolData,champName);
  /* let sortingData = sortData (searchingChamp, sortSelect.value);
  let filteringData = filterData(sortingData, selectRoles.value); */
  showingChamps(searchingChamp)
  if (champName ==" "){
    showingChamps(lolData)
  }else{    
    showingChamps(searchingChamp)
  }
} 

/*-------- Filter Select (mobile/tablet/desktop) -------- */
selectRoles.addEventListener('change', checkRoles);
function checkRoles(event){
  let rol = event.target.value;
  let result= filterData(lolData,rol)
  /* let sortingData = sortData (result, sortSelect.value);
  let searchingChamp = searchData(sortingData, searchChampions.value); */
  if (rol === 'Roles'){
    showingChamps(lolData)
  }else {    
    showingChamps(result)
  }
}

/*-------- Sorting -------- */
sortSelect.addEventListener('change', sortingChamps);
function sortingChamps (){
  let order = event.target.value;
/*  let searchingChamp = searchData(lolData, searchChampions.value)
  let filteringData = filterData(searchingChamp, selectRoles.value) */
  let sorting = sortData(lolData, order)
  showingChamps(sorting)
}

/*-------- ComputeStats -------- */
selectLanes.addEventListener('change', stats);
function stats (){
  let lane = event.target.value;
  if (lane === 'Lanes'){
    showingChamps(computeStats(lolData))
    rolesLanes.textContent = ': All Champions';
    mapLanes.style.backgroundImage = 'url(images/mapLanes.jpg)';
  }
  if (lane === 'Top'){
    let firstRol = filterData(lolData,'Fighter');
    let secondRol = filterData(lolData,'Tank');
    showingChamps(computeStats(firstRol.concat(secondRol)))
    mapLanes.style.backgroundImage = 'url(images/mapLanesTop.jpg)';
    rolesLanes.textContent = ': Fighters & Tanks';
  }
  if (lane === 'Jungle'){
    let firstRol = filterData(lolData,'Tank');
    let secondRol = filterData(lolData,'Assassin');
    showingChamps(computeStats(firstRol.concat(secondRol))) 
    mapLanes.style.backgroundImage = 'url(images/mapLanesJungle.jpg)';
    rolesLanes.textContent = ': Tanks & Assassins';
  }
  if (lane === 'Mid'){
    let firstRol = filterData(lolData,'Assassin');
    let secondRol = filterData(lolData,'Mage');
    showingChamps(computeStats(firstRol.concat(secondRol)))
    mapLanes.style.backgroundImage = 'url(images/mapLanesMid.jpg)';
    rolesLanes.textContent = ': Assassins & Mages';
  }
  if (lane === 'Bot'){
    let firstRol = filterData(lolData,'Marksman');
    let secondRol = filterData(lolData,'Support');
    showingChamps(computeStats(firstRol.concat(secondRol)))
    mapLanes.style.backgroundImage = 'url(images/mapLanesBot.jpg)';
    rolesLanes.textContent = ': Marksmans & Supports';
  }
}

//<button onclick="cardModal(${lolData.id})" id= "${lolData.id}"><i class="fas fa-plus"></i></button>