import { ref as v, toValue as r, computed as h, defineComponent as C, inject as k, toRef as b, unref as o, openBlock as f, createBlock as y, withCtx as t, createElementVNode as c, toDisplayString as m, renderSlot as n, createVNode as u, createElementBlock as B, createTextVNode as S } from "vue";
import { d as O } from "./IconChevronRightOutline-B9UH_Yk2.js";
import x from "./Dropdown-BtaoLYy0.js";
import _ from "./SidebarItem-CMeHmkJu.js";
import { _ as $ } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/SidebarCollapsible-D-NBJ-LK.css';const w = (a = {}) => {
  const s = v(r(a.defaultOpened ?? !1)), e = h(
    () => r(a.modelValue) ?? s.value
  );
  return { opened: e, toggle: () => {
    var d;
    if (r(a.disabled ?? !1)) return;
    const i = !e.value;
    r(a.modelValue) === void 0 && (s.value = i), (d = a.onChange) == null || d.call(a, i);
  } };
}, N = { class: "sidebar-collapsible__popover" }, D = { class: "sidebar-collapsible__popover-title" }, E = ["data-disabled", "data-state"], I = ["aria-hidden"], j = { class: "sidebar-collapsible__content-clip" }, R = /* @__PURE__ */ C({
  __name: "SidebarCollapsible",
  props: {
    defaultOpened: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    label: {},
    modelValue: { type: Boolean, default: void 0 },
    selected: { type: Boolean, default: !1 }
  },
  emits: ["change", "update:modelValue"],
  setup(a, { emit: s }) {
    const e = a, p = s, i = k("sidebar-is-compact", v(!1)), { opened: d, toggle: g } = w({
      defaultOpened: b(e, "defaultOpened"),
      disabled: b(e, "disabled"),
      modelValue: b(e, "modelValue"),
      onChange: (l) => {
        p("update:modelValue", l), p("change", l);
      }
    }), V = h(() => d.value ? "open" : "closed");
    return (l, T) => o(i) ? (f(), y(x, {
      key: 0,
      stretched: "",
      placement: "right-start",
      "content-width": "extra-small",
      "content-padding": "none",
      "popper-hide-triggers": ["click"]
    }, {
      popper: t(() => [
        c("div", N, [
          c("div", D, m(e.label), 1),
          n(l.$slots, "default", {}, void 0, !0)
        ])
      ]),
      default: t(() => [
        u(_, {
          selected: e.selected,
          "tooltip-disabled": "",
          "aria-label": e.label,
          disabled: e.disabled
        }, {
          left: t(() => [
            n(l.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["selected", "aria-label", "disabled"])
      ]),
      _: 3
    })) : (f(), B("div", {
      key: 1,
      class: "sidebar-collapsible",
      "data-disabled": e.disabled || void 0,
      "data-state": V.value
    }, [
      u(_, {
        selected: e.selected,
        "aria-expanded": o(d),
        disabled: e.disabled,
        onClick: o(g)
      }, {
        left: t(() => [
          n(l.$slots, "icon", {}, void 0, !0)
        ]),
        right: t(() => [
          u(o(O), {
            class: "sidebar-collapsible__chevron",
            "aria-hidden": "true"
          })
        ]),
        default: t(() => [
          S(" " + m(e.label) + " ", 1)
        ]),
        _: 3
      }, 8, ["selected", "aria-expanded", "disabled", "onClick"]),
      c("div", {
        class: "sidebar-collapsible__content",
        "aria-hidden": !o(d)
      }, [
        c("div", j, [
          n(l.$slots, "default", {}, void 0, !0)
        ])
      ], 8, I)
    ], 8, E));
  }
}), H = /* @__PURE__ */ $(R, [["__scopeId", "data-v-32b704a7"]]);
export {
  H as default
};
