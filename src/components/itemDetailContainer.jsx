import React from "react";
import {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router";
import fetchDetail from './DetailFetch';

const ItemDetailContainer = () => {
  const [datos, setDatos] = useState({});

  const {itemId} = useParams();
  
  useEffect(() => {

    fetchDetail(itemId)
  .then(data => setDatos (data))
  .catch(err => console.log (err));
  }, []);
      
  return (
      <>

<ItemDetail lista={datos} />

      </>
    );
}


export default ItemDetailContainer;