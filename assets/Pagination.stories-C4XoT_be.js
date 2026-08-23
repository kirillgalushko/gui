import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{B as t,C as n,D as r,E as i,F as a,G as o,H as s,M as c,O as l,St as u,W as ee,_t as d,a as f,b as p,dt as te,h as ne,tt as m,x as h,y as g,yt as re}from"./iframe-Z95Hq5ox.js";import{n as _,t as v}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{Ft as ie,Lt as ae,n as y,xt as oe}from"./gui-icons.es-B0LP8gzK.js";import{n as se,t as ce}from"./useViewportBreakpoint-Dv1nqHdt.js";import{n as le,t as b}from"./Button-DEy7MrHI.js";import{n as ue,t as de}from"./Text-DUT-SggZ.js";import{n as fe,t as pe}from"./Stack-DXsEJR7b.js";import{i as me,n as he,r as ge,t as _e}from"./SelectOption-6o97nn4P.js";var x;function S(){return(S=e((()=>{x=Symbol(`PaginationContext`)})))()}var ve,C;function w(){return(w=e((()=>{f(),S(),ve=[`aria-label`,`data-size`],C=l({inheritAttrs:!1,__name:`Pagination`,props:{label:{default:`Пагинация`},size:{default:`medium`}},setup(e){let r=e;return s(x,{size:g(()=>r.size)}),(e,i)=>(t(),n(`nav`,a(e.$attrs,{"aria-label":r.label,"data-size":r.size}),[o(e.$slots,`default`)],16,ve))}})})))()}var T;function E(){return(E=e((()=>{w(),T=C,C.__docgenInfo=Object.assign({displayName:C.name??C.__name},{exportName:`default`,displayName:`Pagination`,description:``,tags:{},props:[{name:`label`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"Пагинация"`}},{name:`size`,required:!1,type:{name:`ComponentSize`},defaultValue:{func:!1,value:`"medium"`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Pagination/Pagination.vue`]})})))()}function ye(e,r){return t(),n(`ul`,O,[o(e.$slots,`default`,{},void 0,!0)])}var D,O,k;function A(){return(A=e((()=>{f(),_(),D={},O={class:`pagination-content`},k=v(D,[[`render`,ye],[`__scopeId`,`data-v-ac990d90`]]),D.__docgenInfo=Object.assign({displayName:D.name??D.__name},{displayName:`PaginationContent`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Pagination/PaginationContent.vue`]})})))()}var j,M;function N(){return(N=e((()=>{f(),y(),S(),j={class:`pagination-ellipsis-label`},M=l({__name:`PaginationEllipsis`,props:{label:{default:`Больше страниц`},size:{}},setup(e){let i=e,a=c(x,void 0),s=g(()=>i.size??a?.size.value??`large`);return(e,a)=>(t(),n(`span`,{class:re([`pagination-ellipsis`,s.value])},[o(e.$slots,`default`,{},()=>[r(d(oe),{"aria-hidden":`true`})],!0),p(`span`,j,u(i.label),1)],2))}})})))()}var P;function F(){return(F=e((()=>{N(),_(),P=v(M,[[`__scopeId`,`data-v-2214bdc6`]]),M.__docgenInfo=Object.assign({displayName:M.name??M.__name},{exportName:`default`,displayName:`PaginationEllipsis`,description:``,tags:{},props:[{name:`label`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"Больше страниц"`}},{name:`size`,required:!1,type:{name:`ComponentSize`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Pagination/PaginationEllipsis.vue`]})})))()}function be(e,r){return t(),n(`li`,L,[o(e.$slots,`default`,{},void 0,!0)])}var I,L,R;function z(){return(z=e((()=>{f(),_(),I={},L={class:`pagination-item`},R=v(I,[[`render`,be],[`__scopeId`,`data-v-1631fc54`]]),I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{displayName:`PaginationItem`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Pagination/PaginationItem.vue`]})})))()}var B;function xe(){return(xe=e((()=>{f(),le(),S(),B=l({inheritAttrs:!1,__name:`PaginationLink`,props:{Element:{default:`a`},asChild:{type:Boolean},isActive:{type:Boolean},disabled:{type:Boolean},size:{}},setup(e){let n=e,r=c(x,void 0),i=g(()=>n.size??r?.size.value??`medium`);return(e,r)=>n.asChild?(t(),h(b,a({key:0},e.$attrs,{"as-child":``,mode:n.isActive?`outline`:`ghost`,size:i.value,squared:``,disabled:n.disabled,"aria-current":n.isActive?`page`:void 0}),{default:m(()=>[o(e.$slots,`default`)]),_:3},16,[`mode`,`size`,`disabled`,`aria-current`])):n.Element===`a`?(t(),h(b,a({key:1},e.$attrs,{"as-child":``,mode:n.isActive?`outline`:`ghost`,size:i.value,squared:``,disabled:n.disabled,"aria-current":n.isActive?`page`:void 0}),{default:m(()=>[p(`a`,null,[o(e.$slots,`default`)])]),_:3},16,[`mode`,`size`,`disabled`,`aria-current`])):(t(),h(b,a({key:2},e.$attrs,{type:`button`,mode:n.isActive?`outline`:`ghost`,size:i.value,squared:``,disabled:n.disabled,"aria-current":n.isActive?`page`:void 0}),{default:m(()=>[o(e.$slots,`default`)]),_:3},16,[`mode`,`size`,`disabled`,`aria-current`]))}})})))()}var V;function H(){return(H=e((()=>{xe(),V=B,B.__docgenInfo=Object.assign({displayName:B.name??B.__name},{exportName:`default`,displayName:`PaginationLink`,description:``,tags:{},props:[{name:`Element`,required:!1,type:{name:`union`,elements:[{name:`"a"`},{name:`"button"`}]},defaultValue:{func:!1,value:`"a"`}},{name:`asChild`,required:!1,type:{name:`boolean`}},{name:`isActive`,required:!1,type:{name:`boolean`}},{name:`disabled`,required:!1,type:{name:`boolean`}},{name:`size`,required:!1,type:{name:`ComponentSize`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Pagination/PaginationLink.vue`]})})))()}var U;function Se(){return(Se=e((()=>{f(),y(),H(),U=l({inheritAttrs:!1,__name:`PaginationNext`,props:{Element:{default:`a`},disabled:{type:Boolean},size:{},label:{default:`Перейти на следующую страницу`},text:{default:`Вперёд`}},setup(e){let n=e;return(e,i)=>(t(),h(V,a(e.$attrs,{Element:n.Element,disabled:n.disabled,size:n.size,"aria-label":n.label,class:[`pagination-next`,{"pagination-next-icon-only":!n.text}]}),{default:m(()=>[o(e.$slots,`default`,{},()=>[p(`span`,null,u(n.text),1),r(d(ie))],!0)]),_:3},16,[`Element`,`disabled`,`size`,`aria-label`,`class`]))}})})))()}var Ce;function we(){return(we=e((()=>{Se(),_(),Ce=v(U,[[`__scopeId`,`data-v-7cf7c3a1`]]),U.__docgenInfo=Object.assign({displayName:U.name??U.__name},{exportName:`default`,displayName:`PaginationNext`,description:``,tags:{},props:[{name:`Element`,required:!1,type:{name:`union`,elements:[{name:`"a"`},{name:`"button"`}]},defaultValue:{func:!1,value:`"a"`}},{name:`disabled`,required:!1,type:{name:`boolean`}},{name:`size`,required:!1,type:{name:`ComponentSize`}},{name:`label`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"Перейти на следующую страницу"`}},{name:`text`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"Вперёд"`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Pagination/PaginationNext.vue`]})})))()}var Te,W;function Ee(){return(Ee=e((()=>{f(),me(),he(),ue(),Te=[`aria-label`],W=l({__name:`PaginationPageSize`,props:{value:{},options:{default:()=>[5,10]},label:{default:`Строк на странице`},size:{default:`small`},mode:{default:`default`}},emits:[`change`],setup(e,{emit:a}){let o=e,s=a,c=g(()=>[...new Set([...o.options,o.value])].filter(e=>Number.isInteger(e)&&e>0).sort((e,t)=>e-t)),l=e=>{let t=Number(e.value);Number.isInteger(t)&&t>0&&t!==o.value&&s(`change`,t)};return(e,a)=>(t(),n(`div`,{class:`pagination-page-size`,role:`group`,"aria-label":o.label},[r(de,{Element:`span`,typography:`subtitle-1`,color:`secondary`},{default:m(()=>[i(u(o.label),1)]),_:1}),r(ge,{value:String(o.value),label:String(o.value),size:o.size,mode:o.mode,onChange:l},{default:m(()=>[(t(!0),n(ne,null,ee(c.value,e=>(t(),h(_e,{key:e,value:String(e),label:String(e)},null,8,[`value`,`label`]))),128))]),_:1},8,[`value`,`label`,`size`,`mode`])],8,Te))}})})))()}var De;function Oe(){return(Oe=e((()=>{Ee(),_(),De=v(W,[[`__scopeId`,`data-v-1f2e3574`]]),W.__docgenInfo=Object.assign({displayName:W.name??W.__name},{exportName:`default`,displayName:`PaginationPageSize`,description:``,tags:{},props:[{name:`value`,required:!0,type:{name:`number`}},{name:`options`,required:!1,type:{name:`TSTypeOperator`},defaultValue:{func:!1,value:`() => [5, 10]`}},{name:`label`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"Строк на странице"`}},{name:`size`,required:!1,type:{name:`ComponentSize`},defaultValue:{func:!1,value:`"small"`}},{name:`mode`,required:!1,type:{name:`PickerMode`},defaultValue:{func:!1,value:`"default"`}}],events:[{name:`change`,type:{names:[`number`]}}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Pagination/PaginationPageSize.vue`]})})))()}var G;function ke(){return(ke=e((()=>{f(),y(),H(),G=l({inheritAttrs:!1,__name:`PaginationPrevious`,props:{Element:{default:`a`},disabled:{type:Boolean},size:{},label:{default:`Перейти на предыдущую страницу`},text:{default:`Назад`}},setup(e){let n=e;return(e,i)=>(t(),h(V,a(e.$attrs,{Element:n.Element,disabled:n.disabled,size:n.size,"aria-label":n.label,class:[`pagination-previous`,{"pagination-previous-icon-only":!n.text}]}),{default:m(()=>[o(e.$slots,`default`,{},()=>[r(d(ae)),p(`span`,null,u(n.text),1)],!0)]),_:3},16,[`Element`,`disabled`,`size`,`aria-label`,`class`]))}})})))()}var Ae;function je(){return(je=e((()=>{ke(),_(),Ae=v(G,[[`__scopeId`,`data-v-3ac9a030`]]),G.__docgenInfo=Object.assign({displayName:G.name??G.__name},{exportName:`default`,displayName:`PaginationPrevious`,description:``,tags:{},props:[{name:`Element`,required:!1,type:{name:`union`,elements:[{name:`"a"`},{name:`"button"`}]},defaultValue:{func:!1,value:`"a"`}},{name:`disabled`,required:!1,type:{name:`boolean`}},{name:`size`,required:!1,type:{name:`ComponentSize`}},{name:`label`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"Перейти на предыдущую страницу"`}},{name:`text`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"Назад"`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Pagination/PaginationPrevious.vue`]})})))()}var K;function Me(){return(Me=e((()=>{f(),ue(),K=l({__name:`PaginationSummary`,props:{from:{},to:{},total:{}},setup(e){let n=e,r=g(()=>n.total>0?`${n.from}–${n.to} из ${n.total}`:`0 из 0`),a=g(()=>n.total>0?`Показаны строки с ${n.from} по ${n.to} из ${n.total}`:`Нет строк`);return(e,n)=>(t(),h(de,{Element:`span`,typography:`subtitle-1`,color:`secondary`,"aria-live":`polite`,"aria-label":a.value},{default:m(()=>[i(u(r.value),1)]),_:1},8,[`aria-label`]))}})})))()}var Ne;function q(){return(q=e((()=>{Me(),Ne=K,K.__docgenInfo=Object.assign({displayName:K.name??K.__name},{exportName:`default`,displayName:`PaginationSummary`,description:``,tags:{},props:[{name:`from`,required:!0,type:{name:`number`}},{name:`to`,required:!0,type:{name:`number`}},{name:`total`,required:!0,type:{name:`number`}}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Pagination/PaginationSummary.vue`]})})))()}var J,Pe,Y,X,Z,Q,Fe;function $(){return($=e((()=>{f(),ce(),E(),A(),F(),z(),H(),we(),Oe(),je(),q(),fe(),J={Pagination:T,PaginationContent:k,PaginationEllipsis:P,PaginationItem:R,PaginationLink:V,PaginationNext:Ce,PaginationPageSize:De,PaginationPrevious:Ae,PaginationSummary:Ne,Stack:pe},Pe={title:`Components/Pagination`,component:T,tags:[`autodocs`],args:{size:`medium`},argTypes:{size:{control:{type:`select`},options:[`extra-small`,`small`,`medium`,`large`]}}},Y={render:e=>({components:J,setup:()=>({args:e}),template:`
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
    `})},X={render:()=>({components:J,setup:()=>({page:te(1),pageCount:5}),template:`
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
    `})},Z={render:()=>({components:J,template:`
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
    `})},Q={render:()=>({components:J,setup:()=>{let e=te(5),t=se();return{isCompact:g(()=>t.isXS||t.isS),pageSize:e}},template:`
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
    `})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},Fe=[`Default`,`Controlled`,`IconsOnly`,`TableMeta`]})))()}$();export{X as Controlled,Y as Default,Z as IconsOnly,Q as TableMeta,Fe as __namedExportsOrder,Pe as default};