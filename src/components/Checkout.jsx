import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
      <Link to={'/cart'}>  <Button variant="contained" color="primary"> ir al carrito</Button> </Link>
    )

}

export default Checkout;
