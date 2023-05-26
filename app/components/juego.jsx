import { Link } from "@remix-run/react";


function Juego({juego}) {

    const {nombre,descripcion, imagen, precio, url} = juego;



  return (
    <div className="juego">
        <img src={imagen.data.attributes.url} alt={`Imagen Juego ${nombre}`} />
        <div className="contenido">
            <h3>{nombre}</h3>
            <p className="descripcion">{descripcion}</p>
            <p className="precio">Bs. {precio}</p>

            <Link className="enlace" to={`/juegos/${url}`}>Ver Producto</Link>
        </div>
    </div>
  )
}

export default Juego