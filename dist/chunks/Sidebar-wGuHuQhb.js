import { openBlock as c, createElementBlock as m, createStaticVNode as f, defineComponent as v, ref as s, provide as r, watch as w, normalizeClass as b, normalizeStyle as g, createElementVNode as _, createVNode as x, unref as y, renderSlot as z } from "vue";
import { _ as S } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Sidebar-B3AIgjMX.css';const W = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function k(l, e) {
  return c(), m("svg", W, e[0] || (e[0] = [
    f('<path d="M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>', 6)
  ]));
}
const M = { render: k }, E = /* @__PURE__ */ v({
  __name: "Sidebar",
  props: {
    padding: { default: 16 },
    width: { default: 300 },
    maxWidth: { default: "100vw" },
    minWidth: { default: "200px" },
    compactWidth: { default: 0 }
  },
  setup(l) {
    const e = l, a = s(e.width), t = s(!1), o = s(!1), d = s(null);
    r("sidebar-width", a), r("sidebar-is-resizing", t), r("sidebar-is-compact", o);
    const p = () => {
      t.value = !0, document.addEventListener("mousemove", n), document.addEventListener("mouseup", h), document.body.style.userSelect = "none";
    }, n = (i) => {
      if (t.value && i.clientX > 0 && d.value) {
        const u = d.value.offsetLeft;
        a.value = i.clientX - u;
      }
      t.value && i.buttons !== 1 && (t.value = !1);
    }, h = () => {
      t.value = !1, document.removeEventListener("mousemove", n), document.removeEventListener("mouseup", n), document.body.style.userSelect = "";
    };
    return w(() => a.value, () => {
      a.value < e.compactWidth ? o.value = !0 : o.value = !1;
    }), (i, u) => (c(), m("div", {
      ref_key: "sidebarRef",
      ref: d,
      class: b(["sidebar"]),
      style: g({
        width: `${a.value}px`,
        padding: `${e.padding}px`,
        maxWidth: e.maxWidth,
        minWidth: e.minWidth
      })
    }, [
      _("div", {
        class: "resize-handle",
        onMousedown: p
      }, [
        x(y(M))
      ], 32),
      z(i.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), C = /* @__PURE__ */ S(E, [["__scopeId", "data-v-16eba8a0"]]);
export {
  C as default
};
