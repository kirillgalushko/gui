import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,C as n,D as r,E as i,F as a,M as o,O as s,U as ee,V as te,W as c,a as l,b as u,ct as d,gt as ne,h as re,mt as f,x as p,y as m,yt as h,z as g}from"./iframe-BRZN4f8M.js";import{n as _,t as v}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{Lt as ie,n as y,xt as ae,zt as oe}from"./gui-icons.es-CEoFeAM4.js";import{n as se,t as ce}from"./useViewportBreakpoint-DdkQzRQ0.js";import{n as le,t as b}from"./Button-BnZoe71I.js";import{n as ue,t as de}from"./Text-BkeTCBMw.js";import{n as fe,t as pe}from"./Stack-rz41IrXi.js";import{i as me,n as he,r as ge,t as _e}from"./SelectOption-Ba440VoP.js";var x;function S(){return(S=e((()=>{x=Symbol(`PaginationContext`)})))()}var ve,C;function w(){return(w=e((()=>{l(),S(),ve=[`aria-label`,`data-size`],C=s({inheritAttrs:!1,__name:`Pagination`,props:{label:{default:`Пагинация`},size:{default:`medium`}},setup(e){let t=e;return te(x,{size:m(()=>t.size)}),(e,r)=>(g(),n(`nav`,a(e.$attrs,{"aria-label":t.label,"data-size":t.size}),[c(e.$slots,`default`)],16,ve))}})})))()}var T;function E(){return(E=e((()=>{w(),T=C,C.__docgenInfo=Object.assign({displayName:C.name??C.__name},{exportName:`default`,displayName:`Pagination`,description:``,tags:{},props:[{name:`label`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"Пагинация"`}},{name:`size`,required:!1,type:{name:`ComponentSize`},defaultValue:{func:!1,value:`"medium"`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Pagination/Pagination.vue`]})})))()}function ye(e,t){return g(),n(`ul`,O,[c(e.$slots,`default`,{},void 0,!0)])}var D,O,k;function A(){return(A=e((()=>{l(),_(),D={},O={class:`pagination-content`},k=v(D,[[`render`,ye],[`__scopeId`,`data-v-ac990d90`]]),D.__docgenInfo=Object.assign({displayName:D.name??D.__name},{displayName:`PaginationContent`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Pagination/PaginationContent.vue`]})})))()}var j,M;function N(){return(N=e((()=>{l(),y(),S(),j={class:`pagination-ellipsis-label`},M=s({__name:`PaginationEllipsis`,props:{label:{default:`Больше страниц`},size:{}},setup(e){let t=e,i=o(x,void 0),a=m(()=>t.size??i?.size.value??`large`);return(e,i)=>(g(),n(`span`,{class:ne([`pagination-ellipsis`,a.value])},[c(e.$slots,`default`,{},()=>[r(f(ae),{"aria-hidden":`true`})],!0),u(`span`,j,h(t.label),1)],2))}})})))()}var P;function F(){return(F=e((()=>{N(),_(),P=v(M,[[`__scopeId`,`data-v-2214bdc6`]]),M.__docgenInfo=Object.assign({displayName:M.name??M.__name},{exportName:`default`,displayName:`PaginationEllipsis`,description:``,tags:{},props:[{name:`label`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"Больше страниц"`}},{name:`size`,required:!1,type:{name:`ComponentSize`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Pagination/PaginationEllipsis.vue`]})})))()}function be(e,t){return g(),n(`li`,L,[c(e.$slots,`default`,{},void 0,!0)])}var I,L,R;function z(){return(z=e((()=>{l(),_(),I={},L={class:`pagination-item`},R=v(I,[[`render`,be],[`__scopeId`,`data-v-1631fc54`]]),I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{displayName:`PaginationItem`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Pagination/PaginationItem.vue`]})})))()}var B;function V(){return(V=e((()=>{l(),le(),S(),B=s({inheritAttrs:!1,__name:`PaginationLink`,props:{Element:{default:`a`},asChild:{type:Boolean},isActive:{type:Boolean},disabled:{type:Boolean},size:{}},setup(e){let n=e,r=o(x,void 0),i=m(()=>n.size??r?.size.value??`medium`);return(e,r)=>n.asChild?(g(),p(b,a({key:0},e.$attrs,{"as-child":``,mode:n.isActive?`outline`:`ghost`,size:i.value,squared:``,disabled:n.disabled,"aria-current":n.isActive?`page`:void 0}),{default:t(()=>[c(e.$slots,`default`)]),_:3},16,[`mode`,`size`,`disabled`,`aria-current`])):n.Element===`a`?(g(),p(b,a({key:1},e.$attrs,{"as-child":``,mode:n.isActive?`outline`:`ghost`,size:i.value,squared:``,disabled:n.disabled,"aria-current":n.isActive?`page`:void 0}),{default:t(()=>[u(`a`,null,[c(e.$slots,`default`)])]),_:3},16,[`mode`,`size`,`disabled`,`aria-current`])):(g(),p(b,a({key:2},e.$attrs,{type:`button`,mode:n.isActive?`outline`:`ghost`,size:i.value,squared:``,disabled:n.disabled,"aria-current":n.isActive?`page`:void 0}),{default:t(()=>[c(e.$slots,`default`)]),_:3},16,[`mode`,`size`,`disabled`,`aria-current`]))}})})))()}var H;function U(){return(U=e((()=>{V(),H=B,B.__docgenInfo=Object.assign({displayName:B.name??B.__name},{exportName:`default`,displayName:`PaginationLink`,description:``,tags:{},props:[{name:`Element`,required:!1,type:{name:`union`,elements:[{name:`"a"`},{name:`"button"`}]},defaultValue:{func:!1,value:`"a"`}},{name:`asChild`,required:!1,type:{name:`boolean`}},{name:`isActive`,required:!1,type:{name:`boolean`}},{name:`disabled`,required:!1,type:{name:`boolean`}},{name:`size`,required:!1,type:{name:`ComponentSize`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Pagination/PaginationLink.vue`]})})))()}var W;function xe(){return(xe=e((()=>{l(),y(),U(),W=s({inheritAttrs:!1,__name:`PaginationNext`,props:{Element:{default:`a`},disabled:{type:Boolean},size:{},label:{default:`Перейти на следующую страницу`},text:{default:`Вперёд`}},setup(e){let n=e;return(e,i)=>(g(),p(H,a(e.$attrs,{Element:n.Element,disabled:n.disabled,size:n.size,"aria-label":n.label,class:[`pagination-next`,{"pagination-next-icon-only":!n.text}]}),{default:t(()=>[c(e.$slots,`default`,{},()=>[u(`span`,null,h(n.text),1),r(f(ie))],!0)]),_:3},16,[`Element`,`disabled`,`size`,`aria-label`,`class`]))}})})))()}var Se;function Ce(){return(Ce=e((()=>{xe(),_(),Se=v(W,[[`__scopeId`,`data-v-7cf7c3a1`]]),W.__docgenInfo=Object.assign({displayName:W.name??W.__name},{exportName:`default`,displayName:`PaginationNext`,description:``,tags:{},props:[{name:`Element`,required:!1,type:{name:`union`,elements:[{name:`"a"`},{name:`"button"`}]},defaultValue:{func:!1,value:`"a"`}},{name:`disabled`,required:!1,type:{name:`boolean`}},{name:`size`,required:!1,type:{name:`ComponentSize`}},{name:`label`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"Перейти на следующую страницу"`}},{name:`text`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"Вперёд"`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Pagination/PaginationNext.vue`]})})))()}var we,G;function Te(){return(Te=e((()=>{l(),me(),he(),ue(),we=[`aria-label`],G=s({__name:`PaginationPageSize`,props:{value:{},options:{default:()=>[5,10]},label:{default:`Строк на странице`},size:{default:`small`},mode:{default:`default`}},emits:[`change`],setup(e,{emit:a}){let o=e,s=a,te=m(()=>[...new Set([...o.options,o.value])].filter(e=>Number.isInteger(e)&&e>0).sort((e,t)=>e-t)),c=e=>{let t=Number(e.value);Number.isInteger(t)&&t>0&&t!==o.value&&s(`change`,t)};return(e,a)=>(g(),n(`div`,{class:`pagination-page-size`,role:`group`,"aria-label":o.label},[r(de,{Element:`span`,typography:`subtitle-1`,color:`secondary`},{default:t(()=>[i(h(o.label),1)]),_:1}),r(ge,{value:String(o.value),label:String(o.value),size:o.size,mode:o.mode,onChange:c},{default:t(()=>[(g(!0),n(re,null,ee(te.value,e=>(g(),p(_e,{key:e,value:String(e),label:String(e)},null,8,[`value`,`label`]))),128))]),_:1},8,[`value`,`label`,`size`,`mode`])],8,we))}})})))()}var Ee;function De(){return(De=e((()=>{Te(),_(),Ee=v(G,[[`__scopeId`,`data-v-1f2e3574`]]),G.__docgenInfo=Object.assign({displayName:G.name??G.__name},{exportName:`default`,displayName:`PaginationPageSize`,description:``,tags:{},props:[{name:`value`,required:!0,type:{name:`number`}},{name:`options`,required:!1,type:{name:`TSTypeOperator`},defaultValue:{func:!1,value:`() => [5, 10]`}},{name:`label`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"Строк на странице"`}},{name:`size`,required:!1,type:{name:`ComponentSize`},defaultValue:{func:!1,value:`"small"`}},{name:`mode`,required:!1,type:{name:`PickerMode`},defaultValue:{func:!1,value:`"default"`}}],events:[{name:`change`,type:{names:[`number`]}}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Pagination/PaginationPageSize.vue`]})})))()}var K;function Oe(){return(Oe=e((()=>{l(),y(),U(),K=s({inheritAttrs:!1,__name:`PaginationPrevious`,props:{Element:{default:`a`},disabled:{type:Boolean},size:{},label:{default:`Перейти на предыдущую страницу`},text:{default:`Назад`}},setup(e){let n=e;return(e,i)=>(g(),p(H,a(e.$attrs,{Element:n.Element,disabled:n.disabled,size:n.size,"aria-label":n.label,class:[`pagination-previous`,{"pagination-previous-icon-only":!n.text}]}),{default:t(()=>[c(e.$slots,`default`,{},()=>[r(f(oe)),u(`span`,null,h(n.text),1)],!0)]),_:3},16,[`Element`,`disabled`,`size`,`aria-label`,`class`]))}})})))()}var ke;function Ae(){return(Ae=e((()=>{Oe(),_(),ke=v(K,[[`__scopeId`,`data-v-3ac9a030`]]),K.__docgenInfo=Object.assign({displayName:K.name??K.__name},{exportName:`default`,displayName:`PaginationPrevious`,description:``,tags:{},props:[{name:`Element`,required:!1,type:{name:`union`,elements:[{name:`"a"`},{name:`"button"`}]},defaultValue:{func:!1,value:`"a"`}},{name:`disabled`,required:!1,type:{name:`boolean`}},{name:`size`,required:!1,type:{name:`ComponentSize`}},{name:`label`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"Перейти на предыдущую страницу"`}},{name:`text`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"Назад"`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Pagination/PaginationPrevious.vue`]})})))()}var q;function je(){return(je=e((()=>{l(),ue(),q=s({__name:`PaginationSummary`,props:{from:{},to:{},total:{}},setup(e){let n=e,r=m(()=>n.total>0?`${n.from}–${n.to} из ${n.total}`:`0 из 0`),a=m(()=>n.total>0?`Показаны строки с ${n.from} по ${n.to} из ${n.total}`:`Нет строк`);return(e,n)=>(g(),p(de,{Element:`span`,typography:`subtitle-1`,color:`secondary`,"aria-live":`polite`,"aria-label":a.value},{default:t(()=>[i(h(r.value),1)]),_:1},8,[`aria-label`]))}})})))()}var Me;function J(){return(J=e((()=>{je(),Me=q,q.__docgenInfo=Object.assign({displayName:q.name??q.__name},{exportName:`default`,displayName:`PaginationSummary`,description:``,tags:{},props:[{name:`from`,required:!0,type:{name:`number`}},{name:`to`,required:!0,type:{name:`number`}},{name:`total`,required:!0,type:{name:`number`}}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Pagination/PaginationSummary.vue`]})})))()}var Y,Ne,X,Z,Q,$,Pe;function Fe(){return(Fe=e((()=>{l(),ce(),E(),A(),F(),z(),U(),Ce(),De(),Ae(),J(),fe(),Y={Pagination:T,PaginationContent:k,PaginationEllipsis:P,PaginationItem:R,PaginationLink:H,PaginationNext:Se,PaginationPageSize:Ee,PaginationPrevious:ke,PaginationSummary:Me,Stack:pe},Ne={title:`Components/Pagination`,component:T,tags:[`autodocs`],args:{size:`medium`},argTypes:{size:{control:{type:`select`},options:[`extra-small`,`small`,`medium`,`large`]}}},X={render:e=>({components:Y,setup:()=>({args:e}),template:`
      <Pagination v-bind="args">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="?page=1" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="?page=1">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="?page=2" is-active>2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="?page=3">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="?page=3" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    `})},Z={render:()=>({components:Y,setup:()=>({page:d(1),pageCount:5}),template:`
      <Pagination label="Страницы результатов" size="small">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              Element="button"
              :disabled="page === 1"
              @click="page -= 1"
            />
          </PaginationItem>
          <PaginationItem v-for="item in pageCount" :key="item">
            <PaginationLink
              Element="button"
              :is-active="page === item"
              :aria-label="\`Страница \${item}\`"
              @click="page = item"
            >
              {{ item }}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              Element="button"
              :disabled="page === pageCount"
              @click="page += 1"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    `})},Q={render:()=>({components:Y,template:`
      <Pagination label="Страницы таблицы">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious Element="button" text="" />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext Element="button" text="" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    `})},$={render:()=>({components:Y,setup:()=>{let e=d(5),t=se();return{isCompact:m(()=>t.isXS||t.isS),pageSize:e}},template:`
      <Stack
        :direction="isCompact ? 'column' : 'row'"
        :gap="3"
        :align-items="isCompact ? 'start' : 'center'"
        justify-content="space-between"
        stretched
      >
        <PaginationPageSize
          :value="pageSize"
          :options="[5, 10]"
          mode="outline"
          @change="pageSize = $event"
        />
        <Stack
          :direction="isCompact ? 'column' : 'row'"
          :gap="3"
          :align-items="isCompact ? 'start' : 'center'"
          :stretched="isCompact"
        >
          <PaginationSummary :from="1" :to="pageSize" :total="22" />
          <Pagination size="small">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious Element="button" text="" disabled />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink Element="button" is-active>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink Element="button">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink Element="button">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink Element="button">5</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext Element="button" text="" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </Stack>
      </Stack>
    `})},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components,
    setup: () => ({
      args
    }),
    template: \`
      <Pagination v-bind="args">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="?page=1" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="?page=1">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="?page=2" is-active>2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="?page=3">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="?page=3" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components,
    setup: () => {
      const page = ref(1);
      const pageCount = 5;
      return {
        page,
        pageCount
      };
    },
    template: \`
      <Pagination label="Страницы результатов" size="small">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              Element="button"
              :disabled="page === 1"
              @click="page -= 1"
            />
          </PaginationItem>
          <PaginationItem v-for="item in pageCount" :key="item">
            <PaginationLink
              Element="button"
              :is-active="page === item"
              :aria-label="\\\`Страница \\\${item}\\\`"
              @click="page = item"
            >
              {{ item }}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              Element="button"
              :disabled="page === pageCount"
              @click="page += 1"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components,
    template: \`
      <Pagination label="Страницы таблицы">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious Element="button" text="" />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext Element="button" text="" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    \`
  })
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components,
    setup: () => {
      const pageSize = ref(5);
      const breakpoint = useViewportBreakpoint();
      const isCompact = computed(() => breakpoint.isXS || breakpoint.isS);
      return {
        isCompact,
        pageSize
      };
    },
    template: \`
      <Stack
        :direction="isCompact ? 'column' : 'row'"
        :gap="3"
        :align-items="isCompact ? 'start' : 'center'"
        justify-content="space-between"
        stretched
      >
        <PaginationPageSize
          :value="pageSize"
          :options="[5, 10]"
          mode="outline"
          @change="pageSize = $event"
        />
        <Stack
          :direction="isCompact ? 'column' : 'row'"
          :gap="3"
          :align-items="isCompact ? 'start' : 'center'"
          :stretched="isCompact"
        >
          <PaginationSummary :from="1" :to="pageSize" :total="22" />
          <Pagination size="small">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious Element="button" text="" disabled />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink Element="button" is-active>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink Element="button">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink Element="button">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink Element="button">5</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext Element="button" text="" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </Stack>
      </Stack>
    \`
  })
}`,...$.parameters?.docs?.source}}},Pe=[`Default`,`Controlled`,`IconsOnly`,`TableMeta`]})))()}Fe();export{Z as Controlled,X as Default,Q as IconsOnly,$ as TableMeta,Pe as __namedExportsOrder,Ne as default};