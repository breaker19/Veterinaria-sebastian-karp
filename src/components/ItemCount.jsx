import React from 'react';
import {useState, useEffect} from 'react';


const ItemCount = ({onAdd} ) => {

    const stock=  5;

    const [itemsQty, setitemsQty] = useState(0);


    useEffect(() => { 

        setitemsQty(0);
    }, [stock]);



    const limiteNegativo = () => {
        if (itemsQty >= 1) {
            setitemsQty(itemsQty - 1) 
      
        }
    }

     const limitestock = () => {
        if (itemsQty <= 4) {
            setitemsQty(itemsQty + 1)
            
        }
     
       
    }
  

    const color = itemsQty <= 4 ? '#20ff20' : 'red';
    
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