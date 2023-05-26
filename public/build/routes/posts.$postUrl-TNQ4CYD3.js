import {
  require_posts
} from "/build/_shared/chunk-O4IMRYQM.js";
import {
  blog_default,
  formatearFecha
} from "/build/_shared/chunk-2D2MTPW4.js";
import {
  useLoaderData
} from "/build/_shared/chunk-YQGXTTW6.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-EETRBLDB.js";

// app/routes/posts.$postUrl.jsx
var import_posts = __toESM(require_posts());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta({ data }) {
  if (!data) {
    return {
      title: "Blog no Encontrado"
    };
  }
  return [
    {
      title: `Pixel - ${data.data[0].attributes.titulo}`
    }
  ];
}
function links() {
  return [
    {
      rel: "stylesheet",
      href: blog_default
    }
  ];
}
function Post() {
  var _a, _b;
  const post = useLoaderData();
  const { titulo, contenido, imagen, publishedAt } = post == null ? void 0 : post.data[0].attributes;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "contenedor post mt-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: (_b = (_a = imagen == null ? void 0 : imagen.data) == null ? void 0 : _a.attributes) == null ? void 0 : _b.url, alt: `Imagen Juego ${titulo}` }, void 0, false, {
      fileName: "app/routes/posts.$postUrl.jsx",
      lineNumber: 55,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "titulo", children: titulo }, void 0, false, {
        fileName: "app/routes/posts.$postUrl.jsx",
        lineNumber: 58,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "fecha", children: formatearFecha(publishedAt) }, void 0, false, {
        fileName: "app/routes/posts.$postUrl.jsx",
        lineNumber: 59,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "texto", children: contenido }, void 0, false, {
        fileName: "app/routes/posts.$postUrl.jsx",
        lineNumber: 60,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/posts.$postUrl.jsx",
      lineNumber: 57,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/posts.$postUrl.jsx",
    lineNumber: 54,
    columnNumber: 7
  }, this);
}
var posts_postUrl_default = Post;
export {
  posts_postUrl_default as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/posts.$postUrl-TNQ4CYD3.js.map
