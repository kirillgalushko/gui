import { ref as D, computed as h, onBeforeUnmount as y, defineComponent as V, provide as C, onMounted as b, openBlock as M, createElementBlock as w, unref as s, renderSlot as _ } from "vue";
import { a as k } from "./index-BQgYVE5h.js";
import { n as S } from "./context-Clk3ZHel.js";
import { _ as B } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/NavigationMenu-D9CzHHI5.css';const E = (o) => {
  const m = D(o.defaultValue ?? ""), l = h(
    () => {
      var n;
      return ((n = o.modelValue) == null ? void 0 : n.call(o)) ?? m.value;
    }
  );
  let d;
  const c = () => {
    d !== void 0 && (clearTimeout(d), d = void 0);
  }, f = (n) => {
    var a, e;
    c(), ((a = o.modelValue) == null ? void 0 : a.call(o)) === void 0 && (m.value = n), (e = o.onValueChange) == null || e.call(o, n);
  }, r = (n) => f(n), i = () => f(""), t = (n) => l.value === n ? i() : r(n), v = (n, a) => {
    c(), d = setTimeout(n, a);
  }, p = (n) => v(() => r(n), o.delayDuration ?? 120), g = () => v(i, o.closeDelayDuration ?? 180);
  return y(c), {
    cancelScheduledChange: c,
    close: i,
    open: r,
    scheduleClose: g,
    scheduleOpen: p,
    toggle: t,
    value: l
  };
}, N = ["aria-label", "data-mobile", "data-orientation"], O = /* @__PURE__ */ V({
  __name: "NavigationMenu",
  props: {
    ariaLabel: { default: "Основная навигация" },
    closeDelayDuration: { default: 180 },
    defaultValue: { default: "" },
    delayDuration: { default: 120 },
    modelValue: { default: void 0 },
    openOnHover: { type: Boolean, default: !0 },
    orientation: { default: "horizontal" }
  },
  emits: ["change", "update:modelValue"],
  setup(o, { emit: m }) {
    const l = o, d = m, c = k(), f = h(() => c.isMobile), r = D(null), i = /* @__PURE__ */ new Map(), t = E({
      closeDelayDuration: l.closeDelayDuration,
      defaultValue: l.defaultValue,
      delayDuration: l.delayDuration,
      modelValue: () => l.modelValue,
      onValueChange: (a) => {
        d("update:modelValue", a), d("change", a);
      }
    }), v = (a, e) => {
      e ? i.set(a, e) : i.delete(a);
    }, p = (a) => {
      var u;
      const e = a.relatedTarget;
      (!(e instanceof Node) || !((u = r.value) != null && u.contains(e))) && t.scheduleClose();
    }, g = (a) => {
      var u;
      const e = a.target;
      e instanceof Node && !((u = r.value) != null && u.contains(e)) && t.close();
    }, n = (a) => {
      if (a.key === "Escape" && t.value.value) {
        a.preventDefault();
        const e = i.get(t.value.value);
        t.close(), e == null || e.focus();
      }
    };
    return C(S, {
      ...t,
      isMobile: f,
      openOnHover: h(() => l.openOnHover),
      orientation: h(() => l.orientation),
      registerTrigger: v
    }), b(() => {
      document.addEventListener("pointerdown", g);
    }), y(() => {
      document.removeEventListener("pointerdown", g);
    }), (a, e) => (M(), w("nav", {
      ref_key: "navigationMenuRef",
      ref: r,
      class: "navigation-menu",
      "aria-label": l.ariaLabel,
      "data-mobile": f.value || void 0,
      "data-orientation": l.orientation,
      onFocusin: e[0] || (e[0] = //@ts-ignore
      (...u) => s(t).cancelScheduledChange && s(t).cancelScheduledChange(...u)),
      onFocusout: p,
      onKeydown: n,
      onPointerenter: e[1] || (e[1] = //@ts-ignore
      (...u) => s(t).cancelScheduledChange && s(t).cancelScheduledChange(...u)),
      onPointerleave: e[2] || (e[2] = //@ts-ignore
      (...u) => s(t).scheduleClose && s(t).scheduleClose(...u))
    }, [
      _(a.$slots, "default", {}, void 0, !0)
    ], 40, N));
  }
}), K = /* @__PURE__ */ B(O, [["__scopeId", "data-v-41e055b2"]]);
export {
  K as default
};
