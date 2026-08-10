import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,L as n,O as r,W as i,Z as a,a as o,b as s,ct as c,ft as l,gt as u,mt as d,ot as f,pt as p,vt as m,y as h,z as g}from"./iframe-CgWRWv5U.js";import{n as _,t as v}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{n as y,t as b}from"./Button-CKiDWYnj.js";import{n as x,t as S}from"./Avatar-C-4ZzI-G.js";import{n as C,t as w}from"./Card-QaOQTy_8.js";var T,E,D,O,k,A;function j(){return(j=e((()=>{o(),T=320,E=.35,D=1.5,O=(e,t,n)=>Math.min(Math.max(e,t),n),k=(e,t,n,r={})=>{let i=Math.hypot(n.width,n.height),a=O(T/Math.max(i,1),E,D),o=(r.maxTilt??7)*a,s=1+((r.scale??1.025)-1)*a,c=O((e-n.left)/Math.max(n.width,1),0,1);return{rotateX:(O((t-n.top)/Math.max(n.height,1),0,1)-.5)*o*2,rotateY:(.5-c)*o*2,scale:s}},A=(e={})=>{let t=c(!1),r=f({rotateX:0,rotateY:0,scale:1}),i,o=()=>{i!==void 0&&(window.cancelAnimationFrame(i),i=void 0)},s=()=>{o(),t.value=!1,r.rotateX=0,r.rotateY=0,r.scale=1},l=n=>{if(p(e.disabled)===!0||n.pointerType!==`mouse`||!(n.currentTarget instanceof HTMLElement))return;let a=k(n.clientX,n.clientY,n.currentTarget.getBoundingClientRect(),{maxTilt:p(e.maxTilt)??7,scale:p(e.scale)??1.025});t.value=!0,o(),i=window.requestAnimationFrame(()=>{Object.assign(r,a),i=void 0})},u=h(()=>({"--hover-3d-rotate-x":`${r.rotateX}deg`,"--hover-3d-rotate-y":`${r.rotateY}deg`,"--hover-3d-scale":String(r.scale)}));return a(()=>p(e.disabled),e=>e&&s()),n(o),{isActive:t,onPointerMove:l,reset:s,style:u}}})))()}var M,N;function P(){return(P=e((()=>{o(),j(),M={class:`Hover3d__surface`},N=r({__name:`Hover3d`,props:{disabled:{type:Boolean,default:!1},maxTilt:{default:9},scale:{default:1.035},stretched:{type:Boolean,default:!1}},setup(e){let n=e,{isActive:r,onPointerMove:a,reset:o,style:c}=A({disabled:l(n,`disabled`),maxTilt:l(n,`maxTilt`),scale:l(n,`scale`)});return(e,l)=>(g(),t(`div`,{class:u([`Hover3d`,{active:d(r)&&!n.disabled,stretched:n.stretched}]),style:m(d(c)),onPointermove:l[0]||=(...e)=>d(a)&&d(a)(...e),onPointerleave:l[1]||=(...e)=>d(o)&&d(o)(...e),onPointercancel:l[2]||=(...e)=>d(o)&&d(o)(...e)},[s(`div`,M,[i(e.$slots,`default`,{},void 0,!0)])],38))}})})))()}var F;function I(){return(I=e((()=>{P(),_(),F=v(N,[[`__scopeId`,`data-v-d611d5a1`]]),N.__docgenInfo=Object.assign({displayName:N.name??N.__name},{exportName:`default`,displayName:`Hover3d`,description:``,tags:{},props:[{name:`disabled`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`maxTilt`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`9`}},{name:`scale`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`1.035`}},{name:`stretched`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Hover3d/Hover3d.vue`]})})))()}var L,R,z,B;function V(){return(V=e((()=>{x(),y(),C(),I(),L={title:`Components/Hover3d`,component:F,tags:[`autodocs`],args:{disabled:!1,maxTilt:7,scale:1.025,stretched:!1},argTypes:{disabled:{control:`boolean`},maxTilt:{control:{type:`range`,min:0,max:16,step:1}},scale:{control:{type:`range`,min:1,max:1.1,step:.005}},stretched:{control:`boolean`}}},R={render:e=>({components:{Card:w,Hover3d:F},setup(){return{args:e}},template:`
      <Hover3d v-bind="args">
        <Card :padding="24" :border-radius="16">
          Произвольное содержимое
        </Card>
      </Hover3d>
    `})},z={render:e=>({components:{Avatar:S,Button:b,Hover3d:F},setup(){return{args:e}},template:`
      <div style="display: flex; align-items: center; gap: 32px; padding: 32px">
        <Hover3d v-bind="args">
          <Button>Кнопка</Button>
        </Hover3d>
        <Hover3d v-bind="args">
          <Avatar name="Анна Климова" size="56px" color="blue" />
        </Hover3d>
      </div>
    `})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Card,
      Hover3d
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Hover3d v-bind="args">
        <Card :padding="24" :border-radius="16">
          Произвольное содержимое
        </Card>
      </Hover3d>
    \`
  })
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Avatar,
      Button,
      Hover3d
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; align-items: center; gap: 32px; padding: 32px">
        <Hover3d v-bind="args">
          <Button>Кнопка</Button>
        </Hover3d>
        <Hover3d v-bind="args">
          <Avatar name="Анна Климова" size="56px" color="blue" />
        </Hover3d>
      </div>
    \`
  })
}`,...z.parameters?.docs?.source}}},B=[`CardExample`,`DifferentContent`]})))()}V();export{R as CardExample,z as DifferentContent,B as __namedExportsOrder,L as default};