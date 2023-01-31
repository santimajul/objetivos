import logo from './logo.svg';
import './App.css';
import ListaDeObjetivos from './componentes/ListaDeObjetivos';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <h1>Objetivos 2022</h1>
        <ListaDeObjetivos />
      </div>
     
    </div>
  );
}

export default App;
