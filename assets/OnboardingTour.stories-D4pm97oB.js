import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{$ as n,B as r,C as i,D as a,E as o,G as s,I as c,L as l,O as u,S as d,St as f,W as ee,Y as p,_t as m,a as h,b as g,dt as _,g as v,gt as y,h as b,p as x,pt as S,tt as C,x as w,xt as T,y as E,yt as D}from"./iframe-Z95Hq5ox.js";import{n as O,t as k}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{n as A,r as te}from"./gui-icons.es-B0LP8gzK.js";import{n as ne,t as j}from"./useViewportBreakpoint-Dv1nqHdt.js";import{n as M,t as N}from"./Button-DEy7MrHI.js";import{n as P,t as F}from"./Card-Dv6sF5an.js";import{n as I,t as L}from"./Text-DUT-SggZ.js";import{n as R,t as z}from"./Badge-DlUo0R1W.js";import{n as B,t as V}from"./Stack-DXsEJR7b.js";import{i as re,n as ie,o as ae,r as oe,s as se,t as H}from"./floating-ui.vue-BG4icK1h.js";import{n as ce,t as U}from"./ScrollArea-DI0X-ruJ.js";function W(e,t){return t<=0?0:Math.min(Math.max(Math.trunc(e),0),t-1)}function le(e,t=document){if(typeof e==`function`)return e();if(typeof e!=`string`)return e;try{let n=t.querySelector(e);return n instanceof HTMLElement?n:null}catch{return null}}function G(e,t,n,r){let i=Math.max(0,t-r),a=Math.max(0,n-e);return i<=0||a<=0?null:{top:e,right:t,bottom:n,left:r,width:i,height:a}}function ue(e,t){return G(Math.max(e.top,t.top),Math.min(e.right,t.right),Math.min(e.bottom,t.bottom),Math.max(e.left,t.left))}function K(e){return G(e.top,e.right,e.bottom,e.left)}function de(e,t=window.innerWidth,n=window.innerHeight){let r=K(e.getBoundingClientRect());if(!r)return null;let i=ue(r,{top:0,right:t,bottom:n,left:0,width:t,height:n}),a=e.parentElement;for(;i&&a&&a!==document.body;){let e=window.getComputedStyle(a);if(q.test(e.overflow)||q.test(e.overflowX)||q.test(e.overflowY)){let e=K(a.getBoundingClientRect());e&&(i=ue(i,e))}a=a.parentElement}return i}function fe(e){let t=K(e.getBoundingClientRect()),n=de(e);return!t||!n?!1:n.top<=t.top&&n.left<=t.left&&n.right>=t.right&&n.bottom>=t.bottom}function pe(e,t){return!fe(e)&&(e.scrollIntoView({behavior:t,block:`center`,inline:`center`}),!0)}function me(e,t,n){return!!(n&&t&&e.composedPath().includes(t))}function he(e,t,n,r){let i=Math.max(0,t),a=Math.max(0,e.top-i),o=Math.max(0,e.left-i),s=Math.min(n,e.right+i),c=Math.min(r,e.bottom+i);return{top:a,right:s,bottom:c,left:o,width:Math.max(0,s-o),height:Math.max(0,c-a)}}function ge(e,t,n){return[G(0,t,e.top,0),G(e.top,e.left,e.bottom,0),G(e.top,t,e.bottom,e.right),G(e.bottom,t,n,0)].filter(e=>e!==null)}function _e(...e){let t=[`a[href]`,`button:not([disabled])`,`input:not([disabled])`,`select:not([disabled])`,`textarea:not([disabled])`,`[tabindex]:not([tabindex='-1'])`,`[contenteditable='true']`].join(`,`);return e.flatMap(e=>{if(!e)return[];let n=Array.from(e.querySelectorAll(t));return(e.matches(t)?[e,...n]:n).filter(e=>!e.hidden&&e.getAttribute(`aria-hidden`)!==`true`)})}var q;function J(){return(J=e((()=>{q=/(auto|scroll|hidden|clip)/})))()}function ve(){return typeof window>`u`?be:{width:window.innerWidth,height:window.innerHeight}}function ye(e){let t=S(null),r=_(null),i=S(null),a=_(ve()),o=E(()=>y(e.step)),s=E(()=>y(e.open)),u=E(()=>o.value?.spotlightPadding??y(e.defaultSpotlightPadding)),d=E(()=>i.value?he(i.value,u.value,a.value.width,a.value.height):null),f=E(()=>d.value?ge(d.value,a.value.width,a.value.height):[]),ee=E(()=>[ae((o.value?.sideOffset??y(e.defaultSideOffset))+u.value),re({padding:y(e.viewportPadding),fallbackAxisSideDirection:`start`}),se({padding:y(e.viewportPadding)})]),p=()=>{a.value=ve();let e=t.value;if(!e?.isConnected){t.value=null,i.value=null,N();return}i.value=de(e,a.value.width,a.value.height)},{floatingStyles:m,update:h}=ie(t,r,{strategy:`fixed`,placement:E(()=>o.value?.placement??`bottom`),middleware:ee,whileElementsMounted:(e,t,n)=>oe(e,t,()=>{p(),n()})}),g=null,v=null,b=null,x=null,C=!1,w=0,T=!1,D=null,O=()=>{b!==null&&(clearTimeout(b),b=null)},k=()=>{g?.disconnect(),g=null},A=e=>{k(),typeof ResizeObserver<`u`&&(g=new ResizeObserver(p),g.observe(e))},te=()=>{let t=o.value;!t||T||!s.value||(T=!0,e.onTargetMissing({step:t,index:y(e.stepIndex),target:t.target}))},ne=()=>{if(b!==null||T||t.value)return;let n=Math.max(0,y(e.targetTimeout));b=setTimeout(te,n)},j=(t,n)=>{n.scrollIntoView!==!1&&pe(t,y(e.scrollBehavior))},M=async(e=w)=>{if(!s.value||e!==w||(await c(),!s.value||e!==w))return;let n=o.value,r=n?le(n.target):null;if(!r?.isConnected){t.value=null,i.value=null,ne();return}O(),T=!1,n&&j(r,n),t.value=r,A(r),p(),await c(),h()};function N(e=!1){C||=e,!(x!==null||typeof window>`u`)&&(x=window.requestAnimationFrame(()=>{x=null;let e=C;if(C=!1,t.value){let n=o.value;e&&n&&j(t.value,n),p(),h()}else M()}))}let P=()=>{w+=1,C=!1,t.value=null,i.value=null,T=!1,O(),k(),!(!s.value||!o.value)&&M(w)},F=e=>!!(e&&(t.value?.contains(e)||r.value?.contains(e))),I=(e=!1)=>{let n=_e(t.value,r.value);((e?n[n.length-1]:n[0])??r.value)?.focus({preventScroll:!0})},L=n=>{if(!s.value||!d.value)return;if(n.key===`Escape`&&y(e.closeOnEscape)){n.preventDefault(),e.onEscape();return}if(n.key!==`Tab`)return;let i=_e(t.value,r.value),a=i.indexOf(document.activeElement);if(i.length===0||a===-1){n.preventDefault(),I(n.shiftKey);return}let o=n.shiftKey&&a===0,c=!n.shiftKey&&a===i.length-1;(o||c)&&(n.preventDefault(),I(n.shiftKey))},R=e=>{s.value&&d.value&&!F(e.target)&&I()},z=n=>{let r=t.value;s.value&&r&&n.composedPath().includes(r)&&e.onTargetClick()},B=n=>{me(n,t.value,y(e.lockTargetScroll))&&n.preventDefault()},V=()=>{let e=t.value,n=o.value;e&&n&&j(e,n),N()},H=()=>{N()},ce=()=>{typeof window>`u`||(D=document.activeElement instanceof HTMLElement?document.activeElement:null,window.addEventListener(`resize`,V),window.addEventListener(`scroll`,H,!0),window.visualViewport?.addEventListener(`resize`,V),window.visualViewport?.addEventListener(`scroll`,H),document.addEventListener(`keydown`,L,!0),document.addEventListener(`focusin`,R,!0),document.addEventListener(`click`,z,!0),document.addEventListener(`wheel`,B,{capture:!0,passive:!1}),document.addEventListener(`touchmove`,B,{capture:!0,passive:!1}),typeof MutationObserver<`u`&&(v=new MutationObserver(()=>N(!0)),v.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`class`,`style`,`hidden`]})))},U=()=>{typeof window>`u`||(window.removeEventListener(`resize`,V),window.removeEventListener(`scroll`,H,!0),window.visualViewport?.removeEventListener(`resize`,V),window.visualViewport?.removeEventListener(`scroll`,H),document.removeEventListener(`keydown`,L,!0),document.removeEventListener(`focusin`,R,!0),document.removeEventListener(`click`,z,!0),document.removeEventListener(`wheel`,B,!0),document.removeEventListener(`touchmove`,B,!0),v?.disconnect(),v=null,D?.isConnected&&(!document.activeElement||F(document.activeElement))&&D.focus({preventScroll:!0}),D=null)};return n([s,()=>y(e.stepIndex),o],([e],t)=>{let n=t?.[0]??!1;e&&!n?ce():!e&&n&&U(),P()},{immediate:!0}),n(r,e=>{e&&s.value&&c(()=>{h(),e.focus({preventScroll:!0})})}),l(()=>{w+=1,C=!1,O(),k(),U(),x!==null&&typeof window<`u`&&window.cancelAnimationFrame(x)}),{targetElement:t,floatingElement:r,spotlightRect:d,overlayRects:f,floatingStyles:m,isTargetReady:E(()=>!!(t.value&&d.value)),setFloatingElement:e=>{r.value=e instanceof HTMLElement?e:null},refresh:()=>N(!0)}}var be;function xe(){return(xe=e((()=>{H(),h(),J(),be={width:0,height:0}})))()}function Se(e){let t=e.open??_(!1),n=e.step??_(e.initialStep??0),r=E(()=>y(e.steps)),i=E(()=>r.value[n.value]),a=E(()=>n.value<=0),o=E(()=>r.value.length>0&&n.value>=r.value.length-1),s=E(()=>({current:r.value.length===0?0:n.value+1,total:r.value.length})),c=()=>{let e=i.value;return e?{step:e,index:n.value}:null},l=(i=e.initialStep??0)=>{if(r.value.length===0)return!1;let a=W(i,r.value.length),o=r.value[a];return n.value=a,t.value=!0,o&&e.onStart?.({step:o,index:a}),!0},u=(n=`dismiss`)=>{let r=c();t.value=!1,e.onClose?.(n,r)},d=()=>{let t=c();t&&e.onFinish?.(t),u(`complete`)};return{open:t,step:n,steps:r,currentStep:i,isFirstStep:a,isLastStep:o,progress:s,start:l,close:u,finish:d,next:()=>{let t=c();if(!t){u();return}if(e.onNext?.(t),o.value){d();return}n.value=W(n.value+1,r.value.length)},previous:()=>{let t=c();!t||a.value||(e.onPrevious?.(t),n.value=W(n.value-1,r.value.length))},goTo:e=>r.value.length!==0&&(n.value=W(e,r.value.length),!0),reset:()=>{t.value=!1,n.value=W(e.initialStep??0,r.value.length)}}}function Y(){return(Y=e((()=>{h(),J()})))()}var Ce,we,X;function Z(){return(Z=e((()=>{h(),A(),R(),M(),P(),B(),I(),j(),xe(),Y(),Ce=[`aria-label`,`aria-labelledby`,`aria-describedby`],we={key:1},X=u({__name:`OnboardingTour`,props:{steps:{},open:{type:Boolean,default:!1},step:{default:0},teleportTo:{default:`body`},cardWidth:{default:380},zIndex:{default:1e3},overlayOpacity:{default:.6},spotlightPadding:{default:6},spotlightRadius:{default:12},sideOffset:{default:10},viewportPadding:{default:8},targetTimeout:{default:3e3},missingTargetBehavior:{default:`close`},scrollBehavior:{default:`smooth`},lockTargetScroll:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showCloseButton:{type:Boolean,default:!0},showProgress:{type:Boolean,default:!0},previousLabel:{default:`Назад`},nextLabel:{default:`Далее`},finishLabel:{default:`Готово`},ariaLabel:{default:`Подсказка по интерфейсу`}},emits:[`update:open`,`update:step`,`start`,`next`,`previous`,`finish`,`close`,`target-click`,`target-missing`],setup(e,{expose:t,emit:n}){let c=e,l=n,u=E({get:()=>c.open,set:e=>l(`update:open`,e)}),h=E({get:()=>c.step,set:e=>l(`update:step`,e)}),_=Se({steps:()=>c.steps,open:u,step:h,onStart:e=>l(`start`,e),onNext:e=>l(`next`,e),onPrevious:e=>l(`previous`,e),onFinish:e=>l(`finish`,e),onClose:(e,t)=>l(`close`,e,t)}),y=ne(),S=p(),O=p(),k=ye({open:u,step:_.currentStep,stepIndex:h,closeOnEscape:()=>c.closeOnEscape,lockTargetScroll:()=>c.lockTargetScroll,scrollBehavior:()=>c.scrollBehavior,targetTimeout:()=>c.targetTimeout,viewportPadding:()=>c.viewportPadding,defaultSpotlightPadding:()=>c.spotlightPadding,defaultSideOffset:()=>c.sideOffset,onEscape:()=>_.close(`escape`),onTargetClick:()=>{let e=_.currentStep.value;e&&(l(`target-click`,{step:e,index:_.step.value}),e.advanceOnTargetClick&&_.next())},onTargetMissing:e=>{if(l(`target-missing`,e),c.missingTargetBehavior!==`wait`){if(c.missingTargetBehavior===`skip`&&e.index<c.steps.length-1){_.goTo(e.index+1);return}_.close(`missing-target`)}}}),A=E(()=>({"--onboarding-tour-z-index":String(c.zIndex),"--onboarding-tour-overlay-opacity":String(Math.min(Math.max(c.overlayOpacity,0),1))})),j=E(()=>[k.floatingStyles.value,{width:y.isMobile?`calc(100vw - (var(--gap-2) * 2))`:`${c.cardWidth}px`,maxWidth:`calc(100vw - (var(--gap-2) * 2))`}]),M=E(()=>{let e=k.spotlightRect.value;if(e)return{top:`${e.top}px`,left:`${e.left}px`,width:`${e.width}px`,height:`${e.height}px`,borderRadius:`${_.currentStep.value?.spotlightRadius??c.spotlightRadius}px`}}),P=E(()=>!_.isFirstStep.value&&_.currentStep.value?.showPrevious!==!1),I=E(()=>_.currentStep.value?.actionLabel??(_.isLastStep.value?c.finishLabel:c.nextLabel));return t({start:_.start,close:_.close,next:_.next,previous:_.previous,goTo:_.goTo,refresh:k.refresh}),(e,t)=>(r(),w(v,{to:c.teleportTo},[c.open&&m(_).currentStep.value?(r(),i(`div`,{key:0,class:D([`onboarding-tour`,{"onboarding-tour--animated":c.animated}]),style:T(A.value)},[m(k).isTargetReady.value?(r(),i(b,{key:0},[(r(!0),i(b,null,ee(m(k).overlayRects.value,(e,n)=>(r(),i(`div`,{key:n,class:`onboarding-tour__overlay`,style:T({top:`${e.top}px`,left:`${e.left}px`,width:`${e.width}px`,height:`${e.height}px`}),"aria-hidden":`true`,onWheel:t[0]||=x(()=>{},[`prevent`]),onTouchmove:t[1]||=x(()=>{},[`prevent`])},null,36))),128)),g(`div`,{class:`onboarding-tour__spotlight`,style:T(M.value),"aria-hidden":`true`},null,4),g(`div`,{ref:m(k).setFloatingElement,class:`onboarding-tour__floating`,style:T(j.value),role:`dialog`,"aria-modal":`true`,"aria-label":c.ariaLabel,"aria-labelledby":m(S),"aria-describedby":m(_).currentStep.value.description?m(O):void 0,tabindex:`-1`},[(r(),i(`div`,{key:m(_).currentStep.value.id,class:`onboarding-tour__card-motion`},[s(e.$slots,`card`,{step:m(_).currentStep.value,index:m(_).step.value,progress:m(_).progress.value,next:m(_).next,previous:m(_).previous,close:m(_).close},()=>[a(F,{class:`onboarding-tour__card`,padding:16,"border-radius":16,stretched:``},{default:C(()=>[a(V,{direction:`column`,gap:4,stretched:``},{default:C(()=>[a(V,{direction:`row`,gap:3,"align-items":`start`,"justify-content":`space-between`,stretched:``},{default:C(()=>[a(V,{direction:`column`,gap:2},{default:C(()=>[s(e.$slots,`title`,{step:m(_).currentStep.value,index:m(_).step.value},()=>[a(L,{id:m(S),Element:`h2`,typography:`title-2`,class:`onboarding-tour__title`},{default:C(()=>[o(f(m(_).currentStep.value.title),1)]),_:1},8,[`id`])],!0),s(e.$slots,`description`,{step:m(_).currentStep.value,index:m(_).step.value},()=>[m(_).currentStep.value.description?(r(),w(L,{key:0,id:m(O),typography:`paragraph-1`,color:`secondary`,class:`onboarding-tour__description`},{default:C(()=>[o(f(m(_).currentStep.value.description),1)]),_:1},8,[`id`])):d(``,!0)],!0)]),_:3}),c.showCloseButton?(r(),w(N,{key:0,mode:`ghost`,size:`small`,squared:``,type:`button`,"aria-label":`Закрыть онбординг`,onClick:t[2]||=e=>m(_).close()},{default:C(()=>[a(m(te))]),_:1})):d(``,!0)]),_:3}),s(e.$slots,`content`,{step:m(_).currentStep.value,index:m(_).step.value},void 0,!0),a(V,{direction:`row`,gap:2,"align-items":`center`,"justify-content":`space-between`,stretched:``},{default:C(()=>[s(e.$slots,`progress`,{step:m(_).currentStep.value,index:m(_).step.value,progress:m(_).progress.value},()=>[c.showProgress?(r(),w(z,{key:0,mode:`secondary`},{default:C(()=>[o(f(m(_).progress.value.current)+` из `+f(m(_).progress.value.total),1)]),_:1})):(r(),i(`span`,we))],!0),a(V,{direction:`row`,gap:2,"align-items":`center`},{default:C(()=>[s(e.$slots,`actions`,{step:m(_).currentStep.value,index:m(_).step.value,isFirst:m(_).isFirstStep.value,isLast:m(_).isLastStep.value,next:m(_).next,previous:m(_).previous,close:m(_).close},()=>[P.value?(r(),w(N,{key:0,mode:`ghost`,size:`small`,type:`button`,onClick:m(_).previous},{default:C(()=>[o(f(m(_).currentStep.value.previousLabel??c.previousLabel),1)]),_:1},8,[`onClick`])):d(``,!0),a(N,{mode:`contrast`,size:`small`,type:`button`,onClick:m(_).next},{default:C(()=>[o(f(I.value),1)]),_:1},8,[`onClick`])],!0)]),_:3})]),_:3})]),_:3})]),_:3})],!0)]))],12,Ce)],64)):d(``,!0)],6)):d(``,!0)],8,[`to`]))}})})))()}var Q;function Te(){return(Te=e((()=>{Z(),O(),Q=k(X,[[`__scopeId`,`data-v-9d7242d2`]]),X.__docgenInfo=Object.assign({displayName:X.name??X.__name},{exportName:`default`,displayName:`OnboardingTour`,description:``,tags:{},expose:[{name:`start`},{name:`close`},{name:`next`},{name:`previous`},{name:`goTo`},{name:`refresh`}],props:[{name:`steps`,required:!0,type:{name:`TSTypeOperator`}},{name:`open`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`step`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`0`}},{name:`teleportTo`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`HTMLElement`}]},defaultValue:{func:!1,value:`"body"`}},{name:`cardWidth`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`380`}},{name:`zIndex`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`1000`}},{name:`overlayOpacity`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`0.6`}},{name:`spotlightPadding`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`6`}},{name:`spotlightRadius`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`12`}},{name:`sideOffset`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`10`}},{name:`viewportPadding`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`8`}},{name:`targetTimeout`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`3000`}},{name:`missingTargetBehavior`,required:!1,type:{name:`OnboardingTourMissingTargetBehavior`},defaultValue:{func:!1,value:`"close"`}},{name:`scrollBehavior`,required:!1,type:{name:`OnboardingTourScrollBehavior`},defaultValue:{func:!1,value:`"smooth"`}},{name:`lockTargetScroll`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`animated`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`closeOnEscape`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`showCloseButton`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`showProgress`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`previousLabel`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"Назад"`}},{name:`nextLabel`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"Далее"`}},{name:`finishLabel`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"Готово"`}},{name:`ariaLabel`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"Подсказка по интерфейсу"`}}],events:[{name:`update:open`,type:{names:[`boolean`]}},{name:`update:step`,type:{names:[`number`]}},{name:`start`,type:{names:[`OnboardingTourStepPayload`]}},{name:`next`,type:{names:[`OnboardingTourStepPayload`]}},{name:`previous`,type:{names:[`OnboardingTourStepPayload`]}},{name:`finish`,type:{names:[`OnboardingTourStepPayload`]}},{name:`close`,type:{names:[`OnboardingTourCloseReason`]}},{name:`target-click`,type:{names:[`OnboardingTourStepPayload`]}},{name:`target-missing`,type:{names:[`OnboardingTourTargetMissingPayload`]}}],slots:[{name:`card`,scoped:!0,bindings:[{name:`step`,title:`binding`},{name:`index`,title:`binding`},{name:`progress`,title:`binding`},{name:`next`,title:`binding`},{name:`previous`,title:`binding`},{name:`close`,title:`binding`}]},{name:`title`,scoped:!0,bindings:[{name:`step`,title:`binding`},{name:`index`,title:`binding`}]},{name:`description`,scoped:!0,bindings:[{name:`step`,title:`binding`},{name:`index`,title:`binding`}]},{name:`content`,scoped:!0,bindings:[{name:`step`,title:`binding`},{name:`index`,title:`binding`}]},{name:`progress`,scoped:!0,bindings:[{name:`step`,title:`binding`},{name:`index`,title:`binding`},{name:`progress`,title:`binding`}]},{name:`actions`,scoped:!0,bindings:[{name:`step`,title:`binding`},{name:`index`,title:`binding`},{name:`is-first`,title:`binding`},{name:`is-last`,title:`binding`},{name:`next`,title:`binding`},{name:`previous`,title:`binding`},{name:`close`,title:`binding`}]}],sourceFiles:[`/home/runner/work/gui/gui/src/components/OnboardingTour/OnboardingTour.vue`]})})))()}var Ee=t({ThreeCards:()=>$,__namedExportsOrder:()=>Oe,default:()=>De}),De,$,Oe;function ke(){return(ke=e((()=>{R(),M(),P(),ce(),B(),I(),Te(),Y(),De={title:`Components/OnboardingTour`,component:Q,tags:[`autodocs`],parameters:{layout:`fullscreen`}},$={render:()=>({components:{Badge:z,Button:N,Card:F,OnboardingTour:Q,ScrollArea:U,Stack:V,Text:L},setup(){let e=[{id:`calendar`,target:`[data-onboarding='calendar']`,title:`Планируйте загрузку`,description:`Карточка календаря остаётся настоящей и интерактивной во время подсказки.`,placement:`bottom-start`,actionLabel:`Понятно, дальше`},{id:`guests`,target:`[data-onboarding='guests']`,title:`Следите за гостями`,description:`Позиция подсказки автоматически изменится, если справа окажется мало места.`,placement:`right`},{id:`automation`,target:`[data-onboarding='automation']`,title:`Автоматизируйте рутину`,description:`ScrollArea сам прокрутится до этой карточки, а spotlight продолжит следовать за ней.`,placement:`top-end`,actionLabel:`Начать работу`}],{open:t,step:n,start:r}=Se({steps:e});return{open:t,step:n,start:r,steps:e}},template:`
      <Stack direction="column" :gap="4" stretched>
        <Card :padding="16" :border-radius="16" stretched>
          <Stack direction="row" :gap="4" align-items="center" justify-content="space-between" stretched wrap>
            <Stack direction="column" :gap="1">
              <Text typography="title-3">Рабочее пространство</Text>
              <Text typography="paragraph-1" color="secondary">
                Изменяйте ширину окна и прокручивайте список во время тура.
              </Text>
            </Stack>
            <Button mode="contrast" @click="start(0)">Запустить онбординг</Button>
          </Stack>
        </Card>

        <ScrollArea :max-height="380" aria-label="Возможности сервиса">
          <Stack direction="column" :gap="6" stretched>
            <Card data-onboarding="calendar" :padding="20" stretched>
              <Stack direction="column" :gap="4" stretched>
                <Stack direction="row" justify-content="space-between" align-items="center" stretched>
                  <Text typography="title-2">Календарь заселений</Text>
                  <Badge mode="positive">12 броней</Badge>
                </Stack>
                <Text typography="paragraph-1" color="secondary">
                  Проверяйте свободные даты и управляйте загрузкой объектов.
                </Text>
                <Button mode="outline">Открыть календарь</Button>
              </Stack>
            </Card>

            <Card data-onboarding="guests" :padding="20" stretched>
              <Stack direction="column" :gap="4" stretched>
                <Stack direction="row" justify-content="space-between" align-items="center" stretched>
                  <Text typography="title-2">Гости</Text>
                  <Badge mode="secondary">4 новых</Badge>
                </Stack>
                <Text typography="paragraph-1" color="secondary">
                  Храните контакты, историю визитов и важные пожелания гостей.
                </Text>
                <Button mode="outline">Посмотреть гостей</Button>
              </Stack>
            </Card>

            <Card data-onboarding="automation" :padding="20" stretched>
              <Stack direction="column" :gap="4" stretched>
                <Stack direction="row" justify-content="space-between" align-items="center" stretched>
                  <Text typography="title-2">Автоматизация</Text>
                  <Badge mode="accent">Новое</Badge>
                </Stack>
                <Text typography="paragraph-1" color="secondary">
                  Настройте сообщения, напоминания и действия после бронирования.
                </Text>
                <Button mode="outline">Настроить сценарии</Button>
              </Stack>
            </Card>
          </Stack>
        </ScrollArea>

        <OnboardingTour
          v-model:open="open"
          v-model:step="step"
          :steps="steps"
          missing-target-behavior="skip"
        />
      </Stack>
    `})},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Badge,
      Button,
      Card,
      OnboardingTour,
      ScrollArea,
      Stack,
      Text
    },
    setup() {
      const steps: OnboardingTourStep[] = [{
        id: "calendar",
        target: "[data-onboarding='calendar']",
        title: "Планируйте загрузку",
        description: "Карточка календаря остаётся настоящей и интерактивной во время подсказки.",
        placement: "bottom-start",
        actionLabel: "Понятно, дальше"
      }, {
        id: "guests",
        target: "[data-onboarding='guests']",
        title: "Следите за гостями",
        description: "Позиция подсказки автоматически изменится, если справа окажется мало места.",
        placement: "right"
      }, {
        id: "automation",
        target: "[data-onboarding='automation']",
        title: "Автоматизируйте рутину",
        description: "ScrollArea сам прокрутится до этой карточки, а spotlight продолжит следовать за ней.",
        placement: "top-end",
        actionLabel: "Начать работу"
      }];
      const {
        open,
        step,
        start
      } = useOnboardingTour({
        steps
      });
      return {
        open,
        step,
        start,
        steps
      };
    },
    template: \`
      <Stack direction="column" :gap="4" stretched>
        <Card :padding="16" :border-radius="16" stretched>
          <Stack direction="row" :gap="4" align-items="center" justify-content="space-between" stretched wrap>
            <Stack direction="column" :gap="1">
              <Text typography="title-3">Рабочее пространство</Text>
              <Text typography="paragraph-1" color="secondary">
                Изменяйте ширину окна и прокручивайте список во время тура.
              </Text>
            </Stack>
            <Button mode="contrast" @click="start(0)">Запустить онбординг</Button>
          </Stack>
        </Card>

        <ScrollArea :max-height="380" aria-label="Возможности сервиса">
          <Stack direction="column" :gap="6" stretched>
            <Card data-onboarding="calendar" :padding="20" stretched>
              <Stack direction="column" :gap="4" stretched>
                <Stack direction="row" justify-content="space-between" align-items="center" stretched>
                  <Text typography="title-2">Календарь заселений</Text>
                  <Badge mode="positive">12 броней</Badge>
                </Stack>
                <Text typography="paragraph-1" color="secondary">
                  Проверяйте свободные даты и управляйте загрузкой объектов.
                </Text>
                <Button mode="outline">Открыть календарь</Button>
              </Stack>
            </Card>

            <Card data-onboarding="guests" :padding="20" stretched>
              <Stack direction="column" :gap="4" stretched>
                <Stack direction="row" justify-content="space-between" align-items="center" stretched>
                  <Text typography="title-2">Гости</Text>
                  <Badge mode="secondary">4 новых</Badge>
                </Stack>
                <Text typography="paragraph-1" color="secondary">
                  Храните контакты, историю визитов и важные пожелания гостей.
                </Text>
                <Button mode="outline">Посмотреть гостей</Button>
              </Stack>
            </Card>

            <Card data-onboarding="automation" :padding="20" stretched>
              <Stack direction="column" :gap="4" stretched>
                <Stack direction="row" justify-content="space-between" align-items="center" stretched>
                  <Text typography="title-2">Автоматизация</Text>
                  <Badge mode="accent">Новое</Badge>
                </Stack>
                <Text typography="paragraph-1" color="secondary">
                  Настройте сообщения, напоминания и действия после бронирования.
                </Text>
                <Button mode="outline">Настроить сценарии</Button>
              </Stack>
            </Card>
          </Stack>
        </ScrollArea>

        <OnboardingTour
          v-model:open="open"
          v-model:step="step"
          :steps="steps"
          missing-target-behavior="skip"
        />
      </Stack>
    \`
  })
}`,...$.parameters?.docs?.source}}},Oe=[`ThreeCards`]})))()}export{$ as n,ke as r,Ee as t};