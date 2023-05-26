import { useState } from 'react';
import { useLoaderData, useOutletContext } from '@remix-run/react';
import { getJuego } from '../models/juegos.server';

export async function loader({request, params}){
 
  const{juegoUrl} = params
  
  const juego = await getJuego(juegoUrl)

  if (juego.data.length === 0) {
    throw new Response('', {
      status:404,
      statusText: 'Juego no encontrado'
    })
  }

  return juego;

}

export function meta({data}) {

  if (!data) {
    return {
      title: 'Juego no Encontrado'
    }
  }
  return [
    {
      title: `Pixel - ${data.data[0].attributes.nombre}`
    }
  ]
}


function Juego() {

  const {agregarCarrito} = useOutletContext()

  const juego = useLoaderData()

  const {nombre, descripcion, imagen, precio} = juego.data[0].attributes

  const [cantidad, setCantidad] = useState(0)

  const handleSubmit = e => {
    e.preventDefault()
    if (cantidad < 1) {
      alert('Debes seleccionar una cantidad')
      return
      
    }



    
    const juegoSeleccionado = {
      id: juego.data[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }
    agregarCarrito(juegoSeleccionado)

  }

  function agregar(){
    alert('Producto agregado al carrito')
   
    return
  }


  return (
    <div className='contenedor juego'>
        <img src={imagen.data.attributes.url} alt={`Imagen Juego ${nombre}`} />

        <div className="contenido">
          <h3 className='nombre-juego'>{nombre}</h3>
          <p className="texto">{descripcion}</p>
          <p className="precio">Bs. {precio}</p>

          <form
            onSubmit={handleSubmit}
           className='formulario'
          >
            <label>Cantidad</label>

            <select
              onChange={ e => setCantidad(parseInt(e.target.value))}
             id='cantidad'
             >
            <option value="0">--------Seleccione---------</option>
            {Array.from({ length: 5 }, (_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
            </select>

            <input 
              onClick={agregar}
              type="submit" 
              value="Agregar al Carrito"
            />
          </form>
        </div>
    </div>
  )
}

export default Juego