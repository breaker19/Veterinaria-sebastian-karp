// itemCount stock button
// imp
import {useState} from 'react';

const ItemCount = () => {

    const stock= 5;

    const [itemsQty, setitemsQty] = useState(1);

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
    const color =() => {
        if (itemsQty <= 4) {
            return '#20ff20'
        } else {

            return 'red'
        }

    }
    return (
        <div> 
            <h1  style={{color: color()}}> Stock restante: {stock - itemsQty}</h1>
        
            <button onClick={() => limiteNegativo(itemsQty - 1)}>-</button>


            <span>{itemsQty}</span>
            <button onClick={() => limitestock(itemsQty + 1)}>+</button>
            <button onClick={()=> (alert(itemsQty + " " + "productos agregados" ))} style={{color: '#fff', background: 'red', margin: '0 20px'}}>Agregar al carrito</button>


        </div>

    )
}
export default ItemCount;