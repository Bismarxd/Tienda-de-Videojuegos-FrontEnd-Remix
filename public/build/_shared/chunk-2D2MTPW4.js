// app/styles/blog.css
var blog_default = "/build/_assets/blog-IRUFJJRZ.css";

// app/util/helpers.js
var formatearFecha = (fecha) => {
  const fechaNueva = new Date(fecha);
  const opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit"
  };
  return fechaNueva.toLocaleDateString("es-ES", opciones);
};

export {
  blog_default,
  formatearFecha
};
//# sourceMappingURL=/build/_shared/chunk-2D2MTPW4.js.map
