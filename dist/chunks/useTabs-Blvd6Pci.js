import { ref as e } from "vue";
//#region src/components/Tabs/useTabs.ts
var t = (t, n) => {
	let r = e([]), i = e();
	return {
		tabs: r,
		selectedTab: i,
		registerTab: (e) => {
			e.getAttribute("data-name") === t && (i.value = e), r.value.length || (i.value = e), r.value.push(e);
		},
		selectTab: (e) => {
			i.value = e;
			let t = e.getAttribute("data-name");
			t && n(t);
		}
	};
};
//#endregion
export { t };
