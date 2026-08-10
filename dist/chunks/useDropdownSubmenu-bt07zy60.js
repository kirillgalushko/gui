import { ref as g, onScopeDispose as b } from "vue";
const h = 120, D = Symbol("dropdown-submenu"), w = (f = h) => {
  const n = g(!1), e = {
    trigger: !1,
    content: !1
  }, o = {
    trigger: !1,
    content: !1
  };
  let s;
  const t = () => {
    s !== void 0 && (clearTimeout(s), s = void 0);
  }, a = () => {
    t(), n.value = !0;
  }, i = () => {
    t(), e.trigger = !1, e.content = !1, o.trigger = !1, o.content = !1, n.value = !1;
  }, l = () => Object.values(e).some(Boolean) || Object.values(o).some(Boolean), u = () => {
    l() || (t(), s = setTimeout(i, f));
  }, d = () => {
    if (l()) {
      a();
      return;
    }
    u();
  }, m = (c, r) => {
    e[c] = r, d();
  }, v = (c, r) => {
    o[c] = r, d();
  };
  return b(t), {
    shown: n,
    show: a,
    hide: i,
    scheduleHide: u,
    setHovered: m,
    setFocused: v
  };
};
export {
  D as d,
  w as u
};
