import{s as d,e as N,C as f,N as A,O as R,P as j,o as B,b as O,g as K,n as T,j as X,d as S,Q as h,D as v}from"./vue.esm-bundler-CPSzUxcr.js";import{C as $}from"./Card-DIkemlql.js";import{T as k}from"./Text-7Xe9tsb0.js";import{G}from"./Gap-c4bhW-c9.js";import{B as D}from"./Button-F_kNKc1L.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";const L=(n,s)=>{const e=d([]),o=d();return{tabs:e,selectedTab:o,registerTab:t=>{t.getAttribute("data-name")===n&&(o.value=t),e.value.length||(o.value=t),e.value.push(t)},selectTab:t=>{o.value=t;const c=t.getAttribute("data-name");c&&s(c)}}},q=N({__name:"Tabs",props:{value:{},onChange:{type:Function},stretched:{type:Boolean}},setup(n){const s=d(!0),e=n,o=a=>{s.value=!1,e.onChange(a)},i=L(e.value,o);f("tabs",i),f("stretched",e.stretched);const r=d(null),t=d({width:"0px",transform:"translateX(0px)"}),c=()=>{const a=i.selectedTab.value;a&&(t.value={width:`${a.offsetWidth}px`,transform:`translateX(${a.offsetLeft}px)`})};return A(()=>{c()}),R(()=>{c(),r.value=new ResizeObserver(c),i.tabs.value.forEach(a=>{var l;(l=r.value)==null||l.observe(a)})}),j(()=>{var a;(a=r.value)==null||a.disconnect()}),(a,l)=>(B(),O("div",{class:T(["tabs",{stretched:e.stretched}])},[K("div",{class:T(["slider",{animated:!s.value}]),style:X(t.value)},null,6),S(a.$slots,"default",{},void 0,!0)],2))}}),m=E(q,[["__scopeId","data-v-1615c5ee"]]);q.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"value",required:!0,type:{name:"string"}},{name:"onChange",required:!0,type:{name:"TSFunctionType"}},{name:"stretched",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Tabs/Tabs.vue"]};const M=["data-name"],z=N({__name:"Tab",props:{name:{}},setup(n){const s=n,e=d(),o=h("tabs"),i=h("stretched"),{registerTab:r,selectTab:t,selectedTab:c}=o||{},a=()=>{e.value&&(t==null||t(e.value))},l=p=>{p.key==="Enter"&&a()};return R(()=>{e.value&&(r==null||r(e.value))}),(p,P)=>(B(),O("div",{ref_key:"tabRef",ref:e,tabindex:"0",onKeydown:l,onClick:a,"data-name":s.name,class:T(["tab",{stretched:v(i),selected:v(c)===e.value}])},[S(p.$slots,"default",{},void 0,!0)],42,M))}}),F=E(z,[["__scopeId","data-v-62aa79bd"]]);z.__docgenInfo={exportName:"default",displayName:"Tab",description:"",tags:{},props:[{name:"name",required:!0,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Tabs/Tab.vue"]};const Y={title:"Example/Tabs",component:m,tags:["autodocs"]},I=(n,s)=>`
  <Card ${s?"stretched":""} :padding="16" :borderRadius="12">
      ${n}
    <Gap direction="vertical" :default="4" />
    <Text typography="title-2-semibold">{{selectedTab}}</Text>
    <Text typography="paragraph-1-semibold" mode="secondary">Total Revenue</Text>
    <Gap direction="vertical" :default="2" />
    <Text typography="title-1-semibold"><b>$223.89</b></Text>
    <Gap direction="vertical" :default="4" />
    <Button mode="accent" ${s?"stretched":""}>Btasdf</Button>
  </Card>
`,b={render:()=>({components:{Tabs:m,Tab:F,Card:$,Text:k,Gap:G,Button:D},setup(){const n=d("Notifications");return{selectedTab:n,handleChangeTab:e=>{n.value=e}}},template:I(`<Tabs :value="selectedTab" :onChange="handleChangeTab">
        <Tab name="Overview">Overview</Tab>
        <Tab name="Reports">Reports</Tab>
        <Tab name="Notifications">Notifications</Tab>
      </Tabs>`,!1)})},u={render:()=>({components:{Tabs:m,Tab:F,Card:$,Text:k,Gap:G,Button:D},setup(){const n=d("Notifications");return{selectedTab:n,handleChangeTab:e=>{n.value=e}}},template:I(`<Tabs stretched :value="selectedTab" :onChange="handleChangeTab">
        <Tab name="Overview">Overview</Tab>
        <Tab name="Reports">Reports</Tab>
        <Tab name="Notifications">Notifications</Tab>
      </Tabs>`,!0)})};var g,C,_;b.parameters={...b.parameters,docs:{...(g=b.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(_=(C=b.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var y,x,w;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(w=(x=u.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const Z=["Default","Stretched"];export{b as Default,u as Stretched,Z as __namedExportsOrder,Y as default};
