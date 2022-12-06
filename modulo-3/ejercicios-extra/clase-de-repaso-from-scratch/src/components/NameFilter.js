function NameFilter(props) {
  const handleInputValue = (ev) => {
    props.handleNameFilter(ev.target.value);
  };
  return (
    <fieldset>
      <legend>Search by name</legend>
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        name='name'
        id='name'
        value={props.userNameFilter}
        onChange={handleInputValue}
      />
    </fieldset>
  );
}

export default NameFilter;

//PRIMEROS PASOS:
//1. Recoger valor del input cuando este cambie (la usuaria escriba)
//2. Recoger este valor mediante una funcion manejadora del cambio declarada dentro de este componente, funcion que estará ligada a otra funcion manejadora en APP (funcion para actualizar el estado) que le habrá llegado a este componente en forma de props.
//3. Mandar dicho valor a App a través de lifting (a través de estas funciones antes descritas) para que se guarde dentro del estado userNameFilter
//4. Devolver por props el estado actualizado a este componente para mantener el input controlado

//------

//SEGUNDOS PASOS:
//1. Mandar estado actualizado al componente user panel que renderiza las tarjetas
//2. Hacer filter con ese valor en la funcion renderizadora de cartas para que renderice solo la busqueda en caso de que esta exista
