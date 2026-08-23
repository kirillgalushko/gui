import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{B as t,D as n,E as r,O as i,S as a,St as o,_t as s,a as c,b as l,dt as u,tt as d,x as f,y as p}from"./iframe-Z95Hq5ox.js";import{n as m,t as h}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{Ft as ee,Lt as g,n as _}from"./gui-icons.es-B0LP8gzK.js";import{n as v,t as y}from"./Button-DEy7MrHI.js";import{n as b,t as x}from"./Gap-OlxGnfv9.js";import{n as S,t as C}from"./ButtonGroup-CAniILiA.js";import{a as w,c as T,f as te,h as ne,l as E,m as D,n as O,o as k,p as A,r as j,s as M,t as N,u as P}from"./date-y3qe3JW0.js";import{n as F,t as re}from"./Calendar-BbU5BYJR.js";import{n as I,t as ie}from"./Dropdown-fDJZhFjQ.js";var L,R;function z(){return(z=e((()=>{c(),_(),v(),S(),I(),F(),b(),T(),L={class:`date-navigator`},R=i({__name:`DateNavigator`,props:{value:{},mode:{default:`day`},buttonMode:{default:`outline`},size:{default:`large`},onChange:{},minDate:{},maxDate:{}},setup(e){let i=e,c=u(!1),m=(e,t)=>t===`week`?D(e):t===`month`?A(e):t===`year`?ne(e):te(e),h=(e,t,n)=>t===`threeDays`?N(e,n*3):t===`week`?N(e,n*7):t===`twoWeeks`?N(e,n*14):t===`month`?O(e,n):t===`year`?j(e,n):N(e,n),_=(e,t)=>{let n=m(e,t);return{start:n,end:h(n,t,1)}},v=p(()=>m(i.value,i.mode)),b=p(()=>_(v.value,i.mode)),S=p(()=>h(v.value,i.mode,-1)),T=p(()=>h(v.value,i.mode,1)),F=p(()=>_(S.value,i.mode)),I=p(()=>_(T.value,i.mode)),R=e=>i.minDate?!E(e.end,i.minDate):!1,z=e=>i.maxDate?E(e.start,i.maxDate):!1,B=(e,t)=>!P(e,t.start)&&P(e,t.end),V=p(()=>R(F.value)),H=p(()=>z(I.value)),U=p(()=>_(new Date,i.mode)),W=p(()=>R(U.value)||z(U.value)),G=p(()=>!B(new Date,b.value)&&!W.value),K=p(()=>i.mode===`threeDays`||i.mode===`week`||i.mode===`twoWeeks`?`${w(b.value.start)} - ${w(N(b.value.end,-1))}`:i.mode===`month`?k(v.value):i.mode===`year`?String(v.value.getFullYear()):M(v.value)),q=e=>{let t=m(e,i.mode);i.onChange({value:t,mode:i.mode,range:_(t,i.mode)})},J=()=>{c.value=!c.value},Y=()=>{V.value||q(F.value.start)},X=()=>{H.value||q(I.value.start)},Z=()=>{W.value||q(new Date)},Q=({date:e})=>{q(e),c.value=!1};return(e,u)=>(t(),f(ie,{shown:c.value,"onUpdate:shown":u[0]||=e=>c.value=e,triggers:[],placement:`bottom`,distance:8},{popper:d(()=>[n(re,{"model-value":v.value,"min-date":i.minDate,"max-date":i.maxDate,onSelect:Q,size:`small`},null,8,[`model-value`,`min-date`,`max-date`])]),default:d(()=>[l(`div`,L,[n(C,{"aria-label":`Выбор даты`},{default:d(()=>[n(y,{mode:i.buttonMode,size:i.size,squared:``,type:`button`,"aria-label":`Предыдущий день`,disabled:V.value,onClick:Y},{default:d(()=>[n(s(g))]),_:1},8,[`mode`,`size`,`disabled`]),n(y,{mode:i.buttonMode,size:i.size,type:`button`,"aria-haspopup":`dialog`,"aria-expanded":c.value,onClick:J},{default:d(()=>[r(o(K.value),1)]),_:1},8,[`mode`,`size`,`aria-expanded`]),n(y,{mode:i.buttonMode,size:i.size,squared:``,type:`button`,"aria-label":`Следующий день`,disabled:H.value,onClick:X},{default:d(()=>[n(s(ee))]),_:1},8,[`mode`,`size`,`disabled`])]),_:1}),G.value?(t(),f(x,{key:0,direction:`horizontal`,size:2})):a(``,!0),G.value?(t(),f(y,{key:1,mode:i.buttonMode,size:i.size,type:`button`,onClick:Z},{default:d(()=>[...u[1]||=[r(` Сегодня `,-1)]]),_:1},8,[`mode`,`size`])):a(``,!0)])]),_:1},8,[`shown`]))}})})))()}var B;function V(){return(V=e((()=>{z(),m(),B=h(R,[[`__scopeId`,`data-v-24fe2f18`]]),R.__docgenInfo=Object.assign({displayName:R.name??R.__name},{exportName:`default`,displayName:`DateNavigator`,description:``,tags:{},props:[{name:`value`,required:!0,type:{name:`Date`}},{name:`mode`,required:!1,type:{name:`DateNavigatorMode`},defaultValue:{func:!1,value:`"day"`}},{name:`buttonMode`,required:!1,type:{name:`TSIndexedAccessType`},defaultValue:{func:!1,value:`"outline"`}},{name:`size`,required:!1,type:{name:`ComponentSize`},defaultValue:{func:!1,value:`"large"`}},{name:`onChange`,required:!0,type:{name:`TSFunctionType`}},{name:`minDate`,required:!1,type:{name:`Date`}},{name:`maxDate`,required:!1,type:{name:`Date`}}],sourceFiles:[`/home/runner/work/gui/gui/src/components/DateNavigator/DateNavigator.vue`]})})))()}var H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{c(),V(),H={title:`Components/DateNavigator`,component:B,tags:[`autodocs`]},U={render:()=>({components:{DateNavigator:B},setup(){let e=u(new Date(2026,6,9));return{onChange:t=>{e.value=t.value},value:e}},template:`<DateNavigator :value="value" :on-change="onChange" />`})},W={render:()=>({components:{DateNavigator:B},setup(){let e=u(new Date(2026,6,9));return{onChange:t=>{e.value=t.value},value:e}},template:`<DateNavigator mode="week" :value="value" :on-change="onChange" />`})},G={render:()=>({components:{DateNavigator:B},setup(){let e=u(new Date(2026,6,9));return{onChange:t=>{e.value=t.value},value:e}},template:`<DateNavigator mode="threeDays" :value="value" :on-change="onChange" />`})},K={render:()=>({components:{DateNavigator:B},setup(){let e=u(new Date(2026,6,9));return{onChange:t=>{e.value=t.value},value:e}},template:`<DateNavigator mode="twoWeeks" :value="value" :on-change="onChange" />`})},q={render:()=>({components:{DateNavigator:B},setup(){let e=u(new Date(2026,6,9));return{onChange:t=>{e.value=t.value},value:e}},template:`<DateNavigator mode="month" :value="value" :on-change="onChange" />`})},J={render:()=>({components:{DateNavigator:B},setup(){let e=u(new Date(2026,6,9));return{onChange:t=>{e.value=t.value},value:e}},template:`<DateNavigator mode="year" :value="value" :on-change="onChange" />`})},Y={render:()=>({components:{DateNavigator:B},setup(){let e=u(new Date(2026,6,9));return{onChange:t=>{e.value=t.value},value:e}},template:`<DateNavigator :value="value" button-mode="contrast" size="small" :on-change="onChange" />`})},X={render:()=>({components:{DateNavigator:B},setup(){let e=u(new Date(2026,6,9));return{maxDate:new Date(2026,6,10),minDate:new Date(2026,6,8),onChange:t=>{e.value=t.value},value:e}},template:`<DateNavigator :value="value" :on-change="onChange" :min-date="minDate" :max-date="maxDate" />`})},Z={render:()=>({components:{DateNavigator:B},setup(){let e=u(new Date(2026,6,9));return{maxDate:new Date(2026,6,10),minDate:new Date(2026,6,1),onChange:t=>{e.value=t.value},value:e}},template:`<DateNavigator :value="value" :on-change="onChange" :min-date="minDate" :max-date="maxDate" />`})},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DateNavigator
    },
    setup() {
      const value = ref(new Date(2026, 6, 9));
      const onChange = (payload: {
        value: Date;
      }) => {
        value.value = payload.value;
      };
      return {
        onChange,
        value
      };
    },
    template: '<DateNavigator :value="value" :on-change="onChange" />'
  })
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DateNavigator
    },
    setup() {
      const value = ref(new Date(2026, 6, 9));
      const onChange = (payload: {
        value: Date;
      }) => {
        value.value = payload.value;
      };
      return {
        onChange,
        value
      };
    },
    template: '<DateNavigator mode="week" :value="value" :on-change="onChange" />'
  })
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DateNavigator
    },
    setup() {
      const value = ref(new Date(2026, 6, 9));
      const onChange = (payload: {
        value: Date;
      }) => {
        value.value = payload.value;
      };
      return {
        onChange,
        value
      };
    },
    template: '<DateNavigator mode="threeDays" :value="value" :on-change="onChange" />'
  })
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DateNavigator
    },
    setup() {
      const value = ref(new Date(2026, 6, 9));
      const onChange = (payload: {
        value: Date;
      }) => {
        value.value = payload.value;
      };
      return {
        onChange,
        value
      };
    },
    template: '<DateNavigator mode="twoWeeks" :value="value" :on-change="onChange" />'
  })
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DateNavigator
    },
    setup() {
      const value = ref(new Date(2026, 6, 9));
      const onChange = (payload: {
        value: Date;
      }) => {
        value.value = payload.value;
      };
      return {
        onChange,
        value
      };
    },
    template: '<DateNavigator mode="month" :value="value" :on-change="onChange" />'
  })
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DateNavigator
    },
    setup() {
      const value = ref(new Date(2026, 6, 9));
      const onChange = (payload: {
        value: Date;
      }) => {
        value.value = payload.value;
      };
      return {
        onChange,
        value
      };
    },
    template: '<DateNavigator mode="year" :value="value" :on-change="onChange" />'
  })
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DateNavigator
    },
    setup() {
      const value = ref(new Date(2026, 6, 9));
      const onChange = (payload: {
        value: Date;
      }) => {
        value.value = payload.value;
      };
      return {
        onChange,
        value
      };
    },
    template: '<DateNavigator :value="value" button-mode="contrast" size="small" :on-change="onChange" />'
  })
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DateNavigator
    },
    setup() {
      const value = ref(new Date(2026, 6, 9));
      const minDate = new Date(2026, 6, 8);
      const maxDate = new Date(2026, 6, 10);
      const onChange = (payload: {
        value: Date;
      }) => {
        value.value = payload.value;
      };
      return {
        maxDate,
        minDate,
        onChange,
        value
      };
    },
    template: '<DateNavigator :value="value" :on-change="onChange" :min-date="minDate" :max-date="maxDate" />'
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DateNavigator
    },
    setup() {
      const value = ref(new Date(2026, 6, 9));
      const minDate = new Date(2026, 6, 1);
      const maxDate = new Date(2026, 6, 10);
      const onChange = (payload: {
        value: Date;
      }) => {
        value.value = payload.value;
      };
      return {
        maxDate,
        minDate,
        onChange,
        value
      };
    },
    template: '<DateNavigator :value="value" :on-change="onChange" :min-date="minDate" :max-date="maxDate" />'
  })
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`Week`,`ThreeDays`,`TwoWeeks`,`Month`,`Year`,`SmallContrast`,`Restricted`,`TodayRestricted`]})))()}$();export{U as Default,q as Month,X as Restricted,Y as SmallContrast,G as ThreeDays,Z as TodayRestricted,K as TwoWeeks,W as Week,J as Year,Q as __namedExportsOrder,H as default};