import { TarjetaUsuario } from "./components/TarjetaUsuario";
import './App.css'

function App() { 

  return (
    <>
    {/* Ejercicio 1 */}
      <Main>
      <TarjetaUsuario nombre="Jaime" edad="" ocupacion="" />
      <TarjetaUsuario nombre="Jaume" edad="" ocupacion=""/>
      <TarjetaUsuario nombre="Cande" edad="" ocupacion=""/>
      </Main>
    </>
  )
}

export default App

const Main=() => {
  return(
    <main className="Main">
      <div className="Cards">
        <div className="Card">Tarjeta Usuario</div>
        <div className="Card">Tarjeta Usuario 2</div>
        <div className="Card">Tarjeta Usuario 3</div>
      </div>
    </main>
  )
}