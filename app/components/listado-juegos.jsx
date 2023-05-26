import Juego from "./juego"

function ListadoJuegos({juegos}) {
  return (
    <>
        <h2 className="heading">Nuestros Productos</h2>

        {juegos?.length && (
        <div className="juegos-grid">
            {juegos.map( juego => (
            <Juego
                key={juego?.id}
                juego={juego?.attributes}
            />
            ))}
        </div>
        )}
    </>
  )
}

export default ListadoJuegos