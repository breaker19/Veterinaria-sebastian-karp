import logo from './logo.svg';
import gato from './gato.png';
import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {



  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <img src={gato} className="App-logo" alt="logo" />
        <p>
         Bienvenidos al PetShop más grande del mundo!
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )

  
  
}


export default App;
