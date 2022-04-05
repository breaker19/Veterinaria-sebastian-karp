import React from 'react';
import Items  from "./Item";


const ItemList = ({ lista }) => {
    return (
    <>
   
  
        <div>
          <div>
               {
        
               lista.map((item => 

                <Items
                    imagen={item.image}
                    descripcion={item.description}
                    stock={item.stock}
                    precio={item.price}
                    product={item.product}
                    vencimiento={item.vencimiento}
                    key={item.id}
                    memes={item.meme}
                />))

            }
            </div>
            </div>

            </>
    );
}
export default ItemList;