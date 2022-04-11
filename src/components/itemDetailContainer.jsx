import React from "react";
import {useState, useEffect} from "react";
 import {ProductoMascotas} from  './CustomFetch';
import ItemDetail from "./ItemDetail";
import Pets from "../products";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [datos, setDatos] = useState({});
  const {id} = useParams();

  useEffect(() => {
    ProductoMascotas(2000, Pets.find (item => parseInt(item.id)))
    .then(data => {
      setDatos(data);
 
    });
  }, []);


      
  return (
      <>

<ItemDetail lista={datos} />

      </>
    );
}


export default ItemDetailContainer;