const GaleriaImagenes = ({imageList}) => {

    return(
            <div>
                <h2>Galería de Imágenes</h2>
                {imageList.map(({src, alt}, index) => (

                    <Img key={index} src={src} alt={alt} />
            ))}
                
            </div>
    );
}

const Img = () => {
    return ( 
        <>
            <img src={src} alt={alt} />
            <h3>{alt}</h3>
        </>);
}


export default GaleriaImagenes;