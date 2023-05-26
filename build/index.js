var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 45,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 88,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react5 = require("react"), import_react6 = require("@remix-run/react");

// app/styles/index.css
var styles_default = "/build/_assets/index-USABZXNT.css";

// app/components/header.jsx
var import_react4 = require("@remix-run/react");

// public/img/PIXEL.svg
var PIXEL_default = "/build/_assets/PIXEL-AQP7TRVS.svg";

// app/components/navegacion.jsx
var import_react2 = require("react"), import_react3 = require("@remix-run/react");

// public/img/carrito.png
var carrito_default = "/build/_assets/carrito-2445OMQO.png";

// app/components/navegacion.jsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Navegacion() {
  let location = (0, import_react3.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "navegacion", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react3.Link,
      {
        to: "/",
        className: location.pathname === "/" ? "active" : "",
        children: "Inicio"
      },
      void 0,
      !1,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 10,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react3.Link,
      {
        to: "/nosotros",
        children: "Nosotros"
      },
      void 0,
      !1,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 15,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react3.Link,
      {
        to: "/juegos",
        className: location.pathname === "/juegos" ? "active" : "",
        children: "Tienda"
      },
      void 0,
      !1,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 20,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react3.Link,
      {
        to: "/blog",
        className: location.pathname === "/blog" ? "active" : "",
        children: "Blog"
      },
      void 0,
      !1,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 25,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react3.Link,
      {
        to: "carrito",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: carrito_default, alt: "carrito" }, void 0, !1, {
          fileName: "app/components/navegacion.jsx",
          lineNumber: 33,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 30,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/navegacion.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
var navegacion_default = Navegacion;

// app/components/header.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "contenedor barra", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      import_react4.Link,
      {
        to: "/",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: PIXEL_default, alt: "imagen logo", className: "logo" }, void 0, !1, {
          fileName: "app/components/header.jsx",
          lineNumber: 14,
          columnNumber: 21
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/header.jsx",
        lineNumber: 11,
        columnNumber: 17
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 10,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(navegacion_default, {}, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 19,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/header.jsx",
    lineNumber: 9,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/header.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
var header_default = Header;

// app/components/footer.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("footer", { className: "footer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "contenedor contenido", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(navegacion_default, {}, void 0, !1, {
      fileName: "app/components/footer.jsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "copyrigth", children: [
      "Todos los Derechos Reservados-Bismar",
      new Date().getFullYear(),
      " "
    ] }, void 0, !0, {
      fileName: "app/components/footer.jsx",
      lineNumber: 9,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/footer.jsx",
    lineNumber: 6,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/footer.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var footer_default = Footer;

// app/root.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
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
  let carritoLs = typeof window < "u" ? JSON.parse(localStorage.getItem("carrito")) ?? [] : null, [carrito, setCarrito] = (0, import_react5.useState)(carritoLs);
  return (0, import_react5.useEffect)(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    import_react6.Outlet,
    {
      context: {
        agregarCarrito: (juego) => {
          if (carrito.some((juegoState) => juegoState.id === juego.id)) {
            let carritoActualizado = carrito.map((juegoState) => (juegoState.id === juego.id && (juegoState.cantidad = juego.cantidad), juegoState));
            setCarrito(carritoActualizado);
          } else
            setCarrito([...carrito, juego]);
        },
        carrito,
        actualizarCantidad: (juego) => {
          let carritoActualizado = carrito.map((juegoState) => (juegoState.id === juego.id && (juegoState.cantidad = juego.cantidad), juegoState));
          setCarrito(carritoActualizado);
        },
        eliminarJuego: (id) => {
          let carritoActualizado = carrito.filter((juegoState) => juegoState.id !== id);
          setCarrito(carritoActualizado);
        }
      }
    },
    void 0,
    !1,
    {
      fileName: "app/root.jsx",
      lineNumber: 108,
      columnNumber: 11
    },
    this
  ) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 107,
    columnNumber: 7
  }, this);
}
function Document({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("html", { lang: "es", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 124,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 125,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 123,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(header_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 128,
        columnNumber: 15
      }, this),
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(footer_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 130,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 131,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 132,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 127,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 122,
    columnNumber: 7
  }, this);
}
function CatchBoundary() {
  let error = (0, import_react6.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "error", children: [
      error.status,
      " ",
      error.statusText
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 144,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Link, { className: "error-enlace", to: "/", children: "Tal vez quieras volvera a la p\xE1gina principal" }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 145,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 143,
    columnNumber: 7
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "error", children: [
      error.status,
      " ",
      error.statusText
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 153,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Link, { className: "error-enlace", to: "/", children: "Tal vez quieras volvera a la p\xE1gina principal" }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 154,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 152,
    columnNumber: 7
  }, this);
}

// app/routes/juegos.$juegoUrl.jsx
var juegos_juegoUrl_exports = {};
__export(juegos_juegoUrl_exports, {
  default: () => juegos_juegoUrl_default,
  loader: () => loader,
  meta: () => meta2
});
var import_react7 = require("react"), import_react8 = require("@remix-run/react");

// app/models/juegos.server.js
async function getJuegos() {
  return await (await fetch(`${process.env.API_URL}/video-juegos?populate=imagen`)).json();
}
async function getJuego(url) {
  return await (await fetch(
    `${process.env.API_URL}/video-juegos?filters[url]=${url}&populate=imagen`
  )).json();
}

// app/routes/juegos.$juegoUrl.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
async function loader({ request, params }) {
  let { juegoUrl } = params, juego = await getJuego(juegoUrl);
  if (juego.data.length === 0)
    throw new Response("", {
      status: 404,
      statusText: "Juego no encontrado"
    });
  return juego;
}
function meta2({ data }) {
  return data ? [
    {
      title: `Pixel - ${data.data[0].attributes.nombre}`
    }
  ] : {
    title: "Juego no Encontrado"
  };
}
function Juego() {
  let { agregarCarrito } = (0, import_react8.useOutletContext)(), juego = (0, import_react8.useLoaderData)(), { nombre, descripcion, imagen, precio } = juego.data[0].attributes, [cantidad, setCantidad] = (0, import_react7.useState)(0), handleSubmit = (e) => {
    if (e.preventDefault(), cantidad < 1) {
      alert("Debes seleccionar una cantidad");
      return;
    }
    let juegoSeleccionado = {
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
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "contenedor juego", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: imagen.data.attributes.url, alt: `Imagen Juego ${nombre}` }, void 0, !1, {
      fileName: "app/routes/juegos.$juegoUrl.jsx",
      lineNumber: 78,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "nombre-juego", children: nombre }, void 0, !1, {
        fileName: "app/routes/juegos.$juegoUrl.jsx",
        lineNumber: 81,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "texto", children: descripcion }, void 0, !1, {
        fileName: "app/routes/juegos.$juegoUrl.jsx",
        lineNumber: 82,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "precio", children: [
        "Bs. ",
        precio
      ] }, void 0, !0, {
        fileName: "app/routes/juegos.$juegoUrl.jsx",
        lineNumber: 83,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "form",
        {
          onSubmit: handleSubmit,
          className: "formulario",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { children: "Cantidad" }, void 0, !1, {
              fileName: "app/routes/juegos.$juegoUrl.jsx",
              lineNumber: 89,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              "select",
              {
                onChange: (e) => setCantidad(parseInt(e.target.value)),
                id: "cantidad",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "0", children: "--------Seleccione---------" }, void 0, !1, {
                    fileName: "app/routes/juegos.$juegoUrl.jsx",
                    lineNumber: 95,
                    columnNumber: 13
                  }, this),
                  Array.from({ length: 5 }, (_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: i + 1, children: i + 1 }, i, !1, {
                    fileName: "app/routes/juegos.$juegoUrl.jsx",
                    lineNumber: 97,
                    columnNumber: 15
                  }, this))
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/juegos.$juegoUrl.jsx",
                lineNumber: 91,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              "input",
              {
                onClick: agregar,
                type: "submit",
                value: "Agregar al Carrito"
              },
              void 0,
              !1,
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
        !0,
        {
          fileName: "app/routes/juegos.$juegoUrl.jsx",
          lineNumber: 85,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/juegos.$juegoUrl.jsx",
      lineNumber: 80,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/juegos.$juegoUrl.jsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
}
var juegos_juegoUrl_default = Juego;

// app/routes/posts.$postUrl.jsx
var posts_postUrl_exports = {};
__export(posts_postUrl_exports, {
  default: () => posts_postUrl_default,
  links: () => links2,
  loader: () => loader2,
  meta: () => meta3
});
var import_react9 = require("@remix-run/react");

// app/models/posts.server.js
async function getPosts() {
  return await (await fetch(
    `${process.env.API_URL}/posts?populate=imagen`
  )).json();
}
async function getPost(url) {
  return await (await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`
  )).json();
}

// app/styles/blog.css
var blog_default = "/build/_assets/blog-IRUFJJRZ.css";

// app/util/helpers.js
var formatearFecha = (fecha) => {
  let fechaNueva = new Date(fecha), opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit"
  };
  return fechaNueva.toLocaleDateString("es-ES", opciones);
};

// app/routes/posts.$postUrl.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
async function loader2({ request, params }) {
  let { postUrl } = params, post = await getPost(postUrl);
  if (post.data.length === 0)
    throw new Response("", {
      status: 404,
      statusText: "Blog no encontrado"
    });
  return post;
}
function meta3({ data }) {
  return data ? [
    {
      title: `Pixel - ${data.data[0].attributes.titulo}`
    }
  ] : {
    title: "Blog no Encontrado"
  };
}
function links2() {
  return [
    {
      rel: "stylesheet",
      href: blog_default
    }
  ];
}
function Post() {
  var _a, _b;
  let post = (0, import_react9.useLoaderData)(), { titulo, contenido, imagen, publishedAt } = post == null ? void 0 : post.data[0].attributes;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { className: "contenedor post mt-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: (_b = (_a = imagen == null ? void 0 : imagen.data) == null ? void 0 : _a.attributes) == null ? void 0 : _b.url, alt: `Imagen Juego ${titulo}` }, void 0, !1, {
      fileName: "app/routes/posts.$postUrl.jsx",
      lineNumber: 55,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "titulo", children: titulo }, void 0, !1, {
        fileName: "app/routes/posts.$postUrl.jsx",
        lineNumber: 58,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "fecha", children: formatearFecha(publishedAt) }, void 0, !1, {
        fileName: "app/routes/posts.$postUrl.jsx",
        lineNumber: 59,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "texto", children: contenido }, void 0, !1, {
        fileName: "app/routes/posts.$postUrl.jsx",
        lineNumber: 60,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/posts.$postUrl.jsx",
      lineNumber: 57,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/posts.$postUrl.jsx",
    lineNumber: 54,
    columnNumber: 7
  }, this);
}
var posts_postUrl_default = Post;

// app/routes/juegos._index.jsx
var juegos_index_exports = {};
__export(juegos_index_exports, {
  default: () => juegos_index_default,
  loader: () => loader3,
  meta: () => meta4
});
var import_react11 = require("@remix-run/react");

// app/components/juego.jsx
var import_react10 = require("@remix-run/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Juego2({ juego }) {
  let { nombre, descripcion, imagen, precio, url } = juego;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "juego", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: imagen.data.attributes.url, alt: `Imagen Juego ${nombre}` }, void 0, !1, {
      fileName: "app/components/juego.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { children: nombre }, void 0, !1, {
        fileName: "app/components/juego.jsx",
        lineNumber: 13,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "descripcion", children: descripcion }, void 0, !1, {
        fileName: "app/components/juego.jsx",
        lineNumber: 14,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "precio", children: [
        "Bs. ",
        precio
      ] }, void 0, !0, {
        fileName: "app/components/juego.jsx",
        lineNumber: 15,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Link, { className: "enlace", to: `/juegos/${url}`, children: "Ver Producto" }, void 0, !1, {
        fileName: "app/components/juego.jsx",
        lineNumber: 17,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/juego.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/juego.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
var juego_default = Juego2;

// app/components/listado-juegos.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function ListadoJuegos({ juegos }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { className: "heading", children: "Nuestros Productos" }, void 0, !1, {
      fileName: "app/components/listado-juegos.jsx",
      lineNumber: 6,
      columnNumber: 9
    }, this),
    (juegos == null ? void 0 : juegos.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "juegos-grid", children: juegos.map((juego) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      juego_default,
      {
        juego: juego == null ? void 0 : juego.attributes
      },
      juego == null ? void 0 : juego.id,
      !1,
      {
        fileName: "app/components/listado-juegos.jsx",
        lineNumber: 11,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/listado-juegos.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/listado-juegos.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var listado_juegos_default = ListadoJuegos;

// app/routes/juegos._index.jsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function meta4() {
  return [
    {
      title: "Pixels - Tienda de Videojuegos"
    }
  ];
}
async function loader3() {
  return (await getJuegos()).data;
}
function Tienda() {
  let juegos = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    listado_juegos_default,
    {
      juegos
    },
    void 0,
    !1,
    {
      fileName: "app/routes/juegos._index.jsx",
      lineNumber: 30,
      columnNumber: 9
    },
    this
  );
}
var juegos_index_default = Tienda;

// app/routes/nosotros.jsx
var nosotros_exports = {};
__export(nosotros_exports, {
  default: () => nosotros_default3,
  links: () => links3,
  meta: () => meta5
});

// public/img/nosotros.jpg
var nosotros_default = "/build/_assets/nosotros-A2THMHNN.jpg";

// app/styles/nosotros.css
var nosotros_default2 = "/build/_assets/nosotros-NEKAOWKX.css";

// app/routes/nosotros.jsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function meta5() {
  return [{
    title: "Pixel-Nosotros",
    description: "Venta de videojuegos"
  }];
}
function links3() {
  return [
    {
      rel: "stylesheet",
      href: nosotros_default2
    },
    {
      rel: "preload",
      href: nosotros_default,
      as: "image"
    }
  ];
}
function Nosotros() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("main", { className: "contenedor nosotros", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { className: "heading", children: "Nosotros" }, void 0, !1, {
      fileName: "app/routes/nosotros.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { src: nosotros_default, alt: "imagen sobre nosotros" }, void 0, !1, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur enim nemo itaque iure porro deleniti vitae dolore, mollitia aspernatur fugit odit eum, voluptas amet. Impedit qui et obcaecati totam est?" }, void 0, !1, {
          fileName: "app/routes/nosotros.jsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In eum voluptas eligendi nam veritatis inventore quis! Dolore, voluptate? Adipisci quasi neque, ipsam dicta quas illo itaque hic voluptas quidem voluptatum?" }, void 0, !1, {
          fileName: "app/routes/nosotros.jsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/nosotros.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/nosotros.jsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}
var nosotros_default3 = Nosotros;

// app/routes/carrito.jsx
var carrito_exports = {};
__export(carrito_exports, {
  default: () => carrito_default3,
  links: () => links4,
  meta: () => meta6
});
var import_react12 = require("react"), import_react13 = require("@remix-run/react"), import_remix_utils = require("remix-utils");

// app/styles/carrito.css
var carrito_default2 = "/build/_assets/carrito-2XGBPWFA.css";

// app/routes/carrito.jsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function meta6() {
  return [{
    title: "Pixel-Pedidos"
  }];
}
function links4() {
  return [
    {
      rel: "stylesheet",
      href: carrito_default2
    }
  ];
}
function Carrito() {
  let [total, setTotal] = (0, import_react12.useState)(0), { carrito, actualizarCantidad, eliminarJuego } = (0, import_react13.useOutletContext)();
  return (0, import_react12.useEffect)(() => {
    let calculoTotal = carrito.reduce((total2, producto) => total2 + producto.cantidad * producto.precio, 0);
    setTotal(calculoTotal);
  }, [carrito]), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_remix_utils.ClientOnly, { fallback: "cargando..", children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("main", { className: "contendor", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { className: "heading", children: "Carrito de Compras" }, void 0, !1, {
      fileName: "app/routes/carrito.jsx",
      lineNumber: 42,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "contenido-carrito", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "carrito", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { children: "Articulos" }, void 0, !1, {
        fileName: "app/routes/carrito.jsx",
        lineNumber: 46,
        columnNumber: 19
      }, this),
      (carrito == null ? void 0 : carrito.length) === 0 ? "Carrito Vacio" : carrito == null ? void 0 : carrito.map((producto) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "producto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("img", { src: producto.imagen, alt: `Imagen Producto ${producto.nombre}` }, void 0, !1, {
          fileName: "app/routes/carrito.jsx",
          lineNumber: 53,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/carrito.jsx",
          lineNumber: 52,
          columnNumber: 27
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "nombre", children: producto.nombre }, void 0, !1, {
            fileName: "app/routes/carrito.jsx",
            lineNumber: 57,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "precio", children: [
            "Bs. ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { children: producto.precio }, void 0, !1, {
              fileName: "app/routes/carrito.jsx",
              lineNumber: 60,
              columnNumber: 55
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/carrito.jsx",
            lineNumber: 60,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "precio", children: [
            "Cantidad:",
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "select",
              {
                value: producto.cantidad,
                className: "select",
                onChange: (e) => actualizarCantidad({
                  cantidad: +e.target.value,
                  id: producto.id
                }),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("option", { value: "0", children: "--------Seleccione---------" }, void 0, !1, {
                    fileName: "app/routes/carrito.jsx",
                    lineNumber: 71,
                    columnNumber: 31
                  }, this),
                  Array.from({ length: 5 }, (_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("option", { value: i + 1, children: i + 1 }, i, !1, {
                    fileName: "app/routes/carrito.jsx",
                    lineNumber: 73,
                    columnNumber: 35
                  }, this))
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 63,
                columnNumber: 31
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/carrito.jsx",
            lineNumber: 62,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "subtotal", children: [
            "SubTotal: Bs. ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { children: producto.cantidad * producto.precio }, void 0, !1, {
              fileName: "app/routes/carrito.jsx",
              lineNumber: 80,
              columnNumber: 67
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/carrito.jsx",
            lineNumber: 80,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/carrito.jsx",
          lineNumber: 56,
          columnNumber: 27
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          "button",
          {
            type: "button",
            className: "boton-eliminar",
            onClick: () => eliminarJuego(producto.id),
            children: "Eliminar"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/carrito.jsx",
            lineNumber: 83,
            columnNumber: 27
          },
          this
        )
      ] }, producto.id, !0, {
        fileName: "app/routes/carrito.jsx",
        lineNumber: 51,
        columnNumber: 23
      }, this))
    ] }, void 0, !0, {
      fileName: "app/routes/carrito.jsx",
      lineNumber: 45,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/carrito.jsx",
      lineNumber: 44,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("aside", { className: "resumen", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h3", { children: "Resumen de la Compra" }, void 0, !1, {
        fileName: "app/routes/carrito.jsx",
        lineNumber: 96,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: [
        "Total: Bs.",
        total
      ] }, void 0, !0, {
        fileName: "app/routes/carrito.jsx",
        lineNumber: 97,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/carrito.jsx",
      lineNumber: 95,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/carrito.jsx",
    lineNumber: 41,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/carrito.jsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}
var carrito_default3 = Carrito;

// app/routes/juegos.jsx
var juegos_exports = {};
__export(juegos_exports, {
  default: () => juegos_default2,
  links: () => links5
});
var import_react14 = require("@remix-run/react");

// app/styles/juegos.css
var juegos_default = "/build/_assets/juegos-XBILU37G.css";

// app/routes/juegos.jsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function links5() {
  return [
    {
      rel: "stylesheet",
      href: juegos_default
    }
  ];
}
function Tienda2() {
  let data = (0, import_react14.useOutletContext)();
  return console.log(data), /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    import_react14.Outlet,
    {
      context: (0, import_react14.useOutletContext)()
    },
    void 0,
    !1,
    {
      fileName: "app/routes/juegos.jsx",
      lineNumber: 27,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/juegos.jsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
var juegos_default2 = Tienda2;

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => index_default,
  links: () => links6,
  loader: () => loader4,
  meta: () => meta7
});

// app/models/noticia.server.js
async function getNoticia() {
  return await (await fetch(`${process.env.API_URL}/noticia?populate=imagen`)).json();
}

// app/routes/_index.jsx
var import_react16 = require("@remix-run/react");

// app/components/post.jsx
var import_react15 = require("@remix-run/react");
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function Post2({ post }) {
  let { contenido, imagen, titulo, url, publishedAt } = post;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("article", { className: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("img", { src: imagen.data.attributes.formats.small.url, alt: `Imagen Post ${titulo}` }, void 0, !1, {
      fileName: "app/components/post.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h3", { children: titulo }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 12,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "fecha", children: formatearFecha(publishedAt) }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 13,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "resumen texto", children: contenido }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 14,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react15.Link, { className: "enlace", to: `/posts/${url}`, children: "Leer Entrada" }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 15,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/post.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/post.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
var post_default = Post2;

// app/components/listado-post.jsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function ListadoPost({ posts }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { className: "heading", children: "Blog" }, void 0, !1, {
      fileName: "app/components/listado-post.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "blog", children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      post_default,
      {
        post: post == null ? void 0 : post.attributes
      },
      post == null ? void 0 : post.id,
      !1,
      {
        fileName: "app/components/listado-post.jsx",
        lineNumber: 10,
        columnNumber: 17
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/listado-post.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/listado-post.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var listado_post_default = ListadoPost;

// app/styles/noticia.css
var noticia_default = "/build/_assets/noticia-SK2QA7TQ.css";

// app/components/noticia.jsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function Noticia({ noticia }) {
  let { contenido, imagen, titulo } = noticia;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("section", { className: "noticia", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("style", { jsx: "true", children: ` .noticia{
                background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1)), url(${imagen.data.attributes.url});

                box-shadow: 0 0 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.2), 0 0 40px rgba(0, 0, 0, 0.1);
                width:80%;
                
                transform: perspective(800px) rotateX(10deg);
                margin-top: 10rem;   
                background-size: cover;
                background-position: center center; 
                }

                @media (min-width: 768px) {
                    .noticia {
                        margin-left: 20rem;
                    }
                }

               
                
            ` }, void 0, !1, {
      fileName: "app/components/noticia.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "contenedor noticia-grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { children: titulo }, void 0, !1, {
        fileName: "app/components/noticia.jsx",
        lineNumber: 34,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "texto", children: contenido }, void 0, !1, {
        fileName: "app/components/noticia.jsx",
        lineNumber: 35,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/noticia.jsx",
      lineNumber: 33,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/noticia.jsx",
      lineNumber: 32,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/noticia.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var noticia_default2 = Noticia;

// app/routes/_index.jsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function meta7() {
  return [{
    title: "Pixel-Nosotros",
    description: "Venta de videojuegos"
  }];
}
function links6() {
  return [
    {
      rel: "stylesheet",
      href: juegos_default
    },
    {
      rel: "stylesheet",
      href: blog_default
    },
    {
      rel: "stylesheet",
      href: noticia_default
    }
  ];
}
async function loader4() {
  let [juegos, posts, noticia] = await Promise.all([
    getJuegos(),
    getPosts(),
    getNoticia()
  ]);
  return {
    juegos: juegos.data,
    posts: posts.data,
    noticia: noticia.data
  };
}
function Index() {
  let { juegos, posts, noticia } = (0, import_react16.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      listado_juegos_default,
      {
        juegos
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.jsx",
        lineNumber: 64,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      noticia_default2,
      {
        noticia: noticia.attributes
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.jsx",
        lineNumber: 70,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("section", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      listado_post_default,
      {
        posts
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.jsx",
        lineNumber: 75,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 74,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
}
var index_default = Index;

// app/routes/blog.jsx
var blog_exports = {};
__export(blog_exports, {
  default: () => blog_default2,
  links: () => links7,
  loader: () => loader5
});
var import_react17 = require("@remix-run/react");
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function links7() {
  return [
    {
      rel: "stylesheet",
      href: blog_default
    }
  ];
}
async function loader5() {
  let posts = await getPosts();
  return posts == null ? void 0 : posts.data;
}
function Blog() {
  let posts = (0, import_react17.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
    listado_post_default,
    {
      posts
    },
    void 0,
    !1,
    {
      fileName: "app/routes/blog.jsx",
      lineNumber: 29,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/blog.jsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
var blog_default2 = Blog;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "5179d392", entry: { module: "/build/entry.client-FXELLSPL.js", imports: ["/build/_shared/chunk-YQGXTTW6.js", "/build/_shared/chunk-EETRBLDB.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-2MHXKYHM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-PLR7UV4F.js", imports: ["/build/_shared/chunk-QAYJXLKF.js", "/build/_shared/chunk-QGMDUKCB.js", "/build/_shared/chunk-O4IMRYQM.js", "/build/_shared/chunk-2D2MTPW4.js", "/build/_shared/chunk-Y62BCNJP.js", "/build/_shared/chunk-2TY355ML.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog": { id: "routes/blog", parentId: "root", path: "blog", index: void 0, caseSensitive: void 0, module: "/build/routes/blog-HLNIEELN.js", imports: ["/build/_shared/chunk-QAYJXLKF.js", "/build/_shared/chunk-2D2MTPW4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/carrito": { id: "routes/carrito", parentId: "root", path: "carrito", index: void 0, caseSensitive: void 0, module: "/build/routes/carrito-AYH2QKVK.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/juegos": { id: "routes/juegos", parentId: "root", path: "juegos", index: void 0, caseSensitive: void 0, module: "/build/routes/juegos-NNVQEVZ2.js", imports: ["/build/_shared/chunk-2TY355ML.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/juegos.$juegoUrl": { id: "routes/juegos.$juegoUrl", parentId: "routes/juegos", path: ":juegoUrl", index: void 0, caseSensitive: void 0, module: "/build/routes/juegos.$juegoUrl-O3W5ALFF.js", imports: ["/build/_shared/chunk-QGMDUKCB.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/juegos._index": { id: "routes/juegos._index", parentId: "routes/juegos", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/juegos._index-LCOQASSA.js", imports: ["/build/_shared/chunk-Y62BCNJP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/nosotros": { id: "routes/nosotros", parentId: "root", path: "nosotros", index: void 0, caseSensitive: void 0, module: "/build/routes/nosotros-2GE7EBWI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts.$postUrl": { id: "routes/posts.$postUrl", parentId: "root", path: "posts/:postUrl", index: void 0, caseSensitive: void 0, module: "/build/routes/posts.$postUrl-TNQ4CYD3.js", imports: ["/build/_shared/chunk-O4IMRYQM.js", "/build/_shared/chunk-2D2MTPW4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-5179D392.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/juegos.$juegoUrl": {
    id: "routes/juegos.$juegoUrl",
    parentId: "routes/juegos",
    path: ":juegoUrl",
    index: void 0,
    caseSensitive: void 0,
    module: juegos_juegoUrl_exports
  },
  "routes/posts.$postUrl": {
    id: "routes/posts.$postUrl",
    parentId: "root",
    path: "posts/:postUrl",
    index: void 0,
    caseSensitive: void 0,
    module: posts_postUrl_exports
  },
  "routes/juegos._index": {
    id: "routes/juegos._index",
    parentId: "routes/juegos",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: juegos_index_exports
  },
  "routes/nosotros": {
    id: "routes/nosotros",
    parentId: "root",
    path: "nosotros",
    index: void 0,
    caseSensitive: void 0,
    module: nosotros_exports
  },
  "routes/carrito": {
    id: "routes/carrito",
    parentId: "root",
    path: "carrito",
    index: void 0,
    caseSensitive: void 0,
    module: carrito_exports
  },
  "routes/juegos": {
    id: "routes/juegos",
    parentId: "root",
    path: "juegos",
    index: void 0,
    caseSensitive: void 0,
    module: juegos_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
