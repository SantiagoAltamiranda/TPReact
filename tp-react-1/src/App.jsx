import './App.css'
import Ejercicio1 from './componentes/Ejercicio1/Ejercicio1.jsx';
import Ejercicio2 from './componentes/Ejercicio2/Ejercicio2.jsx';
import Ejercicio3 from './componentes/Ejercicio3/Ejercicio3.jsx';
import Ejercicio4 from './componentes/Ejercicio4/Ejercicio4.jsx';
import Ejercicio5 from './componentes/Ejercicio5/Ejercicio5.jsx';

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
      <div>
        <Ejercicio5 />
      </div>
    </div>
  );
}

export default App;