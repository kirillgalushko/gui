import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{$ as n,C as r,D as i,E as a,I as o,J as s,L as c,O as l,S as u,U as d,W as f,Z as p,a as m,b as h,ct as g,g as _,gt as v,h as y,mt as b,p as x,pt as S,ut as C,vt as w,x as T,y as E,yt as D,z as O}from"./iframe-Du9fEe2r.js";import{n as k,t as A}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{n as j,r as ee}from"./gui-icons.es-ypdSzEZR.js";import{n as te,t as M}from"./useViewportBreakpoint-e1oqsKfc.js";import{n as N,t as P}from"./Button-CfzASKeY.js";import{n as F,t as I}from"./Text-CY8H8lpg.js";import{n as L,t as R}from"./Badge-BrAD1kXe.js";import{n as z,t as B}from"./Card-QLGUd3tV.js";import{n as V,t as H}from"./Stack-DOfBkaqT.js";import{i as ne,n as re,o as ie,r as ae,s as oe,t as U}from"./floating-ui.vue-DSmbINl9.js";import{n as se,t as W}from"./ScrollArea-r7dBobMi.js";function G(e,t){return t<=0?0:Math.min(Math.max(Math.trunc(e),0),t-1)}function ce(e,t=document){if(typeof e==`function`)return e();if(typeof e!=`string`)return e;try{let n=t.querySelector(e);return n instanceof HTMLElement?n:null}catch{return null}}function K(e,t,n,r){let i=Math.max(0,t-r),a=Math.max(0,n-e);return i<=0||a<=0?null:{top:e,right:t,bottom:n,left:r,width:i,height:a}}function le(e,t){return K(Math.max(e.top,t.top),Math.min(e.right,t.right),Math.min(e.bottom,t.bottom),Math.max(e.left,t.left))}function q(e){return K(e.top,e.right,e.bottom,e.left)}function ue(e,t=window.innerWidth,n=window.innerHeight){let r=q(e.getBoundingClientRect());if(!r)return null;let i=le(r,{top:0,right:t,bottom:n,left:0,width:t,height:n}),a=e.parentElement;for(;i&&a&&a!==document.body;){let e=window.getComputedStyle(a);if(J.test(e.overflow)||J.test(e.overflowX)||J.test(e.overflowY)){let e=q(a.getBoundingClientRect());e&&(i=le(i,e))}a=a.parentElement}return i}function de(e){let t=q(e.getBoundingClientRect()),n=ue(e);return!t||!n?!1:n.top<=t.top&&n.left<=t.left&&n.right>=t.right&&n.bottom>=t.bottom}function fe(e,t){return!de(e)&&(e.scrollIntoView({behavior:t,block:`center`,inline:`center`}),!0)}function pe(e,t,n){return!!(n&&t&&e.composedPath().includes(t))}function me(e,t,n,r){let i=Math.max(0,t),a=Math.max(0,e.top-i),o=Math.max(0,e.left-i),s=Math.min(n,e.right+i),c=Math.min(r,e.bottom+i);return{top:a,right:s,bottom:c,left:o,width:Math.max(0,s-o),height:Math.max(0,c-a)}}function he(e,t,n){return[K(0,t,e.top,0),K(e.top,e.left,e.bottom,0),K(e.top,t,e.bottom,e.right),K(e.bottom,t,n,0)].filter(e=>e!==null)}function ge(...e){let t=[`a[href]`,`button:not([disabled])`,`input:not([disabled])`,`select:not([disabled])`,`textarea:not([disabled])`,`[tabindex]:not([tabindex='-1'])`,`[contenteditable='true']`].join(`,`);return e.flatMap(e=>{if(!e)return[];let n=Array.from(e.querySelectorAll(t));return(e.matches(t)?[e,...n]:n).filter(e=>!e.hidden&&e.getAttribute(`aria-hidden`)!==`true`)})}var J;function Y(){return(Y=e((()=>{J=/(auto|scroll|hidden|clip)/})))()}function _e(){return typeof window>`u`?ye:{width:window.innerWidth,height:window.innerHeight}}function ve(e){let t=C(null),n=g(null),r=C(null),i=g(_e()),a=E(()=>S(e.step)),s=E(()=>S(e.open)),l=E(()=>a.value?.spotlightPadding??S(e.defaultSpotlightPadding)),u=E(()=>r.value?me(r.value,l.value,i.value.width,i.value.height):null),d=E(()=>u.value?he(u.value,i.value.width,i.value.height):[]),f=E(()=>[ie((a.value?.sideOffset??S(e.defaultSideOffset))+l.value),ne({padding:S(e.viewportPadding),fallbackAxisSideDirection:`start`}),oe({padding:S(e.viewportPadding)})]),m=()=>{i.value=_e();let e=t.value;if(!e?.isConnected){t.value=null,r.value=null,P();return}r.value=ue(e,i.value.width,i.value.height)},{floatingStyles:h,update:_}=re(t,n,{strategy:`fixed`,placement:E(()=>a.value?.placement??`bottom`),middleware:f,whileElementsMounted:(e,t,n)=>ae(e,t,()=>{m(),n()})}),v=null,y=null,b=null,x=null,w=!1,T=0,D=!1,O=null,k=()=>{b!==null&&(clearTimeout(b),b=null)},A=()=>{v?.disconnect(),v=null},j=e=>{A(),typeof ResizeObserver<`u`&&(v=new ResizeObserver(m),v.observe(e))},ee=()=>{let t=a.value;!t||D||!s.value||(D=!0,e.onTargetMissing({step:t,index:S(e.stepIndex),target:t.target}))},te=()=>{if(b!==null||D||t.value)return;let n=Math.max(0,S(e.targetTimeout));b=setTimeout(ee,n)},M=(t,n)=>{n.scrollIntoView!==!1&&fe(t,S(e.scrollBehavior))},N=async(e=T)=>{if(!s.value||e!==T||(await o(),!s.value||e!==T))return;let n=a.value,i=n?ce(n.target):null;if(!i?.isConnected){t.value=null,r.value=null,te();return}k(),D=!1,n&&M(i,n),t.value=i,j(i),m(),await o(),_()};function P(e=!1){w||=e,!(x!==null||typeof window>`u`)&&(x=window.requestAnimationFrame(()=>{x=null;let e=w;if(w=!1,t.value){let n=a.value;e&&n&&M(t.value,n),m(),_()}else N()}))}let F=()=>{T+=1,w=!1,t.value=null,r.value=null,D=!1,k(),A(),!(!s.value||!a.value)&&N(T)},I=e=>!!(e&&(t.value?.contains(e)||n.value?.contains(e))),L=(e=!1)=>{let r=ge(t.value,n.value);((e?r[r.length-1]:r[0])??n.value)?.focus({preventScroll:!0})},R=r=>{if(!s.value||!u.value)return;if(r.key===`Escape`&&S(e.closeOnEscape)){r.preventDefault(),e.onEscape();return}if(r.key!==`Tab`)return;let i=ge(t.value,n.value),a=i.indexOf(document.activeElement);if(i.length===0||a===-1){r.preventDefault(),L(r.shiftKey);return}let o=r.shiftKey&&a===0,c=!r.shiftKey&&a===i.length-1;(o||c)&&(r.preventDefault(),L(r.shiftKey))},z=e=>{s.value&&u.value&&!I(e.target)&&L()},B=n=>{let r=t.value;s.value&&r&&n.composedPath().includes(r)&&e.onTargetClick()},V=n=>{pe(n,t.value,S(e.lockTargetScroll))&&n.preventDefault()},H=()=>{let e=t.value,n=a.value;e&&n&&M(e,n),P()},U=()=>{P()},se=()=>{typeof window>`u`||(O=document.activeElement instanceof HTMLElement?document.activeElement:null,window.addEventListener(`resize`,H),window.addEventListener(`scroll`,U,!0),window.visualViewport?.addEventListener(`resize`,H),window.visualViewport?.addEventListener(`scroll`,U),document.addEventListener(`keydown`,R,!0),document.addEventListener(`focusin`,z,!0),document.addEventListener(`click`,B,!0),document.addEventListener(`wheel`,V,{capture:!0,passive:!1}),document.addEventListener(`touchmove`,V,{capture:!0,passive:!1}),typeof MutationObserver<`u`&&(y=new MutationObserver(()=>P(!0)),y.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`class`,`style`,`hidden`]})))},W=()=>{typeof window>`u`||(window.removeEventListener(`resize`,H),window.removeEventListener(`scroll`,U,!0),window.visualViewport?.removeEventListener(`resize`,H),window.visualViewport?.removeEventListener(`scroll`,U),document.removeEventListener(`keydown`,R,!0),document.removeEventListener(`focusin`,z,!0),document.removeEventListener(`click`,B,!0),document.removeEventListener(`wheel`,V,!0),document.removeEventListener(`touchmove`,V,!0),y?.disconnect(),y=null,O?.isConnected&&(!document.activeElement||I(document.activeElement))&&O.focus({preventScroll:!0}),O=null)};return p([s,()=>S(e.stepIndex),a],([e],t)=>{let n=t?.[0]??!1;e&&!n?se():!e&&n&&W(),F()},{immediate:!0}),p(n,e=>{e&&s.value&&o(()=>{_(),e.focus({preventScroll:!0})})}),c(()=>{T+=1,w=!1,k(),A(),W(),x!==null&&typeof window<`u`&&window.cancelAnimationFrame(x)}),{targetElement:t,floatingElement:n,spotlightRect:u,overlayRects:d,floatingStyles:h,isTargetReady:E(()=>!!(t.value&&u.value)),setFloatingElement:e=>{n.value=e instanceof HTMLElement?e:null},refresh:()=>P(!0)}}var ye;function be(){return(be=e((()=>{U(),m(),Y(),ye={width:0,height:0}})))()}function xe(e){let t=e.open??g(!1),n=e.step??g(e.initialStep??0),r=E(()=>S(e.steps)),i=E(()=>r.value[n.value]),a=E(()=>n.value<=0),o=E(()=>r.value.length>0&&n.value>=r.value.length-1),s=E(()=>({current:r.value.length===0?0:n.value+1,total:r.value.length})),c=()=>{let e=i.value;return e?{step:e,index:n.value}:null},l=(i=e.initialStep??0)=>{if(r.value.length===0)return!1;let a=G(i,r.value.length),o=r.value[a];return n.value=a,t.value=!0,o&&e.onStart?.({step:o,index:a}),!0},u=(n=`dismiss`)=>{let r=c();t.value=!1,e.onClose?.(n,r)},d=()=>{let t=c();t&&e.onFinish?.(t),u(`complete`)};return{open:t,step:n,steps:r,currentStep:i,isFirstStep:a,isLastStep:o,progress:s,start:l,close:u,finish:d,next:()=>{let t=c();if(!t){u();return}if(e.onNext?.(t),o.value){d();return}n.value=G(n.value+1,r.value.length)},previous:()=>{let t=c();!t||a.value||(e.onPrevious?.(t),n.value=G(n.value-1,r.value.length))},goTo:e=>r.value.length!==0&&(n.value=G(e,r.value.length),!0),reset:()=>{t.value=!1,n.value=G(e.initialStep??0,r.value.length)}}}function X(){return(X=e((()=>{m(),Y()})))()}var Se,Ce,Z;function we(){return(we=e((()=>{m(),j(),L(),N(),z(),V(),F(),M(),be(),X(),Se=[`aria-label`,`aria-labelledby`,`aria-describedby`],Ce={key:1},Z=l({__name:`OnboardingTour`,props:{steps:{},open:{type:Boolean,default:!1},step:{default:0},teleportTo:{default:`body`},cardWidth:{default:380},zIndex:{default:1e3},overlayOpacity:{default:.6},spotlightPadding:{default:6},spotlightRadius:{default:12},sideOffset:{default:10},viewportPadding:{default:8},targetTimeout:{default:3e3},missingTargetBehavior:{default:`close`},scrollBehavior:{default:`smooth`},lockTargetScroll:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showCloseButton:{type:Boolean,default:!0},showProgress:{type:Boolean,default:!0},previousLabel:{default:`Назад`},nextLabel:{default:`Далее`},finishLabel:{default:`Готово`},ariaLabel:{default:`Подсказка по интерфейсу`}},emits:[`update:open`,`update:step`,`start`,`next`,`previous`,`finish`,`close`,`target-click`,`target-missing`],setup(e,{expose:t,emit:o}){let c=e,l=o,p=E({get:()=>c.open,set:e=>l(`update:open`,e)}),m=E({get:()=>c.step,set:e=>l(`update:step`,e)}),g=xe({steps:()=>c.steps,open:p,step:m,onStart:e=>l(`start`,e),onNext:e=>l(`next`,e),onPrevious:e=>l(`previous`,e),onFinish:e=>l(`finish`,e),onClose:(e,t)=>l(`close`,e,t)}),S=te(),C=s(),k=s(),A=ve({open:p,step:g.currentStep,stepIndex:m,closeOnEscape:()=>c.closeOnEscape,lockTargetScroll:()=>c.lockTargetScroll,scrollBehavior:()=>c.scrollBehavior,targetTimeout:()=>c.targetTimeout,viewportPadding:()=>c.viewportPadding,defaultSpotlightPadding:()=>c.spotlightPadding,defaultSideOffset:()=>c.sideOffset,onEscape:()=>g.close(`escape`),onTargetClick:()=>{let e=g.currentStep.value;e&&(l(`target-click`,{step:e,index:g.step.value}),e.advanceOnTargetClick&&g.next())},onTargetMissing:e=>{if(l(`target-missing`,e),c.missingTargetBehavior!==`wait`){if(c.missingTargetBehavior===`skip`&&e.index<c.steps.length-1){g.goTo(e.index+1);return}g.close(`missing-target`)}}}),j=E(()=>({"--onboarding-tour-z-index":String(c.zIndex),"--onboarding-tour-overlay-opacity":String(Math.min(Math.max(c.overlayOpacity,0),1))})),M=E(()=>[A.floatingStyles.value,{width:S.isMobile?`calc(100vw - (var(--gap-2) * 2))`:`${c.cardWidth}px`,maxWidth:`calc(100vw - (var(--gap-2) * 2))`}]),N=E(()=>{let e=A.spotlightRect.value;if(e)return{top:`${e.top}px`,left:`${e.left}px`,width:`${e.width}px`,height:`${e.height}px`,borderRadius:`${g.currentStep.value?.spotlightRadius??c.spotlightRadius}px`}}),F=E(()=>!g.isFirstStep.value&&g.currentStep.value?.showPrevious!==!1),L=E(()=>g.currentStep.value?.actionLabel??(g.isLastStep.value?c.finishLabel:c.nextLabel));return t({start:g.start,close:g.close,next:g.next,previous:g.previous,goTo:g.goTo,refresh:A.refresh}),(e,t)=>(O(),T(_,{to:c.teleportTo},[c.open&&b(g).currentStep.value?(O(),r(`div`,{key:0,class:v([`onboarding-tour`,{"onboarding-tour--animated":c.animated}]),style:w(j.value)},[b(A).isTargetReady.value?(O(),r(y,{key:0},[(O(!0),r(y,null,d(b(A).overlayRects.value,(e,n)=>(O(),r(`div`,{key:n,class:`onboarding-tour__overlay`,style:w({top:`${e.top}px`,left:`${e.left}px`,width:`${e.width}px`,height:`${e.height}px`}),"aria-hidden":`true`,onWheel:t[0]||=x(()=>{},[`prevent`]),onTouchmove:t[1]||=x(()=>{},[`prevent`])},null,36))),128)),h(`div`,{class:`onboarding-tour__spotlight`,style:w(N.value),"aria-hidden":`true`},null,4),h(`div`,{ref:b(A).setFloatingElement,class:`onboarding-tour__floating`,style:w(M.value),role:`dialog`,"aria-modal":`true`,"aria-label":c.ariaLabel,"aria-labelledby":b(C),"aria-describedby":b(g).currentStep.value.description?b(k):void 0,tabindex:`-1`},[(O(),r(`div`,{key:b(g).currentStep.value.id,class:`onboarding-tour__card-motion`},[f(e.$slots,`card`,{step:b(g).currentStep.value,index:b(g).step.value,progress:b(g).progress.value,next:b(g).next,previous:b(g).previous,close:b(g).close},()=>[i(B,{class:`onboarding-tour__card`,padding:16,"border-radius":16,stretched:``},{default:n(()=>[i(H,{direction:`column`,gap:4,stretched:``},{default:n(()=>[i(H,{direction:`row`,gap:3,"align-items":`start`,"justify-content":`space-between`,stretched:``},{default:n(()=>[i(H,{direction:`column`,gap:2},{default:n(()=>[f(e.$slots,`title`,{step:b(g).currentStep.value,index:b(g).step.value},()=>[i(I,{id:b(C),Element:`h2`,typography:`title-2`,class:`onboarding-tour__title`},{default:n(()=>[a(D(b(g).currentStep.value.title),1)]),_:1},8,[`id`])],!0),f(e.$slots,`description`,{step:b(g).currentStep.value,index:b(g).step.value},()=>[b(g).currentStep.value.description?(O(),T(I,{key:0,id:b(k),typography:`paragraph-1`,color:`secondary`,class:`onboarding-tour__description`},{default:n(()=>[a(D(b(g).currentStep.value.description),1)]),_:1},8,[`id`])):u(``,!0)],!0)]),_:3}),c.showCloseButton?(O(),T(P,{key:0,mode:`ghost`,size:`small`,squared:``,type:`button`,"aria-label":`Закрыть онбординг`,onClick:t[2]||=e=>b(g).close()},{default:n(()=>[i(b(ee))]),_:1})):u(``,!0)]),_:3}),f(e.$slots,`content`,{step:b(g).currentStep.value,index:b(g).step.value},void 0,!0),i(H,{direction:`row`,gap:2,"align-items":`center`,"justify-content":`space-between`,stretched:``},{default:n(()=>[f(e.$slots,`progress`,{step:b(g).currentStep.value,index:b(g).step.value,progress:b(g).progress.value},()=>[c.showProgress?(O(),T(R,{key:0,mode:`secondary`},{default:n(()=>[a(D(b(g).progress.value.current)+` из `+D(b(g).progress.value.total),1)]),_:1})):(O(),r(`span`,Ce))],!0),i(H,{direction:`row`,gap:2,"align-items":`center`},{default:n(()=>[f(e.$slots,`actions`,{step:b(g).currentStep.value,index:b(g).step.value,isFirst:b(g).isFirstStep.value,isLast:b(g).isLastStep.value,next:b(g).next,previous:b(g).previous,close:b(g).close},()=>[F.value?(O(),T(P,{key:0,mode:`ghost`,size:`small`,type:`button`,onClick:b(g).previous},{default:n(()=>[a(D(b(g).currentStep.value.previousLabel??c.previousLabel),1)]),_:1},8,[`onClick`])):u(``,!0),i(P,{mode:`contrast`,size:`small`,type:`button`,onClick:b(g).next},{default:n(()=>[a(D(L.value),1)]),_:1},8,[`onClick`])],!0)]),_:3})]),_:3})]),_:3})]),_:3})],!0)]))],12,Se)],64)):u(``,!0)],6)):u(``,!0)],8,[`to`]))}})})))()}var Q;function Te(){return(Te=e((()=>{we(),k(),Q=A(Z,[[`__scopeId`,`data-v-9d7242d2`]]),Z.__docgenInfo=Object.assign({displayName:Z.name??Z.__name},{exportName:`default`,displayName:`OnboardingTour`,description:``,tags:{},expose:[{name:`start`},{name:`close`},{name:`next`},{name:`previous`},{name:`goTo`},{name:`refresh`}],props:[{name:`steps`,required:!0,type:{name:`TSTypeOperator`}},{name:`open`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`step`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`0`}},{name:`teleportTo`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`HTMLElement`}]},defaultValue:{func:!1,value:`"body"`}},{name:`cardWidth`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`380`}},{name:`zIndex`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`1000`}},{name:`overlayOpacity`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`0.6`}},{name:`spotlightPadding`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`6`}},{name:`spotlightRadius`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`12`}},{name:`sideOffset`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`10`}},{name:`viewportPadding`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`8`}},{name:`targetTimeout`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`3000`}},{name:`missingTargetBehavior`,required:!1,type:{name:`OnboardingTourMissingTargetBehavior`},defaultValue:{func:!1,value:`"close"`}},{name:`scrollBehavior`,required:!1,type:{name:`OnboardingTourScrollBehavior`},defaultValue:{func:!1,value:`"smooth"`}},{name:`lockTargetScroll`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`animated`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`closeOnEscape`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`showCloseButton`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`showProgress`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`previousLabel`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"Назад"`}},{name:`nextLabel`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"Далее"`}},{name:`finishLabel`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"Готово"`}},{name:`ariaLabel`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"Подсказка по интерфейсу"`}}],events:[{name:`update:open`,type:{names:[`boolean`]}},{name:`update:step`,type:{names:[`number`]}},{name:`start`,type:{names:[`OnboardingTourStepPayload`]}},{name:`next`,type:{names:[`OnboardingTourStepPayload`]}},{name:`previous`,type:{names:[`OnboardingTourStepPayload`]}},{name:`finish`,type:{names:[`OnboardingTourStepPayload`]}},{name:`close`,type:{names:[`OnboardingTourCloseReason`]}},{name:`target-click`,type:{names:[`OnboardingTourStepPayload`]}},{name:`target-missing`,type:{names:[`OnboardingTourTargetMissingPayload`]}}],slots:[{name:`card`,scoped:!0,bindings:[{name:`step`,title:`binding`},{name:`index`,title:`binding`},{name:`progress`,title:`binding`},{name:`next`,title:`binding`},{name:`previous`,title:`binding`},{name:`close`,title:`binding`}]},{name:`title`,scoped:!0,bindings:[{name:`step`,title:`binding`},{name:`index`,title:`binding`}]},{name:`description`,scoped:!0,bindings:[{name:`step`,title:`binding`},{name:`index`,title:`binding`}]},{name:`content`,scoped:!0,bindings:[{name:`step`,title:`binding`},{name:`index`,title:`binding`}]},{name:`progress`,scoped:!0,bindings:[{name:`step`,title:`binding`},{name:`index`,title:`binding`},{name:`progress`,title:`binding`}]},{name:`actions`,scoped:!0,bindings:[{name:`step`,title:`binding`},{name:`index`,title:`binding`},{name:`is-first`,title:`binding`},{name:`is-last`,title:`binding`},{name:`next`,title:`binding`},{name:`previous`,title:`binding`},{name:`close`,title:`binding`}]}],sourceFiles:[`/home/runner/work/gui/gui/src/components/OnboardingTour/OnboardingTour.vue`]})})))()}var Ee=t({ThreeCards:()=>$,__namedExportsOrder:()=>Oe,default:()=>De}),De,$,Oe;function ke(){return(ke=e((()=>{L(),N(),z(),se(),V(),F(),Te(),X(),De={title:`Components/OnboardingTour`,component:Q,tags:[`autodocs`],parameters:{layout:`fullscreen`}},$={render:()=>({components:{Badge:R,Button:P,Card:B,OnboardingTour:Q,ScrollArea:W,Stack:H,Text:I},setup(){let e=[{id:`calendar`,target:`[data-onboarding='calendar']`,title:`Планируйте загрузку`,description:`Карточка календаря остаётся настоящей и интерактивной во время подсказки.`,placement:`bottom-start`,actionLabel:`Понятно, дальше`},{id:`guests`,target:`[data-onboarding='guests']`,title:`Следите за гостями`,description:`Позиция подсказки автоматически изменится, если справа окажется мало места.`,placement:`right`},{id:`automation`,target:`[data-onboarding='automation']`,title:`Автоматизируйте рутину`,description:`ScrollArea сам прокрутится до этой карточки, а spotlight продолжит следовать за ней.`,placement:`top-end`,actionLabel:`Начать работу`}],{open:t,step:n,start:r}=xe({steps:e});return{open:t,step:n,start:r,steps:e}},template:`
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