"use strict";
(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 8832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Post)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "react-icons/md"
const md_namespaceObject = require("react-icons/md");
;// CONCATENATED MODULE: ./components/post.js




function Post({ post  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Center, {
        py: 6,
        position: "relative",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
            maxW: "500px",
            w: "full",
            bg: (0,react_.useColorModeValue)("white", "gray.900"),
            boxShadow: "lg",
            rounded: "lg",
            p: 6,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                            color: (0,react_.useColorModeValue)("gray.700", "white"),
                            fontSize: "2xl",
                            fontFamily: "body",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: `/blog/${post.slug}`,
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: post.frontmatter.title
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            color: "gray.500"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                    mt: 6,
                    direction: "row",
                    spacing: 4,
                    align: "center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "https://twitter.com/kevinadupoku",
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Avatar, {
                                src: "/images/kevin.jpeg",
                                alt: "Author"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                            direction: "column",
                            spacing: 0,
                            fontSize: "md",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                    fontWeight: 600,
                                    children: "Kevin Adu-Poku"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                    fontSize: 15,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(md_namespaceObject.MdOutlineAdminPanelSettings, {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                    color: "gray.500",
                                    children: post.frontmatter.date
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 5540:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8832);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_day__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6595);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_layouts_article__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(951);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layouts_article__WEBPACK_IMPORTED_MODULE_6__]);
_components_layouts_article__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function Blog({ posts: posts1  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_article__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Container, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {
                    as: "h3",
                    fontSize: 20,
                    mb: 4,
                    position: "relative",
                    children: "Kevin's blog"
                }),
                posts1.map((posts, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_post__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        post: posts
                    }, index)
                )
            ]
        })
    });
}
async function getStaticProps() {
    const files = fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_2___default().join("posts"));
    const posts = files.map((filename)=>{
        const slug = filename.replace(".md", "");
        const markdownWithMeta = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_2___default().join("posts", filename), "utf-8");
        const { data: frontmatter  } = gray_matter__WEBPACK_IMPORTED_MODULE_4___default()(markdownWithMeta);
        return {
            slug,
            frontmatter
        };
    });
    return {
        props: {
            posts: posts.sort(_utils_day__WEBPACK_IMPORTED_MODULE_7__/* .sortByDate */ .d)
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ sortByDate)
/* harmony export */ });
const sortByDate = (a, b)=>{
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
};


/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 2805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664,675,951], () => (__webpack_exec__(5540)));
module.exports = __webpack_exports__;

})();