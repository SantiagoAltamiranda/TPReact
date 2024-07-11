import  { useState, useEffect } from 'react';

const Ejercicio6 = () => {
  const [color, setColor] = useState('');
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const savedColors = JSON.parse(localStorage.getItem('colors'));
    if (savedColors) {
      setColors(savedColors);
    }
  }, []);

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const handleSave = () => {
    if (color) {
      const newColors = [...colors, color];
      setColors(newColors);
      localStorage.setItem('colors', JSON.stringify(newColors));
      setColor('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <div className="container">
      <h2>Paleta de Colores</h2>
      <div className="input-group mb-3">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Ingrese un color (ej: #ff0000)"
          value={color}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <button className="btn btn-primary" onClick={handleSave}>Guardar Color</button>
      </div>
      <div className="row">
        {colors.map((color, index) => (
          <div className="col-md-3 mb-3" key={index}>
            <div className="card" style={{ backgroundColor: color }}>
              <div className="card-body">
                <p className="card-text">{color}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ejercicio6;
