import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'


export function meta(){
  return[{
    title: 'Pixel-Nosotros',
    description: 'Venta de videojuegos'
  }]
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel:'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {

  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />

        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur enim nemo itaque iure porro deleniti vitae dolore, mollitia aspernatur fugit odit eum, voluptas amet. Impedit qui et obcaecati totam est?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In eum voluptas eligendi nam veritatis inventore quis! Dolore, voluptate? Adipisci quasi neque, ipsam dicta quas illo itaque hic voluptas quidem voluptatum?</p>
        </div>
      </div>

    </main>
  )
}

export default Nosotros