import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Ejercicio1 from './componentes/Ejercicio1/Ejercicio1.jsx';
import Ejercicio2 from './componentes/Ejercicio2/Ejercicio2.jsx';
import Ejercicio3 from './componentes/Ejercicio3/Ejercicio3.jsx';
import Ejercicio4 from './componentes/Ejercicio4/Ejercicio4.jsx';
import Ejercicio5 from './componentes/Ejercicio5/Ejercicio5.jsx';
import Ejercicio6 from "./componentes/Ejercicio6/Ejercicio6.jsx";


const AppRouter = () => (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/Ejercicio1">Ejercicio 1</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Ejercicio2">Ejercicio 2</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Ejercicio3">Ejercicio 3</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Ejercicio4">Ejercicio 4</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Ejercicio5">Ejercicio 5</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Ejercicio6">Ejercicio 6</Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/Ejercicio1" element={<Ejercicio1 />} />
          <Route path="/Ejercicio2" element={<Ejercicio2 message="My friend" />} />
          <Route path="/Ejercicio3" element={<Ejercicio3 message="Hello World" />} />
          <Route path="/Ejercicio4" element={<Ejercicio4 />} />
          <Route path="/Ejercicio5" element={<Ejercicio5 />} />
          <Route path="/Ejercicio6" element={<Ejercicio6 />} />
        </Routes>
      </div>
    </Router>
  );
  
  export default AppRouter;