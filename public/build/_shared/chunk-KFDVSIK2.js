import {
  Link
} from "/build/_shared/chunk-YQGXTTW6.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-EETRBLDB.js";

// app/components/juego.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Juego({ juego }) {
  const { nombre, descripcion, imagen, precio, url } = juego;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "juego", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: imagen.data.attributes.url, alt: `Imagen Juego ${nombre}` }, void 0, false, {
      fileName: "app/components/juego.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: nombre }, void 0, false, {
        fileName: "app/components/juego.jsx",
        lineNumber: 14,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "descripcion", children: descripcion }, void 0, false, {
        fileName: "app/components/juego.jsx",
        lineNumber: 15,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "precio", children: [
        "Bs. ",
        precio
      ] }, void 0, true, {
        fileName: "app/components/juego.jsx",
        lineNumber: 16,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "enlace", to: `/juegos/${url}`, children: "Ver Producto" }, void 0, false, {
        fileName: "app/components/juego.jsx",
        lineNumber: 18,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/juego.jsx",
      lineNumber: 13,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/juego.jsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
var juego_default = Juego;

// app/components/listado-juegos.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function ListadoJuegos({ juegos }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "heading", children: "Nuestros Productos" }, void 0, false, {
      fileName: "app/components/listado-juegos.jsx",
      lineNumber: 6,
      columnNumber: 9
    }, this),
    (juegos == null ? void 0 : juegos.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "juegos-grid", children: juegos.map((juego) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      juego_default,
      {
        juego: juego == null ? void 0 : juego.attributes
      },
      juego == null ? void 0 : juego.id,
      false,
      {
        fileName: "app/components/listado-juegos.jsx",
        lineNumber: 11,
        columnNumber: 13
      },
      this
    )) }, void 0, false, {
      fileName: "app/components/listado-juegos.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/listado-juegos.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var listado_juegos_default = ListadoJuegos;

export {
  listado_juegos_default
};
//# sourceMappingURL=/build/_shared/chunk-KFDVSIK2.js.map
