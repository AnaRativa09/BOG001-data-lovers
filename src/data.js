// estas funciones son de ejemplo
export const searchingData = (lolRoles,champName) =>{
  let upperName = champName.charAt(0).toUpperCase() + champName.slice(1) 
  let info=lolRoles.filter (function(champ) {
    return champ.name.startsWith(upperName)
  })
  return info
}

export const filterData = (lolRoles,rol) => {
  let arrayRoles=lolRoles.filter(function(val){
    return val.tags.includes(rol)
   })
   return arrayRoles 
};

export const sortingData = (lolRoles, order) => {
  if (order == 'asc'){
    let sortData = lolRoles.sort(function(a,z){
      let nameA = a.name.toLowerCase()
      let nameZ = z.name.toLowerCase()
      if(nameA<nameZ){
        return -1;
      }if(nameA>nameZ){
        return 1;
      }
      return 0;
    });
    return sortData
  }
  if (order == 'desc'){
    let sortData = lolRoles.sort(function(a,z){
      let nameA = a.name.toLowerCase()
      let nameZ = z.name.toLowerCase()
      if(nameA<nameZ){
        return 1;
      }if(nameA>nameZ){
        return -1;
      }
      return 0;
    });
    return sortData
  }
 
};

