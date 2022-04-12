import React from "react";
import {useState, useEffect} from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import Pets from "../products";
import {PromisePets} from '../products';
import { useParams } from "react-router";
import {ProductoMascotas} from './CustomFetch';



const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const {categoryId} = useParams();
  
  useEffect(() => {
    if (categoryId == undefined) {
      ProductoMascotas(2000, Pets)
      .then(resolve => {
        setDatos(resolve);
        console.log("todos los productos");
      })

    } else {
      ProductoMascotas(2000, Pets.filter (item => item.category === categoryId))
      .then(resolve => setDatos(resolve))
      
    }
 
  }, [datos ]);
  
  
  return (
<>
            <ItemList lista={datos}/>
            {
                console.log(datos)
            }
</>
  ); 

}
export default ItemListContainer;