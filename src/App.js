import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import React from 'react';
import ItemDetailContainer from './components/itemDetailContainer';


function App() {


  return (
    
    <div className="App">

      <NavBar/>

      <header className="App-header">

      {/* <ItemListContainer greeting = "Nos estamos renovando! proximamente tienda veterinaria y petshop"/> */}
  < ItemDetailContainer />
      </header>

    </div>

  ) 
 
  
  
}



export default App;
