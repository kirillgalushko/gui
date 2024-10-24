import{s as i,e as N,C as f,D as A,E as R,F as j,o as B,b as O,g as K,n as T,j as X,d as S,G as h,H as v}from"./vue.esm-bundler-CDnL0_Xs.js";import{C as $}from"./Card-26ca1X5O.js";import{T as G}from"./Text-dykeEIOt.js";import{G as k}from"./Gap-DZxqRMcI.js";import{B as E}from"./Button-Des2aRlc.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";const H=(n,s)=>{const e=i([]),o=i();return{tabs:e,selectedTab:o,registerTab:t=>{t.getAttribute("data-name")===n&&(o.value=t),e.value.length||(o.value=t),e.value.push(t)},selectTab:t=>{o.value=t;const c=t.getAttribute("data-name");c&&s(c)}}},F=N({__name:"Tabs",props:{value:{},onChange:{type:Function},stretched:{type:Boolean}},setup(n){const s=i(!0),e=n,o=a=>{s.value=!1,e.onChange(a)},l=H(e.value,o);f("tabs",l),f("stretched",e.stretched);const r=i(null),t=i({width:"0px",transform:"translateX(0px)"}),c=()=>{const a=l.selectedTab.value;a&&(t.value={width:`${a.offsetWidth}px`,transform:`translateX(${a.offsetLeft}px)`})};return A(()=>{c()}),R(()=>{c(),r.value=new ResizeObserver(c),l.tabs.value.forEach(a=>{var d;(d=r.value)==null||d.observe(a)})}),j(()=>{var a;(a=r.value)==null||a.disconnect()}),(a,d)=>(B(),O("div",{class:T(["tabs",{stretched:e.stretched}])},[K("div",{class:T(["slider",{animated:!s.value}]),style:X(t.value)},null,6),S(a.$slots,"default",{},void 0,!0)],2))}}),m=D(F,[["__scopeId","data-v-1615c5ee"]]);F.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"value",required:!0,type:{name:"string"}},{name:"onChange",required:!0,type:{name:"TSFunctionType"}},{name:"stretched",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Tabs/Tabs.vue"]};const L=["data-name"],q=N({__name:"Tab",props:{name:{}},setup(n){const s=n,e=i(),o=h("tabs"),l=h("stretched"),{registerTab:r,selectTab:t,selectedTab:c}=o||{},a=()=>{e.value&&(t==null||t(e.value))},d=p=>{p.key==="Enter"&&a()};return R(()=>{e.value&&(r==null||r(e.value))}),(p,M)=>(B(),O("div",{ref_key:"tabRef",ref:e,tabindex:"0",onKeydown:d,onClick:a,"data-name":s.name,class:T(["tab",{stretched:v(l),selected:v(c)===e.value}])},[S(p.$slots,"default",{},void 0,!0)],42,L))}}),z=D(q,[["__scopeId","data-v-3ae8ba37"]]);q.__docgenInfo={exportName:"default",displayName:"Tab",description:"",tags:{},props:[{name:"name",required:!0,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Tabs/Tab.vue"]};const Y={title:"Example/Tabs",component:m,tags:["autodocs"]},I=(n,s)=>`
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
`,b={render:()=>({components:{Tabs:m,Tab:z,Card:$,Text:G,Gap:k,Button:E},setup(){const n=i("Notifications");return{selectedTab:n,handleChangeTab:e=>{n.value=e}}},template:I(`<Tabs :value="selectedTab" :onChange="handleChangeTab">
        <Tab name="Overview">Overview</Tab>
        <Tab name="Reports">Reports</Tab>
        <Tab name="Notifications">Notifications</Tab>
      </Tabs>`,!1)})},u={render:()=>({components:{Tabs:m,Tab:z,Card:$,Text:G,Gap:k,Button:E},setup(){const n=i("Notifications");return{selectedTab:n,handleChangeTab:e=>{n.value=e}}},template:I(`<Tabs stretched :value="selectedTab" :onChange="handleChangeTab">
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
