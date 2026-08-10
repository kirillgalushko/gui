import { openBlock as g, createElementBlock as f, createElementVNode as n, defineComponent as D, inject as w, unref as l, renderSlot as x, createVNode as o, withCtx as r, createTextVNode as s, toDisplayString as p } from "vue";
import { i as y } from "./IconAccessibleFilled-DFPdopZN.js";
import u from "./Stack-CgwImR5w.js";
import c from "./Text-Cd35JtZQ.js";
import { f as k } from "./context-CiuKGLtT.js";
import { _ as T } from "./FileUploadTrigger.vue_vue_type_script_setup_true_lang-TshnIXi8.js";
import { _ as z } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/FileUploadDropzone-T3mr_zFN.css';const F = {}, C = {
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
function U(d, i) {
  return g(), f("svg", C, i[0] || (i[0] = [
    n("path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }, null, -1),
    n("path", { d: "M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2m-5-10v6" }, null, -1),
    n("path", { d: "M9.5 13.5 12 11l2.5 2.5" }, null, -1)
  ]));
}
const E = /* @__PURE__ */ y(F, [["render", U]]), V = ["tabindex", "aria-disabled", "data-disabled", "data-dragging", "data-invalid"], B = {
  class: "file-upload-dropzone-icon",
  "aria-hidden": "true"
}, K = /* @__PURE__ */ D({
  __name: "FileUploadDropzone",
  props: {
    description: { default: "Или выберите файлы с устройства" },
    title: { default: "Перетащите файлы сюда" },
    triggerLabel: { default: "Выбрать файлы" }
  },
  setup(d) {
    const i = d, e = w(k);
    if (e === void 0)
      throw new Error("FileUploadDropzone must be used inside FileUpload");
    const m = (a) => {
      var t;
      !e.disabled.value && ((t = a.dataTransfer) != null && t.types.includes("Files")) && (a.preventDefault(), e.isDragging.value = !0);
    }, v = (a) => {
      (a.relatedTarget === null || !a.currentTarget.contains(a.relatedTarget)) && (e.isDragging.value = !1);
    }, h = (a) => {
      var t;
      e.disabled.value || (a.preventDefault(), e.isDragging.value = !1, e.addFiles(Array.from(((t = a.dataTransfer) == null ? void 0 : t.files) ?? [])));
    }, _ = (a) => {
      (a.key === "Enter" || a.key === " ") && (a.preventDefault(), e.open());
    };
    return (a, t) => (g(), f("div", {
      class: "file-upload-dropzone",
      role: "button",
      tabindex: l(e).disabled.value ? -1 : 0,
      "aria-disabled": l(e).disabled.value,
      "data-disabled": l(e).disabled.value || void 0,
      "data-dragging": l(e).isDragging.value || void 0,
      "data-invalid": l(e).invalid.value || void 0,
      onClick: t[0] || (t[0] = //@ts-ignore
      (...b) => l(e).open && l(e).open(...b)),
      onKeydown: _,
      onDragover: m,
      onDragleave: v,
      onDrop: h
    }, [
      x(a.$slots, "default", {}, () => [
        o(u, {
          direction: "column",
          "align-items": "center",
          gap: 2
        }, {
          default: r(() => [
            n("div", B, [
              o(l(E))
            ]),
            o(u, {
              direction: "column",
              "align-items": "center",
              gap: 1
            }, {
              default: r(() => [
                o(c, {
                  typography: "label-2",
                  "text-align": "center"
                }, {
                  default: r(() => [
                    s(p(i.title), 1)
                  ]),
                  _: 1
                }),
                o(c, {
                  color: "secondary",
                  "text-align": "center"
                }, {
                  default: r(() => [
                    s(p(i.description), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            o(T, {
              label: i.triggerLabel,
              size: "small"
            }, null, 8, ["label"])
          ]),
          _: 1
        })
      ], !0)
    ], 40, V));
  }
}), H = /* @__PURE__ */ z(K, [["__scopeId", "data-v-a450a911"]]);
export {
  H as default
};
