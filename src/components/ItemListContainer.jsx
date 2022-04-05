import React from "react";
import {useState, useEffect} from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import Pets from "../products";
import {ProductoMascotas} from "../products";


//effect setTimeout 
const ItemListContainer = ({greeting}) => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    ProductoMascotas().then(data => {
      setDatos(data);
      console.table(data);
    });
  }, []);

  return (
    <>
    <div>
      <h1>{greeting}</h1>
    </div>
    
      <ItemList lista={datos} />

      </>
  ); 

}
export default ItemListContainer;