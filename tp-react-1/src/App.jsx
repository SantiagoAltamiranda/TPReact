import './App.css'
import Ejercicio1 from './componentes/Ejercicio1.jsx'
import Ejercicio2 from './componentes/Ejercicio2.jsx'

function App() {
  return (
    <div className="App">
      <div>
        <Ejercicio1 />
      </div>
      <div>
        <Ejercicio2 message="My friend" />
      </div>
    </div>
  );
}

export default App;