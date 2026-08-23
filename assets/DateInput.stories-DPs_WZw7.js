import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,B as n,C as r,D as i,F as a,O as o,_t as s,a as c,dt as l,f as u,p as d,tt as f,y as p,yt as m}from"./iframe-Z95Hq5ox.js";import{n as h,t as g}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{Ut as _,n as v}from"./gui-icons.es-B0LP8gzK.js";import{n as y,t as b}from"./Action-DhrSKwhh.js";import{n as x,t as S}from"./Input-BFAuPlKJ.js";import{c as C,d as w,f as T,l as E,u as D}from"./date-y3qe3JW0.js";import{n as O,t as k}from"./Calendar-BbU5BYJR.js";import{n as A,t as j}from"./Dropdown-fDJZhFjQ.js";var M,N,P;function F(){return(F=e((()=>{c(),v(),y(),O(),A(),x(),C(),M=1900,N=2099,P=o({inheritAttrs:!1,__name:`DateInput`,props:{value:{default:null},onChange:{},minDate:{},maxDate:{},disabledDates:{},onMonthChange:{},disabled:{type:Boolean},invalid:{type:Boolean},description:{},errorMessage:{},maxWidth:{default:`100%`},placeholder:{default:`дд.мм.гггг`},stretched:{type:Boolean}},setup(e){let o=e,c=l(null),h=l(!1),g=l(``),v=l(!1),y=e=>e?`${String(e.getDate()).padStart(2,`0`)}.${String(e.getMonth()+1).padStart(2,`0`)}.${String(e.getFullYear()).padStart(4,`0`)}`:``,x=e=>{let t=e.replace(/\D/g,``).slice(0,8),n=t[0],r=t[1];if(!n)return{day:``,month:``,year:``};let i=n,a=t.slice(1);if(r?(n===`0`?Number(r)>0:n===`1`||n===`2`||n===`3`&&Number(r)<=1)?(i=`${n}${r}`,a=t.slice(2)):(i=`0${n}`,a=t.slice(1)):Number(n)>3&&(i=`0${n}`,a=``),!a)return{day:i,month:``,year:``};let o=a[0],s=a[1];if(!s){let e=Number(o)>1;return{day:i,month:e?`0${o}`:o,year:``}}if(o===`0`)return{day:i,month:Number(s)>0?`0${s}`:o,year:Number(s)>0?a.slice(2,6):a.slice(1,5)};if(o===`1`){let e=Number(s)<=2;return{day:i,month:e?`${o}${s}`:`0${o}`,year:e?a.slice(2,6):a.slice(1,5)}}return{day:i,month:`0${o}`,year:a.slice(1,5)}},C=e=>{let{day:t,month:n,year:r}=x(e);return[t,n,r].filter(Boolean).join(`.`)},O=e=>{let{day:t,month:n,year:r}=x(e),i=new Date;if(!t)return null;let a=Number(t),o=n?Number(n):i.getMonth()+1;if(r.length===3||r.length>4)return null;let s=r.length===0?i.getFullYear():r.length<=2?2e3+Number(r):Number(r);if(s<M||s>N||o<1||o>12||a<1)return null;let c=T(new Date(s,o-1,a));return c.getFullYear()!==s||c.getMonth()!==o-1||c.getDate()!==a?null:c},A=e=>o.minDate&&D(e,o.minDate)||o.maxDate&&E(e,o.maxDate)?!1:!(o.disabledDates?.(e)??!1),P=(e,t)=>!e||!t?e===t:w(e,t),F=p(()=>o.value?T(o.value):null),I=p(()=>{let e=new Date(M,0,1);return!o.minDate||E(e,o.minDate)?e:o.minDate}),L=p(()=>{let e=new Date(N,11,31);return!o.maxDate||D(e,o.maxDate)?e:o.maxDate}),R=(e,t,n)=>{o.onChange?.({value:e,inputValue:t,isValid:n})},z=()=>{if(!g.value){v.value=!1,R(null,``,!0);return}let e=O(g.value),t=!!(e&&A(e));if(v.value=!t,!e||!t){R(null,g.value,!1);return}let n=y(e);g.value=n,R(e,n,!0)},B=e=>{g.value=C(String(e??``)),v.value=!1},V=e=>{let t=e.target;if(!(t instanceof HTMLInputElement))return;let n=C(t.value);t.value=n,g.value=n,v.value=!1},H=()=>{o.disabled||(h.value=!0)},U=()=>{o.disabled||(h.value=!h.value)},W=e=>{let t=e.target;return!(t instanceof Node&&c.value?.contains(t))},G=({date:e})=>{let t=T(e);if(!A(t))return;let n=y(t);g.value=n,v.value=!1,R(t,n,!0),h.value=!1};return t(()=>o.value,e=>{P(e??null,O(g.value))||(g.value=y(e??null),v.value=!1)},{immediate:!0}),(e,t)=>(n(),r(`div`,{ref_key:`dateInputRef`,ref:c,class:m([`date-input`,{stretched:o.stretched}])},[i(j,{shown:h.value,"onUpdate:shown":t[1]||=e=>h.value=e,triggers:[],placement:`bottom-end`,distance:8,stretched:o.stretched,"auto-hide":W,"popper-class":`calendar-dropdown`,"no-auto-focus":``},{popper:f(()=>[i(k,{"model-value":F.value,"min-date":I.value,"max-date":L.value,"disabled-dates":o.disabledDates,onSelect:G,onMonthChange:t[0]||=e=>o.onMonthChange?.(e.month),size:`small`},null,8,[`model-value`,`min-date`,`max-date`,`disabled-dates`])]),default:f(()=>[i(S,a(e.$attrs,{"model-value":g.value,type:`text`,inputmode:`numeric`,autocomplete:`off`,placeholder:o.placeholder,"max-width":o.maxWidth,disabled:o.disabled,description:o.description,"error-message":o.errorMessage,invalid:o.invalid||v.value,"onUpdate:modelValue":B,onFocus:H,onBlur:z,onInput:V,onKeydown:u(d(z,[`prevent`]),[`enter`])}),{rightAdornment:f(()=>[i(b,{type:`button`,"aria-label":`Открыть календарь`,"aria-expanded":h.value,disabled:o.disabled,onClick:d(U,[`prevent`])},{default:f(()=>[i(s(_))]),_:1},8,[`aria-expanded`,`disabled`])]),_:1},16,[`model-value`,`placeholder`,`max-width`,`disabled`,`description`,`error-message`,`invalid`,`onKeydown`])]),_:1},8,[`shown`,`stretched`])],2))}})})))()}var I;function L(){return(L=e((()=>{F(),h(),I=g(P,[[`__scopeId`,`data-v-22335bd8`]]),P.__docgenInfo=Object.assign({displayName:P.name??P.__name},{exportName:`default`,displayName:`DateInput`,description:``,tags:{},props:[{name:`value`,required:!1,type:{name:`DateInputValue`},defaultValue:{func:!1,value:`null`}},{name:`onChange`,required:!1,type:{name:`TSFunctionType`}},{name:`minDate`,required:!1,type:{name:`Date`}},{name:`maxDate`,required:!1,type:{name:`Date`}},{name:`disabledDates`,required:!1,type:{name:`TSFunctionType`}},{name:`onMonthChange`,required:!1,type:{name:`TSFunctionType`}},{name:`disabled`,required:!1,type:{name:`boolean`}},{name:`invalid`,required:!1,type:{name:`boolean`}},{name:`description`,required:!1,type:{name:`string`}},{name:`errorMessage`,required:!1,type:{name:`string`}},{name:`maxWidth`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"100%"`}},{name:`placeholder`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"дд.мм.гггг"`}},{name:`stretched`,required:!1,type:{name:`boolean`}}],sourceFiles:[`/home/runner/work/gui/gui/src/components/DateInput/DateInput.vue`]})})))()}var R,z,B,V,H;function U(){return(U=e((()=>{c(),L(),R={title:`Components/DateInput`,component:I,tags:[`autodocs`]},z={render:()=>({components:{DateInput:I},setup(){let e=l(new Date);return{onChange:({value:t})=>{e.value=t},value:e}},template:`<DateInput :value="value" :on-change="onChange" />`})},B={render:()=>({components:{DateInput:I},setup(){let e=l(null);return{maxDate:new Date(2026,6,31),minDate:new Date(2026,6,1),onChange:({value:t})=>{e.value=t},value:e}},template:`<DateInput :value="value" :on-change="onChange" :min-date="minDate" :max-date="maxDate" />`})},V={render:()=>({components:{DateInput:I},setup(){let e=l(null);return{onChange:({value:t})=>{e.value=t},value:e}},template:`<DateInput :value="value" :on-change="onChange" invalid error-message="Введите корректную дату" />`})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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