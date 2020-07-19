import data from './data/lol/lol.js';
import {filterData, searchingData, sortingData} from './data.js';
let lolRoles = Object.values(data.data);

let championsCards = document.querySelector('.card-champions');
let championsCardsLanes = document.querySelector('.card-champions-lanes');

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

window.onload = function(){showingChamps(lolRoles)}

/*------ Searchig names -------*/
let searchChampionsMobile = document.querySelector('.search');
searchChampionsMobile.addEventListener('keyup', searching);

function searching (){
  let champName = event.target.value;
  let searchChamp = searchingData(lolRoles,champName);

  if (champName ==" "){
    showingChamps(lolRoles)
  }else{
    showingChamps(searchChamp)
  }
} 

/*-------- Filter Select (mobile/tablet/desktop) -------- */
let selectRoles = document.querySelector('.roles-select');
selectRoles.addEventListener('change', checkRolesMobile);

function checkRolesMobile(event){
  let rol = event.target.value;
  if (rol === 'Roles'){
    showingChamps(lolRoles)
  }else {
    let result= filterData(lolRoles,rol)
    showingChamps(result)
  }
}

/*-------- Filter Checkbox (desktop) -------- 
let checkboxRoles = document.querySelector('.roles');
checkboxRoles.addEventListener('change', checkRoles);

function checkRoles (event){
  let rol = event.target.value;
  let checkboxRol=document.getElementById(rol);
  console.log(checkboxRol.checked)

  if (checkboxRol.checked === true){
    let result= filterData(lolRoles,rol)
    showingChamps(result)
  }else{
    showingChamps(lolRoles)
  }
} */

/*-------- Sorting -------- */
let sortSelect = document.querySelector('.sort-select');
sortSelect.addEventListener('change', sortingChamps);

function sortingChamps (){
  let order = event.target.value;
  let sorting = sortingData(lolRoles,order)
  showingChamps(sorting) 
}


// Cambio de pantallas
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