import React from 'react';
import {useState, useEffect} from 'react';


const ItemCount = ({stock, onAdd} ) => {

  

    const [itemsQty, setitemsQty] = useState(0);


    useEffect(() => { 

        setitemsQty(0);
    }, []);



    const limiteNegativo = () => {
        if (itemsQty > stock) {
            setitemsQty(itemsQty - 1) 
      
        }
    }

     const limitestock = () => {
        if (itemsQty < stock) {
            setitemsQty(itemsQty + 1)
            
        }
     
       
    }
  

    
    return (

    <div> 
     <button onClick={() => limiteNegativo(itemsQty - 1)}>-</button>

     <span>{itemsQty}</span>

     <button onClick={() => limitestock(itemsQty + 1)}>+</button>

     <button style={{background: "red", color: "white", marginLeft: 12}} onClick={() => onAdd(itemsQty) }>Añadir Al Carrito</button>

    </div>

    )
}
export default ItemCount;