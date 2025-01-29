export const TarjetaUsuario = ({nombre, edad, ocupacion}) => {
    return ( <>

            <div className="Contenedora-tarjeta">
                <h1 className="Titulo">Este es mi nombre: {nombre}</h1>
                    {
                        edad && <p>Mi edad es {edad}</p>
                    }
                    <h3 className="Textos"></h3>
                    <h3 className="Textos">Trabajo de {ocupacion}</h3>
            </div>
                <h2 style={ styleUsuario }>Tarjeta de Usuario</h2>
                <p>Mi nombre es {nombre}</p>
                <p>Mi edad es {edad}</p>
                <p>Mi ocupación es {ocupacion}</p>
            </> );
      }