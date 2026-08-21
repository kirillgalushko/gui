import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,M as n,O as r,Q as i,R as a,V as o,W as s,a as c,b as l,ct as u,gt as d,mt as f,vt as p,z as m}from"./iframe-DSPFKwNv.js";import{n as h,t as g}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{G as _,an as v,n as y,rn as b}from"./gui-icons.es-BLyOnAQu.js";import{n as x,t as S}from"./Button-BMCIb-MW.js";import{n as C,t as w}from"./Card-CMNAHxXH.js";import{n as T,t as E}from"./Text-BGOG7_PZ.js";import{n as D,t as O}from"./Gap-BztRMGj8.js";import{n as k,t as A}from"./useResize-BhU4Einx.js";import{n as j,t as M}from"./Tooltip-CVR6uXB1.js";var N;function P(){return(P=e((()=>{c(),N=(e,t)=>{let n=u([]),r=u();return{tabs:n,selectedTab:r,registerTab:t=>{t.getAttribute(`data-name`)===e&&(r.value=t),n.value.length||(r.value=t),n.value.push(t)},selectTab:e=>{r.value=e;let n=e.getAttribute(`data-name`);n&&t(n)}}}})))()}var F;function I(){return(I=e((()=>{c(),P(),A(),F=r({__name:`Tabs`,props:{value:{},onChange:{},size:{default:`large`},stretched:{type:Boolean}},setup(e){let n=u(!0),r=e,a=N(r.value,e=>{n.value=!1,r.onChange(e)});o(`tabs`,a),o(`stretched`,r.stretched);let c=u(),f=u({width:`0px`,transform:`translateX(0px)`}),h=()=>{let e=a.selectedTab.value;e&&(f.value={width:`${e.offsetWidth}px`,transform:`translateX(${e.offsetLeft}px)`})};return i(()=>{h()}),k(c,h),(e,i)=>(m(),t(`div`,{ref_key:`tabsElementRef`,ref:c,class:d([`tabs`,r.size,{stretched:r.stretched}])},[l(`div`,{class:d([`slider`,{animated:!n.value}]),style:p(f.value)},null,6),s(e.$slots,`default`,{},void 0,!0)],2))}})})))()}var L;function R(){return(R=e((()=>{I(),h(),L=g(F,[[`__scopeId`,`data-v-34790ea9`]]),F.__docgenInfo=Object.assign({displayName:F.name??F.__name},{exportName:`default`,displayName:`Tabs`,description:``,tags:{},props:[{name:`value`,required:!0,type:{name:`string`}},{name:`onChange`,required:!0,type:{name:`TSFunctionType`}},{name:`size`,required:!1,type:{name:`ComponentSize`},defaultValue:{func:!1,value:`"large"`}},{name:`stretched`,required:!1,type:{name:`boolean`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Tabs/Tabs.vue`]})})))()}var z,B;function V(){return(V=e((()=>{c(),z=[`data-name`],B=r({__name:`Tab`,props:{name:{}},setup(e){let r=e,i=u(),o=n(`tabs`),c=n(`stretched`),{registerTab:l,selectTab:p,selectedTab:h}=o||{},g=()=>{i.value&&p?.(i.value)},_=e=>{e.key===`Enter`&&g()};return a(()=>{i.value&&l?.(i.value)}),(e,n)=>(m(),t(`div`,{ref_key:`tabRef`,ref:i,tabindex:`0`,onKeydown:_,onClick:g,"data-name":r.name,class:d([`tab`,{stretched:f(c),selected:f(h)===i.value}])},[s(e.$slots,`default`,{},void 0,!0)],42,z))}})})))()}var H;function U(){return(U=e((()=>{V(),h(),H=g(B,[[`__scopeId`,`data-v-c5130736`]]),B.__docgenInfo=Object.assign({displayName:B.name??B.__name},{exportName:`default`,displayName:`Tab`,description:``,tags:{},props:[{name:`name`,required:!0,type:{name:`string`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Tabs/Tab.vue`]})})))()}var W,G,K,q,J,Y,X,Z;function Q(){return(Q=e((()=>{c(),C(),T(),D(),x(),j(),R(),U(),y(),W={title:`Components/Tabs`,component:L,tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`extra-small`,`small`,`medium`,`large`]},stretched:{type:`boolean`}}},G=(e,t)=>`
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
`,K={render:()=>({components:{Tabs:L,Tab:H,Card:w,Text:E,Gap:O,Button:S},setup(){let e=u(`Notifications`);return{selectedTab:e,handleChangeTab:t=>{e.value=t}}},template:G(`<Tabs :value="selectedTab" :onChange="handleChangeTab">
        <Tab name="Overview">Overview</Tab>
        <Tab name="Reports">Reports</Tab>
        <Tab name="Notifications">Notifications</Tab>
      </Tabs>`,!1)})},q={render:()=>({components:{Tabs:L,Tab:H,Card:w,Text:E,Gap:O,Button:S},setup(){let e=u(`Notifications`);return{selectedTab:e,handleChangeTab:t=>{e.value=t}}},template:G(`<Tabs stretched :value="selectedTab" :onChange="handleChangeTab">
        <Tab name="Overview">Overview</Tab>
        <Tab name="Reports">Reports</Tab>
        <Tab name="Notifications">Notifications</Tab>
      </Tabs>`,!0)})},J={render:()=>({components:{Tabs:L,Tab:H,Card:w,Text:E,Gap:O,Button:S,IconHome2Outline:_,IconABOutline:v,IconAbcOutline:b},setup(){let e=u(!1),t=u(`Notifications`);return{selectedTab:t,handleChangeTab:e=>{t.value=e},isIcons:e,toggleIcons:()=>{e.value=!e.value}}},template:`
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
      `})},Y={render:()=>({components:{Tabs:L,Tab:H,Tooltip:M,IconHome2Outline:_,IconABOutline:v},setup(){let e=u(`home`);return{selectedTab:e,handleChangeTab:t=>{e.value=t}}},template:`
      <Tabs size="small" :value="selectedTab" :onChange="handleChangeTab">
        <Tab name="home">
          <Tooltip placement="bottom">
            <span><IconHome2Outline /></span>
            <template #popper>Home</template>
          </Tooltip>
        </Tab>
        <Tab name="letters">
          <Tooltip placement="bottom">
            <span><IconABOutline /></span>
            <template #popper>Letters</template>
          </Tooltip>
        </Tab>
      </Tabs>
    `})},X={render:()=>({components:{Tabs:L,Tab:H,Button:S,Gap:O},setup(){let e=u(`medium`);return{handleChangeTab:t=>{e.value=t},selectedTab:e,sizes:[`extra-small`,`small`,`medium`,`large`]}},template:`
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
    `})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tabs,
      Tab,
      Tooltip,
      IconHome2Outline,
      IconABOutline
    },
    setup() {
      const selectedTab = ref<string>("home");
      const handleChangeTab = (newTab: string) => {
        selectedTab.value = newTab;
      };
      return {
        selectedTab,
        handleChangeTab
      };
    },
    template: \`
      <Tabs size="small" :value="selectedTab" :onChange="handleChangeTab">
        <Tab name="home">
          <Tooltip placement="bottom">
            <span><IconHome2Outline /></span>
            <template #popper>Home</template>
          </Tooltip>
        </Tab>
        <Tab name="letters">
          <Tooltip placement="bottom">
            <span><IconABOutline /></span>
            <template #popper>Letters</template>
          </Tooltip>
        </Tab>
      </Tabs>
    \`
  })
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z=[`Default`,`Stretched`,`WidthChanges`,`IconsWithTooltips`,`Sizes`]})))()}Q();export{K as Default,Y as IconsWithTooltips,X as Sizes,q as Stretched,J as WidthChanges,Z as __namedExportsOrder,W as default};