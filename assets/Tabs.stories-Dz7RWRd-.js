import{r as o,k as G,W as y,Y as j,o as E,c as H,a as K,x as m,v as V,j as q,V as _,b as X,H as w}from"./vue.esm-bundler-CfgtLz7v.js";import{C as f}from"./Card-BYwsL-C2.js";import{T as v}from"./Text-DenUDnbq.js";import{G as h}from"./Gap-DvFriKo2.js";import{B as g}from"./Button-CDoGiVit.js";import{u as L}from"./useResize-Zg8B_z5R.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{d as M,a as Y,b as J}from"./IconHome2Outline-BkTyk640.js";import"./Loader-NZg-vdJJ.js";import"./IconAccessibleFilled-CySfqBps.js";const P=(a,n)=>{const e=o([]),r=o();return{tabs:e,selectedTab:r,registerTab:t=>{t.getAttribute("data-name")===a&&(r.value=t),e.value.length||(r.value=t),e.value.push(t)},selectTab:t=>{r.value=t;const l=t.getAttribute("data-name");l&&n(l)}}},F=G({__name:"Tabs",props:{value:{},onChange:{type:Function},stretched:{type:Boolean}},setup(a){const n=o(!0),e=a,r=s=>{n.value=!1,e.onChange(s)},c=P(e.value,r);y("tabs",c),y("stretched",e.stretched);const i=o(),t=o({width:"0px",transform:"translateX(0px)"}),l=()=>{const s=c.selectedTab.value;s&&(t.value={width:`${s.offsetWidth}px`,transform:`translateX(${s.offsetLeft}px)`})};return j(()=>{l()}),L(i,l),(s,I)=>(E(),H("div",{ref_key:"tabsElementRef",ref:i,class:m(["tabs",{stretched:e.stretched}])},[K("div",{class:m(["slider",{animated:!n.value}]),style:V(t.value)},null,6),q(s.$slots,"default",{},void 0,!0)],2))}}),T=D(F,[["__scopeId","data-v-3fdfe4f3"]]);F.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"value",required:!0,type:{name:"string"}},{name:"onChange",required:!0,type:{name:"TSFunctionType"}},{name:"stretched",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Tabs/Tabs.vue"]};const Q=["data-name"],W=G({__name:"Tab",props:{name:{}},setup(a){const n=a,e=o(),r=_("tabs"),c=_("stretched"),{registerTab:i,selectTab:t,selectedTab:l}=r||{},s=()=>{e.value&&(t==null||t(e.value))},I=p=>{p.key==="Enter"&&s()};return X(()=>{e.value&&(i==null||i(e.value))}),(p,U)=>(E(),H("div",{ref_key:"tabRef",ref:e,tabindex:"0",onKeydown:I,onClick:s,"data-name":n.name,class:m(["tab",{stretched:w(c),selected:w(l)===e.value}])},[q(p.$slots,"default",{},void 0,!0)],42,Q))}}),C=D(W,[["__scopeId","data-v-26ff5ec9"]]);W.__docgenInfo={exportName:"default",displayName:"Tab",description:"",tags:{},props:[{name:"name",required:!0,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Tabs/Tab.vue"]};const le={title:"Components/Tabs",component:T,tags:["autodocs"],argTypes:{stretched:{type:"boolean"}}},z=(a,n)=>`
  <Card ${n?"stretched":""} :padding="16" :borderRadius="12">
      ${a}
    <Gap direction="vertical" :default="4" />
    <Text typography="title-3">{{selectedTab}}</Text>
    <Text typography="paragraph-1" color="secondary">Total Revenue</Text>
    <Gap direction="vertical" :default="2" />
    <Text typography="title-2"><b>$223.89</b></Text>
    <Gap direction="vertical" :default="4" />
    <Button mode="accent" ${n?"stretched":""}>Button</Button>
  </Card>
`,d={render:()=>({components:{Tabs:T,Tab:C,Card:f,Text:v,Gap:h,Button:g},setup(){const a=o("Notifications");return{selectedTab:a,handleChangeTab:e=>{a.value=e}}},template:z(`<Tabs :value="selectedTab" :onChange="handleChangeTab">
        <Tab name="Overview">Overview</Tab>
        <Tab name="Reports">Reports</Tab>
        <Tab name="Notifications">Notifications</Tab>
      </Tabs>`,!1)})},b={render:()=>({components:{Tabs:T,Tab:C,Card:f,Text:v,Gap:h,Button:g},setup(){const a=o("Notifications");return{selectedTab:a,handleChangeTab:e=>{a.value=e}}},template:z(`<Tabs stretched :value="selectedTab" :onChange="handleChangeTab">
        <Tab name="Overview">Overview</Tab>
        <Tab name="Reports">Reports</Tab>
        <Tab name="Notifications">Notifications</Tab>
      </Tabs>`,!0)})},u={render:()=>({components:{Tabs:T,Tab:C,Card:f,Text:v,Gap:h,Button:g,IconHome2Outline:M,IconABOutline:Y,IconAbcOutline:J},setup(){const a=o(!1),n=o("Notifications");return{selectedTab:n,handleChangeTab:c=>{n.value=c},isIcons:a,toggleIcons:()=>{a.value=!a.value}}},template:`
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
      `})};var O,x,N;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(N=(x=d.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var B,R,S;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(S=(R=b.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var k,A,$;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...($=(A=u.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};const de=["Default","Stretched","WidthChanges"];export{d as Default,b as Stretched,u as WidthChanges,de as __namedExportsOrder,le as default};
