import data from './data/lol/lol.js';
import {filterData, searchingData, sortingData} from './data.js';
let lolRoles = Object.values(data.data)
console.log(lolRoles)

let championsCards = document.querySelector('.card-champions');

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
};

window.onload = function(){showingChamps(lolRoles)}

/*------ Searchig names mobile -------*/
let searchMobile=document.querySelector('.search');
searchMobile.addEventListener('keyup',searching);


/*------ Searchig names desktop -------*/
let searchChampions = document.querySelector('.search-desktop');
searchChampions.addEventListener('keyup', searching);

function searching (){
  let champName = document.querySelector('.search-desktop').value;
  let searchChamp = searchingData(lolRoles,champName);

  if (champName ==" "){
    showingChamps(lolRoles)
  }else{
    showingChamps(searchChamp)
  }
} 

/*-------- Filter select mobile -------- */
let selectRoles = document.querySelector('.filter-select');
selectRoles.addEventListener('change', checkRoles);

/*-------- Filter checkbox -------- */
let checkboxRoles = document.querySelector('.roles');
checkboxRoles.addEventListener('change', checkRoles);

function checkRoles (event){
  event.preventDefault();
  let rol = event.target.value;
  let result= filterData(lolRoles,rol)
  console.log(result)
  if (rol==="Roles"){
    showingChamps(lolRoles)
  }else{
    showingChamps(result)
  }
} 

/*--------sorting mobile -------- */
let sortSelect = document.querySelector('.filter-input');
sortSelect.addEventListener('change', sortingChamps);

/*--------sorting Desktop -------- */
let sortData=document.querySelector('.filter-desktop');
sortData.addEventListener('change', sortingChamps);

function sortingChamps (){
  let order = document.querySelector('.filter-desktop').value;
  let sorting = sortingData(lolRoles,order)
  showingChamps(sorting) 
}
