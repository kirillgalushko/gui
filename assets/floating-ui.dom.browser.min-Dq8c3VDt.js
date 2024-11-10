const kt=["top","right","bottom","left"],ut=["start","end"],dt=kt.reduce((t,e)=>t.concat(e,e+"-"+ut[0],e+"-"+ut[1]),[]),K=Math.min,N=Math.max,Mt={left:"right",right:"left",bottom:"top",top:"bottom"},Ft={start:"end",end:"start"};function lt(t,e,n){return N(t,K(e,n))}function z(t,e){return typeof t=="function"?t(e):t}function B(t){return t.split("-")[0]}function C(t){return t.split("-")[1]}function yt(t){return t==="x"?"y":"x"}function ct(t){return t==="y"?"height":"width"}function X(t){return["top","bottom"].includes(B(t))?"y":"x"}function at(t){return yt(X(t))}function vt(t,e,n){n===void 0&&(n=!1);const o=C(t),i=at(t),r=ct(i);let l=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(l=et(l)),[l,et(l)]}function Wt(t){const e=et(t);return[tt(t),e,tt(e)]}function tt(t){return t.replace(/start|end/g,e=>Ft[e])}function Bt(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],l=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:l;default:return[]}}function Ht(t,e,n,o){const i=C(t);let r=Bt(B(t),n==="start",o);return i&&(r=r.map(l=>l+"-"+i),e&&(r=r.concat(r.map(tt)))),r}function et(t){return t.replace(/left|right|bottom|top/g,e=>Mt[e])}function Vt(t){return{top:0,right:0,bottom:0,left:0,...t}}function bt(t){return typeof t!="number"?Vt(t):{top:t,right:t,bottom:t,left:t}}function G(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function mt(t,e,n){let{reference:o,floating:i}=t;const r=X(e),l=at(e),s=ct(l),c=B(e),f=r==="y",u=o.x+o.width/2-i.width/2,a=o.y+o.height/2-i.height/2,m=o[s]/2-i[s]/2;let d;switch(c){case"top":d={x:u,y:o.y-i.height};break;case"bottom":d={x:u,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:a};break;case"left":d={x:o.x-i.width,y:a};break;default:d={x:o.x,y:o.y}}switch(C(e)){case"start":d[l]-=m*(n&&f?-1:1);break;case"end":d[l]+=m*(n&&f?-1:1);break}return d}const _t=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:l}=n,s=r.filter(Boolean),c=await(l.isRTL==null?void 0:l.isRTL(e));let f=await l.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:a}=mt(f,o,c),m=o,d={},g=0;for(let h=0;h<s.length;h++){const{name:x,fn:p}=s[h],{x:w,y,data:A,reset:v}=await p({x:u,y:a,initialPlacement:o,placement:m,strategy:i,middlewareData:d,rects:f,platform:l,elements:{reference:t,floating:e}});u=w??u,a=y??a,d={...d,[x]:{...d[x],...A}},v&&g<=50&&(g++,typeof v=="object"&&(v.placement&&(m=v.placement),v.rects&&(f=v.rects===!0?await l.getElementRects({reference:t,floating:e,strategy:i}):v.rects),{x:u,y:a}=mt(f,m,c)),h=-1)}return{x:u,y:a,placement:m,strategy:i,middlewareData:d}};async function ot(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:l,elements:s,strategy:c}=t,{boundary:f="clippingAncestors",rootBoundary:u="viewport",elementContext:a="floating",altBoundary:m=!1,padding:d=0}=z(e,t),g=bt(d),x=s[m?a==="floating"?"reference":"floating":a],p=G(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(x)))==null||n?x:x.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(s.floating)),boundary:f,rootBoundary:u,strategy:c})),w=a==="floating"?{x:o,y:i,width:l.floating.width,height:l.floating.height}:l.reference,y=await(r.getOffsetParent==null?void 0:r.getOffsetParent(s.floating)),A=await(r.isElement==null?void 0:r.isElement(y))?await(r.getScale==null?void 0:r.getScale(y))||{x:1,y:1}:{x:1,y:1},v=G(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:w,offsetParent:y,strategy:c}):w);return{top:(p.top-v.top+g.top)/A.y,bottom:(v.bottom-p.bottom+g.bottom)/A.y,left:(p.left-v.left+g.left)/A.x,right:(v.right-p.right+g.right)/A.x}}const zt=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:l,elements:s,middlewareData:c}=e,{element:f,padding:u=0}=z(t,e)||{};if(f==null)return{};const a=bt(u),m={x:n,y:o},d=at(i),g=ct(d),h=await l.getDimensions(f),x=d==="y",p=x?"top":"left",w=x?"bottom":"right",y=x?"clientHeight":"clientWidth",A=r.reference[g]+r.reference[d]-m[d]-r.floating[g],v=m[d]-r.reference[d],L=await(l.getOffsetParent==null?void 0:l.getOffsetParent(f));let R=L?L[y]:0;(!R||!await(l.isElement==null?void 0:l.isElement(L)))&&(R=s.floating[y]||r.floating[g]);const E=A/2-v/2,T=R/2-h[g]/2-1,b=K(a[p],T),O=K(a[w],T),S=b,k=R-h[g]-O,P=R/2-h[g]/2+E,I=lt(S,P,k),H=!c.arrow&&C(i)!=null&&P!==I&&r.reference[g]/2-(P<S?b:O)-h[g]/2<0,M=H?P<S?P-S:P-k:0;return{[d]:m[d]+M,data:{[d]:I,centerOffset:P-I-M,...H&&{alignmentOffset:M}},reset:H}}});function $t(t,e,n){return(t?[...n.filter(i=>C(i)===t),...n.filter(i=>C(i)!==t)]:n.filter(i=>B(i)===i)).filter(i=>t?C(i)===t||(e?tt(i)!==i:!1):!0)}const It=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i;const{rects:r,middlewareData:l,placement:s,platform:c,elements:f}=e,{crossAxis:u=!1,alignment:a,allowedPlacements:m=dt,autoAlignment:d=!0,...g}=z(t,e),h=a!==void 0||m===dt?$t(a||null,d,m):m,x=await ot(e,g),p=((n=l.autoPlacement)==null?void 0:n.index)||0,w=h[p];if(w==null)return{};const y=vt(w,r,await(c.isRTL==null?void 0:c.isRTL(f.floating)));if(s!==w)return{reset:{placement:h[0]}};const A=[x[B(w)],x[y[0]],x[y[1]]],v=[...((o=l.autoPlacement)==null?void 0:o.overflows)||[],{placement:w,overflows:A}],L=h[p+1];if(L)return{data:{index:p+1,overflows:v},reset:{placement:L}};const R=v.map(b=>{const O=C(b.placement);return[b.placement,O&&u?b.overflows.slice(0,2).reduce((S,k)=>S+k,0):b.overflows[0],b.overflows]}).sort((b,O)=>b[1]-O[1]),T=((i=R.filter(b=>b[2].slice(0,C(b[0])?2:3).every(O=>O<=0))[0])==null?void 0:i[0])||R[0][0];return T!==s?{data:{index:p+1,overflows:v},reset:{placement:T}}:{}}}},qt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:r,rects:l,initialPlacement:s,platform:c,elements:f}=e,{mainAxis:u=!0,crossAxis:a=!0,fallbackPlacements:m,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:h=!0,...x}=z(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const p=B(i),w=X(s),y=B(s)===s,A=await(c.isRTL==null?void 0:c.isRTL(f.floating)),v=m||(y||!h?[et(s)]:Wt(s)),L=g!=="none";!m&&L&&v.push(...Ht(s,h,g,A));const R=[s,...v],E=await ot(e,x),T=[];let b=((o=r.flip)==null?void 0:o.overflows)||[];if(u&&T.push(E[p]),a){const P=vt(i,l,A);T.push(E[P[0]],E[P[1]])}if(b=[...b,{placement:i,overflows:T}],!T.every(P=>P<=0)){var O,S;const P=(((O=r.flip)==null?void 0:O.index)||0)+1,I=R[P];if(I)return{data:{index:P,overflows:b},reset:{placement:I}};let H=(S=b.filter(M=>M.overflows[0]<=0).sort((M,V)=>M.overflows[1]-V.overflows[1])[0])==null?void 0:S.placement;if(!H)switch(d){case"bestFit":{var k;const M=(k=b.filter(V=>{if(L){const _=X(V.placement);return _===w||_==="y"}return!0}).map(V=>[V.placement,V.overflows.filter(_=>_>0).reduce((_,Et)=>_+Et,0)]).sort((V,_)=>V[1]-_[1])[0])==null?void 0:k[0];M&&(H=M);break}case"initialPlacement":H=s;break}if(i!==H)return{reset:{placement:H}}}return{}}}};async function jt(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),l=B(n),s=C(n),c=X(n)==="y",f=["left","top"].includes(l)?-1:1,u=r&&c?-1:1,a=z(e,t);let{mainAxis:m,crossAxis:d,alignmentAxis:g}=typeof a=="number"?{mainAxis:a,crossAxis:0,alignmentAxis:null}:{mainAxis:a.mainAxis||0,crossAxis:a.crossAxis||0,alignmentAxis:a.alignmentAxis};return s&&typeof g=="number"&&(d=s==="end"?g*-1:g),c?{x:d*u,y:m*f}:{x:m*f,y:d*u}}const Gt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:l,middlewareData:s}=e,c=await jt(e,t);return l===((n=s.offset)==null?void 0:n.placement)&&(o=s.arrow)!=null&&o.alignmentOffset?{}:{x:i+c.x,y:r+c.y,data:{...c,placement:l}}}}},Jt=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:l=!1,limiter:s={fn:x=>{let{x:p,y:w}=x;return{x:p,y:w}}},...c}=z(t,e),f={x:n,y:o},u=await ot(e,c),a=X(B(i)),m=yt(a);let d=f[m],g=f[a];if(r){const x=m==="y"?"top":"left",p=m==="y"?"bottom":"right",w=d+u[x],y=d-u[p];d=lt(w,d,y)}if(l){const x=a==="y"?"top":"left",p=a==="y"?"bottom":"right",w=g+u[x],y=g-u[p];g=lt(w,g,y)}const h=s.fn({...e,[m]:d,[a]:g});return{...h,data:{x:h.x-n,y:h.y-o,enabled:{[m]:r,[a]:l}}}}}},Kt=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,o;const{placement:i,rects:r,platform:l,elements:s}=e,{apply:c=()=>{},...f}=z(t,e),u=await ot(e,f),a=B(i),m=C(i),d=X(i)==="y",{width:g,height:h}=r.floating;let x,p;a==="top"||a==="bottom"?(x=a,p=m===(await(l.isRTL==null?void 0:l.isRTL(s.floating))?"start":"end")?"left":"right"):(p=a,x=m==="end"?"top":"bottom");const w=h-u.top-u.bottom,y=g-u.left-u.right,A=K(h-u[x],w),v=K(g-u[p],y),L=!e.middlewareData.shift;let R=A,E=v;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(E=y),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(R=w),L&&!m){const b=N(u.left,0),O=N(u.right,0),S=N(u.top,0),k=N(u.bottom,0);d?E=g-2*(b!==0||O!==0?b+O:N(u.left,u.right)):R=h-2*(S!==0||k!==0?S+k:N(u.top,u.bottom))}await c({...e,availableWidth:E,availableHeight:R});const T=await l.getDimensions(s.floating);return g!==T.width||h!==T.height?{reset:{rects:!0}}:{}}}};function D(t){var e;return((e=t.ownerDocument)==null?void 0:e.defaultView)||window}function F(t){return D(t).getComputedStyle(t)}const gt=Math.min,J=Math.max,nt=Math.round;function At(t){const e=F(t);let n=parseFloat(e.width),o=parseFloat(e.height);const i=t.offsetWidth,r=t.offsetHeight,l=nt(n)!==i||nt(o)!==r;return l&&(n=i,o=r),{width:n,height:o,fallback:l}}function Y(t){return Rt(t)?(t.nodeName||"").toLowerCase():""}let Z;function Pt(){if(Z)return Z;const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?(Z=t.brands.map(e=>e.brand+"/"+e.version).join(" "),Z):navigator.userAgent}function W(t){return t instanceof D(t).HTMLElement}function $(t){return t instanceof D(t).Element}function Rt(t){return t instanceof D(t).Node}function ht(t){return typeof ShadowRoot>"u"?!1:t instanceof D(t).ShadowRoot||t instanceof ShadowRoot}function it(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=F(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function Yt(t){return["table","td","th"].includes(Y(t))}function st(t){const e=/firefox/i.test(Pt()),n=F(t),o=n.backdropFilter||n.WebkitBackdropFilter;return n.transform!=="none"||n.perspective!=="none"||!!o&&o!=="none"||e&&n.willChange==="filter"||e&&!!n.filter&&n.filter!=="none"||["transform","perspective"].some(i=>n.willChange.includes(i))||["paint","layout","strict","content"].some(i=>{const r=n.contain;return r!=null&&r.includes(i)})}function Ot(){return!/^((?!chrome|android).)*safari/i.test(Pt())}function ft(t){return["html","body","#document"].includes(Y(t))}function Tt(t){return $(t)?t:t.contextElement}const St={x:1,y:1};function q(t){const e=Tt(t);if(!W(e))return St;const n=e.getBoundingClientRect(),{width:o,height:i,fallback:r}=At(e);let l=(r?nt(n.width):n.width)/o,s=(r?nt(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),s&&Number.isFinite(s)||(s=1),{x:l,y:s}}function Q(t,e,n,o){var i,r;e===void 0&&(e=!1),n===void 0&&(n=!1);const l=t.getBoundingClientRect(),s=Tt(t);let c=St;e&&(o?$(o)&&(c=q(o)):c=q(t));const f=s?D(s):window,u=!Ot()&&n;let a=(l.left+(u&&((i=f.visualViewport)==null?void 0:i.offsetLeft)||0))/c.x,m=(l.top+(u&&((r=f.visualViewport)==null?void 0:r.offsetTop)||0))/c.y,d=l.width/c.x,g=l.height/c.y;if(s){const h=D(s),x=o&&$(o)?D(o):o;let p=h.frameElement;for(;p&&o&&x!==h;){const w=q(p),y=p.getBoundingClientRect(),A=getComputedStyle(p);y.x+=(p.clientLeft+parseFloat(A.paddingLeft))*w.x,y.y+=(p.clientTop+parseFloat(A.paddingTop))*w.y,a*=w.x,m*=w.y,d*=w.x,g*=w.y,a+=y.x,m+=y.y,p=D(p).frameElement}}return{width:d,height:g,top:m,right:a+d,bottom:m+g,left:a,x:a,y:m}}function j(t){return((Rt(t)?t.ownerDocument:t.document)||window.document).documentElement}function rt(t){return $(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Dt(t){return Q(j(t)).left+rt(t).scrollLeft}function U(t){if(Y(t)==="html")return t;const e=t.assignedSlot||t.parentNode||ht(t)&&t.host||j(t);return ht(e)?e.host:e}function Lt(t){const e=U(t);return ft(e)?e.ownerDocument.body:W(e)&&it(e)?e:Lt(e)}function Ct(t,e){var n;e===void 0&&(e=[]);const o=Lt(t),i=o===((n=t.ownerDocument)==null?void 0:n.body),r=D(o);return i?e.concat(r,r.visualViewport||[],it(o)?o:[]):e.concat(o,Ct(o))}function pt(t,e,n){return e==="viewport"?G(function(o,i){const r=D(o),l=j(o),s=r.visualViewport;let c=l.clientWidth,f=l.clientHeight,u=0,a=0;if(s){c=s.width,f=s.height;const m=Ot();(m||!m&&i==="fixed")&&(u=s.offsetLeft,a=s.offsetTop)}return{width:c,height:f,x:u,y:a}}(t,n)):$(e)?G(function(o,i){const r=Q(o,!0,i==="fixed"),l=r.top+o.clientTop,s=r.left+o.clientLeft,c=W(o)?q(o):{x:1,y:1};return{width:o.clientWidth*c.x,height:o.clientHeight*c.y,x:s*c.x,y:l*c.y}}(e,n)):G(function(o){const i=j(o),r=rt(o),l=o.ownerDocument.body,s=J(i.scrollWidth,i.clientWidth,l.scrollWidth,l.clientWidth),c=J(i.scrollHeight,i.clientHeight,l.scrollHeight,l.clientHeight);let f=-r.scrollLeft+Dt(o);const u=-r.scrollTop;return F(l).direction==="rtl"&&(f+=J(i.clientWidth,l.clientWidth)-s),{width:s,height:c,x:f,y:u}}(j(t)))}function xt(t){return W(t)&&F(t).position!=="fixed"?t.offsetParent:null}function wt(t){const e=D(t);let n=xt(t);for(;n&&Yt(n)&&F(n).position==="static";)n=xt(n);return n&&(Y(n)==="html"||Y(n)==="body"&&F(n).position==="static"&&!st(n))?e:n||function(o){let i=U(o);for(;W(i)&&!ft(i);){if(st(i))return i;i=U(i)}return null}(t)||e}function Nt(t,e,n){const o=W(e),i=j(e),r=Q(t,!0,n==="fixed",e);let l={scrollLeft:0,scrollTop:0};const s={x:0,y:0};if(o||!o&&n!=="fixed")if((Y(e)!=="body"||it(i))&&(l=rt(e)),W(e)){const c=Q(e,!0);s.x=c.x+e.clientLeft,s.y=c.y+e.clientTop}else i&&(s.x=Dt(i));return{x:r.left+l.scrollLeft-s.x,y:r.top+l.scrollTop-s.y,width:r.width,height:r.height}}const Xt={getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=n==="clippingAncestors"?function(f,u){const a=u.get(f);if(a)return a;let m=Ct(f).filter(x=>$(x)&&Y(x)!=="body"),d=null;const g=F(f).position==="fixed";let h=g?U(f):f;for(;$(h)&&!ft(h);){const x=F(h),p=st(h);(g?p||d:p||x.position!=="static"||!d||!["absolute","fixed"].includes(d.position))?d=x:m=m.filter(w=>w!==h),h=U(h)}return u.set(f,m),m}(e,this._c):[].concat(n),l=[...r,o],s=l[0],c=l.reduce((f,u)=>{const a=pt(e,u,i);return f.top=J(a.top,f.top),f.right=gt(a.right,f.right),f.bottom=gt(a.bottom,f.bottom),f.left=J(a.left,f.left),f},pt(e,s,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=W(n),r=j(n);if(n===r)return e;let l={scrollLeft:0,scrollTop:0},s={x:1,y:1};const c={x:0,y:0};if((i||!i&&o!=="fixed")&&((Y(n)!=="body"||it(r))&&(l=rt(n)),W(n))){const f=Q(n);s=q(n),c.x=f.x+n.clientLeft,c.y=f.y+n.clientTop}return{width:e.width*s.x,height:e.height*s.y,x:e.x*s.x-l.scrollLeft*s.x+c.x,y:e.y*s.y-l.scrollTop*s.y+c.y}},isElement:$,getDimensions:function(t){return W(t)?At(t):t.getBoundingClientRect()},getOffsetParent:wt,getDocumentElement:j,getScale:q,async getElementRects(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||wt,r=this.getDimensions;return{reference:Nt(e,await i(n),o),floating:{x:0,y:0,...await r(n)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>F(t).direction==="rtl"},Qt=(t,e,n)=>{const o=new Map,i={platform:Xt,...n},r={...i.platform,_c:o};return _t(t,e,{...i,platform:r})};export{Qt as B,Ct as D,It as a,zt as b,Kt as c,qt as f,Gt as o,Jt as s};