import data from './data/lol/lol.js';
import {filterData,searchingData} from './data.js';
//import {searchingData} from './data.js';
//let lolData = Object.entries(data.data)
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
  let upperName = champName.charAt(0).toUpperCase() + champName.slice(1)
  let infoChamps = searchingData(lolRoles,upperName)
  let infoinArr = new Array (infoChamps)
   if (champName == ''){
     showingChamps(lolRoles)
   }else{ showingChamps(infoinArr)}
   
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

/*--------sorting -------- */






