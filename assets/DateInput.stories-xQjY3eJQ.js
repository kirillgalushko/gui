import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,C as n,D as r,F as i,O as a,Z as o,a as s,ct as c,f as l,gt as u,mt as d,p as f,y as p,z as m}from"./iframe-CgWRWv5U.js";import{n as h,t as g}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{Gt as _,n as v}from"./gui-icons.es-BhzJzRM3.js";import{n as y,t as b}from"./Action-AwODON_l.js";import{n as x,t as S}from"./Input-DUqEpfkG.js";import{d as C,f as w,l as T,n as E,p as D,t as O,u as k}from"./Calendar-ChzlVNWt.js";import{n as A,t as j}from"./Dropdown-CPi2Q_KW.js";var M,N,P;function F(){return(F=e((()=>{s(),v(),y(),E(),A(),x(),T(),M=1900,N=2099,P=a({inheritAttrs:!1,__name:`DateInput`,props:{value:{default:null},onChange:{},minDate:{},maxDate:{},disabledDates:{},onMonthChange:{},disabled:{type:Boolean},invalid:{type:Boolean},description:{},errorMessage:{},maxWidth:{default:`100%`},placeholder:{default:`дд.мм.гггг`},stretched:{type:Boolean}},setup(e){let a=e,s=c(null),h=c(!1),g=c(``),v=c(!1),y=e=>e?`${String(e.getDate()).padStart(2,`0`)}.${String(e.getMonth()+1).padStart(2,`0`)}.${String(e.getFullYear()).padStart(4,`0`)}`:``,x=e=>{let t=e.replace(/\D/g,``).slice(0,8),n=t[0],r=t[1];if(!n)return{day:``,month:``,year:``};let i=n,a=t.slice(1);if(r?(n===`0`?Number(r)>0:n===`1`||n===`2`||n===`3`&&Number(r)<=1)?(i=`${n}${r}`,a=t.slice(2)):(i=`0${n}`,a=t.slice(1)):Number(n)>3&&(i=`0${n}`,a=``),!a)return{day:i,month:``,year:``};let o=a[0],s=a[1];if(!s){let e=Number(o)>1;return{day:i,month:e?`0${o}`:o,year:``}}if(o===`0`)return{day:i,month:Number(s)>0?`0${s}`:o,year:Number(s)>0?a.slice(2,6):a.slice(1,5)};if(o===`1`){let e=Number(s)<=2;return{day:i,month:e?`${o}${s}`:`0${o}`,year:e?a.slice(2,6):a.slice(1,5)}}return{day:i,month:`0${o}`,year:a.slice(1,5)}},T=e=>{let{day:t,month:n,year:r}=x(e);return[t,n,r].filter(Boolean).join(`.`)},E=e=>{let{day:t,month:n,year:r}=x(e),i=new Date;if(!t)return null;let a=Number(t),o=n?Number(n):i.getMonth()+1;if(r.length===3||r.length>4)return null;let s=r.length===0?i.getFullYear():r.length<=2?2e3+Number(r):Number(r);if(s<M||s>N||o<1||o>12||a<1)return null;let c=D(new Date(s,o-1,a));return c.getFullYear()!==s||c.getMonth()!==o-1||c.getDate()!==a?null:c},A=e=>a.minDate&&C(e,a.minDate)||a.maxDate&&k(e,a.maxDate)?!1:!(a.disabledDates?.(e)??!1),P=(e,t)=>!e||!t?e===t:w(e,t),F=p(()=>a.value?D(a.value):null),I=p(()=>{let e=new Date(M,0,1);return!a.minDate||k(e,a.minDate)?e:a.minDate}),L=p(()=>{let e=new Date(N,11,31);return!a.maxDate||C(e,a.maxDate)?e:a.maxDate}),R=(e,t,n)=>{a.onChange?.({value:e,inputValue:t,isValid:n})},z=()=>{if(!g.value){v.value=!1,R(null,``,!0);return}let e=E(g.value),t=!!(e&&A(e));if(v.value=!t,!e||!t){R(null,g.value,!1);return}let n=y(e);g.value=n,R(e,n,!0)},B=e=>{g.value=T(String(e??``)),v.value=!1},V=e=>{let t=e.target;if(!(t instanceof HTMLInputElement))return;let n=T(t.value);t.value=n,g.value=n,v.value=!1},H=()=>{a.disabled||(h.value=!0)},U=()=>{a.disabled||(h.value=!h.value)},W=e=>{let t=e.target;return!(t instanceof Node&&s.value?.contains(t))},G=({date:e})=>{let t=D(e);if(!A(t))return;let n=y(t);g.value=n,v.value=!1,R(t,n,!0),h.value=!1};return o(()=>a.value,e=>{P(e??null,E(g.value))||(g.value=y(e??null),v.value=!1)},{immediate:!0}),(e,o)=>(m(),n(`div`,{ref_key:`dateInputRef`,ref:s,class:u([`date-input`,{stretched:a.stretched}])},[r(j,{shown:h.value,"onUpdate:shown":o[1]||=e=>h.value=e,triggers:[],placement:`bottom-end`,distance:8,stretched:a.stretched,"auto-hide":W,"popper-class":`calendar-dropdown`,"no-auto-focus":``},{popper:t(()=>[r(O,{"model-value":F.value,"min-date":I.value,"max-date":L.value,"disabled-dates":a.disabledDates,onSelect:G,onMonthChange:o[0]||=e=>a.onMonthChange?.(e.month),size:`small`},null,8,[`model-value`,`min-date`,`max-date`,`disabled-dates`])]),default:t(()=>[r(S,i(e.$attrs,{"model-value":g.value,type:`text`,inputmode:`numeric`,autocomplete:`off`,placeholder:a.placeholder,"max-width":a.maxWidth,disabled:a.disabled,description:a.description,"error-message":a.errorMessage,invalid:a.invalid||v.value,"onUpdate:modelValue":B,onFocus:H,onBlur:z,onInput:V,onKeydown:l(f(z,[`prevent`]),[`enter`])}),{rightAdornment:t(()=>[r(b,{type:`button`,"aria-label":`Открыть календарь`,"aria-expanded":h.value,disabled:a.disabled,onClick:f(U,[`prevent`])},{default:t(()=>[r(d(_))]),_:1},8,[`aria-expanded`,`disabled`])]),_:1},16,[`model-value`,`placeholder`,`max-width`,`disabled`,`description`,`error-message`,`invalid`,`onKeydown`])]),_:1},8,[`shown`,`stretched`])],2))}})})))()}var I;function L(){return(L=e((()=>{F(),h(),I=g(P,[[`__scopeId`,`data-v-22335bd8`]]),P.__docgenInfo=Object.assign({displayName:P.name??P.__name},{exportName:`default`,displayName:`DateInput`,description:``,tags:{},props:[{name:`value`,required:!1,type:{name:`DateInputValue`},defaultValue:{func:!1,value:`null`}},{name:`onChange`,required:!1,type:{name:`TSFunctionType`}},{name:`minDate`,required:!1,type:{name:`Date`}},{name:`maxDate`,required:!1,type:{name:`Date`}},{name:`disabledDates`,required:!1,type:{name:`TSFunctionType`}},{name:`onMonthChange`,required:!1,type:{name:`TSFunctionType`}},{name:`disabled`,required:!1,type:{name:`boolean`}},{name:`invalid`,required:!1,type:{name:`boolean`}},{name:`description`,required:!1,type:{name:`string`}},{name:`errorMessage`,required:!1,type:{name:`string`}},{name:`maxWidth`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"100%"`}},{name:`placeholder`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"дд.мм.гггг"`}},{name:`stretched`,required:!1,type:{name:`boolean`}}],sourceFiles:[`/home/runner/work/gui/gui/src/components/DateInput/DateInput.vue`]})})))()}var R,z,B,V,H;function U(){return(U=e((()=>{s(),L(),R={title:`Components/DateInput`,component:I,tags:[`autodocs`]},z={render:()=>({components:{DateInput:I},setup(){let e=c(new Date);return{onChange:({value:t})=>{e.value=t},value:e}},template:`<DateInput :value="value" :on-change="onChange" />`})},B={render:()=>({components:{DateInput:I},setup(){let e=c(null);return{maxDate:new Date(2026,6,31),minDate:new Date(2026,6,1),onChange:({value:t})=>{e.value=t},value:e}},template:`<DateInput :value="value" :on-change="onChange" :min-date="minDate" :max-date="maxDate" />`})},V={render:()=>({components:{DateInput:I},setup(){let e=c(null);return{onChange:({value:t})=>{e.value=t},value:e}},template:`<DateInput :value="value" :on-change="onChange" invalid error-message="Введите корректную дату" />`})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DateInput
    },
    setup() {
      const value = ref<Date | null>(new Date());
      const onChange = ({
        value: nextValue
      }: DateInputChangePayload) => {
        value.value = nextValue;
      };
      return {
        onChange,
        value
      };
    },
    template: '<DateInput :value="value" :on-change="onChange" />'
  })
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DateInput
    },
    setup() {
      const value = ref<Date | null>(null);
      const minDate = new Date(2026, 6, 1);
      const maxDate = new Date(2026, 6, 31);
      const onChange = ({
        value: nextValue
      }: DateInputChangePayload) => {
        value.value = nextValue;
      };
      return {
        maxDate,
        minDate,
        onChange,
        value
      };
    },
    template: '<DateInput :value="value" :on-change="onChange" :min-date="minDate" :max-date="maxDate" />'
  })
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DateInput
    },
    setup() {
      const value = ref<Date | null>(null);
      const onChange = ({
        value: nextValue
      }: DateInputChangePayload) => {
        value.value = nextValue;
      };
      return {
        onChange,
        value
      };
    },
    template: '<DateInput :value="value" :on-change="onChange" invalid error-message="Введите корректную дату" />'
  })
}`,...V.parameters?.docs?.source}}},H=[`Default`,`Restricted`,`Invalid`]})))()}U();export{z as Default,V as Invalid,B as Restricted,H as __namedExportsOrder,R as default};