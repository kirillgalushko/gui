import { openBlock as v, createElementBlock as f, createElementVNode as h, defineComponent as w, ref as i, provide as r, watch as b, normalizeClass as g, normalizeStyle as E, createVNode as L, unref as _, renderSlot as x } from "vue";
import { i as z } from "./IconAccessibleFilled-DFPdopZN.js";
import { _ as W } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Sidebar-BPkDogkX.css';const k = {}, y = {
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
function R(c, e) {
  return v(), f("svg", y, e[0] || (e[0] = [
    h("path", { d: "M8 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m6-14a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0" }, null, -1)
  ]));
}
const S = /* @__PURE__ */ z(k, [["render", R]]), C = /* @__PURE__ */ w({
  __name: "Sidebar",
  props: {
    padding: { default: 16 },
    width: { default: 300 },
    maxWidth: { default: "100vw" },
    minWidth: { default: "200px" },
    compactWidth: { default: 0 }
  },
  setup(c) {
    const e = c, n = i(e.width), s = i(!1), a = i(!1), d = i(null);
    r("sidebar-width", n), r("sidebar-is-resizing", s), r("sidebar-is-compact", a);
    const u = () => {
      s.value = !0, document.addEventListener("mousemove", o), document.addEventListener("mouseup", l), document.addEventListener("touchmove", o), document.addEventListener("touchend", l), document.body.classList.add("prevent-user-select");
    }, o = (t) => {
      if (s.value && d.value) {
        const m = t instanceof MouseEvent ? t.clientX : t.touches[0].clientX, p = d.value.offsetLeft;
        n.value = m - p;
      }
      s.value && t instanceof MouseEvent && t.buttons !== 1 && (s.value = !1);
    }, l = () => {
      s.value = !1, document.removeEventListener("mousemove", o), document.removeEventListener("mouseup", o), document.removeEventListener("touchmove", o), document.removeEventListener("touchend", o), document.body.classList.remove("prevent-user-select");
    };
    return b(() => n.value, () => {
      n.value < e.compactWidth ? a.value = !0 : a.value = !1;
    }), (t, m) => (v(), f("div", {
      ref_key: "sidebarRef",
      ref: d,
      class: g(["sidebar"]),
      style: E({
        width: `${n.value}px`,
        padding: `${e.padding}px`,
        maxWidth: e.maxWidth,
        minWidth: e.minWidth
      })
    }, [
      h("div", {
        class: "resize-handle",
        onMousedown: u,
        onTouchstart: u
      }, [
        L(_(S))
      ], 32),
      x(t.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), X = /* @__PURE__ */ W(C, [["__scopeId", "data-v-724b079a"]]);
export {
  X as default
};
