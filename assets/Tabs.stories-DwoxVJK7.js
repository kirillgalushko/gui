import{t as i,e as N,M as f,N as A,O as R,P as j,o as B,b as O,g as K,n as T,j as M,d as S,Q as h,u as v}from"./vue.esm-bundler-C3G7_qdG.js";import{C as $}from"./Card-Xvv2aSXK.js";import{T as k}from"./Text-BcWia3ov.js";import{G}from"./Gap-CXpl1N-8.js";import{B as E}from"./Button-C0kRA-gD.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Loader-BN2AYAUE.js";const X=(n,s)=>{const e=i([]),o=i();return{tabs:e,selectedTab:o,registerTab:t=>{t.getAttribute("data-name")===n&&(o.value=t),e.value.length||(o.value=t),e.value.push(t)},selectTab:t=>{o.value=t;const c=t.getAttribute("data-name");c&&s(c)}}},z=N({__name:"Tabs",props:{value:{},onChange:{type:Function},stretched:{type:Boolean}},setup(n){const s=i(!0),e=n,o=a=>{s.value=!1,e.onChange(a)},d=X(e.value,o);f("tabs",d),f("stretched",e.stretched);const r=i(null),t=i({width:"0px",transform:"translateX(0px)"}),c=()=>{const a=d.selectedTab.value;a&&(t.value={width:`${a.offsetWidth}px`,transform:`translateX(${a.offsetLeft}px)`})};return A(()=>{c()}),R(()=>{c(),r.value=new ResizeObserver(c),d.tabs.value.forEach(a=>{var l;(l=r.value)==null||l.observe(a)})}),j(()=>{var a;(a=r.value)==null||a.disconnect()}),(a,l)=>(B(),O("div",{class:T(["tabs",{stretched:e.stretched}])},[K("div",{class:T(["slider",{animated:!s.value}]),style:M(t.value)},null,6),S(a.$slots,"default",{},void 0,!0)],2))}}),m=q(z,[["__scopeId","data-v-1615c5ee"]]);z.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"value",required:!0,type:{name:"string"}},{name:"onChange",required:!0,type:{name:"TSFunctionType"}},{name:"stretched",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Tabs/Tabs.vue"]};const L=["data-name"],D=N({__name:"Tab",props:{name:{}},setup(n){const s=n,e=i(),o=h("tabs"),d=h("stretched"),{registerTab:r,selectTab:t,selectedTab:c}=o||{},a=()=>{e.value&&(t==null||t(e.value))},l=p=>{p.key==="Enter"&&a()};return R(()=>{e.value&&(r==null||r(e.value))}),(p,P)=>(B(),O("div",{ref_key:"tabRef",ref:e,tabindex:"0",onKeydown:l,onClick:a,"data-name":s.name,class:T(["tab",{stretched:v(d),selected:v(c)===e.value}])},[S(p.$slots,"default",{},void 0,!0)],42,L))}}),F=q(D,[["__scopeId","data-v-62aa79bd"]]);D.__docgenInfo={exportName:"default",displayName:"Tab",description:"",tags:{},props:[{name:"name",required:!0,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Tabs/Tab.vue"]};const Z={title:"Example/Tabs",component:m,tags:["autodocs"]},I=(n,s)=>`
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
`,b={render:()=>({components:{Tabs:m,Tab:F,Card:$,Text:k,Gap:G,Button:E},setup(){const n=i("Notifications");return{selectedTab:n,handleChangeTab:e=>{n.value=e}}},template:I(`<Tabs :value="selectedTab" :onChange="handleChangeTab">
        <Tab name="Overview">Overview</Tab>
        <Tab name="Reports">Reports</Tab>
        <Tab name="Notifications">Notifications</Tab>
      </Tabs>`,!1)})},u={render:()=>({components:{Tabs:m,Tab:F,Card:$,Text:k,Gap:G,Button:E},setup(){const n=i("Notifications");return{selectedTab:n,handleChangeTab:e=>{n.value=e}}},template:I(`<Tabs stretched :value="selectedTab" :onChange="handleChangeTab">
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
}`,...(w=(x=u.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const ee=["Default","Stretched"];export{b as Default,u as Stretched,ee as __namedExportsOrder,Z as default};
