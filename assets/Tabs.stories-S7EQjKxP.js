import{r as i,j as N,U as f,W as A,o as R,a as j,e as B,f as S,t as K,x as T,v as U,g as O,S as h,I as v}from"./vue.esm-bundler-0yPEwasB.js";import{C as $}from"./Card-BdTJVfWJ.js";import{T as k}from"./Text-BlXt9zwE.js";import{G}from"./Gap-CY8jS2MP.js";import{B as E}from"./Button-ChVkF-WP.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Loader-BtgERiSB.js";const W=(n,s)=>{const e=i([]),o=i();return{tabs:e,selectedTab:o,registerTab:t=>{t.getAttribute("data-name")===n&&(o.value=t),e.value.length||(o.value=t),e.value.push(t)},selectTab:t=>{o.value=t;const c=t.getAttribute("data-name");c&&s(c)}}},q=N({__name:"Tabs",props:{value:{},onChange:{type:Function},stretched:{type:Boolean}},setup(n){const s=i(!0),e=n,o=a=>{s.value=!1,e.onChange(a)},l=W(e.value,o);f("tabs",l),f("stretched",e.stretched);const r=i(null),t=i({width:"0px",transform:"translateX(0px)"}),c=()=>{const a=l.selectedTab.value;a&&(t.value={width:`${a.offsetWidth}px`,transform:`translateX(${a.offsetLeft}px)`})};return A(()=>{c()}),R(()=>{c(),r.value=new ResizeObserver(c),l.tabs.value.forEach(a=>{var d;(d=r.value)==null||d.observe(a)})}),j(()=>{var a;(a=r.value)==null||a.disconnect()}),(a,d)=>(B(),S("div",{class:T(["tabs",{stretched:e.stretched}])},[K("div",{class:T(["slider",{animated:!s.value}]),style:U(t.value)},null,6),O(a.$slots,"default",{},void 0,!0)],2))}}),m=I(q,[["__scopeId","data-v-1615c5ee"]]);q.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"value",required:!0,type:{name:"string"}},{name:"onChange",required:!0,type:{name:"TSFunctionType"}},{name:"stretched",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Tabs/Tabs.vue"]};const X=["data-name"],z=N({__name:"Tab",props:{name:{}},setup(n){const s=n,e=i(),o=h("tabs"),l=h("stretched"),{registerTab:r,selectTab:t,selectedTab:c}=o||{},a=()=>{e.value&&(t==null||t(e.value))},d=p=>{p.key==="Enter"&&a()};return R(()=>{e.value&&(r==null||r(e.value))}),(p,L)=>(B(),S("div",{ref_key:"tabRef",ref:e,tabindex:"0",onKeydown:d,onClick:a,"data-name":s.name,class:T(["tab",{stretched:v(l),selected:v(c)===e.value}])},[O(p.$slots,"default",{},void 0,!0)],42,X))}}),D=I(z,[["__scopeId","data-v-26ff5ec9"]]);z.__docgenInfo={exportName:"default",displayName:"Tab",description:"",tags:{},props:[{name:"name",required:!0,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Tabs/Tab.vue"]};const Z={title:"Example/Tabs",component:m,tags:["autodocs"]},F=(n,s)=>`
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
`,u={render:()=>({components:{Tabs:m,Tab:D,Card:$,Text:k,Gap:G,Button:E},setup(){const n=i("Notifications");return{selectedTab:n,handleChangeTab:e=>{n.value=e}}},template:F(`<Tabs :value="selectedTab" :onChange="handleChangeTab">
        <Tab name="Overview">Overview</Tab>
        <Tab name="Reports">Reports</Tab>
        <Tab name="Notifications">Notifications</Tab>
      </Tabs>`,!1)})},b={render:()=>({components:{Tabs:m,Tab:D,Card:$,Text:k,Gap:G,Button:E},setup(){const n=i("Notifications");return{selectedTab:n,handleChangeTab:e=>{n.value=e}}},template:F(`<Tabs stretched :value="selectedTab" :onChange="handleChangeTab">
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
}`,...(_=(C=u.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var x,y,w;b.parameters={...b.parameters,docs:{...(x=b.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(w=(y=b.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const ee=["Default","Stretched"];export{u as Default,b as Stretched,ee as __namedExportsOrder,Z as default};
