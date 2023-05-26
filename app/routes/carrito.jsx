import { useEffect, useState } from 'react'
import { useOutletContext } from '@remix-run/react'
import { ClientOnly } from 'remix-utils'
import styles from '~/styles/carrito.css'

export function meta(){
    return[{
      title: 'Pixel-Pedidos',

    }]
  }

export function links(){
    return [
      {
        rel: 'stylesheet',
        href: styles
      }
    ]
  }


  


function Carrito() {

  const [total, setTotal] = useState(0)

  const {carrito, actualizarCantidad, eliminarJuego} = useOutletContext()

  useEffect(() => {
    const calculoTotal = carrito.reduce( (total, producto)=> total + (producto.cantidad * producto.precio), 0)
    setTotal(calculoTotal)
  }, [carrito])


  return (
    <ClientOnly fallback={'cargando..'}>
      {() => (
      <main className="contendor">
          <h1 className="heading">Carrito de Compras</h1>

          <div className="contenido-carrito">
              <div className="carrito">
                  <h2>Articulos</h2>

                  {carrito?.length === 0 ? 'Carrito Vacio' : (
                    
                    carrito?.map( producto => (
                      <div key={producto.id} className='producto'>
                          <div>
                            <img src={producto.imagen} alt={`Imagen Producto ${producto.nombre}`} />
                          </div>

                          <div>
                            <p className='nombre'>{producto.nombre}</p>


                            <p className='precio'>Bs. <span>{producto.precio}</span></p>

                            <p className='precio'>Cantidad:
                              <select
                                value={producto.cantidad}
                                className='select'
                                onChange={ e => actualizarCantidad({
                                  cantidad: +e.target.value,
                                  id: producto.id
                                })}
                              >
                              <option value="0">--------Seleccione---------</option>
                                {Array.from({ length: 5 }, (_, i) => (
                                  <option key={i} value={i + 1}>
                                    {i + 1}
                                  </option>
                                ))}
                              </select>
                            </p>

                            <p className='subtotal'>SubTotal: Bs. <span>{producto.cantidad * producto.precio}</span></p>
                          </div>

                          <button
                            type='button'
                            className='boton-eliminar'
                            onClick={() => eliminarJuego(producto.id)}
                          >
                            Eliminar</button>
                      </div>
                    ))
                  )}
              </div>
          </div>

          <aside className="resumen">
              <h3>Resumen de la Compra</h3>
              <p>Total: Bs.{total}</p>
              
          </aside>

      </main>
      )}
    </ClientOnly>
  )
}

export default Carrito