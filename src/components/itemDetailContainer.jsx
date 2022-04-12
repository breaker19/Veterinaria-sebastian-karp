import React from "react";
import {useState, useEffect} from "react";
 import {ProductoMascotas} from  './CustomFetch';
import ItemDetail from "./ItemDetail";
import Pets from "../products";
import {useParams} from "react-router";

const ItemDetailContainer = () => {
  const [datos, setDatos] = useState({});

  const {itemId} = useParams();
  
  useEffect(() => {
    if (itemId === undefined) {
      ProductoMascotas(0, Pets [itemId]).then(resolve => {
        setDatos(resolve);

      })

    } else {
      ProductoMascotas(0, Pets.find (item => item.id === parseInt(itemId)))
      .then(resolve => setDatos(resolve))
      
    }
  }, [datos]);
      
  return (
      <>

<ItemDetail lista={datos} />
{console.log(datos)}

      </>
    );
}


export default ItemDetailContainer;