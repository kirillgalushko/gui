import { openBlock as u, createElementBlock as c, createElementVNode as f, defineComponent as v, ref as o, provide as r, watch as w, normalizeClass as b, normalizeStyle as g, createVNode as _, unref as x, renderSlot as y } from "vue";
import { i as z } from "./IconAccessibleFilled-DFPdopZN.js";
import { _ as W } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Sidebar-D51jmNUj.css';const k = {}, S = {
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
function E(l, e) {
  return u(), c("svg", S, e[0] || (e[0] = [
    f("path", { d: "M8 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m6-14a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0" }, null, -1)
  ]));
}
const L = /* @__PURE__ */ z(k, [["render", E]]), R = /* @__PURE__ */ v({
  __name: "Sidebar",
  props: {
    padding: { default: 16 },
    width: { default: 300 },
    maxWidth: { default: "100vw" },
    minWidth: { default: "200px" },
    compactWidth: { default: 0 }
  },
  setup(l) {
    const e = l, i = o(e.width), t = o(!1), a = o(!1), n = o(null);
    r("sidebar-width", i), r("sidebar-is-resizing", t), r("sidebar-is-compact", a);
    const p = () => {
      t.value = !0, document.addEventListener("mousemove", d), document.addEventListener("mouseup", h), document.body.style.userSelect = "none";
    }, d = (s) => {
      if (t.value && s.clientX > 0 && n.value) {
        const m = n.value.offsetLeft;
        i.value = s.clientX - m;
      }
      t.value && s.buttons !== 1 && (t.value = !1);
    }, h = () => {
      t.value = !1, document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", d), document.body.style.userSelect = "";
    };
    return w(() => i.value, () => {
      i.value < e.compactWidth ? a.value = !0 : a.value = !1;
    }), (s, m) => (u(), c("div", {
      ref_key: "sidebarRef",
      ref: n,
      class: b(["sidebar"]),
      style: g({
        width: `${i.value}px`,
        padding: `${e.padding}px`,
        maxWidth: e.maxWidth,
        minWidth: e.minWidth
      })
    }, [
      f("div", {
        class: "resize-handle",
        onMousedown: p
      }, [
        _(x(L))
      ], 32),
      y(s.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), M = /* @__PURE__ */ W(R, [["__scopeId", "data-v-58eec74a"]]);
export {
  M as default
};
