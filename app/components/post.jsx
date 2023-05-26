import { Link } from "@remix-run/react";
import { formatearFecha } from "~/util/helpers";

function Post({post}) {
    
    const{contenido, imagen, titulo, url, publishedAt} = post

  return (
    <article className="post">
        <img src={imagen.data.attributes.formats.small.url} alt={`Imagen Post ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="resumen texto">{contenido}</p>
            <Link className="enlace" to={`/posts/${url}`}>Leer Entrada</Link>
        </div>
    </article>
  )
}

export default Post