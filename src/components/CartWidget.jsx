import React from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const CartWidget =() => {
  return (
    <IconButton style={{color: 'red', width: 60}} aria-label="cart">
      <Badge color="primary" badgeContent={5}>

        <ShoppingCartIcon style={{width:30, height:30}}/>
      </Badge>
    </IconButton>
  );
}





export default CartWidget;