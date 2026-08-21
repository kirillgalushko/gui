import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,M as n,O as r,W as i,a,gt as o,y as s,z as c}from"./iframe-DSPFKwNv.js";import{n as l,t as u}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{Tt as d,k as f,n as p,x as m,zt as h}from"./gui-icons.es-BLyOnAQu.js";import{n as g,t as _}from"./Button-BMCIb-MW.js";import{i as v,n as y,r as b,t as x}from"./ButtonGroup-6lGIaGGD.js";var S,C;function w(){return(w=e((()=>{a(),v(),S=[`aria-orientation`],C=r({__name:`ButtonGroupSeparator`,props:{orientation:{}},setup(e){let r=e,i=n(b,{orientation:`horizontal`}),a=s(()=>r.orientation?r.orientation:i.orientation===`horizontal`?`vertical`:`horizontal`);return(e,n)=>(c(),t(`div`,{class:o([`button-group-separator`,a.value]),role:`separator`,"aria-orientation":a.value},null,10,S))}})})))()}var T;function E(){return(E=e((()=>{w(),l(),T=u(C,[[`__scopeId`,`data-v-ea7ae8e9`]]),C.__docgenInfo=Object.assign({displayName:C.name??C.__name},{exportName:`default`,displayName:`ButtonGroupSeparator`,description:``,tags:{},props:[{name:`orientation`,required:!1,type:{name:`ButtonGroupOrientation`}}],sourceFiles:[`/home/runner/work/gui/gui/src/components/ButtonGroup/ButtonGroupSeparator.vue`]})})))()}function D(e,n){return c(),t(`span`,k,[i(e.$slots,`default`,{},void 0,!0)])}var O,k,A;function j(){return(j=e((()=>{a(),l(),O={},k={class:`button-group-text`},A=u(O,[[`render`,D],[`__scopeId`,`data-v-63c468a5`]]),O.__docgenInfo=Object.assign({displayName:O.name??O.__name},{displayName:`ButtonGroupText`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/ButtonGroup/ButtonGroupText.vue`]})})))()}var M,N,P,F,I,L,R;function z(){return(z=e((()=>{p(),g(),y(),E(),j(),M={title:`Components/ButtonGroup`,component:x,argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]}},args:{orientation:`horizontal`}},N={render:e=>({components:{Button:_,ButtonGroup:x,ButtonGroupSeparator:T,IconChevronDownOutline:h},setup(){return{args:e}},template:`
      <ButtonGroup v-bind="args" aria-label="Действия с отчетом">
        <Button mode="outline">Archive Report</Button>
        <Button mode="outline">Snooze</Button>
        <Button mode="outline" squared aria-label="Открыть меню">
          <IconChevronDownOutline />
        </Button>
      </ButtonGroup>
    `})},P={render:()=>({components:{Button:_,ButtonGroup:x,ButtonGroupSeparator:T,IconCopyOutline:d},template:`
      <ButtonGroup aria-label="Буфер обмена">
        <Button mode="default">
          <IconCopyOutline />
          Copy
        </Button>
        <ButtonGroupSeparator />
        <Button mode="default">Paste</Button>
      </ButtonGroup>
    `})},F={render:()=>({components:{Button:_,ButtonGroup:x,ButtonGroupSeparator:T,IconChevronDownOutline:h,IconPlusOutline:m},template:`
      <ButtonGroup aria-label="Добавление">
        <Button mode="contrast">
          <IconPlusOutline />
          Button
        </Button>
        <ButtonGroupSeparator />
        <Button mode="contrast" squared aria-label="Открыть меню">
          <IconChevronDownOutline />
        </Button>
      </ButtonGroup>
    `})},I={args:{orientation:`vertical`},render:e=>({components:{Button:_,ButtonGroup:x,IconMinusOutline:f,IconPlusOutline:m},setup(){return{args:e}},template:`
      <ButtonGroup v-bind="args" aria-label="Изменить значение">
        <Button mode="outline" squared aria-label="Увеличить">
          <IconPlusOutline />
        </Button>
        <Button mode="outline" squared aria-label="Уменьшить">
          <IconMinusOutline />
        </Button>
      </ButtonGroup>
    `})},L={render:()=>({components:{Button:_,ButtonGroup:x,ButtonGroupText:A},template:`
      <ButtonGroup aria-label="Цена">
        <ButtonGroupText>$</ButtonGroupText>
        <Button mode="outline">10.00</Button>
      </ButtonGroup>
    `})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button,
      ButtonGroup,
      ButtonGroupSeparator,
      IconChevronDownOutline
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <ButtonGroup v-bind="args" aria-label="Действия с отчетом">
        <Button mode="outline">Archive Report</Button>
        <Button mode="outline">Snooze</Button>
        <Button mode="outline" squared aria-label="Открыть меню">
          <IconChevronDownOutline />
        </Button>
      </ButtonGroup>
    \`
  })
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button,
      ButtonGroup,
      ButtonGroupSeparator,
      IconCopyOutline
    },
    template: \`
      <ButtonGroup aria-label="Буфер обмена">
        <Button mode="default">
          <IconCopyOutline />
          Copy
        </Button>
        <ButtonGroupSeparator />
        <Button mode="default">Paste</Button>
      </ButtonGroup>
    \`
  })
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button,
      ButtonGroup,
      ButtonGroupSeparator,
      IconChevronDownOutline,
      IconPlusOutline
    },
    template: \`
      <ButtonGroup aria-label="Добавление">
        <Button mode="contrast">
          <IconPlusOutline />
          Button
        </Button>
        <ButtonGroupSeparator />
        <Button mode="contrast" squared aria-label="Открыть меню">
          <IconChevronDownOutline />
        </Button>
      </ButtonGroup>
    \`
  })
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: "vertical"
  },
  render: args => ({
    components: {
      Button,
      ButtonGroup,
      IconMinusOutline,
      IconPlusOutline
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <ButtonGroup v-bind="args" aria-label="Изменить значение">
        <Button mode="outline" squared aria-label="Увеличить">
          <IconPlusOutline />
        </Button>
        <Button mode="outline" squared aria-label="Уменьшить">
          <IconMinusOutline />
        </Button>
      </ButtonGroup>
    \`
  })
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button,
      ButtonGroup,
      ButtonGroupText
    },
    template: \`
      <ButtonGroup aria-label="Цена">
        <ButtonGroupText>$</ButtonGroupText>
        <Button mode="outline">10.00</Button>
      </ButtonGroup>
    \`
  })
}`,...L.parameters?.docs?.source}}},R=[`Default`,`WithSeparator`,`Split`,`Vertical`,`WithText`]})))()}z();export{N as Default,F as Split,I as Vertical,P as WithSeparator,L as WithText,R as __namedExportsOrder,M as default};