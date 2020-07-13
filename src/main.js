import data from './data/lol/lol.js';
import {filterData, searchingData, sortingData} from './data.js';
let lolRoles = Object.values(data.data);
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
let searchChampionsMobile = document.querySelector('.search');
searchChampionsMobile.addEventListener('keyup', searching);

/*------ Searchig names desktop -------*/
let searchChampions = document.querySelector('.search-desktop'); //Solo selecciona el primero de la clase
searchChampions.addEventListener('keyup', searching);

function searching (){
  let champName = event.target.value;
  let searchChamp = searchingData(lolRoles,champName);

  if (champName ==" "){
    showingChamps(lolRoles)
  }else{
    showingChamps(searchChamp)
  }
} 

/*-------- Filter select mobile -------- */
let selectRoles = document.querySelector('.filter-select');
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


/*-------- Filter checkbox -------- */
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
  
} 

/*-------- Sorting mobile -------- */
let sortSelect = document.querySelector('.filter-input');
sortSelect.addEventListener('change', sortingChamps);

/*-------- Sorting Desktop -------- */
let sortData=document.querySelector('.filter-desktop');
sortData.addEventListener('change', sortingChamps);

function sortingChamps (){
  let order = event.target.value;
  let sorting = sortingData(lolRoles,order)
  showingChamps(sorting) 
}