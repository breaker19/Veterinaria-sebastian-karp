import React from "react";
import {useState, useEffect} from "react";
 import {ProductoMascotas} from  './CustomFetch';
import ItemDetail from "./ItemDetail";
import Pets from "../products";

const ItemDetailContainer = () => {
  const [datos, setDatos] = useState({});

  useEffect(() => {
    ProductoMascotas(2000, Pets[0])
    .then(data => {
        setDatos(data);
        console.table(data);
    });
    }, []);

      
  return (
      <>

<ItemDetail lista={datos} />

      </>
    );
}


export default ItemDetailContainer;