import { defineComponent as s, ref as u, computed as c, onMounted as n, watch as p, openBlock as d, createElementBlock as f, mergeProps as i } from "vue";
import { _ as h } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Textarea-VM0ppQIB.css';const _ = ["value", "placeholder"], m = /* @__PURE__ */ s({
  __name: "Textarea",
  props: {
    resize: { default: "none" },
    layout: { default: "fixed" },
    placeholder: {},
    value: {}
  },
  setup(o) {
    const e = o, t = u(null), l = c(() => ({
      resize: e.resize
    })), a = () => {
      e.layout === "hug" && t.value && (t.value.style.height = "auto", t.value.style.height = `${t.value.scrollHeight + 2}px`);
    };
    return n(() => {
      a();
    }), p(() => e.layout, a), (r, v) => (d(), f("textarea", i({
      ref_key: "textareaRef",
      ref: t
    }, r.$attrs, {
      value: e.value,
      placeholder: e.placeholder,
      style: l.value,
      class: ["textarea", e.layout],
      onInput: a
    }), null, 16, _));
  }
}), g = /* @__PURE__ */ h(m, [["__scopeId", "data-v-19bc085d"]]);
export {
  g as default
};
