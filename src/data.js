// estas funciones son de ejemplo
export const searchingData = (lolRoles, champName) =>{
  let info = lolRoles.find(function(val){
    return val.name == champName
  })
  return info
}


export const filterData = (lolRoles,rol) => {
  let arrayRoles=lolRoles.filter(function(val){
    return val.tags.includes(rol)
   })
   return arrayRoles 
};

export const sortData = () => {
 return './data/lol/lol.js'
 
};
