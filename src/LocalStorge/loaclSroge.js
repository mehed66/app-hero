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
          console.log(data);
          
          localStorage.setItem('added-to-cart', data);
          
          
     }

}
export const removeFromStorage = (id) => {
  const storedData = getStorageData();
  const remaining = storedData.filter((itemId) => itemId !== id.toString());
  localStorage.setItem("added-to-cart", JSON.stringify(remaining));
};
