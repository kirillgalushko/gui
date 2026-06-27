import{k as _,E as I,o as i,q as E,z as V,m as O,c as d,j as l,u as p,a as q}from"./vue.esm-bundler-i9X9Ld2b.js";import{d as B}from"./IconExternalLinkOutline-BKYs6On9.js";import{d as $}from"./IconHomeOutline-DSreouaK.js";import{T as x}from"./Text-BVo0AXrY.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconAccessibleFilled-DPtg55nG.js";const C={key:0,class:"link-icon"},H={class:"link-content"},N={key:1,class:"link-icon"},L=_({inheritAttrs:!1,__name:"Link",props:{typography:{default:"inherit"},inline:{type:Boolean,default:!0},underlined:{type:Boolean},disabled:{type:Boolean},enableVisited:{type:Boolean},mode:{default:"accent"},Element:{default:"a"}},setup(n){const e=n,v=I(()=>e.disabled?{"aria-disabled":"true",tabindex:-1,disabled:e.Element==="button"?!0:void 0}:{});return(t,S)=>(i(),E(x,O({...t.$attrs,...v.value},{Element:e.Element,typography:e.typography,color:"inherit",class:["link",`mode-${e.mode}`,{inline:e.inline,underlined:e.underlined,disabled:e.disabled,"enable-visited":e.enableVisited}]}),{default:V(()=>[t.$slots.iconLeft?(i(),d("span",C,[l(t.$slots,"iconLeft",{},void 0,!0)])):p("",!0),q("span",H,[l(t.$slots,"default",{},void 0,!0)]),t.$slots.iconRight?(i(),d("span",N,[l(t.$slots,"iconRight",{},void 0,!0)])):p("",!0)]),_:3},16,["Element","typography","class"]))}}),s=R(L,[["__scopeId","data-v-dc75b493"]]);L.__docgenInfo={exportName:"default",displayName:"Link",description:"",tags:{},props:[{name:"typography",required:!1,type:{name:"Typography"},defaultValue:{func:!1,value:"'inherit'"}},{name:"inline",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"underlined",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"enableVisited",required:!1,type:{name:"boolean"}},{name:"mode",required:!1,type:{name:"union",elements:[{name:'"inherit"'},{name:'"accent"'}]},defaultValue:{func:!1,value:"'accent'"}},{name:"Element",required:!1,type:{name:"union",elements:[{name:'"a"'},{name:'"button"'},{name:'"span"'}]},defaultValue:{func:!1,value:"'a'"}}],slots:[{name:"iconLeft"},{name:"default"},{name:"iconRight"}],sourceFiles:["/home/runner/work/gui/gui/src/components/Link/Link.vue"]};const z={title:"Components/Link",component:s,tags:["autodocs"],argTypes:{inline:{type:"boolean"},underlined:{type:"boolean"},disabled:{type:"boolean"},enableVisited:{type:"boolean"},mode:{control:"select",options:["inherit","accent"]}}},a={args:{href:"#"},render:n=>({components:{Link:s},setup(){return{args:n}},template:'<Link v-bind="args">Открыть ссылку</Link>'})},r={args:{href:"#",underlined:!0},render:n=>({components:{Link:s,IconExternalLinkOutline:B,IconHomeOutline:$},setup(){return{args:n}},template:`
      <Link v-bind="args">
        <template #iconLeft>
          <IconHomeOutline />
        </template>
        Открыть раздел
        <template #iconRight>
          <IconExternalLinkOutline />
        </template>
      </Link>
    `})},o={args:{href:"#",inline:!0,typography:"inherit"},render:n=>({components:{Link:s},setup(){return{args:n}},template:`
      <p>
        Текст до ссылки <Link v-bind="args">inline-ссылка</Link> и текст после нее.
      </p>
    `})};var u,m,c;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    href: '#'
  },
  render: args => ({
    components: {
      Link
    },
    setup() {
      return {
        args
      };
    },
    template: '<Link v-bind="args">Открыть ссылку</Link>'
  })
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var f,g,k;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    href: '#',
    underlined: true
  },
  render: args => ({
    components: {
      Link,
      IconExternalLinkOutline,
      IconHomeOutline
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Link v-bind="args">
        <template #iconLeft>
          <IconHomeOutline />
        </template>
        Открыть раздел
        <template #iconRight>
          <IconExternalLinkOutline />
        </template>
      </Link>
    \`
  })
}`,...(k=(g=r.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var h,y,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    href: '#',
    inline: true,
    typography: 'inherit'
  },
  render: args => ({
    components: {
      Link
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <p>
        Текст до ссылки <Link v-bind="args">inline-ссылка</Link> и текст после нее.
      </p>
    \`
  })
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const F=["Default","WithIcons","Inline"];export{a as Default,o as Inline,r as WithIcons,F as __namedExportsOrder,z as default};
