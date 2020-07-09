// estas funciones son de ejemplo
export const searching = (lolRoles, champName) =>{
  let info = lolRoles.find(function(val){
    
    return val.name == champName

})
  return console.log(info)
}

export const filterData = (lolRoles,rol) => {
   
  let arrayRoles=lolRoles.filter(function(val){
    return val.tags.includes(rol)
   })
   return console.log(arrayRoles) 
};

export const sortData = () => {
 return './data/lol/lol.js'
 
};
