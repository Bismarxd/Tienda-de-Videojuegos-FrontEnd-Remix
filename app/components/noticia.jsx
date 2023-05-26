

function Noticia({noticia}) {
    const{contenido, imagen, titulo} = noticia
  return (
    <section className="noticia">
        <style jsx="true">
            {
            ` .noticia{
                background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1)), url(${imagen.data.attributes.url});

                box-shadow: 0 0 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.2), 0 0 40px rgba(0, 0, 0, 0.1);
                width:80%;
                
                transform: perspective(800px) rotateX(10deg);
                margin-top: 10rem;   
                background-size: cover;
                background-position: center center; 
                }

                @media (min-width: 768px) {
                    .noticia {
                        margin-left: 20rem;
                    }
                }

               
                
            `
            }
        </style>
        <div className="contenedor noticia-grid">
            <div className="contenido">
                <h2>{titulo}</h2>
                <p className="texto">{contenido}</p>
            </div>
           
        </div>

    </section>
  )
}

export default Noticia