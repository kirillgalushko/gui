import { computed as e, ref as t, useId as n } from "vue";
//#region src/hooks/useCollapse.ts
var r = (e) => typeof e == "function" ? e() : typeof e == "object" ? e.value : e ?? !1, i = (i = {}) => {
	let a = n(), o = t(i.defaultOpened ?? !1), s = i.opened ?? o, c = i.id ?? `collapse-${a}`, l = `${c}-trigger`, u = `${c}-content`, d = e(() => r(i.disabled)), f = (e) => {
		s.value !== e && (s.value = e, i.onChange?.(e));
	}, p = () => f(!0), m = () => f(!1), h = () => f(!s.value);
	return {
		close: m,
		collapseProps: {
			id: u,
			labelledBy: l,
			get opened() {
				return s.value;
			},
			role: "region"
		},
		open: p,
		opened: s,
		setOpened: f,
		toggle: h,
		triggerProps: {
			id: l,
			"aria-controls": u,
			get "aria-expanded"() {
				return s.value;
			},
			get "aria-disabled"() {
				return d.value || void 0;
			},
			onClick: () => {
				d.value || h();
			}
		}
	};
};
//#endregion
export { i as t };
