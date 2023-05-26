import {
  listado_post_default
} from "/build/_shared/chunk-QAYJXLKF.js";
import {
  blog_default
} from "/build/_shared/chunk-2D2MTPW4.js";
import {
  useLoaderData
} from "/build/_shared/chunk-YQGXTTW6.js";
import {
  __commonJS,
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-EETRBLDB.js";

// empty-module:~/models/posts.server
var require_posts = __commonJS({
  "empty-module:~/models/posts.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/blog.jsx
var import_posts = __toESM(require_posts());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function links() {
  return [
    {
      rel: "stylesheet",
      href: blog_default
    }
  ];
}
function Blog() {
  const posts = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    listado_post_default,
    {
      posts
    },
    void 0,
    false,
    {
      fileName: "app/routes/blog.jsx",
      lineNumber: 29,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/routes/blog.jsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
var blog_default2 = Blog;
export {
  blog_default2 as default,
  links
};
//# sourceMappingURL=/build/routes/blog-HLNIEELN.js.map
