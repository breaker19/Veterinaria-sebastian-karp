
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Container, Row, Col} from 'react-bootstrap';
import {ProductoMascotas} from '../products';
import { useState } from 'react';


const ItemDetail= ({lista}) => {
  const [datos, setDatos] = useState([]);
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
              <img src={lista.memes} width="200" height="auto"/>
              <Typography variant="body2" color="text.secondary">
                <span>El stock es de:</span>{lista.stock}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              <strong>$ {lista.price}</strong>
              </Typography>

        
              <ItemCount />
     
             
            </CardContent>


          </Card>


          </>
          
          );
      }
export default ItemDetail;














