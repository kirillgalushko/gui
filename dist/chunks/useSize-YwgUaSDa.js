import { t as e } from "./useResize-Dsnbi184.js";
import { ref as t } from "vue";
//#region src/components/Select/useSelect.ts
var n = (e, n) => {
	let r = t(/* @__PURE__ */ new Map()), i = t();
	return {
		options: r,
		selectedOption: i,
		registerOption: (t) => {
			if (r.value.set(t.value, t.label), i.value?.value === t.value) {
				i.value = t;
				return;
			}
			e !== void 0 && t.value === e && !i.value && (i.value = t);
		},
		selectOption: (e) => {
			i.value = e, n?.(e);
		}
	};
}, r = () => {
	let n = t(), r = t(), i = t();
	return e(n, () => {
		n.value && (r.value = n.value.clientWidth, i.value = n.value.clientHeight);
	}), {
		elementRef: n,
		width: r,
		height: i
	};
};
//#endregion
export { n, r as t };
