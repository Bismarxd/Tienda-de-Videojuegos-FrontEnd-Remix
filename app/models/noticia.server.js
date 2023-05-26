export async function getNoticia() {
  const respuesta = await fetch(`${process.env.API_URL}/noticia?populate=imagen`);
  const resultado = await respuesta.json();

  return resultado;
}