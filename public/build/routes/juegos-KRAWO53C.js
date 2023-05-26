import {
  juegos_default
} from "/build/_shared/chunk-NG6VF4ZL.js";
import {
  Outlet,
  useOutletContext
} from "/build/_shared/chunk-YQGXTTW6.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-EETRBLDB.js";

// app/routes/juegos.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function links() {
  return [
    {
      rel: "stylesheet",
      href: juegos_default
    }
  ];
}
function Tienda() {
  const data = useOutletContext();
  console.log(data);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Outlet,
    {
      context: useOutletContext()
    },
    void 0,
    false,
    {
      fileName: "app/routes/juegos.jsx",
      lineNumber: 27,
      columnNumber: 9
    },
    this
  ) }, void 0, false, {
    fileName: "app/routes/juegos.jsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
var juegos_default2 = Tienda;
export {
  juegos_default2 as default,
  links
};
//# sourceMappingURL=/build/routes/juegos-KRAWO53C.js.map
