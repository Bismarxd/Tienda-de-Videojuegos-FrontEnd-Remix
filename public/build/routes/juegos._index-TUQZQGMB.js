import {
  listado_juegos_default
} from "/build/_shared/chunk-KFDVSIK2.js";
import {
  useLoaderData
} from "/build/_shared/chunk-YQGXTTW6.js";
import {
  __commonJS,
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-EETRBLDB.js";

// empty-module:~/models/juegos.server
var require_juegos = __commonJS({
  "empty-module:~/models/juegos.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/juegos._index.jsx
var import_juegos = __toESM(require_juegos());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta() {
  return [
    {
      title: "Pixels - Tienda de Videojuegos"
    }
  ];
}
function Tienda() {
  const juegos = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    listado_juegos_default,
    {
      juegos
    },
    void 0,
    false,
    {
      fileName: "app/routes/juegos._index.jsx",
      lineNumber: 30,
      columnNumber: 9
    },
    this
  );
}
var juegos_index_default = Tienda;
export {
  juegos_index_default as default,
  meta
};
//# sourceMappingURL=/build/routes/juegos._index-TUQZQGMB.js.map
