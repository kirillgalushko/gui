import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,D as n,E as r,O as i,S as a,a as o,b as s,ct as c,mt as l,x as u,y as d,yt as f,z as p}from"./iframe-CgWRWv5U.js";import{n as m,t as h}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{Lt as g,n as _,zt as v}from"./gui-icons.es-BhzJzRM3.js";import{n as y,t as b}from"./Button-CKiDWYnj.js";import{n as x,t as S}from"./Gap-azzyaXYM.js";import{n as C,t as ee}from"./ButtonGroup-DDPt9yVj.js";import{a as te,c as ne,d as w,g as re,h as ie,i as T,l as E,m as D,n as O,o as k,p as A,r as j,s as M,t as N,u as P}from"./Calendar-ChzlVNWt.js";import{n as F,t as I}from"./Dropdown-CPi2Q_KW.js";var L,R;function z(){return(z=e((()=>{o(),_(),y(),C(),F(),O(),x(),E(),L={class:`date-navigator`},R=i({__name:`DateNavigator`,props:{value:{},mode:{default:`day`},buttonMode:{default:`outline`},size:{default:`large`},onChange:{},minDate:{},maxDate:{}},setup(e){let i=e,o=c(!1),m=(e,t)=>t===`week`?ie(e):t===`month`?D(e):t===`year`?re(e):A(e),h=(e,t,n)=>t===`threeDays`?j(e,n*3):t===`week`?j(e,n*7):t===`twoWeeks`?j(e,n*14):t===`month`?T(e,n):t===`year`?te(e,n):j(e,n),_=(e,t)=>{let n=m(e,t);return{start:n,end:h(n,t,1)}},y=d(()=>m(i.value,i.mode)),x=d(()=>_(y.value,i.mode)),C=d(()=>h(y.value,i.mode,-1)),E=d(()=>h(y.value,i.mode,1)),O=d(()=>_(C.value,i.mode)),F=d(()=>_(E.value,i.mode)),R=e=>i.minDate?!P(e.end,i.minDate):!1,z=e=>i.maxDate?P(e.start,i.maxDate):!1,B=(e,t)=>!w(e,t.start)&&w(e,t.end),V=d(()=>R(O.value)),H=d(()=>z(F.value)),U=d(()=>_(new Date,i.mode)),W=d(()=>R(U.value)||z(U.value)),G=d(()=>!B(new Date,x.value)&&!W.value),K=d(()=>i.mode===`threeDays`||i.mode===`week`||i.mode===`twoWeeks`?`${k(x.value.start)} - ${k(j(x.value.end,-1))}`:i.mode===`month`?M(y.value):i.mode===`year`?String(y.value.getFullYear()):ne(y.value)),q=e=>{let t=m(e,i.mode);i.onChange({value:t,mode:i.mode,range:_(t,i.mode)})},J=()=>{o.value=!o.value},Y=()=>{V.value||q(O.value.start)},X=()=>{H.value||q(F.value.start)},Z=()=>{W.value||q(new Date)},Q=({date:e})=>{q(e),o.value=!1};return(e,c)=>(p(),u(I,{shown:o.value,"onUpdate:shown":c[0]||=e=>o.value=e,triggers:[],placement:`bottom`,distance:8},{popper:t(()=>[n(N,{"model-value":y.value,"min-date":i.minDate,"max-date":i.maxDate,onSelect:Q,size:`small`},null,8,[`model-value`,`min-date`,`max-date`])]),default:t(()=>[s(`div`,L,[n(ee,{"aria-label":`Выбор даты`},{default:t(()=>[n(b,{mode:i.buttonMode,size:i.size,squared:``,type:`button`,"aria-label":`Предыдущий день`,disabled:V.value,onClick:Y},{default:t(()=>[n(l(v))]),_:1},8,[`mode`,`size`,`disabled`]),n(b,{mode:i.buttonMode,size:i.size,type:`button`,"aria-haspopup":`dialog`,"aria-expanded":o.value,onClick:J},{default:t(()=>[r(f(K.value),1)]),_:1},8,[`mode`,`size`,`aria-expanded`]),n(b,{mode:i.buttonMode,size:i.size,squared:``,type:`button`,"aria-label":`Следующий день`,disabled:H.value,onClick:X},{default:t(()=>[n(l(g))]),_:1},8,[`mode`,`size`,`disabled`])]),_:1}),G.value?(p(),u(S,{key:0,direction:`horizontal`,size:2})):a(``,!0),G.value?(p(),u(b,{key:1,mode:i.buttonMode,size:i.size,type:`button`,onClick:Z},{default:t(()=>[...c[1]||=[r(` Сегодня `,-1)]]),_:1},8,[`mode`,`size`])):a(``,!0)])]),_:1},8,[`shown`]))}})})))()}var B;function V(){return(V=e((()=>{z(),m(),B=h(R,[[`__scopeId`,`data-v-24fe2f18`]]),R.__docgenInfo=Object.assign({displayName:R.name??R.__name},{exportName:`default`,displayName:`DateNavigator`,description:``,tags:{},props:[{name:`value`,required:!0,type:{name:`Date`}},{name:`mode`,required:!1,type:{name:`DateNavigatorMode`},defaultValue:{func:!1,value:`"day"`}},{name:`buttonMode`,required:!1,type:{name:`TSIndexedAccessType`},defaultValue:{func:!1,value:`"outline"`}},{name:`size`,required:!1,type:{name:`ComponentSize`},defaultValue:{func:!1,value:`"large"`}},{name:`onChange`,required:!0,type:{name:`TSFunctionType`}},{name:`minDate`,required:!1,type:{name:`Date`}},{name:`maxDate`,required:!1,type:{name:`Date`}}],sourceFiles:[`/home/runner/work/gui/gui/src/components/DateNavigator/DateNavigator.vue`]})})))()}var H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{o(),V(),H={title:`Components/DateNavigator`,component:B,tags:[`autodocs`]},U={render:()=>({components:{DateNavigator:B},setup(){let e=c(new Date(2026,6,9));return{onChange:t=>{e.value=t.value},value:e}},template:`<DateNavigator :value="value" :on-change="onChange" />`})},W={render:()=>({components:{DateNavigator:B},setup(){let e=c(new Date(2026,6,9));return{onChange:t=>{e.value=t.value},value:e}},template:`<DateNavigator mode="week" :value="value" :on-change="onChange" />`})},G={render:()=>({components:{DateNavigator:B},setup(){let e=c(new Date(2026,6,9));return{onChange:t=>{e.value=t.value},value:e}},template:`<DateNavigator mode="threeDays" :value="value" :on-change="onChange" />`})},K={render:()=>({components:{DateNavigator:B},setup(){let e=c(new Date(2026,6,9));return{onChange:t=>{e.value=t.value},value:e}},template:`<DateNavigator mode="twoWeeks" :value="value" :on-change="onChange" />`})},q={render:()=>({components:{DateNavigator:B},setup(){let e=c(new Date(2026,6,9));return{onChange:t=>{e.value=t.value},value:e}},template:`<DateNavigator mode="month" :value="value" :on-change="onChange" />`})},J={render:()=>({components:{DateNavigator:B},setup(){let e=c(new Date(2026,6,9));return{onChange:t=>{e.value=t.value},value:e}},template:`<DateNavigator mode="year" :value="value" :on-change="onChange" />`})},Y={render:()=>({components:{DateNavigator:B},setup(){let e=c(new Date(2026,6,9));return{onChange:t=>{e.value=t.value},value:e}},template:`<DateNavigator :value="value" button-mode="contrast" size="small" :on-change="onChange" />`})},X={render:()=>({components:{DateNavigator:B},setup(){let e=c(new Date(2026,6,9));return{maxDate:new Date(2026,6,10),minDate:new Date(2026,6,8),onChange:t=>{e.value=t.value},value:e}},template:`<DateNavigator :value="value" :on-change="onChange" :min-date="minDate" :max-date="maxDate" />`})},Z={render:()=>({components:{DateNavigator:B},setup(){let e=c(new Date(2026,6,9));return{maxDate:new Date(2026,6,10),minDate:new Date(2026,6,1),onChange:t=>{e.value=t.value},value:e}},template:`<DateNavigator :value="value" :on-change="onChange" :min-date="minDate" :max-date="maxDate" />`})},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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