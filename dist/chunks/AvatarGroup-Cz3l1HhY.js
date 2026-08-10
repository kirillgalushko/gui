import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t } from "./context-DVA_7kbg.js";
import { computed as n, createElementBlock as r, defineComponent as i, normalizeStyle as a, openBlock as o, provide as s, renderSlot as c } from "vue";
import '../assets/AvatarGroup-DNbCruRS.css';//#endregion
//#region src/components/Avatar/AvatarGroup.vue
var l = /*#__PURE__*/ e(/* @__PURE__ */ i({
	__name: "AvatarGroup",
	props: {
		overlap: {},
		shape: { default: "circle" },
		size: { default: "40px" },
		surface: { default: "hsl(var(--background))" }
	},
	setup(e) {
		let i = e, l = n(() => i.shape), u = n(() => i.size), d = n(() => i.overlap ?? `calc(${i.size} / 4)`);
		return s(t, {
			shape: l,
			size: u
		}), (e, t) => (o(), r("div", {
			class: "avatar-group",
			role: "group",
			style: a({
				"--avatar-group-overlap": d.value,
				"--avatar-group-surface": i.surface
			})
		}, [c(e.$slots, "default", {}, void 0, !0)], 4));
	}
}), [["__scopeId", "data-v-91e41b6b"]]);
//#endregion
export { l as default };
