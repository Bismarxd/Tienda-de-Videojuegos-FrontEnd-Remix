import { useState, useEffect } from 'react'
import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useCatch,
  Link
} from '@remix-run/react'

import styles from '~/styles/index.css'
import Header from '~/components/header'
import Footer from '~/components/footer'

export function meta(){
  return[
      {
          charset: 'utf-8',
          title: 'Tienda Videojuegos',
          viewport: "width=device-width, initial-scale=1"
      }
  ]
}




export function links() {

  return[
      {
          rel: 'stylesheet',
          href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
      },
      {
          rel: 'stylesheet',
          href: styles
      },
      {
          rel:'preconnect',
          href: "https://fonts.googleapis.com"
      },
      {
          rel:'preconnect',
          href:'https://fonts.gstatic.com',
          crossOrigin: "true"
      },
      {
          rel: 'stylesheet',
          href:"https://fonts.googleapis.com/css2?family=Alkatra&family=Bebas+Neue&family=Delicious+Handrawn&family=Indie+Flower&family=Roboto+Slab:wght@100&display=swap"
      }
  ]
}


export default function App() {

    const carritoLs = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null;

    const [carrito, setCarrito] = useState(carritoLs)

    
    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
           
      }, [carrito])
      

    const agregarCarrito = juego => {
        if (carrito.some(juegoState => juegoState.id === juego.id)) {
            //Iterrar sobre el arreglo e identificar el elemento duplicado
            const carritoActualizado = carrito.map(juegoState => {
                if (juegoState.id === juego.id) {
                    //Reescribir la cantidad
                    juegoState.cantidad = juego.cantidad
                }
                return juegoState
            })
            //Añadir al carrito
            setCarrito(carritoActualizado);
        }else {
            //Agregar al carrito
            setCarrito([...carrito, juego])
        }
    }

    //const actualizar cantidad
    const actualizarCantidad = juego =>{
        const carritoActualizado = carrito.map( juegoState => {
            if (juegoState.id === juego.id) {
                juegoState.cantidad = juego.cantidad
            }
            return juegoState
        })

        setCarrito(carritoActualizado);
    }

    const eliminarJuego = id => {
        const carritoActualizado = carrito.filter (juegoState => juegoState.id !== id)
        setCarrito(carritoActualizado)
    }


  return(
      <Document>
          <Outlet 
            context={{
                agregarCarrito,
                carrito,
                actualizarCantidad,
                eliminarJuego
            }}
          />
      </Document>
  )
}

function Document({children}) {
  return (
      <html lang="es">
          <head>
              <Meta />
              <Links />
          </head>
          <body>
              <Header />
              {children}
              <Footer />
              <Scripts />
              <LiveReload />
          </body>
      </html>
  )
}


/** Manejo de errores */
export function CatchBoundary() {
  const error = useCatch()
  return (
      <Document>
          <p className='error'>{error.status } {error.statusText}</p>
          <Link className='error-enlace' to="/">Tal vez quieras volvera a la página principal</Link>
      </Document>
  )
}

export function ErrorBoundary({error}) {
  return (
      <Document>
          <p className='error'>{error.status } {error.statusText}</p>
          <Link className='error-enlace' to="/">Tal vez quieras volvera a la página principal</Link>
      </Document>
  )
}