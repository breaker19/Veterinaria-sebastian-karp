import React from 'react';


import {useState, useEffect} from 'react';

const ItemCount = () => {

    const stock=  5;

    const [itemsQty, setitemsQty] = useState(1);

    useEffect(() => { 

        setitemsQty(1);
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
            <button onClick={()=> (alert(itemsQty + " " + "productos agregados" ))} style={{color: '#fff', background: 'red', margin: '0 20px'}}>Agregar al carrito</button>




        </div>

    )
}
export default ItemCount;