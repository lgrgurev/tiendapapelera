import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './components/CartWidget';
import './components/css/lwdlp.css';
import './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <NavBar/>
          <CartWidget/>
          <ItemListContainer/>
      </header>
    </div>
  );
}

export default App;
