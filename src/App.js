import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/error';



function App() {


  return (
    
    <div className="App">

  <BrowserRouter>
  <NavBar/>
  <Routes>
<Route path="/" element={<ItemListContainer />} />
<Route path='/category/:categoryId' element={<ItemListContainer />} />
<Route path= "*" element={<Error />} /> 



      </Routes>
      </BrowserRouter>

    </div>

  ) 
 
  
  
}



export default App;
