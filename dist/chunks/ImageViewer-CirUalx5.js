import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { T as t, a as n, c as r, d as i, i as a, o, t as s, w as c } from "./gui-icons.es-B9g1VPOq.js";
import { t as l } from "./Loader-DtyzjXEU.js";
import { t as u } from "./Button-CeAG6Psa.js";
import { t as d } from "./Text-BiA0aMEo.js";
import { Fragment as ee, Teleport as te, Transition as f, computed as p, createBlock as m, createCommentVNode as h, createElementBlock as g, createElementVNode as _, createTextVNode as v, createVNode as y, defineComponent as b, nextTick as x, normalizeClass as S, normalizeStyle as ne, onBeforeUnmount as re, openBlock as C, ref as w, renderList as T, renderSlot as E, toDisplayString as D, toRef as O, toValue as k, unref as A, vShow as ie, watch as j, withCtx as M, withDirectives as ae, withModifiers as N } from "vue";
import '../assets/ImageViewer-DzwiaMbd.css';//#region src/components/ImageViewer/useImageViewerGestures.ts
var oe = (e) => {
	let t = /* @__PURE__ */ new Map(), n = null, r = null, i = 0, a = 1, o = ([e, t]) => e && t ? Math.hypot(e.x - t.x, e.y - t.y) : 0;
	return {
		pointerDown: (s) => {
			let c = {
				x: s.clientX,
				y: s.clientY
			};
			t.set(s.pointerId, c), n ??= c, r = c, t.size === 2 && (i = o([...t.values()]), a = e.scale.value);
		},
		pointerMove: (n) => {
			if (!t.has(n.pointerId)) return;
			let s = {
				x: n.clientX,
				y: n.clientY
			};
			if (t.set(n.pointerId, s), t.size === 2) {
				let n = o([...t.values()]);
				i > 0 && e.setScale(Math.min(e.maxScale(), Math.max(e.minScale(), n / i * a)));
			} else r && e.scale.value > e.minScale() && e.panBy(s.x - r.x, s.y - r.y);
			r = s;
		},
		pointerUp: (a) => {
			let o = t.get(a.pointerId);
			t.delete(a.pointerId), o && n && e.scale.value === e.minScale() && Math.abs(o.x - n.x) >= e.swipeThreshold() && (o.x < n.x ? e.onNext() : e.onPrevious()), t.size === 0 && (n = null, r = null, i = 0);
		}
	};
}, P = (e, t) => t === 0 ? 0 : Math.min(Math.max(0, e), t - 1), se = (e, t, n, r) => {
	let i = p(() => k(e).length), a = p(() => P(k(t), i.value)), o = p(() => k(e)[a.value]), s = p(() => i.value > 1 && (k(n) || a.value > 0)), c = p(() => i.value > 1 && (k(n) || a.value < i.value - 1)), l = (e) => {
		if (i.value !== 0) {
			if (k(n)) {
				r((e + i.value) % i.value);
				return;
			}
			r(P(e, i.value));
		}
	};
	return j(i, () => {
		k(t) !== a.value && r(a.value);
	}), {
		canNext: c,
		canPrevious: s,
		count: i,
		current: o,
		goTo: l,
		index: a,
		next: () => {
			c.value && l(a.value + 1);
		},
		previous: () => {
			s.value && l(a.value - 1);
		}
	};
}, ce = (e, t) => {
	let n = w(1), r = w(0), i = w(0), a = w(0), o = p(() => n.value !== k(e) || r.value !== 0), s = p(() => ({ transform: `translate3d(${i.value}px, ${a.value}px, 0) scale(${n.value}) rotate(${r.value}deg)` })), c = (r) => {
		n.value = Math.min(Math.max(r, k(e)), k(t)), n.value === k(e) && (i.value = 0, a.value = 0);
	};
	return {
		isTransformed: o,
		panBy: (t, r) => {
			n.value > k(e) && (i.value += t, a.value += r);
		},
		reset: () => {
			n.value = k(e), r.value = 0, i.value = 0, a.value = 0;
		},
		rotate: () => {
			r.value = (r.value + 90) % 360;
		},
		rotation: r,
		scale: n,
		setScale: c,
		style: s,
		x: i,
		y: a,
		zoomIn: () => c(n.value + .5),
		zoomOut: () => c(n.value - .5)
	};
}, le = { class: "image-viewer-header" }, ue = { class: "image-viewer-heading" }, de = { class: "image-viewer-toolbar" }, fe = ["disabled"], F = {
	key: 1,
	class: "image-viewer-error"
}, I = ["src", "alt"], L = ["disabled"], R = {
	key: 0,
	class: "image-viewer-footer"
}, z = {
	key: 0,
	class: "image-viewer-thumbnails"
}, B = [
	"aria-label",
	"aria-current",
	"onClick"
], pe = ["src", "alt"], V = /*#__PURE__*/ e(/* @__PURE__ */ b({
	__name: "ImageViewer",
	props: {
		images: {},
		isOpened: {
			type: Boolean,
			default: !1
		},
		activeIndex: { default: 0 },
		loop: {
			type: Boolean,
			default: !1
		},
		showTitle: {
			type: Boolean,
			default: !0
		},
		showCounter: {
			type: Boolean,
			default: !0
		},
		showThumbnails: {
			type: [Boolean, String],
			default: "auto"
		},
		zoomable: {
			type: Boolean,
			default: !0
		},
		rotatable: {
			type: Boolean,
			default: !0
		},
		closeOnBackdrop: {
			type: Boolean,
			default: !0
		},
		minScale: { default: 1 },
		maxScale: { default: 4 },
		preload: { default: 1 },
		swipeThreshold: { default: 48 }
	},
	emits: [
		"update:isOpened",
		"update:activeIndex",
		"close",
		"change",
		"error"
	],
	setup(e, { emit: b }) {
		let k = e, P = b, V = w(null), H = w(!0), U = w(!1), W = w(0), G = "", K = se(O(k, "images"), O(k, "activeIndex"), O(k, "loop"), (e) => {
			P("update:activeIndex", e);
			let t = k.images[e];
			t && P("change", e, t);
		}), q = ce(O(k, "minScale"), O(k, "maxScale")), J = oe({
			scale: q.scale,
			minScale: () => k.minScale,
			maxScale: () => k.maxScale,
			swipeThreshold: () => k.swipeThreshold,
			onNext: K.next,
			onPrevious: K.previous,
			panBy: q.panBy,
			setScale: q.setScale
		}), Y = p(() => k.images.length > 1 && (k.showThumbnails === !0 || k.showThumbnails === "auto")), X = () => {
			P("update:isOpened", !1), P("close");
		}, me = () => {
			H.value = !1, U.value = !1;
		}, he = (e) => {
			H.value = !1, U.value = !0;
			let t = K.current.value;
			t && P("error", {
				image: t,
				index: K.index.value,
				event: e
			});
		}, Z = () => {
			H.value = !0, U.value = !1, W.value += 1;
		}, ge = (e) => K.goTo(e), _e = (e) => {
			k.closeOnBackdrop && e.target === e.currentTarget && X();
		}, ve = (e) => {
			k.zoomable && (e.preventDefault(), q.setScale(q.scale.value + (e.deltaY < 0 ? .25 : -.25)));
		}, ye = () => {
			k.zoomable && q.setScale(q.scale.value === k.minScale ? Math.min(2, k.maxScale) : k.minScale);
		}, Q = (e) => {
			k.isOpened && (e.key === "Escape" && X(), e.key === "ArrowLeft" && K.previous(), e.key === "ArrowRight" && K.next(), k.zoomable && (e.key === "+" || e.key === "=") && q.zoomIn(), k.zoomable && e.key === "-" && q.zoomOut(), k.rotatable && e.key.toLowerCase() === "r" && q.rotate(), e.key === "0" && q.reset());
		}, $ = () => {
			if (!(typeof Image > "u")) for (let e = 1; e <= k.preload; e += 1) for (let t of [K.index.value - e, K.index.value + e]) {
				let e = k.loop ? (t + k.images.length) % k.images.length : t, n = k.images[e];
				n && (new Image().src = n.src);
			}
		};
		return j(() => K.index.value, () => {
			q.reset(), H.value = !0, U.value = !1, k.isOpened && $();
		}), j(() => k.isOpened, (e) => {
			e ? ($(), G = document.body.style.overflow, document.body.style.overflow = "hidden", window.addEventListener("keydown", Q), x(() => V.value?.focus())) : (document.body.style.overflow = G, window.removeEventListener("keydown", Q));
		}, { immediate: !0 }), re(() => {
			document.body.style.overflow = G, window.removeEventListener("keydown", Q);
		}), (e, p) => (C(), m(te, { to: "body" }, [y(f, { name: "image-viewer-fade" }, {
			default: M(() => [k.isOpened && A(K).current.value ? (C(), g("div", {
				key: 0,
				ref_key: "dialog",
				ref: V,
				class: "image-viewer",
				role: "dialog",
				"aria-modal": "true",
				"aria-label": "Просмотр изображений",
				tabindex: "-1",
				onClick: _e
			}, [
				_("header", le, [_("div", ue, [k.showTitle && A(K).current.value.title ? (C(), m(d, {
					key: 0,
					typography: "label-3",
					color: "inherit",
					ellipsis: ""
				}, {
					default: M(() => [v(D(A(K).current.value.title), 1)]),
					_: 1
				})) : h("", !0), k.showCounter ? (C(), m(d, {
					key: 1,
					typography: "label-1",
					color: "inherit"
				}, {
					default: M(() => [v(D(A(K).index.value + 1) + " / " + D(A(K).count.value), 1)]),
					_: 1
				})) : h("", !0)]), _("div", de, [
					E(e.$slots, "toolbar", {
						image: A(K).current.value,
						index: A(K).index.value
					}, void 0, !0),
					k.zoomable ? (C(), m(u, {
						key: 0,
						squared: "",
						mode: "ghost",
						size: "small",
						"aria-label": "Уменьшить",
						disabled: A(q).scale.value <= k.minScale,
						onClick: A(q).zoomOut
					}, {
						default: M(() => [y(A(r))]),
						_: 1
					}, 8, ["disabled", "onClick"])) : h("", !0),
					k.zoomable ? (C(), m(u, {
						key: 1,
						squared: "",
						mode: "ghost",
						size: "small",
						"aria-label": "Увеличить",
						disabled: A(q).scale.value >= k.maxScale,
						onClick: A(q).zoomIn
					}, {
						default: M(() => [y(A(o))]),
						_: 1
					}, 8, ["disabled", "onClick"])) : h("", !0),
					k.rotatable ? (C(), m(u, {
						key: 2,
						squared: "",
						mode: "ghost",
						size: "small",
						"aria-label": "Повернуть",
						onClick: A(q).rotate
					}, {
						default: M(() => [y(A(a))]),
						_: 1
					}, 8, ["onClick"])) : h("", !0),
					y(u, {
						squared: "",
						mode: "ghost",
						size: "small",
						"aria-label": "Закрыть",
						onClick: X
					}, {
						default: M(() => [y(A(s))]),
						_: 1
					})
				])]),
				_("main", {
					class: S(["image-viewer-stage", { pannable: A(q).scale.value > k.minScale }]),
					onWheel: ve,
					onDblclick: ye,
					onPointerdown: p[2] ||= (...e) => A(J).pointerDown && A(J).pointerDown(...e),
					onPointermove: p[3] ||= (...e) => A(J).pointerMove && A(J).pointerMove(...e),
					onPointerup: p[4] ||= (...e) => A(J).pointerUp && A(J).pointerUp(...e),
					onPointercancel: p[5] ||= (...e) => A(J).pointerUp && A(J).pointerUp(...e)
				}, [
					A(K).count.value > 1 ? (C(), g("button", {
						key: 0,
						class: "image-viewer-edge previous",
						type: "button",
						"aria-label": "Предыдущее изображение",
						disabled: !A(K).canPrevious.value,
						onClick: p[0] ||= N((...e) => A(K).previous && A(K).previous(...e), ["stop"])
					}, [y(A(t))], 8, fe)) : h("", !0),
					y(f, {
						name: "image-viewer-image",
						mode: "out-in"
					}, {
						default: M(() => [(C(), g("div", {
							key: `${A(K).current.value.id}-${W.value}`,
							class: "image-viewer-media"
						}, [
							H.value && !U.value ? (C(), m(l, { key: 0 })) : h("", !0),
							U.value ? (C(), g("div", F, [E(e.$slots, "error", {
								image: A(K).current.value,
								index: A(K).index.value,
								retry: Z
							}, () => [
								y(A(i)),
								y(d, {
									typography: "label-3",
									color: "inherit"
								}, {
									default: M(() => [...p[6] ||= [v("Не удалось загрузить изображение", -1)]]),
									_: 1
								}),
								y(u, {
									mode: "contrast",
									size: "small",
									onClick: Z
								}, {
									default: M(() => [y(A(n)), p[7] ||= v(" Повторить ", -1)]),
									_: 1
								})
							], !0)])) : h("", !0),
							ae(_("img", {
								class: S(["image-viewer-image", { rotated: A(q).rotation.value % 180 != 0 }]),
								style: ne(A(q).style.value),
								src: A(K).current.value.src,
								alt: A(K).current.value.alt ?? A(K).current.value.title ?? "",
								draggable: "false",
								onLoad: me,
								onError: he
							}, null, 46, I), [[ie, !U.value]])
						]))]),
						_: 3
					}),
					A(K).count.value > 1 ? (C(), g("button", {
						key: 1,
						class: "image-viewer-edge next",
						type: "button",
						"aria-label": "Следующее изображение",
						disabled: !A(K).canNext.value,
						onClick: p[1] ||= N((...e) => A(K).next && A(K).next(...e), ["stop"])
					}, [y(A(c))], 8, L)) : h("", !0)
				], 34),
				Y.value || k.showTitle && A(K).current.value.description || e.$slots.caption ? (C(), g("footer", R, [E(e.$slots, "caption", {
					image: A(K).current.value,
					index: A(K).index.value
				}, () => [k.showTitle && A(K).current.value.description ? (C(), m(d, {
					key: 0,
					color: "inherit",
					"text-align": "center"
				}, {
					default: M(() => [v(D(A(K).current.value.description), 1)]),
					_: 1
				})) : h("", !0)], !0), Y.value ? (C(), g("div", z, [(C(!0), g(ee, null, T(k.images, (t, n) => (C(), g("button", {
					key: t.id,
					class: S(["image-viewer-thumbnail", { active: n === A(K).index.value }]),
					type: "button",
					"aria-label": `Открыть изображение ${n + 1}`,
					"aria-current": n === A(K).index.value ? "true" : void 0,
					onClick: (e) => ge(n)
				}, [E(e.$slots, "thumbnail", {
					image: t,
					index: n
				}, () => [_("img", {
					src: t.thumbnailSrc ?? t.src,
					alt: t.alt ?? ""
				}, null, 8, pe)], !0)], 10, B))), 128))])) : h("", !0)])) : h("", !0)
			], 512)) : h("", !0)]),
			_: 3
		})]));
	}
}), [["__scopeId", "data-v-52e15030"]]);
//#endregion
export { V as default };
