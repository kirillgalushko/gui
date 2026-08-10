import { onBeforeUnmount as e, onMounted as t, ref as n, watch as r } from "vue";
//#region src/hooks/useResize.ts
function i(i, a) {
	let o = n(null), s = n(null), c = () => {
		o.value && s.value && (o.value.unobserve(s.value), s.value = null);
	}, l = (e) => {
		!o.value || !e || (o.value.observe(e), s.value = e, a());
	};
	t(() => {
		o.value = new ResizeObserver(a), l(i.value);
	}), r(() => i.value, (e) => {
		c(), l(e);
	}), e(() => {
		c(), o.value?.disconnect();
	});
}
//#endregion
export { i as t };
