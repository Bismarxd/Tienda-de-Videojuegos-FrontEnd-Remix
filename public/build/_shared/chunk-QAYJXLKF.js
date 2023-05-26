import {
  formatearFecha
} from "/build/_shared/chunk-2D2MTPW4.js";
import {
  Link
} from "/build/_shared/chunk-YQGXTTW6.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-EETRBLDB.js";

// app/components/post.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Post({ post }) {
  const { contenido, imagen, titulo, url, publishedAt } = post;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: imagen.data.attributes.formats.small.url, alt: `Imagen Post ${titulo}` }, void 0, false, {
      fileName: "app/components/post.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: titulo }, void 0, false, {
        fileName: "app/components/post.jsx",
        lineNumber: 12,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "fecha", children: formatearFecha(publishedAt) }, void 0, false, {
        fileName: "app/components/post.jsx",
        lineNumber: 13,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "resumen texto", children: contenido }, void 0, false, {
        fileName: "app/components/post.jsx",
        lineNumber: 14,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "enlace", to: `/posts/${url}`, children: "Leer Entrada" }, void 0, false, {
        fileName: "app/components/post.jsx",
        lineNumber: 15,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/post.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/post.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
var post_default = Post;

// app/components/listado-post.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function ListadoPost({ posts }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "heading", children: "Blog" }, void 0, false, {
      fileName: "app/components/listado-post.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "blog", children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      post_default,
      {
        post: post == null ? void 0 : post.attributes
      },
      post == null ? void 0 : post.id,
      false,
      {
        fileName: "app/components/listado-post.jsx",
        lineNumber: 10,
        columnNumber: 17
      },
      this
    )) }, void 0, false, {
      fileName: "app/components/listado-post.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/listado-post.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var listado_post_default = ListadoPost;

export {
  listado_post_default
};
//# sourceMappingURL=/build/_shared/chunk-QAYJXLKF.js.map
