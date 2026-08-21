import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { n as t } from "./gui-icons.es-B9g1VPOq.js";
import { t as n } from "./Button-CeAG6Psa.js";
import { createElementBlock as r, createElementVNode as i, createTextVNode as a, createVNode as o, defineComponent as s, openBlock as c, ref as l, toDisplayString as u, unref as d, withCtx as f } from "vue";
import '../assets/FileInput-Cs3R0Xg8.css';//#region src/components/FileInput/FileInput.vue?vue&type=script&setup=true&lang.ts
var p = [
	"accept",
	"multiple",
	"disabled",
	"capture"
], m = /*#__PURE__*/ e(/* @__PURE__ */ s({
	__name: "FileInput",
	props: {
		accept: { default: void 0 },
		multiple: {
			type: Boolean,
			default: !1
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		label: { default: "Выбрать файл" },
		capture: { default: void 0 },
		size: { default: "large" }
	},
	emits: ["change"],
	setup(e, { emit: s }) {
		let m = e, h = s, g = l(), _ = () => {
			m.disabled || g.value?.click();
		}, v = (e) => {
			let t = e.target;
			h("change", Array.from(t.files ?? [])), t.value = "";
		};
		return (e, s) => (c(), r("span", null, [i("input", {
			ref_key: "input",
			ref: g,
			class: "file-input-native",
			type: "file",
			accept: m.accept,
			multiple: m.multiple,
			disabled: m.disabled,
			capture: m.capture,
			tabindex: "-1",
			onChange: v
		}, null, 40, p), o(n, {
			type: "button",
			mode: "default",
			size: m.size,
			disabled: m.disabled,
			onClick: _
		}, {
			default: f(() => [o(d(t)), a(" " + u(m.label), 1)]),
			_: 1
		}, 8, ["size", "disabled"])]));
	}
}), [["__scopeId", "data-v-442cd07d"]]);
//#endregion
export { m as default };
