import { defineComponent as m, ref as n, provide as i, watchEffect as b, onMounted as h, onBeforeUnmount as _, openBlock as x, createElementBlock as y, normalizeClass as v, createElementVNode as w, normalizeStyle as C, renderSlot as S } from "vue";
import { u as T } from "./index-CgLTAUiF.js";
import { _ as z } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Tabs-B8nwCpdd.css';const B = /* @__PURE__ */ m({
  __name: "Tabs",
  props: {
    value: {},
    onChange: { type: Function },
    stretched: { type: Boolean }
  },
  setup(f) {
    const c = n(!0), s = f, p = (e) => {
      c.value = !1, s.onChange(e);
    }, o = T(s.value, p);
    i("tabs", o), i("stretched", s.stretched);
    const r = n(null), l = n(null), u = n({
      width: "0px",
      transform: "translateX(0px)"
    }), a = () => {
      const e = o.selectedTab.value;
      e && (u.value = {
        width: `${e.offsetWidth}px`,
        transform: `translateX(${e.offsetLeft}px)`
      });
    };
    return b(() => {
      a();
    }), h(() => {
      a(), r.value = new ResizeObserver(a), l.value = new MutationObserver(a), o.tabs.value.forEach((e) => {
        var t, d;
        (t = r.value) == null || t.observe(e), (d = l.value) == null || d.observe(e, {
          childList: !0,
          subtree: !0
        });
      });
    }), _(() => {
      var e, t;
      (e = r.value) == null || e.disconnect(), (t = l.value) == null || t.disconnect();
    }), (e, t) => (x(), y("div", {
      class: v(["tabs", { stretched: s.stretched }])
    }, [
      w("div", {
        class: v(["slider", { animated: !c.value }]),
        style: C(u.value)
      }, null, 6),
      S(e.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), $ = /* @__PURE__ */ z(B, [["__scopeId", "data-v-5b34619c"]]);
export {
  $ as default
};
