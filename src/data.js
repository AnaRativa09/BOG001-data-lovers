/*------ Searchig -------*/
export const searchData = (lolData,champName) =>{
  let lowerName = champName.toLowerCase();
  let capitalUpperName = lowerName.charAt(0).toUpperCase() + lowerName.slice(1) 
  let info=lolData.filter (function(champ) {
    return champ.name.startsWith(capitalUpperName)
  })
  return info
}

/*------ Filter -------*/
export const filterData = (lolData,rol) => {
  let arrayRoles=lolData.filter(function(val){
    return val.tags.includes(rol)
  })
  return arrayRoles 
};

/*------ Sorting -------*/

export const sortData = (lolData,order)=>{
  let dataSort = lolData.sort(function(a,z){
    if(a.name > z.name){return 1;}
    else {return -1;}
    /* return 0; */
  })
  /* if(order === 'asc'){dataSort} */
  if(order === 'desc'){dataSort.reverse()}
  
  return dataSort;
}

/*------ ComputeStats -------*/
export const computeStats = (lolData) => {
  let infoAttribute =lolData.map(function(attr){
    let information = attr.info
    let sum = information.attack + information.magic + information.defense + information.difficulty
    let prom = sum/4
    // attr[prom] = prom
    return Object.defineProperty(attr, 'prom',{value:prom, enumerable:true})
  });
  let order = infoAttribute.sort(function(a,b){
    let prev = a.prom
    let next = b.prom
    return next-prev
  });
  let topFive = order.slice(0,5)
  return topFive
}