import { defineComponent as p, ref as s, provide as c, watchEffect as u, openBlock as m, createElementBlock as h, normalizeClass as d, createElementVNode as v, normalizeStyle as b, renderSlot as _ } from "vue";
import { u as y, a as x } from "./index-BZ0moHHL.js";
import { _ as C } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Tabs-DzLR84x9.css';const E = /* @__PURE__ */ p({
  __name: "Tabs",
  props: {
    value: {},
    onChange: { type: Function },
    stretched: { type: Boolean }
  },
  setup(f) {
    const a = s(!0), t = f, i = (e) => {
      a.value = !1, t.onChange(e);
    }, o = y(t.value, i);
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
      v("div", {
        class: d(["slider", { animated: !a.value }]),
        style: b(r.value)
      }, null, 6),
      _(e.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), w = /* @__PURE__ */ C(E, [["__scopeId", "data-v-3fdfe4f3"]]);
export {
  w as default
};
