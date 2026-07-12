import { defineComponent as m, openBlock as n, createBlock as r, withCtx as s, createElementBlock as d, Fragment as f, renderList as h, unref as _ } from "vue";
import i from "./Select-B7ULuqM1.js";
import { _ as p } from "./SelectOption.vue_vue_type_script_setup_true_lang-uMAco6KO.js";
const k = /* @__PURE__ */ m({
  __name: "HourPicker",
  props: {
    value: {},
    onChange: {},
    label: { default: "Время" },
    name: {},
    stretched: { type: Boolean }
  },
  setup(o) {
    const e = o, c = Array.from({ length: 24 }, (t, a) => `${String(a).padStart(2, "0")}:00`), u = (t) => {
      var a;
      (a = e.onChange) == null || a.call(e, {
        value: t.value
      });
    };
    return (t, a) => (n(), r(i, {
      value: e.value,
      label: e.label,
      name: e.name,
      stretched: e.stretched,
      "on-change": u
    }, {
      default: s(() => [
        (n(!0), d(f, null, h(_(c), (l) => (n(), r(p, {
          key: l,
          value: l,
          label: l
        }, null, 8, ["value", "label"]))), 128))
      ]),
      _: 1
    }, 8, ["value", "label", "name", "stretched"]));
  }
});
export {
  k as default
};
