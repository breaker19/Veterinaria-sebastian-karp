import React from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import {CartContext} from './CartContext';




const CartWidget =() => {
  const test = useContext(CartContext);


  return (



    <IconButton style={{color: 'red', width: 60}} aria-label="cart">
      <Badge color="primary" badgeContent={test.calcularItems()}>
      
        <ShoppingCartIcon style={{width:30, height:30}}/>
      </Badge>
    </IconButton>
  );
}





export default CartWidget;