import React from "react";
import {useState, useEffect} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import fetchData from "./firestoreFetch";




const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const {categoryId} = useParams();
  
  useEffect(() => {
    fetchData( categoryId)
    .then(data => setDatos (data))
    .catch(err => console.log (err));
  }, [categoryId]);



  return (
<>
            <ItemList lista={datos}/>

</>
  ); 

}
export default ItemListContainer;