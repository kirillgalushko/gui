import { openBlock as t, createElementBlock as m, createElementVNode as a, defineComponent as C, inject as k, computed as c, ref as U, watch as B, onBeforeUnmount as z, createBlock as o, unref as r, withCtx as i, createVNode as l, createTextVNode as y, toDisplayString as _, createCommentVNode as u } from "vue";
import { i as h } from "./IconAccessibleFilled-DFPdopZN.js";
import { d as M } from "./IconCheckOutline-BoPzWPqG.js";
import { d as R } from "./IconRefreshOutline-CO32kkS9.js";
import { d as j } from "./IconXOutline-COEdos3u.js";
import A from "./ProgressBar-CdTuLZI-.js";
import F from "./Attachment-DNComFIo.js";
import { _ as $ } from "./AttachmentAction.vue_vue_type_script_setup_true_lang-WwGhQLKZ.js";
import I from "./AttachmentActions-CCg1ZGb5.js";
import L from "./AttachmentContent-lhIH5g9V.js";
import V from "./AttachmentDescription-C9kBnFOM.js";
import N from "./AttachmentMedia-DM5p76Rs.js";
import E from "./AttachmentTitle-677_mE-F.js";
import { f as O, a as D } from "./context-CiuKGLtT.js";
import { p as b } from "./index-BQgYVE5h.js";
import { _ as K } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/FileUploadItem-CjUwfNuR.css';const P = {}, S = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function T(s, e) {
  return t(), m("svg", S, e[0] || (e[0] = [
    a("path", { d: "M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9m0 5v4m0 4h.01" }, null, -1)
  ]));
}
const W = /* @__PURE__ */ h(P, [["render", T]]), H = {}, q = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function G(s, e) {
  return t(), m("svg", q, e[0] || (e[0] = [
    a("path", { d: "M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" }, null, -1),
    a("path", { d: "M12 7v5l3 3" }, null, -1)
  ]));
}
const J = /* @__PURE__ */ h(H, [["render", G]]), Q = {}, X = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function Y(s, e) {
  return t(), m("svg", X, e[0] || (e[0] = [
    a("path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }, null, -1),
    a("path", { d: "M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2" }, null, -1)
  ]));
}
const Z = /* @__PURE__ */ h(Q, [["render", Y]]), ee = {}, te = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function re(s, e) {
  return t(), m("svg", te, e[0] || (e[0] = [
    a("path", { d: "M12 3a9 9 0 1 0 9 9" }, null, -1)
  ]));
}
const oe = /* @__PURE__ */ h(ee, [["render", re]]), ie = ["src", "alt"], ne = /* @__PURE__ */ C({
  __name: "FileUploadItem",
  props: {
    disabled: { type: Boolean, default: !1 },
    error: { default: void 0 },
    file: {},
    progress: { default: void 0 },
    removable: { type: Boolean, default: !0 },
    onRetry: { type: Function, default: void 0 },
    state: { default: "idle" }
  },
  setup(s) {
    const e = s, d = k(O), f = k(
      D,
      c(() => "vertical")
    );
    if (d === void 0)
      throw new Error("FileUploadItem must be used inside FileUpload");
    const n = U(null), v = c(() => e.file.type.startsWith("image/")), x = c(() => e.error !== void 0 ? e.error : e.state === "uploading" ? e.progress === void 0 ? "Загрузка" : `Загрузка · ${Math.round(e.progress)}%` : e.state === "processing" ? "Обработка файла" : e.state === "done" ? `Загружен · ${b(e.file.size)}` : `${e.file.type || "Файл"} · ${b(e.file.size)}`), g = () => {
      n.value !== null && (URL.revokeObjectURL(n.value), n.value = null);
    };
    return B(
      () => e.file,
      (p) => {
        g(), p.type.startsWith("image/") && (n.value = URL.createObjectURL(p));
      },
      { immediate: !0 }
    ), z(g), (p, w) => (t(), o(F, {
      stretched: r(f) !== "horizontal",
      orientation: r(f) === "horizontal" ? "vertical" : "horizontal",
      size: r(d).size.value,
      state: e.error === void 0 ? e.state : "error",
      role: "listitem"
    }, {
      default: i(() => [
        l(N, {
          variant: v.value ? "image" : "icon"
        }, {
          default: i(() => [
            v.value && n.value ? (t(), m("img", {
              key: 0,
              src: n.value,
              alt: e.file.name
            }, null, 8, ie)) : e.state === "uploading" ? (t(), o(r(oe), {
              key: 1,
              class: "file-upload-item-loader"
            })) : e.state === "error" ? (t(), o(r(W), { key: 2 })) : e.state === "done" ? (t(), o(r(M), { key: 3 })) : e.state === "processing" ? (t(), o(r(Z), { key: 4 })) : (t(), o(r(J), { key: 5 }))
          ]),
          _: 1
        }, 8, ["variant"]),
        l(L, null, {
          default: i(() => [
            l(E, null, {
              default: i(() => [
                y(_(e.file.name), 1)
              ]),
              _: 1
            }),
            l(V, null, {
              default: i(() => [
                y(_(x.value), 1)
              ]),
              _: 1
            }),
            e.state === "uploading" && e.progress !== void 0 ? (t(), o(A, {
              key: 0,
              progress: e.progress,
              max: 100,
              height: "3px"
            }, null, 8, ["progress"])) : u("", !0)
          ]),
          _: 1
        }),
        e.removable || e.state === "error" && e.onRetry ? (t(), o(I, { key: 0 }, {
          default: i(() => [
            e.state === "error" && e.onRetry ? (t(), o($, {
              key: 0,
              "aria-label": "Повторить загрузку",
              disabled: e.disabled || r(d).disabled.value,
              onClick: e.onRetry
            }, {
              default: i(() => [
                l(r(R))
              ]),
              _: 1
            }, 8, ["disabled", "onClick"])) : u("", !0),
            e.removable ? (t(), o($, {
              key: 1,
              "aria-label": "Удалить файл",
              disabled: e.disabled || r(d).disabled.value,
              onClick: w[0] || (w[0] = (le) => r(d).remove(e.file))
            }, {
              default: i(() => [
                l(r(j))
              ]),
              _: 1
            }, 8, ["disabled"])) : u("", !0)
          ]),
          _: 1
        })) : u("", !0)
      ]),
      _: 1
    }, 8, ["stretched", "orientation", "size", "state"]));
  }
}), be = /* @__PURE__ */ K(ne, [["__scopeId", "data-v-2619150e"]]);
export {
  be as default
};
