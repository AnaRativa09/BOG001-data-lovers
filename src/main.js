import data from './data/lol/lol.js';
import {filterData} from './data.js';
let lolData = Object.entries(data.data)
let lolRoles = Object.values(data.data )


let championsCards = document.querySelector('.card-champions');
let checkboxRoles = document.querySelector('.roles');
console.log(checkboxRoles.textContent)

window.onload = () =>{
const attribute = lolData.map(champions=> `
  
    <article style= "background-image:url('${champions[1].splash}')" class="card"> 
      <div class="name-title-container">
        <h2>${champions[1].name}</h2>
        <p>${champions[1].title}</p>
      </div>
    </article>`
    
  ).join('');

 championsCards.innerHTML= attribute;
};

/*------ Searchig names -------*/
let searchChampions = document.querySelector('.search-desktop');
searchChampions.addEventListener('keyup', searching);



function searching (event){
  let champName = document.querySelector('.search-desktop').value;
   console.log(champName)
  let info = lolRoles.find(function(val){
    return val.name == champName
  })
  return console.log(info)
}



/*-------- Filtrar con checkbox -------- */
checkboxRoles.addEventListener('change', checkRoles)

function checkRoles (event){
  event.preventDefault();
  let rol = event.target.value;
  filterData(lolRoles,rol)
  
} 





/*  for (var j =0; j<lolRoles.length;j++){
   let arrayRoles = lolRoles[j].tags;
  // ["Fighter", "Assassin"] 
    for (var i =0; i < arrayRoles.length;i++){
      if(arrayRoles[i]==="Fighter"){
        console.log(lolRoles[1].name)
      }
    }
  } */

  
 
 
  /* .map(function(namesx){
    namesx = lolRoles[1].name
    return(namesx);
  }) */


 
  


  /* arrayRoles.filter(function(val){
    return val.name
  });
  */

 /*  console.log(arrayRoles) */

  
     

/*
 





/*  arrayRoles.filter(function(val){
  return arrayRoles === "figther"
 }); */




