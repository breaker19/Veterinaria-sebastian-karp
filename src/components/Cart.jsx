import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {useContext} from 'react';
import {CartContext} from './CartContext';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Container, Row, Col} from 'react-bootstrap';
import gato from '../images/catCart.jpg';
import { serverTimestamp } from 'firebase/firestore';
import db from './firebaseConfig';
import {doc, setDoc, collection, updateDoc, increment } from '@firebase/firestore';



const Cart =()=>{
    const test =useContext(CartContext);

const checkout =()=>{
  const dataBase =
  test.cartList.map(item => ({
    title: item.product,
    price: item.price,
    qty: item.qtyItem,
    id: item.id,
  }));

  test.cartList.forEach(async (item) => {
    const itemRef = doc(db, "products", item.id);
    await updateDoc(itemRef, {
      stock: increment(-item.qtyItem)
    });
  });
  let order = {
buyer: {
  name: "Sebastian",
  address: "Calle falsa 123",
  city: "Buenos Aires",
  country: "Argentina",
  email: "sebastian@tormenta.com.ar"

},

date: serverTimestamp(),

items: dataBase,
total: test.calcTotal()


};
console.log(order);

const createOrder = async () => {
  const newOrderRef = doc(collection(db, "orders"));
  await setDoc(newOrderRef, order);
  return newOrderRef;
};

createOrder()
.then(result => alert("GRACIAS POR SU COMPRA ")) 
.catch(err => console.log(err));

test.removeAllFromCart();
  }
 



    return(
        <>
        <h1>Cart</h1>
        <Button onClick={test.removeAllFromCart}>Vaciar Carrito</Button>
        
        {
        test.cartList.length > 0 && (
            test.cartList.map(item => (
              <Container>
              <Row>

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
    <strong>Precio por unidad $ {item.price}</strong>
    </Typography>
    <Typography variant="body2" color="text.secondary">
    <strong>Cantidad seleccionada:{item.qtyItem }</strong>
    </Typography>
  
    <Typography variant="body2" color="text.secondary">
    <strong>Total: {item.qtyItem  * item.price}</strong>
    </Typography>


    <Button onClick={()=>test.removeFromCart(item)}> borrar </Button>
    
    <Button variant="contained" color="primary" component={Link} to="/">
    <strong>Volver</strong>
    </Button>

  

  
  </CardContent>
  
  </Card>
  </Row>
  </Container>
  
            ))
        )


    }
 <h1>Detalle del carrito</h1>
<Container>
  <Row>
    <Col>
    <Card style={{display: 'flex', marginTop: 20}}>

  <CardContent>
    <Typography variant="body2" color="black"> 
    <h3>Total sin impuestos:<strong>{test.cartList.reduce((total, item) => total + item.qtyItem * item.price, 0)}</strong></h3>
    </Typography>
    <Typography variant="body2" color="black">
    <h3>Total impuestos incluidos:<strong>{test.cartList.reduce((total, item) => total + item.qtyItem * item.price, 0) * 1.21}</strong></h3>
    </Typography>

    <Typography variant="body2" color="black">
    <h3>Productos en el carrito <strong>{test.calcularItems()}</strong></h3>
    </Typography>

    <Button onClick={checkout}>
    <strong>Pagar</strong>
    </Button>


  </CardContent>
  <CardMedia>
  <img src={gato} width="500" height="auto" />
  </CardMedia>
    </Card>



    </Col>
  </Row>
</Container>
            <Link to="/"> 
        <Button variant="contained" color="primary"> ir a la tienda </Button> 
        </Link>
        </>
    )
}
export default Cart;
