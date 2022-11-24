import '../styles/App.scss';

function App() {
  const [tasks, setTasks] = useState([
    { task: 'comprar harina, jamón y pan rallado', completed: true },
    { task: 'hacer ricas croquetas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    { task: 'Comerme las croquetas en la puerta', completed: false },
  ]);

  const handleClick = () => {
    const selectedId = ev.currentTarget.id; //Reconozco sobre que elemento he hecho click con su id, que coincide en este caso justo con su posicion en el array porque le he pedido que su id o key sea igual a su posicion porque los elementos no tenian un id ya asignado

    const selectedTask = tasks[selectedId]; //Meto en esta variable el elemento que encuentre dentro del array de tasks en esta posicion
    selectedTask.completed = !selectedTask.completed; //Cambio su valor completed
    setTasks([...tasks]); //Vuelvo a pintarlo todo
  };

  const renderTasks = () => {
    return tasks.map((eachTask, i) => {
      return (
        <li id={i} onClick={handleClick}>
          {eachTask.task}
        </li>
      );
    });
  };

  return (
    <div className='App'>
      <ul>{renderTasks()}</ul>
    </div>
  );
}

export default App;
