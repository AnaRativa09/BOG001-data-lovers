import data from './data/lol/lol.js';
import {searchData, sortData, filterData, computeStats} from './data.js';

let lolData = Object.values(data.data);
let rolTop = [];

let championsCards = document.querySelector('.card-champions');
let championsCardsLanes = document.querySelector('.card-champions-lanes');
let selectRoles = document.querySelector('.roles-select');
let searchChampions = document.querySelector('.search');
let sortSelect = document.querySelector('.sort-select');

/*------ Changing Pages -------*/

const buttonLane = document.getElementById('lanes-button');
const buttonLaneMob = document.getElementById('lanes-button-mob');
const buttonChampions = document.getElementById('champions-button');
const buttonChampionsMob = document.getElementById('champions-button-mob');

const championsPage = document.getElementById('champions-page');
const lanesPage = document.getElementById('map-page');

buttonLane.addEventListener('click', showLane);
buttonLaneMob.addEventListener('click', showLane);
buttonChampions.addEventListener('click', showChampions);
buttonChampionsMob.addEventListener('click', showChampions);

function showLane(){
  lanesPage.classList.remove('hidden');
  championsPage.classList.add('hidden');
}
function showChampions(){
  championsPage.classList.remove('hidden');
  lanesPage.classList.add('hidden');
}

/* buttonChampions.addEventListener('click', (e) =>{
  championsPage.classList.remove('hidden');
  lanesPage.classList.add('hidden');
});
buttonLane.addEventListener('click', (e) =>{
  lanesPage.classList.remove('hidden');
  championsPage.classList.add('hidden');
}); */

/*------ Creating Cards -------*/

const showingChamps = (data) =>{
const attribute = data.map(champions=> `

    <article style= "background-image:url('${champions.splash}')" class="card">
      <div class="name-title-container">
        <h2>${champions.name}</h2>
        <p>${champions.title}</p>
      </div>
    </article>`

  ).join('');

championsCards.innerHTML= attribute;
championsCardsLanes.innerHTML= attribute;
};

window.onload = function(){showingChamps(lolData)}

/*------ Searchig names -------*/

searchChampions.addEventListener('keyup', searching);
function searching (){
  let champName = event.target.value;
  let searchingChamp = searchData(lolData,champName);
 /*  let sortingData = sortData (searchingChamp, sortSelect.value);
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

function stats (){
  let lane = 'Top'

  if (lane ==='Lanes'){
    rolTop = lolData
    computeStats(rolTop)
    showingChamps(computeStats(rolTop))
  }
  if (lane ==='Top'){
    let firstRol = filterData(lolData,'Fighter');
    let secondRol = filterData(lolData,'Tank');
    rolTop = firstRol.concat(secondRol)
    computeStats(rolTop)
    showingChamps(computeStats(rolTop))
  }
  if (lane === 'Jungle'){
    let firstRol = filterData(lolData,'Assassin');
    let secondRol = filterData(lolData,'Tank');
    rolTop = firstRol.concat(secondRol)
    computeStats(rolTop)
    showingChamps(computeStats(rolTop)) 
  }
  if (lane === 'Mid'){
    let firstRol = filterData(lolData,'Assassin');
    let secondRol = filterData(lolData,'Mage');
    rolTop = firstRol.concat(secondRol)
    computeStats(rolTop)
    showingChamps(computeStats(rolTop))
  }
  if (lane === 'Bot'){
    let firstRol = filterData(lolData,'Marksman');
    let secondRol = filterData(lolData,'Support');
    rolTop = firstRol.concat(secondRol)
    computeStats(rolTop)
    showingChamps(computeStats(rolTop))
  }
}
