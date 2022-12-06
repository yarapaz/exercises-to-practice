function GenderFilter(props) {
  const handleGender = (ev) => {
    props.handleGenderFilter(ev.target.name);
  };

  return (
    <fieldset>
      <legend>Search by gender</legend>
      <label htmlFor='male'>Male</label>
      <input
        type='radio'
        name='male'
        id='male'
        onChange={handleGender}
        checked={props.userGenderFilter === 'male'}
      />
      <label htmlFor='female'>Female</label>
      <input
        type='radio'
        name='female'
        id='female'
        onChange={handleGender}
        checked={props.userGenderFilter === 'female'}
      />
      <label htmlFor='none'>None</label>
      <input
        type='radio'
        name='none'
        id='none'
        onChange={handleGender}
        checked={props.userGenderFilter === 'none'}
      />
    </fieldset>
  );
}

export default GenderFilter;

//PRIMEROS PASOS:
// 1. Recoger el valor del atributo name (para saber sobre que radio estoy haciendo click, que justo coincide con el género al que representa) del radio sobre el que estoy haciendo click con una funcion manejadora onChange
// 2. Mando este valor mediante lifting a una funcion manejadora del filtro por género en APP que actualizará el estado que recoge sobre que genero se ha hecho click en APP
//3. Mando el valor del estado actualizado a User panel para hacer el filtro
//4. Vuelvo a mandar a este filtro el estado actualizado para controlar los inputs como se ve arriba, a través de booleanos
//-------
//SEGUNDOS PASOS:
//1. Crear filtro en el renderizador de tarjetas por genero
//2. En este filtro le decimos que si el genero del usuario por el que está pasando es igual al valor del estado que le paso, me devuelva ese usuario. Y que si este estado esta vacio, me devuelva a todos
