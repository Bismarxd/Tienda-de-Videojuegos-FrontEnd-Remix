export async function getJuegos(){
  const respuesta = await fetch(`${process.env.API_URL}/video-juegos?populate=imagen`);
  const resultado = await respuesta.json();

  return resultado;
  
}

export async function getJuego(url) {
  const respuesta = await fetch(
    `${process.env.API_URL}/video-juegos?filters[url]=${url}&populate=imagen`
  );
  const resultado = await respuesta.json();

  return resultado;
}