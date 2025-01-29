const Tarea = ({nombre, completada}) => {


    return (
        <>
        <p><input type="checkbox" checked={completada} /> {nombre}</p>

        
        </>
    )
}

export default Tarea;