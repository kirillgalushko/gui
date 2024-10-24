import{i as S,c as C,N as _,a as v,l as j,D as g,y as N}from"./index-CxISiSMm.js";import{w as A,i as E}from"./vue.esm-bundler-xPxPWV_s.js";import"./_commonjsHelpers-Cpj98o6Y.js";const{addons:O}=__STORYBOOK_MODULE_PREVIEW_API__;var V=["props","events","slots","exposed","expose"],T=e=>{if(!_(e))return null;let t="exposed"in e.__docgenInfo?"vue-component-meta":"vue-docgen-api",a={};return V.forEach(r=>{v(e,r).forEach(n=>{let i;if(t==="vue-docgen-api"){let u=n.docgenInfo;i=D(u,r,n)}else{let u=n.docgenInfo;i=M(u,r)}!i||a[i.name]||(["events","expose","exposed"].includes(r)&&(i.control={disable:!0}),a[i.name]=i)})}),a},D=(e,t,a)=>{var u,l,s;let r,n;if(t==="events"&&(r=(u=e.type)==null?void 0:u.names.join(),n={name:"other",value:r??"",required:!1}),t==="slots"){let o=(l=e.bindings)==null?void 0:l.filter(m=>!!m.name).map(m=>{var p;return`${m.name}: ${((p=m.type)==null?void 0:p.name)??"unknown"}`}).join("; ");r=o?`{ ${o} }`:void 0,n={name:"other",value:r??"",required:!1}}if(t==="props"){let o=e;if(r=(s=o.type)==null?void 0:s.name,n=a?j(a.docgenInfo):{name:"other",value:r},o.type&&"elements"in o.type&&Array.isArray(o.type.elements)&&o.type.elements.length>0){let m=o.type.elements.map(p=>p.name);r==="Array"&&(r=`${m.length===1?m[0]:`(${m.join(" | ")})`}[]`),r==="union"?r=m.join(" | "):r==="intersection"&&(r=m.join(" & "))}}let i="required"in e?e.required??!1:!1;return{name:e.name,description:e.description,type:n?{...n,required:i}:{name:"other",value:r??""},table:{type:r?{summary:r}:void 0,defaultValue:(a==null?void 0:a.propDef.defaultValue)??void 0,jsDocTags:a==null?void 0:a.propDef.jsDocTags,category:t}}},M=(e,t)=>{if("global"in e&&e.global)return;let a={summary:e.type.replace(" | undefined","")};if(t==="props"){let r=e,n=r.default?{summary:r.default}:void 0;return{name:r.name,description:q(r.description,r.tags),defaultValue:n,type:y(r),table:{type:a,defaultValue:n,category:t}}}else return{name:e.name,description:"description"in e?e.description:"",type:{name:"other",value:e.type},table:{type:a,category:t}}},y=e=>{var i,u;let t=e.schema,a=e.required,r={name:"other",value:e.type,required:a},n=["string","number","function","boolean","symbol"];if(typeof t=="string")return n.includes(t)?{name:t,required:a}:r;switch(t.kind){case"enum":{let l=((i=t.schema)==null?void 0:i.filter(s=>s!=="undefined"))??[];return k(l)?{name:"boolean",required:a}:F(l)||w(l)?{name:"enum",value:l.map(s=>s.replace(/"/g,"")),required:a}:l.length===1?y({schema:l[0],type:e.type,required:a}):(l.length>2&&l.includes("true")&&l.includes("false")&&(l=l.filter(s=>s!=="true"&&s!=="false"),l.push("boolean")),{name:"union",value:l.map(s=>y(typeof s=="object"?{schema:s,type:s.type,required:!1}:{schema:s,type:s,required:!1})),required:a})}case"array":{let l=((u=t.schema)==null?void 0:u.filter(s=>s!=="undefined"))??[];return l.length===0?r:l.length===1?{name:"array",value:y({schema:l[0],type:e.type,required:!1}),required:a}:{name:"union",value:l.map(s=>y(typeof s=="object"?{schema:s,type:s.type,required:!1}:{schema:s,type:s,required:!1})),required:a}}case"object":return{name:"object",value:{},required:a};default:return r}},q=(e,t)=>!(t!=null&&t.length)||!e?e??"":`${t.map(a=>`@${a.name}: ${a.text}`).join("<br>")}<br><br>${e}`,F=e=>e.every(t=>typeof t=="string"&&t.startsWith('"')&&t.endsWith('"')),w=e=>e.every(t=>typeof t=="string"&&t.includes(".")),k=e=>e.length===2&&e.includes("true")&&e.includes("false"),W=(e,t)=>{let a=e();if(R(t))return a;let r=O.getChannel();return A(()=>t.args,()=>{let n=B(t);r.emit(N,{id:t.id,args:t.args,source:n,format:"vue"})},{immediate:!0,deep:!0}),a},B=e=>{let t={imports:{},scriptVariables:{}},{displayName:a,slotNames:r,eventNames:n}=I(e.component),i=$(e.args,r,n,t),u=h(e.args,r,t),l=a||e.title.split("/").at(-1),s=u?`<${l} ${i}> ${u} </${l}>`:`<${l} ${i} />`,o=Object.entries(t.scriptVariables).map(([f,d])=>`const ${f} = ${d};`).join(`

`),m=Object.entries(t.imports).map(([f,d])=>`import { ${Array.from(d.values()).sort().join(", ")} } from "${f}";`).join(`
`),p=`<template>
  ${s}
</template>`;return!m&&!o?p:`<script lang="ts" setup>
${m?`${m}

${o}`:o}
<\/script>

${p}`},R=e=>{var r;let t=(r=e==null?void 0:e.parameters.docs)==null?void 0:r.source;if((t==null?void 0:t.type)===g.DYNAMIC)return!1;let a=e==null?void 0:e.parameters.__isArgsStory;return(e==null?void 0:e.viewMode)!=="docs"||!a||(t==null?void 0:t.code)||(t==null?void 0:t.type)===g.CODE},I=e=>{if(!e||!("__docgenInfo"in e)||!e.__docgenInfo||typeof e.__docgenInfo!="object")return{displayName:e==null?void 0:e.__name,eventNames:[],slotNames:[]};let t=e.__docgenInfo,a="displayName"in t&&typeof t.displayName=="string"?t.displayName:void 0,r=n=>!(n in t)||!Array.isArray(t[n])?[]:t[n].map(i=>i&&typeof i=="object"&&"name"in i?i.name:void 0).filter(i=>typeof i=="string");return{displayName:a||e.__name,slotNames:r("slots").sort((n,i)=>n==="default"?-1:i==="default"?1:n.localeCompare(i)),eventNames:r("events")}},$=(e,t,a,r)=>{let n=[];Object.entries(e).forEach(([u,l])=>{if(!t.includes(u)&&l!=null)switch(typeof l){case"string":if(l==="")return;n.push({name:u,value:l.includes('"')?`'${l}'`:`"${l}"`,templateFn:(s,o)=>`${s}=${o}`});break;case"number":n.push({name:u,value:l.toString(),templateFn:(s,o)=>`:${s}="${o}"`});break;case"bigint":n.push({name:u,value:`BigInt(${l.toString()})`,templateFn:(s,o)=>`:${s}="${o}"`});break;case"boolean":n.push({name:u,value:l?"true":"false",templateFn:(s,o)=>o==="true"?s:`:${s}="false"`});break;case"symbol":n.push({name:u,value:`Symbol(${l.description?`'${l.description}'`:""})`,templateFn:(s,o)=>`:${s}="${o}"`});break;case"object":{n.push({name:u,value:Y(l),templateFn:void 0});break}}}),n.sort((u,l)=>u.name.localeCompare(l.name));let i=[];return n.forEach(u=>{let l=a.includes(`update:${u.name}`);if(!l&&u.templateFn){i.push(u.templateFn(u.name,u.value));return}let s=u.name;if(s in r.scriptVariables){let o=1;do s=`${u.name}${o}`,o++;while(s in r.scriptVariables)}if(!l){r.scriptVariables[s]=u.value,i.push(`:${u.name}="${s}"`);return}r.scriptVariables[s]=`ref(${u.value})`,r.imports.vue||(r.imports.vue=new Set),r.imports.vue.add("ref"),u.name==="modelValue"?i.push(`v-model="${s}"`):i.push(`v-model:${u.name}="${s}"`)}),i.join(" ")},h=(e,t,a)=>{let r=[];return t.forEach(n=>{let i=e[n];if(!i)return;let u=c([i],a);if(!u)return;let l=typeof i=="function"?b(i):[];n==="default"&&!l.length?r.push(u):r.push(`<template ${U(n,l)}>${u}</template>`)}),r.join(`

`)},c=(e,t)=>{let a=[],r=n=>{if(E(n))return G(n,t);switch(typeof n){case"string":case"number":case"boolean":return n.toString();case"object":return n===null?"":Array.isArray(n)?n.map(r).filter(i=>i!=="").join(`
`):JSON.stringify(n);case"function":{let i=b(n).filter(o=>!["{","}"].includes(o)),u=i.reduce((o,m)=>(o[m]=`{{ ${m} }}`,o),{}),l=n(u),s=c([l],t);return i.forEach(o=>{s=s.replaceAll(new RegExp(` (\\S+)="{{ ${o} }}"`,"g"),` :$1="${o}"`)}),s}case"bigint":return`{{ BigInt(${n.toString()}) }}`;default:return""}};return e.forEach(n=>{let i=r(n);i!==""&&a.push(i)}),a.join(`
`)},G=(e,t)=>{let a=J(e),r="";typeof e.children=="string"?r=e.children:Array.isArray(e.children)?r=c(e.children,t):e.children&&(r=h(e.children,Object.keys(e.children).filter(i=>i!=="$stable"),t));let n=e.props?$(e.props,[],[],t):"";return r?`<${a}${n?` ${n}`:""}>${r}</${a}>`:`<${a}${n?` ${n}`:""} />`},J=e=>{if(typeof e.type=="string")return e.type;if(typeof e.type=="object"){if("name"in e.type&&e.type.name)return e.type.name;if("__name"in e.type&&e.type.__name)return e.type.__name}return"component"},b=e=>{let t=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,a=/([^\s,]+)/g,r=e.toString().replace(t,""),n=r.slice(r.indexOf("(")+1,r.indexOf(")")).match(a);return n?n.flatMap(i=>{if(["{","}"].includes(i))return i;let u=i.split(":")[0].trim();return u.startsWith("{")?["{",u.substring(1)]:i.endsWith("}")&&!u.endsWith("}")?[u,"}"]:u}):[]},U=(e,t)=>t.length?t.length===1?`#${e}="${t[0]}"`:`#${e}="{ ${t.filter(a=>!["{","}"].includes(a)).join(", ")} }"`:`#${e}`,Y=e=>Object.values(e).every(t=>t==null||typeof t!="object")?JSON.stringify(e):JSON.stringify(e,null,2),z={docs:{story:{inline:!0},extractArgTypes:T,extractComponentDescription:S}},Q=[W],X=[C];export{X as argTypesEnhancers,Q as decorators,z as parameters};
