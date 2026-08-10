import { defineComponent as c, computed as a, provide as l, openBlock as u, createElementBlock as n, normalizeStyle as v, renderSlot as d } from "vue";
import { a as f } from "./context-JWFXgx6K.js";
import { _ as i } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/AvatarGroup-CThGnUNO.css';const m = /* @__PURE__ */ c({
  __name: "AvatarGroup",
  props: {
    overlap: {},
    shape: { default: "circle" },
    size: { default: "40px" },
    surface: { default: "hsl(var(--background))" }
  },
  setup(r) {
    const e = r, o = a(() => e.shape), t = a(() => e.size), s = a(() => e.overlap ?? `calc(${e.size} / 4)`);
    return l(f, { shape: o, size: t }), (p, _) => (u(), n("div", {
      class: "avatar-group",
      role: "group",
      style: v({
        "--avatar-group-overlap": s.value,
        "--avatar-group-surface": e.surface
      })
    }, [
      d(p.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), x = /* @__PURE__ */ i(m, [["__scopeId", "data-v-91e41b6b"]]);
export {
  x as default
};
