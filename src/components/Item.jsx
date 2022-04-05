
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


const Items= ({ memes, precio, descripcion, stock, imagen, product, vencimiento}) => {


            return (
              <>

          <Card style={{display: 'flex', marginTop: 20}} md={{ maxWidth: 600}}>
          <CardHeader style={{background: 'red', color: 'white'}}
 
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title= {product}
        subheader= {vencimiento}/>
            <CardMedia>
    <img src={imagen} alt={product} width="500" height="auto" />
 </CardMedia>
         
            
       
            <CardContent>
              <Typography variant="body2" color="black">
                <h2>{descripcion}</h2>
              </Typography>
              <img src={memes} width="200" height="auto"/>
              <Typography variant="body2" color="text.secondary">
                <span>El stock es de:</span>{stock}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              <strong>$ {precio}</strong>
              </Typography>
              <ItemCount />
            </CardContent>


          </Card>


          </>
          
          );
      }
export default Items;














