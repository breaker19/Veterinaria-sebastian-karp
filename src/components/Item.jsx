import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';


import{Link} from 'react-router-dom';
import {Col} from 'react-bootstrap';


const Items= ({id, memes, precio, descripcion, stock, imagen, product, vencimiento, category}) => {


    return (

<Col md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
             V
            </Avatar>
          }
    
          title={<h2>{product}</h2>}
          subheader={vencimiento}
        />
        <CardMedia
          component="img"
          height='100%'
          image={imagen}
          alt={product}
        />
        <CardContent>
      
          <Typography variant="body" color="secondary">
          Precio:  ${precio}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stock:{stock}
          </Typography>
        </CardContent>

<Link to={`/item/${id}`}> Ver Más</Link>
      </Card>
      </Col>

    );
  }
      
export default Items;














