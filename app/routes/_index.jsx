import stylesJuegos from '~/styles/juegos.css'
import { getJuegos } from '../models/juegos.server'
import { getPosts } from '../models/posts.server'
import { getNoticia } from '../models/noticia.server'
import { useLoaderData } from '@remix-run/react'
import ListadoJuegos from '../components/listado-juegos'
import ListadoPost from '../components/listado-post'
import stylesPosts from '~/styles/blog.css'
import stylesNoticia from '~/styles/noticia.css'
import Noticia from '../components/noticia'

export function meta(){
  return[{
    title: 'Pixel-Nosotros',
    description: 'Venta de videojuegos'
  }]
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: stylesJuegos
    },
    {
      rel: 'stylesheet',
      href: stylesPosts
    },
    {
      rel: 'stylesheet',
      href: stylesNoticia
    }
  ]
  
}

export async function loader() {

  const[juegos, posts, noticia] = await Promise.all([
    getJuegos(),
    getPosts(),
    getNoticia()
  ])



  return {
    juegos: juegos.data,
    posts: posts.data,
    noticia: noticia.data
  }

}


function Index() {

  const {juegos, posts, noticia} = useLoaderData();
  

  return (
    <>
      <main className="contenedor">
        <ListadoJuegos
          juegos={juegos}
        
        />
      </main>

      <Noticia
        noticia={noticia.attributes}
      />

      <section className='contenedor'>
        <ListadoPost
          posts={posts}
        />
      </section>
    </>
  
  )
}

export default Index