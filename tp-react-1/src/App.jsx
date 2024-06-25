import './App.css'
import Ejercicio1 from './componentes/Ejercicio1.jsx'
import Ejercicio2 from './componentes/Ejercicio2.jsx'
import Ejercicio3 from './componentes/Ejercicio3.jsx';
import Ejercicio4 from './componentes/Ejercicio4.jsx';
function App() {
  return (
    <div className="App">
      <div>
        <Ejercicio1 />
      </div>
      <div>
        <Ejercicio2 message="My friend" />
      </div>
      <div>
        <Ejercicio3 message="World" />
      </div>
      <div>
        <Ejercicio4 />
      </div>
    </div>
  );
}

export default App;