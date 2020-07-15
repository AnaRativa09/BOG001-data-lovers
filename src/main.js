import data from './data/lol/lol.js';
import {/* filterData, */ searchingData, sortingData, filterData} from './data.js';
import lol from './data/lol/lol.js';
let lolRoles = Object.values(data.data);
console.log(lolRoles)
let activeData = [];
let rolTop = [];
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
    /* championsCards.style.justify-content:'flex-start'; */
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


/*-------- Sorting -------- */
let sortSelect = document.querySelector('.sort-select');
sortSelect.addEventListener('change', sortingChamps);

function sortingChamps (){
  let order = event.target.value;
  let sorting = sortingData(lolRoles,order)
  showingChamps(sorting)
}


function stats (){
  
  let rails = event.target.value
  if (rails === 'rail 1'){
    array1 = filterData(lolRoles,'fighter');
    array2 = filterData(lolRoles,'tank');
    rolTop = array1.concat(array2)
  }
}

    /* let sumatoria = rolTop.reduce(function(atack, info.attack){
      return
    })
  }
}const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(accumulator)

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15


var sumatoriaObjeto = arreglo.reduce(function(acumulador, siguienteValor){
  return {
    edad: acumulador.edad + siguienteValor.edad
  };
}, {edad: 0}); //Si no hay nada, regresamos un objeto con edad = 0. No hay necesidad de devolver el nombre, pues no es necesario

var promedioEdad = sumatoriaObjeto.edad / arreglo.length; */
