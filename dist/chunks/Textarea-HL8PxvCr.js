import { defineComponent as n, mergeModels as c, ref as i, useModel as p, computed as m, onMounted as f, watch as h, withDirectives as x, openBlock as v, createElementBlock as y, mergeProps as _, vModelText as g } from "vue";
import { _ as M } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Textarea-Bp6UrQmc.css';const z = ["placeholder"], V = /* @__PURE__ */ n({
  __name: "Textarea",
  props: /* @__PURE__ */ c({
    resize: { default: "none" },
    layout: { default: "fixed" },
    placeholder: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(l) {
    const e = l, t = i(null), a = p(l, "modelValue"), s = m(() => ({
      resize: e.resize
    })), o = () => {
      e.layout === "hug" && t.value && (t.value.style.height = "auto", t.value.style.height = `${t.value.scrollHeight + 2}px`);
    };
    return f(() => {
      o();
    }), h(() => e.layout, o), (u, r) => x((v(), y("textarea", _({
      ref_key: "textareaRef",
      ref: t
    }, u.$attrs, {
      "onUpdate:modelValue": r[0] || (r[0] = (d) => a.value = d),
      placeholder: e.placeholder,
      style: s.value,
      class: ["textarea", e.layout],
      onInput: o
    }), null, 16, z)), [
      [g, a.value]
    ]);
  }
}), T = /* @__PURE__ */ M(V, [["__scopeId", "data-v-44c88b7a"]]);
export {
  T as default
};
