import { defineComponent as p, ref as s, provide as c, watchEffect as u, openBlock as m, createElementBlock as h, normalizeClass as d, createElementVNode as b, normalizeStyle as v, renderSlot as _ } from "vue";
import { u as y, a as x } from "./index-UAlP5lxx.js";
import { _ as C } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Tabs-nbYYEWdu.css';const E = /* @__PURE__ */ p({
  __name: "Tabs",
  props: {
    value: {},
    onChange: { type: Function },
    stretched: { type: Boolean }
  },
  setup(i) {
    const a = s(!0), t = i, f = (e) => {
      a.value = !1, t.onChange(e);
    }, o = y(t.value, f);
    c("tabs", o), c("stretched", t.stretched);
    const n = s(), r = s({
      width: "0px",
      transform: "translateX(0px)"
    }), l = () => {
      const e = o.selectedTab.value;
      e && (r.value = {
        width: `${e.offsetWidth}px`,
        transform: `translateX(${e.offsetLeft}px)`
      });
    };
    return u(() => {
      l();
    }), x(n, l), (e, S) => (m(), h("div", {
      ref_key: "tabsElementRef",
      ref: n,
      class: d(["tabs", { stretched: t.stretched }])
    }, [
      b("div", {
        class: d(["slider", { animated: !a.value }]),
        style: v(r.value)
      }, null, 6),
      _(e.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), w = /* @__PURE__ */ C(E, [["__scopeId", "data-v-b1ce0e6a"]]);
export {
  w as default
};
