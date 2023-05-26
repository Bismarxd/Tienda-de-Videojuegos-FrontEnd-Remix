import {Link} from '@remix-run/react'
import logo from '../../public/img/PIXEL.svg'
import Navegacion from './navegacion'

function Header() {

  return (
    <header className="header">
        <div className="contenedor barra">
            <div className="logo">
                <Link
                    to="/"
                >
                    <img src={logo} alt="imagen logo" className="logo"/>
                </Link>
                

            </div>
            <Navegacion/>
            

        </div>

    </header>
  )
}

export default Header