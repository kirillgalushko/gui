import { defineComponent as u, ref as _, inject as s, onMounted as p, openBlock as b, createElementBlock as v, normalizeClass as h, unref as c, renderSlot as k } from "vue";
import { _ as y } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Tab-CyK91GIk.css';const x = ["data-name"], C = /* @__PURE__ */ u({
  __name: "Tab",
  props: {
    name: {}
  },
  setup(r) {
    const d = r, e = _(), l = s("tabs"), f = s("stretched"), { registerTab: t, selectTab: a, selectedTab: i } = l || {}, o = () => {
      e.value && (a == null || a(e.value));
    }, m = (n) => {
      n.key === "Enter" && o();
    };
    return p(() => {
      e.value && (t == null || t(e.value));
    }), (n, w) => (b(), v("div", {
      ref_key: "tabRef",
      ref: e,
      tabindex: "0",
      onKeydown: m,
      onClick: o,
      "data-name": d.name,
      class: h(["tab", { stretched: c(f), selected: c(i) === e.value }])
    }, [
      k(n.$slots, "default", {}, void 0, !0)
    ], 42, x));
  }
}), K = /* @__PURE__ */ y(C, [["__scopeId", "data-v-26ff5ec9"]]);
export {
  K as default
};
