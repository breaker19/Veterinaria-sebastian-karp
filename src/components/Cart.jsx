import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';


const Cart =()=>{
    return(
        <>
        <h1>Cart</h1>
        <h3>Esta es la pagina de carrito</h3>
  
  <Link to={'/'}>  <Button variant="contained" color="primary"> ir al inicio</Button> </Link>

        </>
    )
}



 

export default Cart;