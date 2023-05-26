import {
  require_juegos
} from "/build/_shared/chunk-QGMDUKCB.js";
import {
  useLoaderData,
  useOutletContext
} from "/build/_shared/chunk-YQGXTTW6.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-EETRBLDB.js";

// app/routes/juegos.$juegoUrl.jsx
var import_react = __toESM(require_react());
var import_juegos = __toESM(require_juegos());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta({ data }) {
  if (!data) {
    return {
      title: "Juego no Encontrado"
    };
  }
  return [
    {
      title: `Pixel - ${data.data[0].attributes.nombre}`
    }
  ];
}
function Juego() {
  const { agregarCarrito } = useOutletContext();
  const juego = useLoaderData();
  const { nombre, descripcion, imagen, precio } = juego.data[0].attributes;
  const [cantidad, setCantidad] = (0, import_react.useState)(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad < 1) {
      alert("Debes seleccionar una cantidad");
      return;
    }
    const juegoSeleccionado = {
      id: juego.data[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    };
    agregarCarrito(juegoSeleccionado);
  };
  function agregar() {
    alert("Producto agregado al carrito");
    return;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "contenedor juego", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: imagen.data.attributes.url, alt: `Imagen Juego ${nombre}` }, void 0, false, {
      fileName: "app/routes/juegos.$juegoUrl.jsx",
      lineNumber: 78,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "nombre-juego", children: nombre }, void 0, false, {
        fileName: "app/routes/juegos.$juegoUrl.jsx",
        lineNumber: 81,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "texto", children: descripcion }, void 0, false, {
        fileName: "app/routes/juegos.$juegoUrl.jsx",
        lineNumber: 82,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "precio", children: [
        "Bs. ",
        precio
      ] }, void 0, true, {
        fileName: "app/routes/juegos.$juegoUrl.jsx",
        lineNumber: 83,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "form",
        {
          onSubmit: handleSubmit,
          className: "formulario",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: "Cantidad" }, void 0, false, {
              fileName: "app/routes/juegos.$juegoUrl.jsx",
              lineNumber: 89,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "select",
              {
                onChange: (e) => setCantidad(parseInt(e.target.value)),
                id: "cantidad",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "0", children: "--------Seleccione---------" }, void 0, false, {
                    fileName: "app/routes/juegos.$juegoUrl.jsx",
                    lineNumber: 95,
                    columnNumber: 13
                  }, this),
                  Array.from({ length: 5 }, (_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: i + 1, children: i + 1 }, i, false, {
                    fileName: "app/routes/juegos.$juegoUrl.jsx",
                    lineNumber: 97,
                    columnNumber: 15
                  }, this))
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/juegos.$juegoUrl.jsx",
                lineNumber: 91,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                onClick: agregar,
                type: "submit",
                value: "Agregar al Carrito"
              },
              void 0,
              false,
              {
                fileName: "app/routes/juegos.$juegoUrl.jsx",
                lineNumber: 103,
                columnNumber: 13
              },
              this
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/juegos.$juegoUrl.jsx",
          lineNumber: 85,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/juegos.$juegoUrl.jsx",
      lineNumber: 80,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/juegos.$juegoUrl.jsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
}
var juegos_juegoUrl_default = Juego;
export {
  juegos_juegoUrl_default as default,
  meta
};
//# sourceMappingURL=/build/routes/juegos.$juegoUrl-O3W5ALFF.js.map
