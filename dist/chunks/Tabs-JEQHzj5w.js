import { defineComponent as p, ref as s, provide as c, watchEffect as u, openBlock as m, createElementBlock as b, normalizeClass as d, createElementVNode as h, normalizeStyle as v, renderSlot as _ } from "vue";
import { u as y, a as S } from "./index-C0NMnPVt.js";
import { _ as x } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Tabs-DE3vy6bG.css';const C = /* @__PURE__ */ p({
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
    const l = s(), n = s({
      width: "0px",
      transform: "translateX(0px)"
    }), r = () => {
      console.log("updateSliderStyle");
      const e = o.selectedTab.value;
      e && (n.value = {
        width: `${e.offsetWidth}px`,
        transform: `translateX(${e.offsetLeft}px)`
      });
    };
    return u(() => {
      r();
    }), S(l, r), (e, E) => (m(), b("div", {
      ref_key: "tabsElementRef",
      ref: l,
      class: d(["tabs", { stretched: t.stretched }])
    }, [
      h("div", {
        class: d(["slider", { animated: !a.value }]),
        style: v(n.value)
      }, null, 6),
      _(e.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), w = /* @__PURE__ */ x(C, [["__scopeId", "data-v-e30bbb70"]]);
export {
  w as default
};
