import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function UserDetail(props) {
  const params = useParams();
  const foundUser = props.findUser(params.user);
  console.log(foundUser);
  return (
    <main>
      <section>
        <h2>{foundUser.name}</h2>
        <h3>
          {foundUser.gender}
          {foundUser.city}
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia
          dicta illum deleniti id exercitationem nobis, distinctio ducimus
          debitis eligendi praesentium sed qui vero velit consequuntur sequi
          quasi natus iste.
        </p>
      </section>
      <NavLink to='/'>
        <button>Go back</button>
      </NavLink>
    </main>
  );
}

export default UserDetail;

//CREAR RUTAS DINÁMICAS:
//Crear Route en APP con el nombre aleatorio que yo quiera, por ejemplo, en este caso :user
//Crear componente que renderizará esta ruta
//Ir a componente nuevo creado
//Obtener nombre de ruta en la que me encuentro usando useParams
//Creo una funcion buscadora en APP mediante la que busco en el array de usuarios general de la api y comparo una propiedad que tengan todos los usuarios que sea unica, generalmente el id, con un valor que yo le pase por lifting desde este componente.
//Me traigo con props esta funcion a mi componente
//Ejecuto esa funcion en el componente pasandole como parametros el que haya encontrado en params
//La funcion se ejecutará en app mediante lifting encontrandome el usuario buscado
//Me lo devuelve para que yo pueda usarlo para rellenar mi html con sus datos
//Voy a la tarjeta de usuario sobre la que al hacer click me iré a esta ruta y convierto toda la tarjeta en un link que me lleve a la ruta que tenga el nombre del usuario
