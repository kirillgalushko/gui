import{D as v,r as l,O as A,w as D,P as g,H as s,Q as L,R as Q,S as k,U as B,k as U,o as N,c as C,a as G,j as E,q as J,A as O,z as P,T as K,V as X,F as Y,v as Z,u as ee}from"./vue.esm-bundler-IF9MMzN9.js";import{B as ne}from"./BaseMenu-BR80iP9k.js";import{B as te,f as oe,s as ue}from"./floating-ui.dom.browser.min-Dq8c3VDt.js";import{_ as ae}from"./_plugin-vue_export-helper-DlAUqK2U.js";function le(){return typeof window<"u"}function se(e){return F(e)?(e.nodeName||"").toLowerCase():"#document"}function re(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function F(e){return le()?e instanceof Node||e instanceof re(e).Node:!1}function ie(e){return e!=null&&typeof e=="object"&&"$el"in e}function T(e){if(ie(e)){const t=e.$el;return F(t)&&se(t)==="#comment"?null:t}return e}function V(e){return typeof e=="function"?e():s(e)}function j(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function $(e,t){const o=j(e);return Math.round(t*o)/o}function fe(e,t,o){o===void 0&&(o={});const d=o.whileElementsMounted,f=v(()=>{var a;return(a=V(o.open))!=null?a:!0}),p=v(()=>V(o.middleware)),r=v(()=>{var a;return(a=V(o.placement))!=null?a:"bottom"}),i=v(()=>{var a;return(a=V(o.strategy))!=null?a:"absolute"}),w=v(()=>{var a;return(a=V(o.transform))!=null?a:!0}),u=v(()=>T(e.value)),n=v(()=>T(t.value)),h=l(0),b=l(0),y=l(i.value),c=l(r.value),M=A({}),x=l(!1),z=v(()=>{const a={position:y.value,left:"0",top:"0"};if(!n.value)return a;const m=$(n.value,h.value),H=$(n.value,b.value);return w.value?{...a,transform:"translate("+m+"px, "+H+"px)",...j(n.value)>=1.5&&{willChange:"transform"}}:{position:y.value,left:m+"px",top:H+"px"}});let _;function R(){if(u.value==null||n.value==null)return;const a=f.value;te(u.value,n.value,{middleware:p.value,placement:r.value,strategy:i.value}).then(m=>{h.value=m.x,b.value=m.y,y.value=m.strategy,c.value=m.placement,M.value=m.middlewareData,x.value=a!==!1})}function S(){typeof _=="function"&&(_(),_=void 0)}function W(){if(S(),d===void 0){R();return}if(u.value!=null&&n.value!=null){_=d(u.value,n.value,R);return}}function q(){f.value||(x.value=!1)}return D([p,r,i,f],R,{flush:"sync"}),D([u,n],W,{flush:"sync"}),D(f,q,{flush:"sync"}),L()&&Q(S),{x:g(h),y:g(b),strategy:g(y),placement:g(c),middlewareData:g(M),isPositioned:g(x),floatingStyles:z,update:R}}const ce=()=>{const e=k("hover-submenu-shown",l()),t=k("hover-submenu-hidden",l()),o=l(!1),d=l(!1),f=l(null),p=l(null),r=l(),i=l([oe(),ue()]),{floatingStyles:w,update:u}=fe(f,p,{placement:"right-start",middleware:i}),n=c=>{var M;clearTimeout(r.value),c==null||c.preventDefault(),o.value=!0,(M=e.value)==null||M.call(e),u()},h=()=>{r.value=setTimeout(()=>{var c;o.value=!1,(c=t.value)==null||c.call(t)},100)},b=()=>{d.value=!0},y=()=>{d.value=!1};return B("hover-submenu-shown",l(b)),B("hover-submenu-hidden",l(y)),{floatingStyles:w,floatingRef:p,targetRef:f,isVisible:o,isSubmenuVisible:d,hideMenu:h,showHoverMenu:n}},I=U({__name:"HoverMenu",setup(e){const{targetRef:t,floatingRef:o,floatingStyles:d,isVisible:f,isSubmenuVisible:p,showHoverMenu:r,hideMenu:i}=ce();return(w,u)=>(N(),C(Y,null,[G("div",{ref_key:"targetRef",ref:t,onMouseenter:u[0]||(u[0]=(...n)=>s(r)&&s(r)(...n)),onMouseleave:u[1]||(u[1]=(...n)=>s(i)&&s(i)(...n)),class:"hover-menu-wrapper"},[E(w.$slots,"default",{ref:"testRef"},void 0,!0)],544),(N(),J(X,{to:"body"},[O(K,{name:"fade"},{default:P(()=>[s(f)||s(p)?(N(),C("div",{key:0,onMouseenter:u[2]||(u[2]=(...n)=>s(r)&&s(r)(...n)),onMouseleave:u[3]||(u[3]=(...n)=>s(i)&&s(i)(...n)),ref_key:"floatingRef",ref:o},[O(ne,{style:Z(s(d))},{default:P(()=>[E(w.$slots,"menu",{},void 0,!0)]),_:3},8,["style"])],544)):ee("",!0)]),_:3})]))],64))}}),we=ae(I,[["__scopeId","data-v-4b1c7a34"]]);I.__docgenInfo={exportName:"default",displayName:"HoverMenu",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[{name:"ref",title:"binding"}]},{name:"menu"}],sourceFiles:["/home/runner/work/gui/gui/src/components/HoverMenu/HoverMenu.vue"]};export{we as H,fe as u};