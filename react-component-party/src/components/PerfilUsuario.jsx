const Perfilusuario = ({ userData }) => {
    const { nombre, img, email, direccion } = userData;

    const { calle, ciudad, codigoPostal} = direccion;

    return (
        <>
        <div className="Card">
            <h2>{nombre}</h2>
            <img src={img} alt={nombre} style={{width: "200px"}} />
            <p>Email: {email}</p>
            {/* <p>Dirección: {JSON.stringify(direccion)}</p> */}
            <p>Dirección:</p>
            <p>
                Calle: {calle}
                Ciudad: {ciudad}
                CP: {codigoPostal}
            </p>
        </div>
        </>
    );
}

export default Perfilusuario;
