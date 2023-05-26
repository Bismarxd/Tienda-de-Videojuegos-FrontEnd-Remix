import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useCatch,
  useLocation
} from "/build/_shared/chunk-YQGXTTW6.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-EETRBLDB.js";

// app/root.jsx
var import_react4 = __toESM(require_react());

// app/styles/index.css
var styles_default = "/build/_assets/index-USABZXNT.css";

// public/img/PIXEL.svg
var PIXEL_default = "/build/_assets/PIXEL-AQP7TRVS.svg";

// app/components/navegacion.jsx
var import_react = __toESM(require_react());

// public/img/carrito.png
var carrito_default = "/build/_assets/carrito-2445OMQO.png";

// app/components/navegacion.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Navegacion() {
  const location = useLocation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "navegacion", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Link,
      {
        to: "/",
        className: location.pathname === "/" ? "active" : "",
        children: "Inicio"
      },
      void 0,
      false,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 10,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Link,
      {
        to: "/nosotros",
        children: "Nosotros"
      },
      void 0,
      false,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 15,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Link,
      {
        to: "/juegos",
        className: location.pathname === "/juegos" ? "active" : "",
        children: "Tienda"
      },
      void 0,
      false,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 20,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Link,
      {
        to: "/blog",
        className: location.pathname === "/blog" ? "active" : "",
        children: "Blog"
      },
      void 0,
      false,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 25,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Link,
      {
        to: "carrito",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: carrito_default, alt: "carrito" }, void 0, false, {
          fileName: "app/components/navegacion.jsx",
          lineNumber: 33,
          columnNumber: 17
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 30,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/navegacion.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
var navegacion_default = Navegacion;

// app/components/header.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "contenedor barra", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      Link,
      {
        to: "/",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: PIXEL_default, alt: "imagen logo", className: "logo" }, void 0, false, {
          fileName: "app/components/header.jsx",
          lineNumber: 14,
          columnNumber: 21
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/header.jsx",
        lineNumber: 11,
        columnNumber: 17
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/header.jsx",
      lineNumber: 10,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(navegacion_default, {}, void 0, false, {
      fileName: "app/components/header.jsx",
      lineNumber: 19,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/header.jsx",
    lineNumber: 9,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/header.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
var header_default = Header;

// app/components/footer.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("footer", { className: "footer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "contenedor contenido", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(navegacion_default, {}, void 0, false, {
      fileName: "app/components/footer.jsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "copyrigth", children: [
      "Todos los Derechos Reservados-Bismar",
      new Date().getFullYear(),
      " "
    ] }, void 0, true, {
      fileName: "app/components/footer.jsx",
      lineNumber: 9,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/footer.jsx",
    lineNumber: 6,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/footer.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var footer_default = Footer;

// app/root.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function meta() {
  return [
    {
      charset: "utf-8",
      title: "Tienda Videojuegos",
      viewport: "width=device-width, initial-scale=1"
    }
  ];
}
function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
    },
    {
      rel: "stylesheet",
      href: styles_default
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Alkatra&family=Bebas+Neue&family=Delicious+Handrawn&family=Indie+Flower&family=Roboto+Slab:wght@100&display=swap"
    }
  ];
}
function App() {
  var _a;
  const carritoLs = typeof window !== "undefined" ? (_a = JSON.parse(localStorage.getItem("carrito"))) != null ? _a : [] : null;
  const [carrito, setCarrito] = (0, import_react4.useState)(carritoLs);
  (0, import_react4.useEffect)(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);
  const agregarCarrito = (juego) => {
    if (carrito.some((juegoState) => juegoState.id === juego.id)) {
      const carritoActualizado = carrito.map((juegoState) => {
        if (juegoState.id === juego.id) {
          juegoState.cantidad = juego.cantidad;
        }
        return juegoState;
      });
      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, juego]);
    }
  };
  const actualizarCantidad = (juego) => {
    const carritoActualizado = carrito.map((juegoState) => {
      if (juegoState.id === juego.id) {
        juegoState.cantidad = juego.cantidad;
      }
      return juegoState;
    });
    setCarrito(carritoActualizado);
  };
  const eliminarJuego = (id) => {
    const carritoActualizado = carrito.filter((juegoState) => juegoState.id !== id);
    setCarrito(carritoActualizado);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    Outlet,
    {
      context: {
        agregarCarrito,
        carrito,
        actualizarCantidad,
        eliminarJuego
      }
    },
    void 0,
    false,
    {
      fileName: "app/root.jsx",
      lineNumber: 108,
      columnNumber: 11
    },
    this
  ) }, void 0, false, {
    fileName: "app/root.jsx",
    lineNumber: 107,
    columnNumber: 7
  }, this);
}
function Document({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: "es", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 124,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 125,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 123,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(header_default, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 128,
        columnNumber: 15
      }, this),
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(footer_default, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 130,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 131,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 132,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 127,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 122,
    columnNumber: 7
  }, this);
}
function CatchBoundary() {
  const error = useCatch();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Document, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "error", children: [
      error.status,
      " ",
      error.statusText
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 144,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { className: "error-enlace", to: "/", children: "Tal vez quieras volvera a la p\xE1gina principal" }, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 145,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 143,
    columnNumber: 7
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Document, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "error", children: [
      error.status,
      " ",
      error.statusText
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 153,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { className: "error-enlace", to: "/", children: "Tal vez quieras volvera a la p\xE1gina principal" }, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 154,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 152,
    columnNumber: 7
  }, this);
}
export {
  CatchBoundary,
  ErrorBoundary,
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-QRTE6MS4.js.map
