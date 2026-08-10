import { onScopeDispose as e, ref as t } from "vue";
var n = Symbol("dropdown-submenu"), r = (n = 120) => {
	let r = t(!1), i = {
		trigger: !1,
		content: !1
	}, a = {
		trigger: !1,
		content: !1
	}, o, s = () => {
		o !== void 0 && (clearTimeout(o), o = void 0);
	}, c = () => {
		s(), r.value = !0;
	}, l = () => {
		s(), i.trigger = !1, i.content = !1, a.trigger = !1, a.content = !1, r.value = !1;
	}, u = () => Object.values(i).some(Boolean) || Object.values(a).some(Boolean), d = () => {
		u() || (s(), o = setTimeout(l, n));
	}, f = () => {
		if (u()) {
			c();
			return;
		}
		d();
	};
	return e(s), {
		shown: r,
		show: c,
		hide: l,
		scheduleHide: d,
		setHovered: (e, t) => {
			i[e] = t, f();
		},
		setFocused: (e, t) => {
			a[e] = t, f();
		}
	};
};
//#endregion
export { r as n, n as t };
