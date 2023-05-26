import { useLoaderData} from "@remix-run/react";
import { getJuegos } from "~/models/juegos.server"
import ListadoJuegos from "~/components/listado-juegos";

export function meta() {
  return [
    {
      title: 'Pixels - Tienda de Videojuegos'
    }
  ]
}



export async function loader() {

  const juegos = await getJuegos()
  return juegos.data;

}


function Tienda() {

  const juegos = useLoaderData();


  return (

        <ListadoJuegos
          juegos={juegos}
        />

  )
}

export default Tienda