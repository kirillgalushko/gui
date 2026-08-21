import { computed as e, createBlock as t, defineComponent as n, h as r, mergeProps as i, onBeforeUnmount as a, onMounted as o, openBlock as s, shallowRef as c, unref as l, watch as u } from "vue";
//#region node_modules/morphicons/dist/normalize-CYnN3Npw.js
var d = "MmLlHhVvCcSsQqTtAaZz";
function f(e) {
	let t = [], n = e.length, r = 0, i = 0, a = 0, o = 0, s = 0, c = null, l = "", u = 0, f = 0, p = "", m = !1, h = (e) => {
		throw Error(`morphicons: ${e} at d[${r}]`);
	}, g = (e) => e >= 48 && e <= 57, _ = () => {
		for (; r < n;) {
			let t = e.charCodeAt(r);
			if (t === 32 || t === 9 || t === 10 || t === 13 || t === 12 || t === 44) r++;
			else break;
		}
	}, v = () => {
		_();
		let t = r;
		r < n && (e[r] === "+" || e[r] === "-") && r++;
		let i = !1;
		for (; r < n && g(e.charCodeAt(r));) r++, i = !0;
		if (r < n && e[r] === ".") for (r++; r < n && g(e.charCodeAt(r));) r++, i = !0;
		if (i || h("expected number"), r < n && (e[r] === "e" || e[r] === "E")) {
			let t = r;
			r++, r < n && (e[r] === "+" || e[r] === "-") && r++;
			let i = !1;
			for (; r < n && g(e.charCodeAt(r));) r++, i = !0;
			i || (r = t);
		}
		return Number(e.slice(t, r));
	}, y = () => {
		_();
		let t = e[r];
		return t === "0" || t === "1" ? (r++, +(t === "1")) : h("expected arc flag (0|1)");
	}, b = () => (m || h("path must start with M/m"), c || (c = {
		x0: i,
		y0: a,
		segs: [],
		closed: !1
	}, t.push(c)), c), x = !1, S = () => v() + (x ? i : 0), C = () => v() + (x ? a : 0);
	for (; _(), !(r >= n);) {
		let n = e[r];
		switch (d.includes(n) ? (l = n, r++) : l === "" ? h("path must start with M/m") : l === "M" ? l = "L" : l === "m" ? l = "l" : (l === "Z" || l === "z") && h("stray data after Z"), x = l >= "a", x ? l.toUpperCase() : l) {
			case "M": {
				m = !0;
				let e = S(), n = C();
				i = e, a = n, o = e, s = n, c = {
					x0: e,
					y0: n,
					segs: [],
					closed: !1
				}, t.push(c), p = "";
				break;
			}
			case "L": {
				let e = S(), t = C();
				b().segs.push([
					"L",
					e,
					t
				]), i = e, a = t, p = "";
				break;
			}
			case "H": {
				let e = S();
				b().segs.push([
					"L",
					e,
					a
				]), i = e, p = "";
				break;
			}
			case "V": {
				let e = C();
				b().segs.push([
					"L",
					i,
					e
				]), a = e, p = "";
				break;
			}
			case "C":
			case "S": {
				let e, t;
				l === "C" || l === "c" ? (e = S(), t = C()) : (e = p === "C" ? 2 * i - u : i, t = p === "C" ? 2 * a - f : a);
				let n = S(), r = C(), o = S(), s = C();
				b().segs.push([
					"C",
					e,
					t,
					n,
					r,
					o,
					s
				]), u = n, f = r, i = o, a = s, p = "C";
				break;
			}
			case "Q":
			case "T": {
				let e, t;
				l === "Q" || l === "q" ? (e = S(), t = C()) : (e = p === "Q" ? 2 * i - u : i, t = p === "Q" ? 2 * a - f : a);
				let n = S(), r = C();
				b().segs.push([
					"Q",
					e,
					t,
					n,
					r
				]), u = e, f = t, i = n, a = r, p = "Q";
				break;
			}
			case "A": {
				let e = v(), t = v(), n = v(), r = y(), o = y(), s = S(), c = C();
				b().segs.push([
					"A",
					e,
					t,
					n,
					r,
					o,
					s,
					c
				]), i = s, a = c, p = "";
				break;
			}
			case "Z":
				c &&= (c.closed = !0, null), i = o, a = s, p = "";
				break;
			default: h(`unsupported command "${l}"`);
		}
	}
	return t.filter((e) => e.segs.length > 0);
}
function p(e) {
	return String(Math.round(e * 100) / 100);
}
function m(e, t) {
	let n = "";
	for (let r = 0; r < e.length; r++) {
		let i = e[r], a = i.length / 2;
		n += `M${p(i[0])} ${p(i[1])}`;
		for (let e = 1; e < a; e++) n += `L${p(i[2 * e])} ${p(i[2 * e + 1])}`;
		t?.[r] && (n += "Z");
	}
	return n;
}
function h(e) {
	return String(Math.round(e * 1e4) / 1e4);
}
function g(e) {
	let t = "";
	for (let { pts: n, closed: r } of e) {
		t += `M${h(n[0])} ${h(n[1])}`;
		for (let e = 2; e < n.length; e += 6) t += `C${h(n[e])} ${h(n[e + 1])} ${h(n[e + 2])} ${h(n[e + 3])} ${h(n[e + 4])} ${h(n[e + 5])}`;
		r && (t += "Z");
	}
	return t;
}
var _ = 4 / 3 * Math.tan(Math.PI / 8), v = 2 * Math.PI;
function y(e, t) {
	let n = [e, t], r = e, i = t, a = (e, t, a, o, s, c) => {
		n.push(e, t, a, o, s, c), r = s, i = c;
	}, o = (e, t) => {
		Math.abs(e - r) < 1e-12 && Math.abs(t - i) < 1e-12 || a(r + (e - r) / 3, i + (t - i) / 3, r + 2 * (e - r) / 3, i + 2 * (t - i) / 3, e, t);
	};
	return [
		a,
		o,
		(e, t, n, o) => {
			a(r + 2 / 3 * (e - r), i + 2 / 3 * (t - i), n + 2 / 3 * (e - n), o + 2 / 3 * (t - o), n, o);
		},
		(e, t, n, s, c, l, u) => {
			let d = r, f = i;
			if (Math.abs(l - d) < 1e-12 && Math.abs(u - f) < 1e-12) return;
			let p = Math.abs(e), m = Math.abs(t);
			if (p < 1e-12 || m < 1e-12) {
				o(l, u);
				return;
			}
			let h = n * Math.PI / 180, g = Math.cos(h), _ = Math.sin(h), y = (d - l) / 2, b = (f - u) / 2, x = g * y + _ * b, S = -_ * y + g * b, C = x * x / (p * p) + S * S / (m * m);
			if (C > 1) {
				let e = Math.sqrt(C);
				p *= e, m *= e;
			}
			let w = p * p, T = m * m, E = x * x, D = S * S, O = (w * T - w * D - T * E) / (w * D + T * E);
			O < 0 && (O = 0);
			let k = (s === c ? -1 : 1) * Math.sqrt(O), A = k * p * S / m, j = -k * m * x / p, M = g * A - _ * j + (d + l) / 2, ee = _ * A + g * j + (f + u) / 2, N = Math.atan2((S - j) / m, (x - A) / p), P = Math.atan2((-S - j) / m, (-x - A) / p) - N;
			c === 0 && P > 0 ? P -= v : c === 1 && P < 0 && (P += v);
			let F = Math.max(1, Math.ceil(Math.abs(P) / (Math.PI / 2) - 1e-9)), I = P / F, L = 4 / 3 * Math.tan(I / 4), te = (e) => M + p * Math.cos(e) * g - m * Math.sin(e) * _, R = (e) => ee + p * Math.cos(e) * _ + m * Math.sin(e) * g, z = (e) => -p * Math.sin(e) * g - m * Math.cos(e) * _, B = (e) => -p * Math.sin(e) * _ + m * Math.cos(e) * g, V = N, H = d, U = f;
			for (let e = 1; e <= F; e++) {
				let t = N + I * e, n = e === F ? l : te(t), r = e === F ? u : R(t);
				a(H + L * z(V), U + L * B(V), n - L * z(t), r - L * B(t), n, r), V = t, H = n, U = r;
			}
		},
		(e) => (e && o(n[0], n[1]), n.length < 8 ? null : {
			pts: Float64Array.from(n),
			closed: e
		})
	];
}
function b(e) {
	let [t, n, r, i, a] = y(e.x0, e.y0);
	for (let a of e.segs) switch (a[0]) {
		case "L":
			n(a[1], a[2]);
			break;
		case "C":
			t(a[1], a[2], a[3], a[4], a[5], a[6]);
			break;
		case "Q":
			r(a[1], a[2], a[3], a[4]);
			break;
		case "A": i(a[1], a[2], a[3], a[4], a[5], a[6], a[7]);
	}
	return a(e.closed);
}
function x(e, t, n = 0) {
	let r = e[t];
	if (r === void 0) return n;
	let i = typeof r == "number" ? r : Number(r);
	return Number.isFinite(i) ? i : n;
}
function S(e) {
	let t = String(e ?? "").trim();
	if (!t) return [];
	let n = t.split(/[\s,]+/).map(Number);
	if (n.some((e) => !Number.isFinite(e))) throw Error(`morphicons: invalid points: "${t}"`);
	return n;
}
function C(e, t) {
	if (e.length < 4) return null;
	let [, n, , , r] = y(e[0], e[1]);
	for (let t = 2; t + 1 < e.length; t += 2) n(e[t], e[t + 1]);
	return r(t);
}
function w(e, t, n, r) {
	if (n < 1e-12 || r < 1e-12) return null;
	let i = _ * n, a = _ * r, o = e + n, s = e - n, c = t + r, l = t - r, [u, , , , d] = y(o, t);
	return u(o, t + a, e + i, c, e, c), u(e - i, c, s, t + a, s, t), u(s, t - a, e - i, l, e, l), u(e + i, l, o, t - a, o, t), d(!0);
}
function T(e) {
	let t = x(e, "x"), n = x(e, "y"), r = x(e, "width"), i = x(e, "height");
	if (r < 1e-12 || i < 1e-12) return null;
	let a = x(e, "rx", NaN), o = x(e, "ry", NaN);
	if (Number.isNaN(a) && (a = Number.isNaN(o) ? 0 : o), Number.isNaN(o) && (o = a), a = Math.min(Math.max(a, 0), r / 2), o = Math.min(Math.max(o, 0), i / 2), a < 1e-12 || o < 1e-12) return C([
		t,
		n,
		t + r,
		n,
		t + r,
		n + i,
		t,
		n + i
	], !0);
	let s = t + a, c = t + r - a, l = t + r, u = n + o, d = n + i - o, f = n + i, p = _ * a, m = _ * o, [h, g, , , v] = y(s, n);
	return g(c, n), h(c + p, n, l, u - m, l, u), g(l, d), h(l, d + m, c + p, f, c, f), g(s, f), h(s - p, f, t, d + m, t, d), g(t, u), h(t, u - m, s - p, n, s, n), v(!0);
}
function E(e) {
	let t = [], n = (e) => {
		e && t.push(e);
	};
	if (typeof e == "string") {
		for (let t of f(e)) n(b(t));
		return t;
	}
	for (let [t, r] of e) switch (t) {
		case "path":
			for (let e of f(String(r.d ?? ""))) n(b(e));
			break;
		case "line": {
			let [, e, , , t] = y(x(r, "x1"), x(r, "y1"));
			e(x(r, "x2"), x(r, "y2")), n(t(!1));
			break;
		}
		case "circle": {
			let e = x(r, "r");
			n(w(x(r, "cx"), x(r, "cy"), e, e));
			break;
		}
		case "ellipse":
			n(w(x(r, "cx"), x(r, "cy"), x(r, "rx"), x(r, "ry")));
			break;
		case "rect":
			n(T(r));
			break;
		case "polyline":
			n(C(S(r.points), !1));
			break;
		case "polygon":
			n(C(S(r.points), !0));
			break;
		default: throw Error(`morphicons: unsupported tag <${t}>`);
	}
	return t;
}
//#endregion
//#region node_modules/morphicons/dist/spring-CFHloqPP.js
function D(e) {
	return e.items.map(() => new Float64Array(2 * e.n));
}
function O(e, t, n) {
	for (let r = 0; r < e.items.length; r++) {
		let i = e.items[r], a = n[r], o = e.n, s = Math.exp(i.lnSigma * t), c = i.theta * t, l = Math.cos(c) * s, u = Math.sin(c) * s, d, f;
		if (i.block) {
			let [e, n] = i.block.off, [r, a] = i.block.drift;
			d = i.ca[0] + r * t + (e * l - n * u - e), f = i.ca[1] + a * t + (e * u + n * l - n);
		} else d = i.ca[0] + (i.cb[0] - i.ca[0]) * t, f = i.ca[1] + (i.cb[1] - i.ca[1]) * t;
		for (let e = 0; e < o; e++) {
			let n = i.aC[2 * e] + (i.bT[2 * e] - i.aC[2 * e]) * t, r = i.aC[2 * e + 1] + (i.bT[2 * e + 1] - i.aC[2 * e + 1]) * t;
			a[2 * e] = d + n * l - r * u, a[2 * e + 1] = f + n * u + r * l;
		}
	}
}
var k = .35, A = .05, j = .005, M = 8, ee = 1e5;
function N(e) {
	let t = e.length / 2, n = 0, r = 0;
	for (let i = 0; i < t; i++) n += e[2 * i], r += e[2 * i + 1];
	return [n / t, r / t];
}
function P(e) {
	let t = e.length / 2, n = 0;
	for (let r = 1; r < t; r++) n += Math.hypot(e[2 * r] - e[2 * r - 2], e[2 * r + 1] - e[2 * r - 1]);
	return n;
}
function F(e) {
	let t = e.length / 2, n = new Float64Array(2 * t);
	for (let r = 0; r < t; r++) n[2 * r] = e[2 * (t - 1 - r)], n[2 * r + 1] = e[2 * (t - 1 - r) + 1];
	return n;
}
function I(e, t) {
	let n = e.length / 2, r = new Float64Array(2 * n);
	for (let i = 0; i < n; i++) {
		let a = (i + t) % n;
		r[2 * i] = e[2 * a], r[2 * i + 1] = e[2 * a + 1];
	}
	return r;
}
function L(e, t, n, r) {
	let i = e.length / 2, a = 0, o = 0, s = 0, c = 0, l = 0, u = 0;
	for (let d = 0; d < i; d++) {
		let i = e[2 * d] - n[0], f = e[2 * d + 1] - n[1], p = t[2 * d] - r[0], m = t[2 * d + 1] - r[1];
		a += i * p, c += f * m, o += i * m, s += f * p, l += i * i + f * f, u += p * p + m * m;
	}
	let d = Math.atan2(o - s, a + c), f = Math.cos(d) * (a + c) + Math.sin(d) * (o - s), p = l > 1e-12 ? f / l : 1;
	p > 1e-6 || (p = 1e-6);
	let m = Math.max(0, p * p * l - 2 * p * f + u), h = u > 1e-12 ? Math.sqrt(m / u) : 0;
	return {
		theta: d,
		sigma: p,
		res: h
	};
}
function te(e, t, n = !1, r = !1) {
	let i = N(e), a = N(t), o = n && !r, s = o ? e : t, c = n || r ? s.length / 2 : 1, l = Infinity, u = s, d = {
		theta: 0,
		sigma: 1,
		res: 0
	};
	for (let n = 0; n < 2; n++) {
		let r = n ? F(s) : s;
		for (let n = 0; n < c; n++) {
			let s = n ? I(r, n) : r, c = o ? L(s, t, i, a) : L(e, s, i, a), f = c.res + A * Math.abs(c.theta) / Math.PI;
			f < l && (l = f, u = s, d = c);
		}
	}
	return o ? {
		ca: i,
		cb: a,
		a: u,
		b: t,
		...d
	} : {
		ca: i,
		cb: a,
		a: e,
		b: u,
		...d
	};
}
function R(e, t) {
	let n = t.map(N), r = t.map(P);
	return e.map((e) => {
		let t = N(e), i = P(e);
		return n.map((e, n) => Math.hypot(t[0] - e[0], t[1] - e[1]) + k * Math.abs(i - r[n]));
	});
}
function z(e) {
	let t = e.length;
	if (t > M) {
		let n = [];
		for (let r = 0; r < t; r++) for (let i = 0; i < t; i++) n.push([
			e[r][i],
			r,
			i
		]);
		n.sort((e, t) => e[0] - t[0]);
		let r = Array(t).fill(-1), i = Array(t).fill(!1);
		for (let [, e, t] of n) r[e] < 0 && !i[t] && (r[e] = t, i[t] = !0);
		return r;
	}
	let n = Array.from({ length: t }, (e, t) => t), r = n.slice(), i = Infinity, a = (n, o, s) => {
		if (!(s >= i)) {
			if (o === t) {
				i = s, r = n.slice();
				return;
			}
			for (let r = o; r < t; r++) [n[o], n[r]] = [n[r], n[o]], a(n, o + 1, s + e[o][n[o]]), [n[o], n[r]] = [n[r], n[o]];
		}
	};
	return a(n, 0, 0), r;
}
function B(e) {
	let t = e.length, n = e[0].length;
	if (n ** t > ee) {
		let r = e.map((e) => {
			let t = 0;
			for (let n = 1; n < e.length; n++) e[n] < e[t] && (t = n);
			return t;
		}), i = Array(n).fill(0);
		for (let e of r) i[e]++;
		for (let a = 0; a < n; a++) {
			if (i[a] > 0) continue;
			let n = -1, o = Infinity;
			for (let s = 0; s < t; s++) {
				if (i[r[s]] < 2) continue;
				let t = e[s][a] - e[s][r[s]];
				t < o && (o = t, n = s);
			}
			i[r[n]]--, r[n] = a, i[a]++;
		}
		return r;
	}
	let r = null, i = Infinity, a = Array(t), o = Array(n).fill(0), s = (c, l, u) => {
		if (!(l >= i || n - u > t - c)) {
			if (c === t) {
				i = l, r = a.slice();
				return;
			}
			for (let t = 0; t < n; t++) a[c] = t, o[t]++, s(c + 1, l + e[c][t], u + +(o[t] === 1)), o[t]--;
		}
	};
	if (s(0, 0, 0), !r) throw Error("morphicons: no valid surjection (B < S)");
	return r;
}
function V(e, t) {
	let n = e.length * t, r = new Float64Array(2 * n), i = new Float64Array(2 * n);
	e.forEach((e, n) => {
		r.set(e.a, 2 * t * n), i.set(e.bO, 2 * t * n);
	});
	let a = N(r), o = L(r, i, a, N(i));
	if (o.res >= j) return;
	let s = Math.cos(-o.theta), c = Math.sin(-o.theta), l = Math.cos(o.theta), u = Math.sin(o.theta);
	for (let n of e) {
		let e = 0, r = 0;
		for (let i = 0; i < t; i++) {
			let t = n.bO[2 * i] - n.cb[0], a = n.bO[2 * i + 1] - n.cb[1];
			n.bT[2 * i] = (t * s - a * c) / o.sigma, n.bT[2 * i + 1] = (t * c + a * s) / o.sigma;
			let d = o.sigma * (l * n.aC[2 * i] - u * n.aC[2 * i + 1]) - t, f = o.sigma * (u * n.aC[2 * i] + l * n.aC[2 * i + 1]) - a;
			e += d * d + f * f, r += t * t + a * a;
		}
		n.theta = o.theta, n.lnSigma = Math.log(o.sigma), n.res = r > 1e-12 ? Math.sqrt(e / r) : 0;
		let i = Math.exp(n.lnSigma), d = Math.cos(n.theta) * i, f = Math.sin(n.theta) * i, p = n.ca[0] - a[0], m = n.ca[1] - a[1], h = p * d - m * f - p, g = p * f + m * d - m;
		n.block = {
			off: [p, m],
			drift: [n.cb[0] - n.ca[0] - h, n.cb[1] - n.ca[1] - g]
		};
	}
}
function H(e, t) {
	let n = e.length, r = t.length;
	if (n === 0 || r === 0) throw Error("morphicons: icon has no subpaths");
	let i = e.map((e) => e.pts), a = t.map((e) => e.pts), o = [];
	if (n === r) {
		let e = z(R(i, a));
		for (let t = 0; t < n; t++) o.push([t, e[t]]);
	} else if (n < r) {
		let e = B(R(a, i));
		for (let t = 0; t < r; t++) o.push([e[t], t]);
	} else {
		let e = B(R(i, a));
		for (let t = 0; t < n; t++) o.push([t, e[t]]);
	}
	let s = i[0].length / 2, c = o.map(([n, r]) => {
		let o = te(i[n], a[r], e[n].closed, t[r].closed), c = o.a, l = new Float64Array(2 * s), u = new Float64Array(2 * s), d = new Float64Array(2 * s), f = Math.cos(-o.theta), p = Math.sin(-o.theta);
		for (let e = 0; e < s; e++) {
			l[2 * e] = c[2 * e] - o.ca[0], l[2 * e + 1] = c[2 * e + 1] - o.ca[1];
			let t = o.b[2 * e] - o.cb[0], n = o.b[2 * e + 1] - o.cb[1];
			u[2 * e] = (t * f - n * p) / o.sigma, u[2 * e + 1] = (t * p + n * f) / o.sigma, d[2 * e] = o.b[2 * e], d[2 * e + 1] = o.b[2 * e + 1];
		}
		return {
			a: c,
			aC: l,
			bT: u,
			bO: d,
			ca: o.ca,
			cb: o.cb,
			theta: o.theta,
			lnSigma: Math.log(o.sigma),
			res: o.res,
			closed: e[n].closed && t[r].closed,
			block: null
		};
	});
	return c.length > 1 && V(c, s), {
		items: c,
		n: s
	};
}
var U = Math.PI / 8, ne = [
	.18343464249564978,
	.525532409916329,
	.7966664774136267,
	.9602898564975363
], re = [
	.362683783378362,
	.31370664587788727,
	.22238103445337448,
	.10122853629037626
];
function W(e, t, n) {
	let r = 6 * t, i = 1 - n, a = 3 * i * i, o = 6 * i * n, s = 3 * n * n, c = a * (e[r + 2] - e[r]) + o * (e[r + 4] - e[r + 2]) + s * (e[r + 6] - e[r + 4]), l = a * (e[r + 3] - e[r + 1]) + o * (e[r + 5] - e[r + 3]) + s * (e[r + 7] - e[r + 5]);
	return Math.hypot(c, l);
}
function G(e, t, n = 1) {
	let r = n / 2, i = 0;
	for (let n = 0; n < 4; n++) i += re[n] * (W(e, t, r + r * ne[n]) + W(e, t, r - r * ne[n]));
	return i * r;
}
function ie(e, t, n, r, i) {
	let a = 6 * t, o = 1 - n, s = o * o * o, c = 3 * o * o * n, l = 3 * o * n * n, u = n * n * n;
	r[i] = s * e[a] + c * e[a + 2] + l * e[a + 4] + u * e[a + 6], r[i + 1] = s * e[a + 1] + c * e[a + 3] + l * e[a + 5] + u * e[a + 7];
}
function K(e, t, n) {
	let r = 6 * t, i = n ? r + 6 : r, a = n ? -1 : 1;
	for (let t of n ? [
		4,
		2,
		0
	] : [
		2,
		4,
		6
	]) {
		let n = a * (e[r + t] - e[i]), o = a * (e[r + t + 1] - e[i + 1]);
		if (n * n + o * o > 1e-18) return [n, o];
	}
	return null;
}
function ae(e, t = U) {
	let n = e.pts, r = (n.length / 2 - 1) / 3, i = [];
	for (let e = 0; e < r; e++) G(n, e) > 1e-9 && i.push(e);
	if (i.length === 0) return [];
	let a = /* @__PURE__ */ new Set(), o = (e, r) => {
		let i = K(n, e, !0), o = K(n, r, !1);
		!i || !o || Math.abs(Math.atan2(i[0] * o[1] - i[1] * o[0], i[0] * o[0] + i[1] * o[1])) > t && a.add(r);
	};
	for (let e = 0; e + 1 < i.length; e++) o(i[e], i[e + 1]);
	return e.closed && i.length > 1 && o(i[i.length - 1], i[0]), [...a].sort((e, t) => e - t);
}
function oe(e, t, n, r) {
	if (n <= 0) return 0;
	if (n >= r) return 1;
	let i = 0, a = 1, o = n / r;
	for (let s = 0; s < 12; s++) {
		let s = G(e, t, o) - n;
		if (Math.abs(s) < 1e-10 * r + 1e-14) break;
		s > 0 ? a = o : i = o;
		let c = W(e, t, o), l = c > 1e-12 ? o - s / c : (i + a) / 2;
		l > i && l < a || (l = (i + a) / 2), o = l;
	}
	return o;
}
function se(e, t = 64, n = U) {
	let r = e.pts, i = (r.length / 2 - 1) / 3, a = new Float64Array(2 * t), o = () => {
		for (let e = 0; e < t; e++) a[2 * e] = r[0], a[2 * e + 1] = r[1];
		return a;
	};
	if (i < 1) return o();
	let s = Array(i), c = 0;
	for (let e = 0; e < i; e++) s[e] = G(r, e), c += s[e];
	if (c < 1e-12) return o();
	let l = ae(e, n), u = e.closed ? l.length > 0 ? l : [0] : [.../* @__PURE__ */ new Set([
		0,
		...l,
		i
	])].sort((e, t) => e - t), d = [];
	if (e.closed) for (let e = 0; e < u.length; e++) {
		let t = u[e], n = e + 1 < u.length ? u[e + 1] : u[0] + i;
		d.push([t, n]);
	}
	else for (let e = 0; e + 1 < u.length; e++) d.push([u[e], u[e + 1]]);
	let f = d.map(([e, t]) => {
		let n = 0;
		for (let r = e; r < t; r++) n += s[r % i];
		return n;
	}), p = e.closed ? t : t - 1;
	if (d.length > p) throw Error(`morphicons: N=${t} too small (${d.length} runs)`);
	let m = f.reduce((e, t) => e + t, 0) || 1, h = f.map((e) => p * e / m), g = h.map((e) => Math.max(1, Math.floor(e))), _ = p - g.reduce((e, t) => e + t, 0);
	if (_ > 0) {
		let e = h.map((e, t) => [Math.round((e - Math.floor(e)) * 1e9), t]).sort((e, t) => t[0] - e[0] || e[1] - t[1]);
		for (let t = 0; t < _; t++) g[e[t % g.length][1]]++;
	}
	for (; _ < 0;) {
		let e = 0;
		for (let t = 1; t < g.length; t++) g[t] > g[e] && (e = t);
		if (g[e] <= 1) break;
		g[e]--, _++;
	}
	let v = 0;
	for (let e = 0; e < d.length; e++) {
		let [t, n] = d[e], o = g[e], c = f[e], l = t % i * 6;
		a[2 * v] = r[l], a[2 * v + 1] = r[l + 1], v++;
		let u = t, p = 0;
		for (let e = 1; e < o; e++) {
			let t = c * e / o;
			for (; u < n - 1 && p + s[u % i] < t;) p += s[u % i], u++;
			let l = u % i, d = s[l];
			ie(r, l, d > 1e-12 ? oe(r, l, t - p, d) : 0, a, 2 * v), v++;
		}
	}
	if (!e.closed) {
		let e = 6 * i;
		a[2 * v] = r[e], a[2 * v + 1] = r[e + 1];
	}
	return a;
}
function q(e, t = 64) {
	return E(e).map((e) => ({
		pts: se(e, t),
		closed: e.closed
	}));
}
var ce = class {
	x = 1;
	v = 0;
	k = 250;
	c = 24;
	config(e, t) {
		this.k = e, this.c = t;
	}
	start() {
		this.x = 0, this.v > 14 && (this.v = 14), this.v < -14 && (this.v = -14);
	}
	step(e) {
		let t = Math.max(1, Math.min(16, Math.ceil(e / (1 / 240)))), n = e / t;
		for (let e = 0; e < t; e++) {
			let e = this.k * (1 - this.x) - this.c * this.v;
			this.v += e * n, this.x += this.v * n;
		}
		return Math.abs(1 - this.x) < .001 && Math.abs(this.v) < .02;
	}
}, J = {
	smooth: {
		k: 170,
		c: 26
	},
	snappy: {
		k: 420,
		c: 30
	},
	bouncy: {
		k: 300,
		c: 14
	}
}, Y = /* @__PURE__ */ new Set(), X = 0, Z = -1;
function le(e) {
	let t = Z < 0 ? 0 : Math.min(Math.max((e - Z) / 1e3, 0), .1);
	Z = e;
	for (let e of [...Y]) e(t);
	Y.size > 0 ? X = requestAnimationFrame(le) : (X = 0, Z = -1);
}
function ue(e) {
	Y.add(e), X === 0 && (Z = -1, X = requestAnimationFrame(le));
}
function de(e) {
	Y.delete(e), Y.size === 0 && X !== 0 && (cancelAnimationFrame(X), X = 0, Z = -1);
}
var fe = /* @__PURE__ */ new WeakMap(), pe = /* @__PURE__ */ new WeakMap(), me = /* @__PURE__ */ new WeakMap();
function Q(e) {
	if (typeof e == "string") return q(e);
	let t = fe.get(e);
	return t || (t = q(e), fe.set(e, t)), t;
}
function $(e) {
	if (typeof e == "string") return e;
	let t = pe.get(e);
	return t || (t = g(E(e)), pe.set(e, t)), t;
}
function he(e, t) {
	if (typeof e == "string" || typeof t == "string") return H(Q(e), Q(t));
	let n = me.get(e);
	n || (n = /* @__PURE__ */ new WeakMap(), me.set(e, n));
	let r = n.get(t);
	return r || (r = H(Q(e), Q(t)), n.set(t, r)), r;
}
function ge(e) {
	if (typeof e == "string") return J[e];
	let t = J.snappy;
	return {
		k: e?.stiffness ?? t.k,
		c: e?.damping ?? t.c
	};
}
function _e(e, t, n) {
	let r = new ce(), i = n?.reducedMotion ?? "never", a = t, o = !0, s = null, c = null, l = null, u = 1, d = !1, f = !1;
	e.setAttribute("d", $(t));
	let p = (t) => {
		let n = s, r = c, i = l;
		!n || !r || !i || (u = t, O(n, t, r), e.setAttribute("d", m(r, i)));
	}, h = () => {
		d && (d = !1, de(g));
	}, g = (e) => {
		let t = r.step(e);
		p(r.x), t && (h(), _());
	}, _ = () => {
		o = !0, s = null, c = null, l = null, u = 1, r.x = 1, r.v = 0, e.setAttribute("d", $(a));
	}, v = () => {
		let e = s, t = c;
		return o || !e || !t ? Q(a) : t.map((t, n) => ({
			pts: Float64Array.from(t),
			closed: e.items[n].closed
		}));
	}, y = (e) => {
		s = o ? he(a, e) : H(v(), Q(e)), c = D(s), l = s.items.map((e) => e.closed), a = e, o = !1;
	}, b = (e) => {
		h(), a = e, _();
	}, x = () => i === "always" ? !0 : i !== "user" || typeof matchMedia > "u" ? !1 : matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? !1, S = (e, t) => {
		if (f) return;
		let n = !o && s !== null && e === a;
		h(), r.v = 0, n || y(e), p(t);
	};
	return {
		morphTo(e, t) {
			if (f || e === a && (o || d)) return;
			if (x()) {
				b(e);
				return;
			}
			let { k: n, c: i } = ge(t);
			r.config(n, i), y(e), r.start(), d || (d = !0, ue(g));
		},
		set(e) {
			f || b(e);
		},
		seek: S,
		get progress() {
			return o ? 1 : u;
		},
		set progress(e) {
			f || S(a, e);
		},
		get reducedMotion() {
			return i;
		},
		set reducedMotion(e) {
			i = e;
		},
		destroy() {
			h(), f = !0, s = null, c = null, l = null;
		}
	};
}
//#endregion
//#region node_modules/morphicons/dist/vue.js
function ve(e, t, n) {
	if (n <= 0) return $(e);
	if (n >= 1) return $(t);
	let r = H(q(e), q(t)), i = D(r);
	return O(r, n, i), m(i, r.items.map((e) => e.closed));
}
var ye = n({
	name: "MorphIcon",
	props: {
		icon: {
			type: [String, Array],
			default: void 0
		},
		from: {
			type: [String, Array],
			default: void 0
		},
		to: {
			type: [String, Array],
			default: void 0
		},
		progress: {
			type: Number,
			default: void 0
		},
		spring: {
			type: [String, Object],
			default: void 0
		},
		reducedMotion: {
			type: String,
			default: "never"
		},
		size: {
			type: [Number, String],
			default: 24
		},
		color: {
			type: String,
			default: "currentColor"
		},
		strokeWidth: {
			type: [Number, String],
			default: 2
		},
		absoluteStrokeWidth: {
			type: Boolean,
			default: !1
		},
		label: {
			type: String,
			default: void 0
		}
	},
	setup(e, { expose: t }) {
		let n = (() => {
			let { icon: t, from: n, to: r, progress: i } = e;
			if (n !== void 0 && r !== void 0) return ve(n, r, i ?? 0);
			let a = t ?? n ?? r;
			return a === void 0 ? "" : $(a);
		})(), i = c(null), s = null, l = !1, d = !1, f = null, p = e.icon, m = e.from !== void 0 && e.to !== void 0, h = (t) => {
			if (s) return s;
			let n = i.value;
			return l || !n ? null : (s = _e(n, t, { reducedMotion: e.reducedMotion }), s);
		};
		return o(() => {
			let t = i.value, { icon: n, from: r, to: a, progress: o } = e, c = r !== void 0 && a !== void 0, l = n ?? r ?? a;
			if (!t || l === void 0) return;
			let u = _e(t, c ? r : l, { reducedMotion: e.reducedMotion });
			if (s = u, c) {
				f = [r, a];
				let e = o ?? 0;
				e <= 0 ? u.set(r) : e >= 1 ? u.set(a) : (u.seek(a, e), d = !0);
			}
		}), a(() => {
			l = !0, s?.destroy(), s = null, d = !1, f = null;
		}), u(() => e.reducedMotion, (e) => {
			s && (s.reducedMotion = e);
		}), u(() => [
			e.icon,
			e.from,
			e.to
		], () => {
			let { icon: t, from: n, to: r } = e, i = n !== void 0 && r !== void 0, a = m && !i;
			m = i;
			let o = t !== p;
			p = t, !i && (t === void 0 || !o && !a || (f = null, d = !1, s ? (s.reducedMotion = e.reducedMotion, s.morphTo(t, e.spring)) : h(t)));
		}), u(() => [
			e.from,
			e.to,
			e.progress
		], () => {
			let { from: t, to: n, progress: r } = e;
			if (t === void 0 || n === void 0) return;
			let i = s ?? h(t);
			if (!i) return;
			let a = r ?? 0;
			(!f || f[0] !== t || f[1] !== n) && (f = [t, n], d = !1), a <= 0 ? (i.set(t), d = !1) : a >= 1 ? (i.set(n), d = !1) : (d ||= (i.set(t), !0), i.seek(n, a));
		}), t({
			morphTo: (t, n) => {
				f = null, d = !1, s ? s.morphTo(t, n ?? e.spring) : h(t);
			},
			set: (e) => {
				f = null, d = !1, s ? s.set(e) : h(e);
			}
		}), () => {
			let t = e.absoluteStrokeWidth ? Number(e.strokeWidth) * 24 / Number(e.size) : e.strokeWidth;
			return r("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: e.size,
				height: e.size,
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: e.color,
				"stroke-width": t,
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				role: e.label ? "img" : void 0,
				"aria-hidden": e.label ? void 0 : "true"
			}, [e.label ? r("title", e.label) : null, r("path", {
				ref: i,
				d: n
			})]);
		};
	}
}), be = /* @__PURE__ */ n({
	__name: "MorphIcon",
	props: {
		icon: {},
		from: {},
		to: {},
		progress: {},
		spring: {},
		reducedMotion: {},
		size: {},
		color: {},
		strokeWidth: {},
		absoluteStrokeWidth: { type: Boolean },
		label: {}
	},
	setup(n) {
		let r = /* @__PURE__ */ new Set([
			"path",
			"circle",
			"rect",
			"line",
			"polyline",
			"polygon",
			"ellipse"
		]), a = n, o = /* @__PURE__ */ new WeakMap(), c = e(() => f(a.icon)), u = e(() => f(a.from)), d = e(() => f(a.to));
		function f(e) {
			if (e == null) return;
			if (typeof e == "string" || Array.isArray(e)) return e;
			if (typeof e != "object" || !("render" in e) || typeof e.render != "function") return;
			let t = o.get(e);
			if (t !== void 0) return t;
			let n = p(e.render.toString());
			if (n !== void 0) return o.set(e, n), n;
		}
		function p(e) {
			let t = m(e);
			return t.length ? t : void 0;
		}
		function m(e) {
			let t = [], n = /(\w+)\(\s*["']([a-z]+)["']\s*,\s*(\{)/g, i;
			for (; (i = n.exec(e)) !== null;) {
				let n = i[2];
				if (n === void 0 || !r.has(n)) continue;
				let a = g(e, i.index + i[0].lastIndexOf("{"));
				if (!a) continue;
				let o = h(a);
				o && t.push([n, o]);
			}
			return t;
		}
		function h(e) {
			let t;
			try {
				t = Function(`return ${e}`)();
			} catch {
				return;
			}
			if (!t || Array.isArray(t)) return;
			let n = {};
			for (let [e, r] of Object.entries(t)) {
				if (typeof r == "string" || typeof r == "number") {
					n[e] = r;
					continue;
				}
				typeof r == "boolean" && (n[e] = +!!r);
			}
			return Object.keys(n).length ? n : void 0;
		}
		function g(e, t) {
			let n = 0, r = !1, i = "", a = !1;
			for (let o = t; o < e.length; o += 1) {
				let s = e[o];
				if (r) {
					if (a) {
						a = !1;
						continue;
					}
					if (s === "\\") {
						a = !0;
						continue;
					}
					s === i && (r = !1);
					continue;
				}
				if (s === "\"" || s === "'" || s === "`") {
					r = !0, i = s;
					continue;
				}
				if (s === "{") n += 1;
				else if (s === "}" && (--n, n === 0)) return e.slice(t, o + 1);
			}
		}
		return (e, n) => (s(), t(l(ye), i(e.$attrs, {
			icon: c.value,
			from: u.value,
			to: d.value,
			progress: a.progress,
			spring: a.spring,
			"reduced-motion": a.reducedMotion,
			size: a.size,
			color: a.color,
			"stroke-width": a.strokeWidth,
			"absolute-stroke-width": a.absoluteStrokeWidth,
			label: a.label
		}), null, 16, [
			"icon",
			"from",
			"to",
			"progress",
			"spring",
			"reduced-motion",
			"size",
			"color",
			"stroke-width",
			"absolute-stroke-width",
			"label"
		]));
	}
});
//#endregion
export { be as default };
