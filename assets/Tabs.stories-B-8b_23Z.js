import{r,k as O,U as f,W as j,b as R,d as K,o as B,c as S,a as M,x as m,v as U,j as $,S as h,H as g}from"./vue.esm-bundler-IF9MMzN9.js";import{C as k}from"./Card-1TuR1z24.js";import{T as G}from"./Text-CzGbCvHO.js";import{G as q}from"./Gap-YMwGCiZN.js";import{B as z}from"./Button-BZT8NRrV.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Loader-NvPINv2Z.js";const W=(n,s)=>{const e=r([]),c=r();return{tabs:e,selectedTab:c,registerTab:a=>{a.getAttribute("data-name")===n&&(c.value=a),e.value.length||(c.value=a),e.value.push(a)},selectTab:a=>{c.value=a;const i=a.getAttribute("data-name");i&&s(i)}}},E=O({__name:"Tabs",props:{value:{},onChange:{type:Function},stretched:{type:Boolean}},setup(n){const s=r(!0),e=n,c=t=>{s.value=!1,e.onChange(t)},u=W(e.value,c);f("tabs",u),f("stretched",e.stretched);const l=r(null),a=r(null),i=r({width:"0px",transform:"translateX(0px)"}),d=()=>{const t=u.selectedTab.value;t&&(i.value={width:`${t.offsetWidth}px`,transform:`translateX(${t.offsetLeft}px)`})};return j(()=>{d()}),R(()=>{d(),l.value=new ResizeObserver(d),a.value=new MutationObserver(d),u.tabs.value.forEach(t=>{var o,T;(o=l.value)==null||o.observe(t),(T=a.value)==null||T.observe(t)})}),K(()=>{var t,o;(t=l.value)==null||t.disconnect(),(o=a.value)==null||o.disconnect()}),(t,o)=>(B(),S("div",{class:m(["tabs",{stretched:e.stretched}])},[M("div",{class:m(["slider",{animated:!s.value}]),style:U(i.value)},null,6),$(t.$slots,"default",{},void 0,!0)],2))}}),v=D(E,[["__scopeId","data-v-ad427e3a"]]);E.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"value",required:!0,type:{name:"string"}},{name:"onChange",required:!0,type:{name:"TSFunctionType"}},{name:"stretched",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Tabs/Tabs.vue"]};const X=["data-name"],F=O({__name:"Tab",props:{name:{}},setup(n){const s=n,e=r(),c=h("tabs"),u=h("stretched"),{registerTab:l,selectTab:a,selectedTab:i}=c||{},d=()=>{e.value&&(a==null||a(e.value))},t=o=>{o.key==="Enter"&&d()};return R(()=>{e.value&&(l==null||l(e.value))}),(o,T)=>(B(),S("div",{ref_key:"tabRef",ref:e,tabindex:"0",onKeydown:t,onClick:d,"data-name":s.name,class:m(["tab",{stretched:g(u),selected:g(i)===e.value}])},[$(o.$slots,"default",{},void 0,!0)],42,X))}}),I=D(F,[["__scopeId","data-v-26ff5ec9"]]);F.__docgenInfo={exportName:"default",displayName:"Tab",description:"",tags:{},props:[{name:"name",required:!0,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Tabs/Tab.vue"]};const Z={title:"Components/Tabs",component:v,tags:["autodocs"],argTypes:{stretched:{type:"boolean"}}},A=(n,s)=>`
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
`,b={render:()=>({components:{Tabs:v,Tab:I,Card:k,Text:G,Gap:q,Button:z},setup(){const n=r("Notifications");return{selectedTab:n,handleChangeTab:e=>{n.value=e}}},template:A(`<Tabs :value="selectedTab" :onChange="handleChangeTab">
        <Tab name="Overview">Overview</Tab>
        <Tab name="Reports">Reports</Tab>
        <Tab name="Notifications">Notifications</Tab>
      </Tabs>`,!1)})},p={render:()=>({components:{Tabs:v,Tab:I,Card:k,Text:G,Gap:q,Button:z},setup(){const n=r("Notifications");return{selectedTab:n,handleChangeTab:e=>{n.value=e}}},template:A(`<Tabs stretched :value="selectedTab" :onChange="handleChangeTab">
        <Tab name="Overview">Overview</Tab>
        <Tab name="Reports">Reports</Tab>
        <Tab name="Notifications">Notifications</Tab>
      </Tabs>`,!0)})};var C,y,_;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(_=(y=b.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var x,w,N;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(N=(w=p.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};const ee=["Default","Stretched"];export{b as Default,p as Stretched,ee as __namedExportsOrder,Z as default};
