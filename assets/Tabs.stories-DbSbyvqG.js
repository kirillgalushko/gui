import{r as o,k as H,U as w,W as L,b as q,d as M,o as z,c as D,a as U,x as f,v as X,j as E,S as y,H as _}from"./vue.esm-bundler-IF9MMzN9.js";import{C as h}from"./Card-1TuR1z24.js";import{T as g}from"./Text-CzGbCvHO.js";import{G as C}from"./Gap-YMwGCiZN.js";import{B as I}from"./Button-BZT8NRrV.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{d as V,a as J,b as P}from"./IconHome2Outline-u3nYACSv.js";import"./Loader-NvPINv2Z.js";import"./IconAccessibleFilled-BfHDHi1J.js";const Q=(a,s)=>{const e=o([]),c=o();return{tabs:e,selectedTab:c,registerTab:n=>{n.getAttribute("data-name")===a&&(c.value=n),e.value.length||(c.value=n),e.value.push(n)},selectTab:n=>{c.value=n;const d=n.getAttribute("data-name");d&&s(d)}}},W=H({__name:"Tabs",props:{value:{},onChange:{type:Function},stretched:{type:Boolean}},setup(a){const s=o(!0),e=a,c=t=>{s.value=!1,e.onChange(t)},i=Q(e.value,c);w("tabs",i),w("stretched",e.stretched);const l=o(null),n=o(null),d=o({width:"0px",transform:"translateX(0px)"}),b=()=>{const t=i.selectedTab.value;t&&(d.value={width:`${t.offsetWidth}px`,transform:`translateX(${t.offsetLeft}px)`})};return L(()=>{b()}),q(()=>{b(),l.value=new ResizeObserver(b),n.value=new MutationObserver(b),i.tabs.value.forEach(t=>{var r,v;(r=l.value)==null||r.observe(t),(v=n.value)==null||v.observe(t,{childList:!0,subtree:!0})})}),M(()=>{var t,r;(t=l.value)==null||t.disconnect(),(r=n.value)==null||r.disconnect()}),(t,r)=>(z(),D("div",{class:f(["tabs",{stretched:e.stretched}])},[U("div",{class:f(["slider",{animated:!s.value}]),style:X(d.value)},null,6),E(t.$slots,"default",{},void 0,!0)],2))}}),m=F(W,[["__scopeId","data-v-4704f540"]]);W.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"value",required:!0,type:{name:"string"}},{name:"onChange",required:!0,type:{name:"TSFunctionType"}},{name:"stretched",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Tabs/Tabs.vue"]};const Y=["data-name"],j=H({__name:"Tab",props:{name:{}},setup(a){const s=a,e=o(),c=y("tabs"),i=y("stretched"),{registerTab:l,selectTab:n,selectedTab:d}=c||{},b=()=>{e.value&&(n==null||n(e.value))},t=r=>{r.key==="Enter"&&b()};return q(()=>{e.value&&(l==null||l(e.value))}),(r,v)=>(z(),D("div",{ref_key:"tabRef",ref:e,tabindex:"0",onKeydown:t,onClick:b,"data-name":s.name,class:f(["tab",{stretched:_(i),selected:_(d)===e.value}])},[E(r.$slots,"default",{},void 0,!0)],42,Y))}}),O=F(j,[["__scopeId","data-v-26ff5ec9"]]);j.__docgenInfo={exportName:"default",displayName:"Tab",description:"",tags:{},props:[{name:"name",required:!0,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Tabs/Tab.vue"]};const ie={title:"Components/Tabs",component:m,tags:["autodocs"],argTypes:{stretched:{type:"boolean"}}},K=(a,s)=>`
  <Card ${s?"stretched":""} :padding="16" :borderRadius="12">
      ${a}
    <Gap direction="vertical" :default="4" />
    <Text typography="title-3">{{selectedTab}}</Text>
    <Text typography="paragraph-1" color="secondary">Total Revenue</Text>
    <Gap direction="vertical" :default="2" />
    <Text typography="title-2"><b>$223.89</b></Text>
    <Gap direction="vertical" :default="4" />
    <Button mode="accent" ${s?"stretched":""}>Button</Button>
  </Card>
`,u={render:()=>({components:{Tabs:m,Tab:O,Card:h,Text:g,Gap:C,Button:I},setup(){const a=o("Notifications");return{selectedTab:a,handleChangeTab:e=>{a.value=e}}},template:K(`<Tabs :value="selectedTab" :onChange="handleChangeTab">
        <Tab name="Overview">Overview</Tab>
        <Tab name="Reports">Reports</Tab>
        <Tab name="Notifications">Notifications</Tab>
      </Tabs>`,!1)})},T={render:()=>({components:{Tabs:m,Tab:O,Card:h,Text:g,Gap:C,Button:I},setup(){const a=o("Notifications");return{selectedTab:a,handleChangeTab:e=>{a.value=e}}},template:K(`<Tabs stretched :value="selectedTab" :onChange="handleChangeTab">
        <Tab name="Overview">Overview</Tab>
        <Tab name="Reports">Reports</Tab>
        <Tab name="Notifications">Notifications</Tab>
      </Tabs>`,!0)})},p={render:()=>({components:{Tabs:m,Tab:O,Card:h,Text:g,Gap:C,Button:I,IconHome2Outline:V,IconABOutline:J,IconAbcOutline:P},setup(){const a=o(!1),s=o("Notifications");return{selectedTab:s,handleChangeTab:i=>{s.value=i},isIcons:a,toggleIcons:()=>{a.value=!a.value}}},template:`
      <Tabs :value="selectedTab" :onChange="handleChangeTab">
        <Tab name="Overview">
          <template v-if="!isIcons">Overview</template>
          <IconHome2Outline v-if="isIcons" />
        </Tab>
        <Tab name="Reports">
         <template v-if="!isIcons">Reports</template>
        <IconABOutline v-if="isIcons" />
        </Tab>
        <Tab name="Notifications">
          <template v-if="!isIcons">Notifications</template>
          <IconAbcOutline v-if="isIcons" />
        </Tab>
      </Tabs>
      <br />
      <br />
      <Button @click="toggleIcons">Toggle icons</Button>
      `})};var x,N,B;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(B=(N=u.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var R,S,A;T.parameters={...T.parameters,docs:{...(R=T.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(A=(S=T.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var $,k,G;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tabs,
      Tab,
      Card,
      Text,
      Gap,
      Button,
      IconHome2Outline,
      IconABOutline,
      IconAbcOutline
    },
    setup() {
      const isIcons = ref(false);
      const selectedTab = ref<string>('Notifications');
      const handleChangeTab = (newTab: string) => {
        selectedTab.value = newTab;
      };
      const toggleIcons = () => {
        isIcons.value = !isIcons.value;
      };
      return {
        selectedTab,
        handleChangeTab,
        isIcons,
        toggleIcons
      };
    },
    template: \`
      <Tabs :value="selectedTab" :onChange="handleChangeTab">
        <Tab name="Overview">
          <template v-if="!isIcons">Overview</template>
          <IconHome2Outline v-if="isIcons" />
        </Tab>
        <Tab name="Reports">
         <template v-if="!isIcons">Reports</template>
        <IconABOutline v-if="isIcons" />
        </Tab>
        <Tab name="Notifications">
          <template v-if="!isIcons">Notifications</template>
          <IconAbcOutline v-if="isIcons" />
        </Tab>
      </Tabs>
      <br />
      <br />
      <Button @click="toggleIcons">Toggle icons</Button>
      \`
  })
}`,...(G=(k=p.parameters)==null?void 0:k.docs)==null?void 0:G.source}}};const le=["Default","Stretched","WidthChanges"];export{u as Default,T as Stretched,p as WidthChanges,le as __namedExportsOrder,ie as default};
