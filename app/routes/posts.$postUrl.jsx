import { useLoaderData } from '@remix-run/react';
import { getPost } from '../models/posts.server';
import styles from '~/styles/blog.css'
import { formatearFecha } from "~/util/helpers";

export async function loader({request, params}){
 
    const{postUrl} = params
    
    const post = await getPost(postUrl)
  
    if (post.data.length === 0) {
      throw new Response('', {
        status:404,
        statusText: 'Blog no encontrado'
      })
    }
  
    return post;
  
  }

  export function meta({data}) {

    if (!data) {
      return {
        title: 'Blog no Encontrado'
      }
    }
    return [
      {
        title: `Pixel - ${data.data[0].attributes.titulo}`
      }
    ]
  }
  
  export function links(){
    return[
      {
        rel: 'stylesheet',
        href: styles
      }
    ]
    
  }
  

function Post() {
    const post = useLoaderData()

    const {titulo, contenido, imagen, publishedAt} = post?.data[0].attributes
  
    return (
      <main className='contenedor post mt-3'>
          <img src={imagen?.data?.attributes?.url} alt={`Imagen Juego ${titulo}`} />
  
          <div className="contenido">
            <h3 className='titulo'>{titulo}</h3>
            <p className='fecha'>{formatearFecha(publishedAt)}</p>
            <p className="texto">{contenido}</p>

          </div>
      </main>
    )
}

export default Post