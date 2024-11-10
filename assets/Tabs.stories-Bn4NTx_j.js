import{r as i,k as N,U as f,W as A,b as R,d as j,o as B,c as S,a as K,x as T,v as U,j as O,S as h,H as v}from"./vue.esm-bundler-IF9MMzN9.js";import{C as $}from"./Card-1TuR1z24.js";import{T as k}from"./Text-CSlgGdGl.js";import{G}from"./Gap-YMwGCiZN.js";import{B as q}from"./Button-BZT8NRrV.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Loader-NvPINv2Z.js";const W=(n,s)=>{const e=i([]),o=i();return{tabs:e,selectedTab:o,registerTab:t=>{t.getAttribute("data-name")===n&&(o.value=t),e.value.length||(o.value=t),e.value.push(t)},selectTab:t=>{o.value=t;const c=t.getAttribute("data-name");c&&s(c)}}},D=N({__name:"Tabs",props:{value:{},onChange:{type:Function},stretched:{type:Boolean}},setup(n){const s=i(!0),e=n,o=a=>{s.value=!1,e.onChange(a)},l=W(e.value,o);f("tabs",l),f("stretched",e.stretched);const r=i(null),t=i({width:"0px",transform:"translateX(0px)"}),c=()=>{const a=l.selectedTab.value;a&&(t.value={width:`${a.offsetWidth}px`,transform:`translateX(${a.offsetLeft}px)`})};return A(()=>{c()}),R(()=>{c(),r.value=new ResizeObserver(c),l.tabs.value.forEach(a=>{var d;(d=r.value)==null||d.observe(a)})}),j(()=>{var a;(a=r.value)==null||a.disconnect()}),(a,d)=>(B(),S("div",{class:T(["tabs",{stretched:e.stretched}])},[K("div",{class:T(["slider",{animated:!s.value}]),style:U(t.value)},null,6),O(a.$slots,"default",{},void 0,!0)],2))}}),m=z(D,[["__scopeId","data-v-1615c5ee"]]);D.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"value",required:!0,type:{name:"string"}},{name:"onChange",required:!0,type:{name:"TSFunctionType"}},{name:"stretched",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Tabs/Tabs.vue"]};const X=["data-name"],E=N({__name:"Tab",props:{name:{}},setup(n){const s=n,e=i(),o=h("tabs"),l=h("stretched"),{registerTab:r,selectTab:t,selectedTab:c}=o||{},a=()=>{e.value&&(t==null||t(e.value))},d=p=>{p.key==="Enter"&&a()};return R(()=>{e.value&&(r==null||r(e.value))}),(p,H)=>(B(),S("div",{ref_key:"tabRef",ref:e,tabindex:"0",onKeydown:d,onClick:a,"data-name":s.name,class:T(["tab",{stretched:v(l),selected:v(c)===e.value}])},[O(p.$slots,"default",{},void 0,!0)],42,X))}}),F=z(E,[["__scopeId","data-v-26ff5ec9"]]);E.__docgenInfo={exportName:"default",displayName:"Tab",description:"",tags:{},props:[{name:"name",required:!0,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Tabs/Tab.vue"]};const Z={title:"Components/Tabs",component:m,tags:["autodocs"]},I=(n,s)=>`
  <Card ${s?"stretched":""} :padding="16" :borderRadius="12">
      ${n}
    <Gap direction="vertical" :default="4" />
    <Text typography="title-3">{{selectedTab}}</Text>
    <Text typography="paragraph-1" color="secondary">Total Revenue</Text>
    <Gap direction="vertical" :default="2" />
    <Text typography="title-2"><b>$223.89</b></Text>
    <Gap direction="vertical" :default="4" />
    <Button mode="accent" ${s?"stretched":""}>Button</Button>
  </Card>
`,u={render:()=>({components:{Tabs:m,Tab:F,Card:$,Text:k,Gap:G,Button:q},setup(){const n=i("Notifications");return{selectedTab:n,handleChangeTab:e=>{n.value=e}}},template:I(`<Tabs :value="selectedTab" :onChange="handleChangeTab">
        <Tab name="Overview">Overview</Tab>
        <Tab name="Reports">Reports</Tab>
        <Tab name="Notifications">Notifications</Tab>
      </Tabs>`,!1)})},b={render:()=>({components:{Tabs:m,Tab:F,Card:$,Text:k,Gap:G,Button:q},setup(){const n=i("Notifications");return{selectedTab:n,handleChangeTab:e=>{n.value=e}}},template:I(`<Tabs stretched :value="selectedTab" :onChange="handleChangeTab">
        <Tab name="Overview">Overview</Tab>
        <Tab name="Reports">Reports</Tab>
        <Tab name="Notifications">Notifications</Tab>
      </Tabs>`,!0)})};var g,C,_;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tabs,
      Tab,
      Card,
      Text,
      Gap,
      Button
    },
    setup() {
      const selectedTab = ref<string>('Notifications');
      const handleChangeTab = (newTab: string) => {
        selectedTab.value = newTab;
      };
      return {
        selectedTab,
        handleChangeTab
      };
    },
    template: getExample(\`<Tabs :value="selectedTab" :onChange="handleChangeTab">
        <Tab name="Overview">Overview</Tab>
        <Tab name="Reports">Reports</Tab>
        <Tab name="Notifications">Notifications</Tab>
      </Tabs>\`, false)
  })
}`,...(_=(C=u.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var y,x,w;b.parameters={...b.parameters,docs:{...(y=b.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tabs,
      Tab,
      Card,
      Text,
      Gap,
      Button
    },
    setup() {
      const selectedTab = ref<string>('Notifications');
      const handleChangeTab = (newTab: string) => {
        selectedTab.value = newTab;
      };
      return {
        selectedTab,
        handleChangeTab
      };
    },
    template: getExample(\`<Tabs stretched :value="selectedTab" :onChange="handleChangeTab">
        <Tab name="Overview">Overview</Tab>
        <Tab name="Reports">Reports</Tab>
        <Tab name="Notifications">Notifications</Tab>
      </Tabs>\`, true)
  })
}`,...(w=(x=b.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const ee=["Default","Stretched"];export{u as Default,b as Stretched,ee as __namedExportsOrder,Z as default};
