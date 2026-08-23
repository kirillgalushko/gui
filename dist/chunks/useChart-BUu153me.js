import { a as e, c as t, d as n, i as r, l as i, n as a, o, r as s, s as c, u as l } from "./chart-CCi8IZ2y.js";
import { computed as u, defineComponent as d, h as f, isProxy as p, nextTick as m, onMounted as h, onUnmounted as g, ref as _, shallowRef as v, toRaw as y, version as b, watch as x } from "vue";
import '../assets/useChart-Bq_obzMA.css';//#region node_modules/vue-chartjs/dist/index.js
var S = {
	data: {
		type: Object,
		required: !0
	},
	options: {
		type: Object,
		default: () => ({})
	},
	plugins: {
		type: Array,
		default: () => []
	},
	datasetIdKey: {
		type: String,
		default: "label"
	},
	updateMode: {
		type: String,
		default: void 0
	}
}, C = {
	ariaLabel: { type: String },
	ariaDescribedby: { type: String }
}, w = {
	type: {
		type: String,
		required: !0
	},
	destroyDelay: {
		type: Number,
		default: 0
	},
	...S,
	...C
}, T = b[0] === "2" ? (e, t) => Object.assign(e, { attrs: t }) : (e, t) => Object.assign(e, t);
function E(e) {
	return p(e) ? y(e) : e;
}
function D(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e;
	return p(t) ? new Proxy(e, {}) : e;
}
function O(e, t) {
	let n = e.options;
	n && t && Object.assign(n, t);
}
function k(e, t) {
	e.labels = t;
}
function A(e, t, n) {
	let r = [];
	e.datasets = t.map((t) => {
		let i = e.datasets.find((e) => e[n] === t[n]);
		return !i || !t.data || r.includes(i) ? { ...t } : (r.push(i), Object.assign(i, t), i);
	});
}
function j(e, t) {
	let n = {
		labels: [],
		datasets: []
	};
	return k(n, e.labels), A(n, e.datasets, t), n;
}
var M = d({
	props: w,
	setup(e, t) {
		let { expose: n, slots: r } = t, i = _(null), a = v(null);
		n({ chart: a });
		let s = () => {
			if (!i.value) return;
			let { type: t, data: n, options: r, plugins: s, datasetIdKey: c } = e, l = D(j(n, c), n);
			a.value = new o(i.value, {
				type: t,
				data: l,
				options: { ...r },
				plugins: s
			});
		}, c = () => {
			let t = y(a.value);
			t && (e.destroyDelay > 0 ? setTimeout(() => {
				t.destroy(), a.value = null;
			}, e.destroyDelay) : (t.destroy(), a.value = null));
		}, l = (t) => {
			t.update(e.updateMode);
		};
		return h(s), g(c), x([() => e.options, () => e.data], (t, n) => {
			let [r, i] = t, [o, s] = n, c = y(a.value);
			if (!c) return;
			let u = !1;
			if (r) {
				let e = E(r), t = E(o);
				e && e !== t && (O(c, e), u = !0);
			}
			if (i) {
				let t = E(i.labels), n = E(s.labels), r = E(i.datasets), a = E(s.datasets);
				t !== n && (k(c.config.data, t), u = !0), r && r !== a && (A(c.config.data, r, e.datasetIdKey), u = !0);
			}
			u && m(() => {
				l(c);
			});
		}, { deep: !0 }), () => f("canvas", {
			role: "img",
			"aria-label": e.ariaLabel,
			"aria-describedby": e.ariaDescribedby,
			ref: i
		}, [f("p", {}, [r.default ? r.default() : ""])]);
	}
});
function N(e, t) {
	return o.register(t), d({
		props: S,
		setup(t, n) {
			let { expose: r } = n, i = v(null), a = v(null);
			x(() => a.value?.chart ?? null, (e) => {
				i.value = e;
			}, { flush: "sync" }), r({ chart: i });
			let o = (e) => {
				a.value = e;
			};
			return () => f(M, T({ ref: o }, {
				type: e,
				...t
			}));
		}
	});
}
var P = /* #__PURE__ */ N("bar", e), F = /* #__PURE__ */ N("doughnut", c), I = /* #__PURE__ */ N("line", t), L = /* #__PURE__ */ N("pie", i), R = /* #__PURE__ */ N("polarArea", l), z = /* #__PURE__ */ N("radar", n), B = (e, t) => {
	let n = s(() => t.options);
	return {
		chartData: u(() => r(e, t.data)),
		chartOptions: u(() => a(e, t.options)),
		chartPlugins: u(() => [n, ...t.plugins ?? []]),
		containerStyle: u(() => ({ height: typeof t.height == "number" ? `${t.height}px` : t.height }))
	};
};
//#endregion
export { L as a, I as i, P as n, R as o, F as r, z as s, B as t };
