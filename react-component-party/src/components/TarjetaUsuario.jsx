export const TarjetaUsuario = ({nombre, edad, ocupacion}) => {
    return ( <>
                <h2 style={ styleUsuario }>Tarjeta de Usuario</h2>
                <p>Mi nombre es {nombre}</p>
                <p>Mi edad es {edad}</p>
                <p>Mi ocupación es {ocupacion}</p>
            </> );
      }