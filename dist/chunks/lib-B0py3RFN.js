import { Fragment as e, computed as t, createBlock as n, createCommentVNode as r, createElementBlock as i, createElementVNode as a, createTextVNode as o, createVNode as s, defineComponent as c, isVNode as l, mergeProps as u, nextTick as d, normalizeClass as f, normalizeProps as p, normalizeStyle as m, onBeforeUnmount as h, onMounted as g, openBlock as _, ref as v, renderList as y, renderSlot as b, resolveDynamicComponent as x, toDisplayString as S, unref as C, useAttrs as w, watch as T, watchEffect as E, withCtx as D } from "vue";
//#region node_modules/vue-sonner/lib/index.js
var O = 1, k = new class {
	subscribers;
	toasts;
	dismissedToasts;
	constructor() {
		this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
	}
	subscribe = (e) => (this.subscribers.push(e), () => {
		let t = this.subscribers.indexOf(e);
		this.subscribers.splice(t, 1);
	});
	publish = (e) => {
		this.subscribers.forEach((t) => t(e));
	};
	addToast = (e) => {
		this.publish(e), this.toasts = [...this.toasts, e];
	};
	create = (e) => {
		let { message: t, ...n } = e, r = typeof e.id == "number" || e.id && e.id?.length > 0 ? e.id : O++, i = this.toasts.find((e) => e.id === r), a = e.dismissible === void 0 || e.dismissible;
		return this.dismissedToasts.has(r) && this.dismissedToasts.delete(r), i ? this.toasts = this.toasts.map((n) => n.id === r ? (this.publish({
			...n,
			...e,
			id: r,
			title: t
		}), {
			...n,
			...e,
			id: r,
			dismissible: a,
			title: t
		}) : n) : this.addToast({
			title: t,
			...n,
			dismissible: a,
			id: r
		}), r;
	};
	dismiss = (e) => (e ? (this.dismissedToasts.add(e), requestAnimationFrame(() => this.subscribers.forEach((t) => t({
		id: e,
		dismiss: !0
	})))) : this.toasts.forEach((e) => {
		this.subscribers.forEach((t) => t({
			id: e.id,
			dismiss: !0
		}));
	}), e);
	message = (e, t) => this.create({
		...t,
		message: e,
		type: "default"
	});
	error = (e, t) => this.create({
		...t,
		type: "error",
		message: e
	});
	success = (e, t) => this.create({
		...t,
		type: "success",
		message: e
	});
	info = (e, t) => this.create({
		...t,
		type: "info",
		message: e
	});
	warning = (e, t) => this.create({
		...t,
		type: "warning",
		message: e
	});
	loading = (e, t) => this.create({
		...t,
		type: "loading",
		message: e
	});
	promise = (e, t) => {
		if (!t) return;
		let n;
		t.loading !== void 0 && (n = this.create({
			...t,
			promise: e,
			type: "loading",
			message: t.loading,
			description: typeof t.description == "function" ? void 0 : t.description
		}));
		let r = Promise.resolve(e instanceof Function ? e() : e), i = n !== void 0, a, o = r.then(async (e) => {
			if (a = ["resolve", e], l(e)) i = !1, this.create({
				id: n,
				type: "default",
				message: e
			});
			else if (j(e) && !e.ok) {
				i = !1;
				let r = typeof t.error == "function" ? await t.error(`HTTP error! status: ${e.status}`) : t.error, a = typeof t.description == "function" ? await t.description(`HTTP error! status: ${e.status}`) : t.description, o = typeof r == "object" && !l(r) ? r : {
					message: r || "",
					id: n || ""
				};
				this.create({
					id: n,
					type: "error",
					description: a,
					...o
				});
			} else if (e instanceof Error) {
				i = !1;
				let r = typeof t.error == "function" ? await t.error(e) : t.error, a = typeof t.description == "function" ? await t.description(e) : t.description, o = typeof r == "object" && !l(r) ? r : {
					message: r || "",
					id: n || ""
				};
				this.create({
					id: n,
					type: "error",
					description: a,
					...o
				});
			} else if (t.success !== void 0) {
				i = !1;
				let r = typeof t.success == "function" ? await t.success(e) : t.success, a = typeof t.description == "function" ? await t.description(e) : t.description, o = typeof r == "object" && !l(r) ? r : {
					message: r || "",
					id: n || ""
				};
				this.create({
					id: n,
					type: "success",
					description: a,
					...o
				});
			}
		}).catch(async (e) => {
			if (a = ["reject", e], t.error !== void 0) {
				i = !1;
				let r = typeof t.error == "function" ? await t.error(e) : t.error, a = typeof t.description == "function" ? await t.description(e) : t.description, o = typeof r == "object" && !l(r) ? r : {
					message: r || "",
					id: n || ""
				};
				this.create({
					id: n,
					type: "error",
					description: a,
					...o
				});
			}
		}).finally(() => {
			i && (this.dismiss(n), n = void 0), t.finally?.();
		}), s = () => new Promise((e, t) => o.then(() => a[0] === "reject" ? t(a[1]) : e(a[1])).catch(t));
		return typeof n != "string" && typeof n != "number" ? { unwrap: s } : Object.assign(n, { unwrap: s });
	};
	custom = (e, t) => {
		let n = t?.id || O++, r = this.toasts.find((e) => e.id === n), i = t?.dismissible === void 0 || t.dismissible;
		return this.dismissedToasts.has(n) && this.dismissedToasts.delete(n), r ? this.toasts = this.toasts.map((r) => r.id === n ? (this.publish({
			...r,
			component: e,
			dismissible: i,
			id: n,
			...t
		}), {
			...r,
			component: e,
			dismissible: i,
			id: n,
			...t
		}) : r) : this.addToast({
			component: e,
			dismissible: i,
			id: n,
			...t
		}), n;
	};
	getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id));
}();
function A(e, t) {
	let n = t?.id || O++;
	return k.create({
		message: e,
		id: n,
		type: "default",
		...t
	}), n;
}
var j = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", M = Object.assign(A, {
	success: k.success,
	info: k.info,
	warning: k.warning,
	error: k.error,
	custom: k.custom,
	message: k.message,
	promise: k.promise,
	dismiss: k.dismiss,
	loading: k.loading
}, {
	getHistory: () => k.toasts,
	getToasts: () => k.getActiveToasts()
});
function N(e) {
	return e.label !== void 0;
}
var P = 3, F = "24px", I = "16px", L = 4e3, R = 356, z = 14, ee = 45, B = 200;
function te() {
	let e = v(!1);
	return E(() => {
		let t = () => {
			e.value = document.hidden;
		};
		return document.addEventListener("visibilitychange", t), () => window.removeEventListener("visibilitychange", t);
	}), { isDocumentHidden: e };
}
function V(...e) {
	return e.filter(Boolean).join(" ");
}
function ne(e) {
	let [t, n] = e.split("-"), r = [];
	return t && r.push(t), n && r.push(n), r;
}
function re(e, t) {
	let n = {};
	return [e, t].forEach((e, t) => {
		let r = t === 1, i = r ? "--mobile-offset" : "--offset", a = r ? I : F;
		function o(e) {
			[
				"top",
				"right",
				"bottom",
				"left"
			].forEach((t) => {
				n[`${i}-${t}`] = typeof e == "number" ? `${e}px` : e;
			});
		}
		typeof e == "number" || typeof e == "string" ? o(e) : typeof e == "object" ? [
			"top",
			"right",
			"bottom",
			"left"
		].forEach((t) => {
			e[t] === void 0 ? n[`${i}-${t}`] = a : n[`${i}-${t}`] = typeof e[t] == "number" ? `${e[t]}px` : e[t];
		}) : o(a);
	}), n;
}
function H() {
	let e = v([]);
	return E((t) => {
		let n = k.subscribe((t) => {
			if ("dismiss" in t && t.dismiss) {
				e.value = e.value.filter((e) => e.id !== t.id);
				return;
			}
			d(() => {
				let n = e.value.findIndex((e) => e.id === t.id);
				if (n !== -1) {
					let r = [...e.value];
					r[n] = {
						...r[n],
						...t
					}, e.value = r;
				} else e.value = [t, ...e.value];
			});
		});
		t(() => {
			n();
		});
	}), { activeToasts: e };
}
var ie = [
	"data-rich-colors",
	"data-styled",
	"data-mounted",
	"data-promise",
	"data-swiped",
	"data-removed",
	"data-visible",
	"data-y-position",
	"data-x-position",
	"data-index",
	"data-front",
	"data-swiping",
	"data-dismissible",
	"data-type",
	"data-invert",
	"data-swipe-out",
	"data-swipe-direction",
	"data-expanded",
	"data-testid"
], ae = [
	"aria-label",
	"data-disabled",
	"data-close-button-position"
], U = /* @__PURE__ */ c({
	__name: "Toast",
	props: {
		toast: {},
		toasts: {},
		index: {},
		swipeDirections: {},
		expanded: { type: Boolean },
		invert: { type: Boolean },
		heights: {},
		gap: {},
		position: {},
		closeButtonPosition: {},
		visibleToasts: {},
		expandByDefault: { type: Boolean },
		closeButton: { type: Boolean },
		interacting: { type: Boolean },
		style: {},
		cancelButtonStyle: {},
		actionButtonStyle: {},
		duration: {},
		class: {},
		unstyled: { type: Boolean },
		descriptionClass: {},
		loadingIcon: {},
		classes: {},
		icons: {},
		closeButtonAriaLabel: {},
		defaultRichColors: { type: Boolean }
	},
	emits: [
		"update:heights",
		"update:height",
		"removeToast"
	],
	setup(s, { emit: c }) {
		let l = s, y = c, w = v(null), D = v(null), O = v(!1), k = v(!1), A = v(!1), j = v(!1), M = v(!1), P = v(0), F = v(0), I = v(l.toast.duration || l.duration || L), R = v(null), z = v(null), re = t(() => l.index === 0), H = t(() => l.index + 1 <= l.visibleToasts), U = t(() => l.toast.type), W = t(() => l.toast.dismissible !== !1), oe = t(() => l.toast.class || ""), se = t(() => l.descriptionClass || ""), G = t(() => {
			let e = l.toast.position || l.position, t = l.heights.filter((t) => t.position === e).findIndex((e) => e.toastId === l.toast.id);
			return t >= 0 ? t : 0;
		}), ce = t(() => {
			let e = l.toast.position || l.position;
			return l.heights.filter((t) => t.position === e).reduce((e, t, n) => n >= G.value ? e : e + t.height, 0);
		}), K = t(() => G.value * l.gap + ce.value || 0), le = t(() => l.toast.closeButton ?? l.closeButton), ue = t(() => l.toast.duration || l.duration || L), q = v(0), J = v(0), Y = v(null), X = t(() => l.position.split("-")), de = t(() => X.value[0]), fe = t(() => X.value[1]), pe = t(() => typeof l.toast.title != "string"), me = t(() => typeof l.toast.description != "string"), { isDocumentHidden: Z } = te(), Q = t(() => U.value && U.value === "loading");
		g(() => {
			O.value = !0, I.value = ue.value;
		}), E(async () => {
			if (!O.value || !z.value) return;
			await d();
			let e = z.value, t = e.style.height;
			e.style.height = "auto";
			let n = e.getBoundingClientRect().height;
			e.style.height = t, F.value = n, y("update:height", {
				toastId: l.toast.id,
				height: n,
				position: l.toast.position || l.position
			});
		});
		function $() {
			k.value = !0, P.value = K.value, setTimeout(() => {
				y("removeToast", l.toast);
			}, B);
		}
		function he() {
			if (Q.value || !W.value) return {};
			$(), l.toast.onDismiss?.(l.toast);
		}
		function ge(e) {
			e.button !== 2 && (Q.value || !W.value || (R.value = /* @__PURE__ */ new Date(), P.value = K.value, e.target.setPointerCapture(e.pointerId), e.target.tagName !== "BUTTON" && (A.value = !0, Y.value = {
				x: e.clientX,
				y: e.clientY
			})));
		}
		function _e() {
			if (j.value || !W.value) return;
			Y.value = null;
			let e = Number(z.value?.style.getPropertyValue("--swipe-amount-x").replace("px", "") || 0), t = Number(z.value?.style.getPropertyValue("--swipe-amount-y").replace("px", "") || 0), n = (/* @__PURE__ */ new Date()).getTime() - (R.value?.getTime() || 0), r = w.value === "x" ? e : t, i = Math.abs(r) / n;
			if (Math.abs(r) >= ee || i > .11) {
				P.value = K.value, l.toast.onDismiss?.(l.toast), w.value === "x" ? D.value = e > 0 ? "right" : "left" : D.value = t > 0 ? "down" : "up", $(), j.value = !0;
				return;
			}
			z.value?.style.setProperty("--swipe-amount-x", "0px"), z.value?.style.setProperty("--swipe-amount-y", "0px"), M.value = !1, A.value = !1, w.value = null;
		}
		function ve(e) {
			if (!Y.value || !W.value || (window?.getSelection()?.toString()?.length ?? !1)) return;
			let t = e.clientY - Y.value.y, n = e.clientX - Y.value.x, r = l.swipeDirections ?? ne(l.position);
			!w.value && (Math.abs(n) > 1 || Math.abs(t) > 1) && (w.value = Math.abs(n) > Math.abs(t) ? "x" : "y");
			let i = {
				x: 0,
				y: 0
			}, a = (e) => 1 / (1.5 + Math.abs(e) / 20);
			if (w.value === "y") {
				if (r.includes("top") || r.includes("bottom")) {
					if (r.includes("top") && t < 0 || r.includes("bottom") && t > 0) i.y = t;
					else {
						let e = t * a(t);
						i.y = Math.abs(e) < Math.abs(t) ? e : t;
					}
				}
			} else if (w.value === "x" && (r.includes("left") || r.includes("right"))) {
				if (r.includes("left") && n < 0 || r.includes("right") && n > 0) i.x = n;
				else {
					let e = n * a(n);
					i.x = Math.abs(e) < Math.abs(n) ? e : n;
				}
			}
			(Math.abs(i.x) > 0 || Math.abs(i.y) > 0) && (M.value = !0), z.value?.style.setProperty("--swipe-amount-x", `${i.x}px`), z.value?.style.setProperty("--swipe-amount-y", `${i.y}px`);
		}
		g(() => {
			if (O.value = !0, !z.value) return;
			let e = z.value.getBoundingClientRect().height;
			F.value = e;
			let t = [{
				toastId: l.toast.id,
				height: e,
				position: l.toast.position
			}, ...l.heights];
			y("update:heights", t);
		}), h(() => {
			z.value && y("removeToast", l.toast);
		}), E((e) => {
			if (l.toast.promise && U.value === "loading" || l.toast.duration === Infinity || l.toast.type === "loading") return;
			let t;
			l.expanded || l.interacting || Z.value ? (() => {
				if (J.value < q.value) {
					let e = (/* @__PURE__ */ new Date()).getTime() - q.value;
					I.value -= e;
				}
				J.value = (/* @__PURE__ */ new Date()).getTime();
			})() : I.value !== Infinity && (q.value = (/* @__PURE__ */ new Date()).getTime(), t = setTimeout(() => {
				l.toast.onAutoClose?.(l.toast), $();
			}, I.value)), e(() => {
				clearTimeout(t);
			});
		}), T(() => l.toast.delete, (e) => {
			e !== void 0 && e && ($(), l.toast.onDismiss?.(l.toast));
		}, { deep: !0 });
		function ye() {
			A.value = !1, w.value = null, Y.value = null;
		}
		return (t, s) => (_(), i("li", {
			tabindex: "0",
			ref_key: "toastRef",
			ref: z,
			class: f(C(V)(l.class, oe.value, t.classes?.toast, t.toast.classes?.toast, t.classes?.[U.value], t.toast?.classes?.[U.value])),
			"data-sonner-toast": "",
			"data-rich-colors": t.toast.richColors ?? t.defaultRichColors,
			"data-styled": !(t.toast.component || t.toast?.unstyled || t.unstyled),
			"data-mounted": O.value,
			"data-promise": !!t.toast.promise,
			"data-swiped": M.value,
			"data-removed": k.value,
			"data-visible": H.value,
			"data-y-position": de.value,
			"data-x-position": fe.value,
			"data-index": t.index,
			"data-front": re.value,
			"data-swiping": A.value,
			"data-dismissible": W.value,
			"data-type": U.value,
			"data-invert": t.toast.invert || t.invert,
			"data-swipe-out": j.value,
			"data-swipe-direction": D.value,
			"data-expanded": !!(t.expanded || t.expandByDefault && O.value),
			"data-testid": t.toast.testId,
			style: m({
				"--index": t.index,
				"--toasts-before": t.index,
				"--z-index": t.toasts.length - t.index,
				"--offset": `${k.value ? P.value : K.value}px`,
				"--initial-height": t.expandByDefault ? "auto" : `${F.value}px`,
				...t.style,
				...l.toast.style
			}),
			onDragend: ye,
			onPointerdown: ge,
			onPointerup: _e,
			onPointermove: ve
		}, [le.value && !t.toast.component && U.value !== "loading" ? (_(), i("button", {
			key: 0,
			"aria-label": t.closeButtonAriaLabel || "Close toast",
			"data-disabled": Q.value,
			"data-close-button": "true",
			"data-close-button-position": t.closeButtonPosition,
			class: f(C(V)(t.classes?.closeButton, t.toast?.classes?.closeButton)),
			onClick: he
		}, [t.icons?.close ? (_(), n(x(t.icons?.close), { key: 0 })) : b(t.$slots, "close-icon", { key: 1 })], 10, ae)) : r("v-if", !0), t.toast.component ? (_(), n(x(t.toast.component), u({ key: 1 }, t.toast.componentProps, {
			onCloseToast: he,
			isPaused: t.$props.expanded || t.$props.interacting || C(Z)
		}), null, 16, ["isPaused"])) : (_(), i(e, { key: 2 }, [
			U.value !== "default" || t.toast.icon || t.toast.promise ? (_(), i("div", {
				key: 0,
				"data-icon": "",
				class: f(C(V)(t.classes?.icon, t.toast?.classes?.icon))
			}, [t.toast.icon ? (_(), n(x(t.toast.icon), { key: 0 })) : (_(), i(e, { key: 1 }, [U.value === "loading" ? b(t.$slots, "loading-icon", { key: 0 }) : U.value === "success" ? b(t.$slots, "success-icon", { key: 1 }) : U.value === "error" ? b(t.$slots, "error-icon", { key: 2 }) : U.value === "warning" ? b(t.$slots, "warning-icon", { key: 3 }) : U.value === "info" ? b(t.$slots, "info-icon", { key: 4 }) : r("v-if", !0)], 64))], 2)) : r("v-if", !0),
			a("div", {
				"data-content": "",
				class: f(C(V)(t.classes?.content, t.toast?.classes?.content))
			}, [a("div", {
				"data-title": "",
				class: f(C(V)(t.classes?.title, t.toast.classes?.title))
			}, [pe.value ? (_(), n(x(t.toast.title), p(u({ key: 0 }, t.toast.componentProps)), null, 16)) : (_(), i(e, { key: 1 }, [o(S(t.toast.title), 1)], 64))], 2), t.toast.description ? (_(), i("div", {
				key: 0,
				"data-description": "",
				class: f(C(V)(t.descriptionClass, se.value, t.classes?.description, t.toast.classes?.description))
			}, [me.value ? (_(), n(x(t.toast.description), p(u({ key: 0 }, t.toast.componentProps)), null, 16)) : (_(), i(e, { key: 1 }, [o(S(t.toast.description), 1)], 64))], 2)) : r("v-if", !0)], 2),
			t.toast.cancel ? (_(), i("button", {
				key: 1,
				style: m(t.toast.cancelButtonStyle || t.cancelButtonStyle),
				class: f(C(V)(t.classes?.cancelButton, t.toast.classes?.cancelButton)),
				"data-button": "",
				"data-cancel": "",
				onClick: s[0] ||= (e) => {
					C(N)(t.toast.cancel) && W.value && (t.toast.cancel.onClick?.(e), $());
				}
			}, S(C(N)(t.toast.cancel) ? t.toast.cancel?.label : t.toast.cancel), 7)) : r("v-if", !0),
			t.toast.action ? (_(), i("button", {
				key: 2,
				style: m(t.toast.actionButtonStyle || t.actionButtonStyle),
				class: f(C(V)(t.classes?.actionButton, t.toast.classes?.actionButton)),
				"data-button": "",
				"data-action": "",
				onClick: s[1] ||= (e) => {
					C(N)(t.toast.action) && (t.toast.action.onClick?.(e), !e.defaultPrevented && $());
				}
			}, S(C(N)(t.toast.action) ? t.toast.action?.label : t.toast.action), 7)) : r("v-if", !0)
		], 64))], 46, ie));
	}
}), W = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, oe = {}, se = {
	xmlns: "http://www.w3.org/2000/svg",
	width: "12",
	height: "12",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stoke-width": "1.5",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
};
function G(e, t) {
	return _(), i("svg", se, t[0] ||= [a("line", {
		x1: "18",
		y1: "6",
		x2: "6",
		y2: "18"
	}, null, -1), a("line", {
		x1: "6",
		y1: "6",
		x2: "18",
		y2: "18"
	}, null, -1)]);
}
var ce = /* @__PURE__ */ W(oe, [["render", G]]), K = ["data-visible"], le = { class: "sonner-spinner" }, ue = /* @__PURE__ */ c({
	__name: "Loader",
	props: { visible: { type: Boolean } },
	setup(t) {
		let n = Array(12).fill(0);
		return (t, r) => (_(), i("div", {
			class: "sonner-loading-wrapper",
			"data-visible": t.visible
		}, [a("div", le, [(_(!0), i(e, null, y(C(n), (e) => (_(), i("div", {
			key: `spinner-bar-${e}`,
			class: "sonner-loading-bar"
		}))), 128))])], 8, K));
	}
}), q = {}, J = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20"
};
function Y(e, t) {
	return _(), i("svg", J, t[0] ||= [a("path", {
		"fill-rule": "evenodd",
		d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
		"clip-rule": "evenodd"
	}, null, -1)]);
}
var X = /* @__PURE__ */ W(q, [["render", Y]]), de = {}, fe = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20"
};
function pe(e, t) {
	return _(), i("svg", fe, t[0] ||= [a("path", {
		"fill-rule": "evenodd",
		d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
		"clip-rule": "evenodd"
	}, null, -1)]);
}
var me = /* @__PURE__ */ W(de, [["render", pe]]), Z = {}, Q = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	height: "20",
	width: "20"
};
function $(e, t) {
	return _(), i("svg", Q, t[0] ||= [a("path", {
		"fill-rule": "evenodd",
		d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
		"clip-rule": "evenodd"
	}, null, -1)]);
}
var he = /* @__PURE__ */ W(Z, [["render", $]]), ge = {}, _e = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20"
};
function ve(e, t) {
	return _(), i("svg", _e, t[0] ||= [a("path", {
		"fill-rule": "evenodd",
		d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
		"clip-rule": "evenodd"
	}, null, -1)]);
}
var ye = /* @__PURE__ */ W(ge, [["render", ve]]), be = ["aria-label"], xe = [
	"data-sonner-theme",
	"dir",
	"data-theme",
	"data-rich-colors",
	"data-y-position",
	"data-x-position"
], Se = typeof window < "u" && typeof document < "u";
function Ce() {
	if (typeof window > "u" || typeof document > "u") return "ltr";
	let e = document.documentElement.getAttribute("dir");
	return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
var we = /* @__PURE__ */ c({
	name: "Toaster",
	inheritAttrs: !1,
	__name: "Toaster",
	props: {
		id: {},
		invert: {
			type: Boolean,
			default: !1
		},
		theme: { default: "light" },
		position: { default: "bottom-right" },
		closeButtonPosition: { default: "top-left" },
		hotkey: { default: () => ["altKey", "KeyT"] },
		richColors: {
			type: Boolean,
			default: !1
		},
		expand: {
			type: Boolean,
			default: !1
		},
		duration: {},
		gap: { default: z },
		visibleToasts: { default: P },
		closeButton: {
			type: Boolean,
			default: !1
		},
		toastOptions: { default: () => ({}) },
		class: { default: "" },
		style: {},
		offset: { default: F },
		mobileOffset: { default: I },
		dir: { default: "auto" },
		swipeDirections: {},
		icons: {},
		containerAriaLabel: { default: "Notifications" }
	},
	setup(o) {
		let c = o, l = w(), p = v([]), h = t(() => c.id ? p.value.filter((e) => e.toasterId === c.id) : p.value.filter((e) => !e.toasterId));
		function g(e, t) {
			return h.value.filter((n) => !n.position && t === 0 || n.position === e);
		}
		let x = t(() => {
			let e = h.value.filter((e) => e.position).map((e) => e.position);
			return e.length > 0 ? Array.from(new Set([c.position].concat(e))) : [c.position];
		}), S = t(() => {
			let e = {};
			return x.value.forEach((t) => {
				e[t] = p.value.filter((e) => e.position === t);
			}), e;
		}), T = v([]), O = v({}), A = v(!1);
		E(() => {
			x.value.forEach((e) => {
				e in O.value || (O.value[e] = !1);
			});
		});
		let j = v(c.theme === "system" ? typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : c.theme), M = v(null), N = v(null), P = v(!1), F = c.hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "");
		function I(e) {
			p.value.find((t) => t.id === e.id)?.delete || k.dismiss(e.id), p.value = p.value.filter(({ id: t }) => t !== e.id), setTimeout(() => {
				p.value.find((t) => t.id === e.id) || (T.value = T.value.filter((t) => t.toastId !== e.id));
			}, 250);
		}
		function L(e) {
			P.value && !e.currentTarget?.contains?.(e.relatedTarget) && (P.value = !1, N.value &&= (N.value.focus({ preventScroll: !0 }), null));
		}
		function z(e) {
			e.target instanceof HTMLElement && e.target.dataset.dismissible === "false" || P.value || (P.value = !0, N.value = e.relatedTarget);
		}
		function ee(e) {
			e.target && e.target instanceof HTMLElement && e.target.dataset.dismissible === "false" || (A.value = !0);
		}
		E((e) => {
			e(k.subscribe((e) => {
				if (e.dismiss) {
					requestAnimationFrame(() => {
						p.value = p.value.map((t) => t.id === e.id ? {
							...t,
							delete: !0
						} : t);
					});
					return;
				}
				d(() => {
					let t = p.value.findIndex((t) => t.id === e.id);
					t === -1 ? p.value = [e, ...p.value] : p.value = [
						...p.value.slice(0, t),
						{
							...p.value[t],
							...e
						},
						...p.value.slice(t + 1)
					];
				});
			}));
		}), E((e) => {
			if (typeof window > "u") return;
			if (c.theme !== "system") {
				j.value = c.theme;
				return;
			}
			let t = window.matchMedia("(prefers-color-scheme: dark)"), n = (e) => {
				j.value = e ? "dark" : "light";
			};
			n(t.matches);
			let r = (e) => {
				n(e.matches);
			};
			try {
				t.addEventListener("change", r);
			} catch {
				t.addListener(r);
			}
			e(() => {
				try {
					t.removeEventListener("change", r);
				} catch {
					t.removeListener(r);
				}
			});
		}), E(() => {
			M.value && N.value && (N.value.focus({ preventScroll: !0 }), N.value = null, P.value = !1);
		}), E(() => {
			p.value.length <= 1 && Object.keys(O.value).forEach((e) => {
				O.value[e] = !1;
			});
		}), E((e) => {
			function t(e) {
				let t = c.hotkey.every((t) => e[t] || e.code === t), n = Array.isArray(M.value) ? M.value[0] : M.value;
				t && (x.value.forEach((e) => {
					O.value[e] = !0;
				}), n?.focus());
				let r = document.activeElement === M.value || n?.contains(document.activeElement);
				e.code === "Escape" && r && x.value.forEach((e) => {
					O.value[e] = !1;
				});
			}
			Se && (document.addEventListener("keydown", t), e(() => {
				document.removeEventListener("keydown", t);
			}));
		});
		function B(e) {
			let t = e.currentTarget, n = t.getAttribute("data-y-position") + "-" + t.getAttribute("data-x-position");
			O.value[n] = !0;
		}
		function te(e) {
			if (!A.value) {
				let t = e.currentTarget, n = t.getAttribute("data-y-position") + "-" + t.getAttribute("data-x-position");
				O.value[n] = !1;
			}
		}
		function V() {
			Object.keys(O.value).forEach((e) => {
				O.value[e] = !1;
			});
		}
		function ne() {
			A.value = !1;
		}
		function H(e) {
			T.value = e;
		}
		function ie(e) {
			let t = T.value.findIndex((t) => t.toastId === e.toastId);
			if (t !== -1) T.value[t] = e;
			else {
				let t = T.value.findIndex((t) => t.position === e.position);
				t === -1 ? T.value.unshift(e) : T.value.splice(t, 0, e);
			}
		}
		return (t, o) => (_(), i(e, null, [r(" Remove item from normal navigation flow, only available via hotkey "), a("section", {
			"aria-label": `${t.containerAriaLabel} ${C(F)}`,
			tabIndex: -1,
			"aria-live": "polite",
			"aria-relevant": "additions text",
			"aria-atomic": "false"
		}, [(_(!0), i(e, null, y(x.value, (r, a) => (_(), i("ol", u({
			key: r,
			ref_for: !0,
			ref_key: "listRef",
			ref: M,
			"data-sonner-toaster": "",
			"data-sonner-theme": j.value,
			class: c.class,
			dir: t.dir === "auto" ? Ce() : t.dir,
			tabIndex: -1,
			"data-theme": t.theme,
			"data-rich-colors": t.richColors,
			"data-y-position": r.split("-")[0],
			"data-x-position": r.split("-")[1],
			style: {
				"--front-toast-height": `${T.value[0]?.height || 0}px`,
				"--width": `${C(R)}px`,
				"--gap": `${t.gap}px`,
				...t.style,
				...C(l).style,
				...C(re)(t.offset, t.mobileOffset)
			}
		}, { ref_for: !0 }, t.$attrs, {
			onBlur: L,
			onFocus: z,
			onMouseenter: B,
			onMousemove: B,
			onMouseleave: te,
			onDragend: V,
			onPointerdown: ee,
			onPointerup: ne
		}), [(_(!0), i(e, null, y(g(r, a), (e, i) => (_(), n(U, {
			key: e.id,
			heights: T.value,
			icons: t.icons,
			index: i,
			toast: e,
			defaultRichColors: t.richColors,
			duration: t.toastOptions?.duration ?? t.duration,
			class: f(t.toastOptions?.class ?? ""),
			descriptionClass: t.toastOptions?.descriptionClass,
			invert: t.invert,
			visibleToasts: t.visibleToasts,
			closeButton: t.toastOptions?.closeButton ?? t.closeButton,
			interacting: A.value,
			position: r,
			closeButtonPosition: t.toastOptions?.closeButtonPosition ?? t.closeButtonPosition,
			style: m(t.toastOptions?.style),
			unstyled: t.toastOptions?.unstyled,
			classes: t.toastOptions?.classes,
			cancelButtonStyle: t.toastOptions?.cancelButtonStyle,
			actionButtonStyle: t.toastOptions?.actionButtonStyle,
			"close-button-aria-label": t.toastOptions?.closeButtonAriaLabel,
			toasts: S.value[r],
			expandByDefault: t.expand,
			gap: t.gap,
			expanded: O.value[r] || !1,
			swipeDirections: c.swipeDirections,
			"onUpdate:heights": H,
			"onUpdate:height": ie,
			onRemoveToast: I
		}, {
			"close-icon": D(() => [b(t.$slots, "close-icon", {}, () => [s(ce)])]),
			"loading-icon": D(() => [b(t.$slots, "loading-icon", {}, () => [s(ue, { visible: e.type === "loading" }, null, 8, ["visible"])])]),
			"success-icon": D(() => [b(t.$slots, "success-icon", {}, () => [s(X)])]),
			"error-icon": D(() => [b(t.$slots, "error-icon", {}, () => [s(ye)])]),
			"warning-icon": D(() => [b(t.$slots, "warning-icon", {}, () => [s(he)])]),
			"info-icon": D(() => [b(t.$slots, "info-icon", {}, () => [s(me)])]),
			_: 2
		}, 1032, [
			"heights",
			"icons",
			"index",
			"toast",
			"defaultRichColors",
			"duration",
			"class",
			"descriptionClass",
			"invert",
			"visibleToasts",
			"closeButton",
			"interacting",
			"position",
			"closeButtonPosition",
			"style",
			"unstyled",
			"classes",
			"cancelButtonStyle",
			"actionButtonStyle",
			"close-button-aria-label",
			"toasts",
			"expandByDefault",
			"gap",
			"expanded",
			"swipeDirections"
		]))), 128))], 16, xe))), 128))], 8, be)], 2112));
	}
});
//#endregion
export { M as n, H as r, we as t };
