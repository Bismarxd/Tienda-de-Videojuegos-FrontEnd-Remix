import React from 'react'
import {Link, useLocation} from '@remix-run/react'
import imagenCarrito from '../../public/img/carrito.png'

function Navegacion() {
    const location = useLocation()

  return (
    <nav className="navegacion">
            <Link
                to="/"
                className={location.pathname === '/' ? 'active' : ''}
            >Inicio</Link>

            <Link
                to="/nosotros"
                
            >Nosotros</Link>

            <Link
                to="/juegos"
                className={location.pathname === '/juegos' ? 'active' : ''}
            >Tienda</Link>

            <Link
                to="/blog"
                className={location.pathname === '/blog' ? 'active' : ''}
            >Blog</Link>

            <Link
                to="carrito"
            >
                <img src={imagenCarrito} alt="carrito" />
            
            </Link>


    </nav>

  )
}

export default Navegacion