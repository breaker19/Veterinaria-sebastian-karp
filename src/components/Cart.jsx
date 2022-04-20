import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {useContext} from 'react';
import {CartContext} from './CartContext';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Iron } from '@mui/icons-material';


const Cart =()=>{
    const test =useContext(CartContext);
    return(
        <>
        <h1>Cart</h1>
        <Button onClick={test.removeAllFromCart}>Vaciar Carrito</Button>
        
        {
        test.cartList.length > 0 && (
            test.cartList.map(item => (
          

  <Card style={{display: 'flex', marginTop: 20}}>

  <CardMedia>
  <img src={item.image} alt={item.product} width="500" height="auto" />
  </CardMedia>
  
  <CardContent>
  <Typography variant="body2" color="black">
      <h2>{item.product}</h2>
    </Typography>
    <Typography variant="body2" color="black">
      <h4>{item.description}</h4>
    </Typography>
    <img src={item.meme} width="200" height="auto"/>
    <Typography variant="body2" color="text.secondary">
      <span>El stock es de:</span>{item.stock}
    </Typography>
    <Typography variant="body2" color="text.secondary">
    <strong>$ {item.price}</strong>
    </Typography>
    <Typography variant="body2" color="text.secondary">
    <strong>Cantidad:{item.qtyItem }</strong>
    </Typography>
  
    <Typography variant="body2" color="text.secondary">
    <strong>Total: {item.qtyItem  * item.price}</strong>
    </Typography>
    <Button onClick={()=>test.removeFromCart(item)}> borrar </Button>
    
    <Button variant="contained" color="primary" component={Link} to="/">
    <strong>Volver</strong>
    </Button>

    <Button variant="contained" color="primary" component={Link} to="/checkout">
    <strong>Pagar</strong>
    </Button>

  
  </CardContent>
  
  </Card>
  
            ))
        )


    }

            <Link to="/"> 
        <Button variant="contained" color="primary"> ir a la tienda </Button> 
        </Link>
        </>
    )
}
export default Cart;
