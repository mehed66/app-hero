export const getStorageData = () =>{
     const storedData = localStorage.getItem('added-to-cart');
     if(storedData){
          const storedAllData = JSON.parse(storedData);
         return storedAllData
     }
     else{
          return[];
     }
}

export const addtoStorageData = (id) =>{
     const storedAddData = getStorageData();
     if(storedAddData.includes(id)){
          alert('This item already added');
     }
     else{
          storedAddData.push(id);
          const data = JSON.stringify(storedAddData);
          localStorage.setItem('added-to-cart', data);
          
          
     }

}