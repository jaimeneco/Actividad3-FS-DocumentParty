import { TarjetaUsuario } from "./components/TarjetaUsuario";
import { PerfilUsuario } from "./components/PerfilUsuario";
import './App.css'

function App() {
  {/* Actividad 1: Tarjeta de Usuario. */ }
  <div className="Contenedora-tarjetas">
    {personas.map((persona, i) => (

      <TarjetaUsuario key={i} nombre={persona.nombre} edad={persona.edad} ocupacion={persona.ocupacion} />
    ))}
  </div>

  {/* Actividad 2: Lista de tareas. */ }
  const tareas = [
    { id: 1, nombre: 'Estudiar React', completada: true },
    { id: 2, nombre: 'Leer un libro', completada: false },
    { id: 3, nombre: 'Mejorar mi nivel de Escalada', completada: false },
    { id: 4, nombre: 'Aprender a cocinar', completada: true },
    { id: 5, nombre: 'Ver series', completada: false },
    { id: 6, nombre: 'ir un día a la nieve', completada: false }
  ];

  {/* Actividad 3: El Barto perfil */ }
  const userData = {
    nombre: 'El Barto',
    email: 'elbarto@fox.com',
    img: "https://i.ebayimg.com/images/g/Z9oAAOSwH7NlKK4J/s-l1200.webp",
    direccion: {
      calle: 'Calle Falsa 123',
      ciudad: 'Springfield',
      codigoPostal: '12345'
    }
  };

  {/* Actividad 4: Galería de Imágenes */ }
  const imageList = [
    { src: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', alt: 'Rick Sanchez' },
    { src: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', alt: 'Morty Smith' },
    { src: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg', alt: 'Summer Smith' },
  ];

  {/* Actividad 5: Galería de Imágenes */ }

  {/* Actividad 10: Componente de alerta */ }



  return (
    <>
      <h2>Actividad 1: Tarjeta de Usuario</h2>
      <TarjetaUsuario nombre="Jaime" edad="27" ocupacion="estudiar" />
      <TarjetaUsuario nombre="Jaume" edad="29" />
      <TarjetaUsuario nombre="Cande" ocupacion="trabajo" />

      <h2>Actividad 2: Lista de tareas</h2>
      <ListaTareas tareas={tareas} />

      <h2>Actividad 3: El Barto Perfil</h2>
      <PerfilUsuario userData={userData} />

      <h2>Actividad 4: Galería de imagenes</h2>
      <GaleriaImagenes imageList={imageList} />


      <h2>Actividad 5: Blog Post - Investigación de prop children</h2>
      {/* Componente con children */}
      <BlogPost nombre="Mi Primer Post" autor="Jaime Nebot" fecha="2025-07-01" >
        <p>Lorem ipsum dolor,adipisci unde tempora recusandae tenetur numquam reprehenderit id quaerat, iure magni consectetur alias neque amet, quisquam repudiandae? Saepe temporibus inventore ipsa! Praesentium!</p>
      </BlogPost>

      <h2>Actividad 10: Componente de alerta</h2>
      {/* Prop mando status y como children el texto */}
      <AlertBox status="success">
        ¡Toca balón!
      </AlertBox>

      <AlertBox status="warning">
        ¡Tarjeta amarilla!
      </AlertBox>

      <AlertBox status="error">
        ¡Tarjeta roja!
      </AlertBox>
    </>
  )
}

export default App

 const AlertBox = ({ status, children }) => {}