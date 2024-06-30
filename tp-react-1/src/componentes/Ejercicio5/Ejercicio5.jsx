import  { useState, useEffect } from 'react';

const Ejercicio5 = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Cargar las tareas desde localStorage cuando el componente se monte
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Guardar las tareas en localStorage cada vez que se actualicen
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask.trim() }]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Lista de Tareas (con LocalStorage)</h2>
      <input
        type="text"
        placeholder="Ingresa una nueva tarea"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleDeleteTask(task.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ejercicio5;
