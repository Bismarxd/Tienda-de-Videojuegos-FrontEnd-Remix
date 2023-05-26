import {
  listado_post_default
} from "/build/_shared/chunk-QAYJXLKF.js";
import {
  require_juegos
} from "/build/_shared/chunk-QGMDUKCB.js";
import {
  require_posts
} from "/build/_shared/chunk-O4IMRYQM.js";
import {
  blog_default
} from "/build/_shared/chunk-2D2MTPW4.js";
import {
  listado_juegos_default
} from "/build/_shared/chunk-KFDVSIK2.js";
import {
  juegos_default
} from "/build/_shared/chunk-NG6VF4ZL.js";
import {
  useLoaderData
} from "/build/_shared/chunk-YQGXTTW6.js";
import {
  __commonJS,
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-EETRBLDB.js";

// empty-module:../models/noticia.server
var require_noticia = __commonJS({
  "empty-module:../models/noticia.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/_index.jsx
var import_juegos2 = __toESM(require_juegos());
var import_posts = __toESM(require_posts());
var import_noticia = __toESM(require_noticia());

// app/styles/noticia.css
var noticia_default = "/build/_assets/noticia-SK2QA7TQ.css";

// app/components/noticia.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Noticia({ noticia }) {
  const { contenido, imagen, titulo } = noticia;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "noticia", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { jsx: "true", children: ` .noticia{
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

               
                
            ` }, void 0, false, {
      fileName: "app/components/noticia.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "contenedor noticia-grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: titulo }, void 0, false, {
        fileName: "app/components/noticia.jsx",
        lineNumber: 34,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "texto", children: contenido }, void 0, false, {
        fileName: "app/components/noticia.jsx",
        lineNumber: 35,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/noticia.jsx",
      lineNumber: 33,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/noticia.jsx",
      lineNumber: 32,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/noticia.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var noticia_default2 = Noticia;

// app/routes/_index.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function meta() {
  return [{
    title: "Pixel-Nosotros",
    description: "Venta de videojuegos"
  }];
}
function links() {
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
function Index() {
  const { juegos, posts, noticia } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      listado_juegos_default,
      {
        juegos
      },
      void 0,
      false,
      {
        fileName: "app/routes/_index.jsx",
        lineNumber: 64,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      noticia_default2,
      {
        noticia: noticia.attributes
      },
      void 0,
      false,
      {
        fileName: "app/routes/_index.jsx",
        lineNumber: 70,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      listado_post_default,
      {
        posts
      },
      void 0,
      false,
      {
        fileName: "app/routes/_index.jsx",
        lineNumber: 75,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 74,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
}
var index_default = Index;
export {
  index_default as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/_index-BCECO646.js.map
