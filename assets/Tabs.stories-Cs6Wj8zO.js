import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,M as n,O as r,Q as i,R as a,V as o,W as s,a as c,b as l,ct as u,gt as d,mt as f,vt as p,z as m}from"./iframe-BRZN4f8M.js";import{n as h,t as g}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{G as _,an as v,n as y,sn as b}from"./gui-icons.es-CEoFeAM4.js";import{n as x,t as S}from"./Button-BnZoe71I.js";import{n as C,t as w}from"./Gap-DiSiEy1Z.js";import{n as T,t as E}from"./Text-BkeTCBMw.js";import{n as D,t as O}from"./Card-B8dKHZSo.js";import{n as k,t as A}from"./useResize-qTl-bNm6.js";var j;function M(){return(M=e((()=>{c(),j=(e,t)=>{let n=u([]),r=u();return{tabs:n,selectedTab:r,registerTab:t=>{t.getAttribute(`data-name`)===e&&(r.value=t),n.value.length||(r.value=t),n.value.push(t)},selectTab:e=>{r.value=e;let n=e.getAttribute(`data-name`);n&&t(n)}}}})))()}var N;function P(){return(P=e((()=>{c(),M(),A(),N=r({__name:`Tabs`,props:{value:{},onChange:{},size:{default:`large`},stretched:{type:Boolean}},setup(e){let n=u(!0),r=e,a=j(r.value,e=>{n.value=!1,r.onChange(e)});o(`tabs`,a),o(`stretched`,r.stretched);let c=u(),f=u({width:`0px`,transform:`translateX(0px)`}),h=()=>{let e=a.selectedTab.value;e&&(f.value={width:`${e.offsetWidth}px`,transform:`translateX(${e.offsetLeft}px)`})};return i(()=>{h()}),k(c,h),(e,i)=>(m(),t(`div`,{ref_key:`tabsElementRef`,ref:c,class:d([`tabs`,r.size,{stretched:r.stretched}])},[l(`div`,{class:d([`slider`,{animated:!n.value}]),style:p(f.value)},null,6),s(e.$slots,`default`,{},void 0,!0)],2))}})})))()}var F;function I(){return(I=e((()=>{P(),h(),F=g(N,[[`__scopeId`,`data-v-f076214d`]]),N.__docgenInfo=Object.assign({displayName:N.name??N.__name},{exportName:`default`,displayName:`Tabs`,description:``,tags:{},props:[{name:`value`,required:!0,type:{name:`string`}},{name:`onChange`,required:!0,type:{name:`TSFunctionType`}},{name:`size`,required:!1,type:{name:`ComponentSize`},defaultValue:{func:!1,value:`"large"`}},{name:`stretched`,required:!1,type:{name:`boolean`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Tabs/Tabs.vue`]})})))()}var L,R;function z(){return(z=e((()=>{c(),L=[`data-name`],R=r({__name:`Tab`,props:{name:{}},setup(e){let r=e,i=u(),o=n(`tabs`),c=n(`stretched`),{registerTab:l,selectTab:p,selectedTab:h}=o||{},g=()=>{i.value&&p?.(i.value)},_=e=>{e.key===`Enter`&&g()};return a(()=>{i.value&&l?.(i.value)}),(e,n)=>(m(),t(`div`,{ref_key:`tabRef`,ref:i,tabindex:`0`,onKeydown:_,onClick:g,"data-name":r.name,class:d([`tab`,{stretched:f(c),selected:f(h)===i.value}])},[s(e.$slots,`default`,{},void 0,!0)],42,L))}})})))()}var B;function V(){return(V=e((()=>{z(),h(),B=g(R,[[`__scopeId`,`data-v-7f926b47`]]),R.__docgenInfo=Object.assign({displayName:R.name??R.__name},{exportName:`default`,displayName:`Tab`,description:``,tags:{},props:[{name:`name`,required:!0,type:{name:`string`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Tabs/Tab.vue`]})})))()}var H,U,W,G,K,q,J;function Y(){return(Y=e((()=>{c(),D(),T(),C(),x(),I(),V(),y(),H={title:`Components/Tabs`,component:F,tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`extra-small`,`small`,`medium`,`large`]},stretched:{type:`boolean`}}},U=(e,t)=>`
  <Card ${t?`stretched`:``} :padding="16" :borderRadius="12">
      ${e}
    <Gap direction="vertical" :size="4" />
    <Text typography="title-3">{{selectedTab}}</Text>
    <Text typography="paragraph-1" color="secondary">Total Revenue</Text>
    <Gap direction="vertical" :size="2" />
    <Text typography="title-2"><b>$223.89</b></Text>
    <Gap direction="vertical" :size="4" />
    <Button mode="contrast" ${t?`stretched`:``}>Button</Button>
  </Card>
`,W={render:()=>({components:{Tabs:F,Tab:B,Card:O,Text:E,Gap:w,Button:S},setup(){let e=u(`Notifications`);return{selectedTab:e,handleChangeTab:t=>{e.value=t}}},template:U(`<Tabs :value="selectedTab" :onChange="handleChangeTab">
        <Tab name="Overview">Overview</Tab>
        <Tab name="Reports">Reports</Tab>
        <Tab name="Notifications">Notifications</Tab>
      </Tabs>`,!1)})},G={render:()=>({components:{Tabs:F,Tab:B,Card:O,Text:E,Gap:w,Button:S},setup(){let e=u(`Notifications`);return{selectedTab:e,handleChangeTab:t=>{e.value=t}}},template:U(`<Tabs stretched :value="selectedTab" :onChange="handleChangeTab">
        <Tab name="Overview">Overview</Tab>
        <Tab name="Reports">Reports</Tab>
        <Tab name="Notifications">Notifications</Tab>
      </Tabs>`,!0)})},K={render:()=>({components:{Tabs:F,Tab:B,Card:O,Text:E,Gap:w,Button:S,IconHome2Outline:_,IconABOutline:b,IconAbcOutline:v},setup(){let e=u(!1),t=u(`Notifications`);return{selectedTab:t,handleChangeTab:e=>{t.value=e},isIcons:e,toggleIcons:()=>{e.value=!e.value}}},template:`
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
      `})},q={render:()=>({components:{Tabs:F,Tab:B,Button:S,Gap:w},setup(){let e=u(`medium`);return{handleChangeTab:t=>{e.value=t},selectedTab:e,sizes:[`extra-small`,`small`,`medium`,`large`]}},template:`
      <div v-for="size in sizes" :key="size">
        <Tabs :size="size" :value="selectedTab" :onChange="handleChangeTab">
          <Tab name="extra-small">Extra small</Tab>
          <Tab name="small">Small</Tab>
          <Tab name="medium">Medium</Tab>
          <Tab name="large">Large</Tab>
        </Tabs>
        <Gap direction="horizontal" :size="2" />
        <Button :size="size">Button</Button>
        <Gap direction="vertical" :size="3" />
      </div>
    `})},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
      const selectedTab = ref<string>("Notifications");
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
      const selectedTab = ref<string>("Notifications");
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
      const selectedTab = ref<string>("Notifications");
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tabs,
      Tab,
      Button,
      Gap
    },
    setup() {
      const selectedTab = ref<string>("medium");
      const handleChangeTab = (newTab: string) => {
        selectedTab.value = newTab;
      };
      const sizes = ["extra-small", "small", "medium", "large"] as const;
      return {
        handleChangeTab,
        selectedTab,
        sizes
      };
    },
    template: \`
      <div v-for="size in sizes" :key="size">
        <Tabs :size="size" :value="selectedTab" :onChange="handleChangeTab">
          <Tab name="extra-small">Extra small</Tab>
          <Tab name="small">Small</Tab>
          <Tab name="medium">Medium</Tab>
          <Tab name="large">Large</Tab>
        </Tabs>
        <Gap direction="horizontal" :size="2" />
        <Button :size="size">Button</Button>
        <Gap direction="vertical" :size="3" />
      </div>
    \`
  })
}`,...q.parameters?.docs?.source}}},J=[`Default`,`Stretched`,`WidthChanges`,`Sizes`]})))()}Y();export{W as Default,q as Sizes,G as Stretched,K as WidthChanges,J as __namedExportsOrder,H as default};