import '../styles/App.scss';
import { useState } from 'react';

function App() {
  //States
  const [tasks, setTasks] = useState([
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ]);
  const [searchName, setSearchName] = useState('');
  const [completedTask, setCompletedTask] = useState(2);
  const [toDoTask, setToDoTask] = useState(2);

  //Handlers
  const handleClick = (ev) => {
    const taskId = ev.currentTarget.id; //Reconozco sobre que elemento he hecho click con su id, que coincide en este caso justo con su posicion en el array porque le he pedido que su id o key sea igual a su posicion porque los elementos no tenian un id ya asignado
    const selectedTask = tasks[taskId]; //Meto en esta variable el elemento que encuentre dentro del array de tasks en esta posicion
    selectedTask.completed = !selectedTask.completed; //Cambio su valor completed
    setTasks([...tasks]); //Actualizo los datos en el array inicial
    updateCounters(); //actualiza contadores recorriendo el nuevo array actualizado
  };

  const handleInput = (ev) => {
    setSearchName(ev.target.value);
  };

  const updateCounters = () => {
    let complete = 0;
    let todo = 0;
    tasks.forEach((eachTask) => {
      if (eachTask.completed === true) {
        complete++;
      } else {
        todo++;
      }
    });
    setCompletedTask(complete);
    setToDoTask(todo);
  };

  // const resetCounters = () => {
  //   setCompletedTask(0);
  //   setToDoTask(0);
  // };

  //Renders
  const renderTasks = () => {
    return tasks
      .filter((eachTask) => {
        if (eachTask.task.includes(searchName)) {
          return eachTask;
        }
        return eachTask;
      })
      .map((eachTask, i) => {
        if (eachTask.completed === true) {
          return (
            <li key={i} className='crossed' id={i} onClick={handleClick}>
              {eachTask.task}
            </li>
          );
        } else {
          return (
            <li key={i} id={i} onClick={handleClick}>
              {eachTask.task}
            </li>
          );
        }
      });
  };

  //Return
  return (
    <>
      <h1>Mi lista de tareas</h1>
      <ol>{renderTasks()}</ol>
      <form action=''>
        <label htmlFor=''></label>
        <input type='text' value={searchName} onChange={handleInput} />
      </form>
      <p>Tareas totales: {tasks.length}</p>
      <p>Tareas completadas: {completedTask}</p>
      <p>Tareas pendientes: {toDoTask}</p>
    </>
  );
}

export default App;
