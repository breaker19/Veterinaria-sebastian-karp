
import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';
import Checkout from './Checkout';
import {useContext} from 'react';
import {CartContext} from './CartContext';
import { useState } from 'react';


const ItemDetail= ({lista}) => {
  const [datos, setDatos] = useState(0);
  const test = useContext(CartContext);

  const onAdd = (qty) => {
    setDatos(qty);
    test.addToCart(lista , qty);
}
            return (
              <>
 
          <Card style={{display: 'flex', marginTop: 20}} md={{ maxWidth: 600}}>

            <CardMedia>
    <img src={lista.image} alt={lista.product} width="500" height="auto" />
 </CardMedia>
         
 
       
            <CardContent>
            <Typography variant="body2" color="black">
                <h2>{lista.product}</h2>
              </Typography>
              <Typography variant="body2" color="black">
                <h4>{lista.description}</h4>
              </Typography>
              <img src={lista.meme} width="200" height="auto"/>
              <Typography variant="body2" color="text.secondary">
                <span>El stock es de:</span>{lista.stock}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              <strong>$ {lista.price}</strong>
              </Typography>

                       {
                        datos === 0 ? <ItemCount stock={lista.stock}  onAdd={onAdd} /> : <Checkout />
                    }

            </CardContent>

          </Card>


          </>
          
          );
      }
export default ItemDetail;














