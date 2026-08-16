import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,F as n,O as r,W as i,a,b as ee,gt as o,vt as s,y as c,z as l}from"./iframe-BRZN4f8M.js";import{n as u,t as d}from"./_plugin-vue_export-helper-BqBa3wPr.js";var f;function p(){return(p=e((()=>{a(),f=r({__name:`Table`,props:{border:{type:Boolean,default:!1},layout:{type:String,default:`auto`},minWidth:{type:[String,Number],default:void 0},maxHeight:{type:[String,Number],default:void 0},stickyHeader:{type:Boolean,default:!1}},setup(e){let r=e,a=e=>typeof e==`number`||typeof e==`string`&&/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,u=c(()=>a(r.minWidth)),d=c(()=>a(r.maxHeight));return(e,a)=>(l(),t(`div`,{class:o([`table-container`,{border:r.border,"sticky-header":r.stickyHeader}]),style:s({maxHeight:d.value})},[ee(`table`,n(e.$attrs,{class:`table`,style:{minWidth:u.value,tableLayout:r.layout}}),[i(e.$slots,`default`,{},void 0,!0)],16)],6))}})})))()}var m;function h(){return(h=e((()=>{p(),u(),m=d(f,[[`__scopeId`,`data-v-e6d04fb1`]]),f.__docgenInfo=Object.assign({displayName:f.name??f.__name},{exportName:`default`,displayName:`Table`,description:``,tags:{},props:[{name:`border`,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`layout`,type:{name:`TableProps["layout"]`},defaultValue:{func:!1,value:`"auto"`}},{name:`minWidth`,type:{name:`TableProps["minWidth"]`},defaultValue:{func:!1,value:`undefined`}},{name:`maxHeight`,type:{name:`TableProps["maxHeight"]`},defaultValue:{func:!1,value:`undefined`}},{name:`stickyHeader`,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Table/Table.vue`]})})))()}function g(e,n){return l(),t(`tbody`,v,[i(e.$slots,`default`,{},void 0,!0)])}var _,v,y;function b(){return(b=e((()=>{a(),u(),_={},v={class:`table-body`},y=d(_,[[`render`,g],[`__scopeId`,`data-v-fbbd4a0a`]]),_.__docgenInfo=Object.assign({displayName:_.name??_.__name},{displayName:`TableBody`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Table/TableBody.vue`]})})))()}function te(e,n){return l(),t(`caption`,S,[i(e.$slots,`default`,{},void 0,!0)])}var x,S,C;function w(){return(w=e((()=>{a(),u(),x={},S={class:`table-caption`},C=d(x,[[`render`,te],[`__scopeId`,`data-v-bb3db406`]]),x.__docgenInfo=Object.assign({displayName:x.name??x.__name},{displayName:`TableCaption`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Table/TableCaption.vue`]})})))()}var T;function E(){return(E=e((()=>{a(),T=r({__name:`TableCell`,props:{width:{type:[String,Number],required:!1},minWidth:{type:[String,Number],required:!1},maxWidth:{type:[String,Number],required:!1}},setup(e){let n=e,r=e=>typeof e==`number`||typeof e==`string`&&/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,a=c(()=>({width:r(n.width),minWidth:r(n.minWidth),maxWidth:r(n.maxWidth)}));return(e,n)=>(l(),t(`td`,{class:`table-cell`,style:s(a.value)},[i(e.$slots,`default`,{},void 0,!0)],4))}})})))()}var D;function O(){return(O=e((()=>{E(),u(),D=d(T,[[`__scopeId`,`data-v-9913f98d`]]),T.__docgenInfo=Object.assign({displayName:T.name??T.__name},{exportName:`default`,displayName:`TableCell`,description:``,tags:{},props:[{name:`width`,type:{name:`TableColumnSize`},required:!1},{name:`minWidth`,type:{name:`TableColumnSize`},required:!1},{name:`maxWidth`,type:{name:`TableColumnSize`},required:!1}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Table/TableCell.vue`]})})))()}function k(e,n){return l(),t(`tfoot`,j,[i(e.$slots,`default`,{},void 0,!0)])}var A,j,M;function N(){return(N=e((()=>{a(),u(),A={},j={class:`table-footer`},M=d(A,[[`render`,k],[`__scopeId`,`data-v-fcbbedf1`]]),A.__docgenInfo=Object.assign({displayName:A.name??A.__name},{displayName:`TableFooter`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Table/TableFooter.vue`]})})))()}var P;function F(){return(F=e((()=>{a(),P=r({__name:`TableHead`,props:{width:{type:[String,Number],required:!1},minWidth:{type:[String,Number],required:!1},maxWidth:{type:[String,Number],required:!1}},setup(e){let n=e,r=e=>typeof e==`number`||typeof e==`string`&&/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,a=c(()=>({width:r(n.width),minWidth:r(n.minWidth),maxWidth:r(n.maxWidth)}));return(e,n)=>(l(),t(`th`,{class:`table-head`,style:s(a.value)},[i(e.$slots,`default`,{},void 0,!0)],4))}})})))()}var I;function L(){return(L=e((()=>{F(),u(),I=d(P,[[`__scopeId`,`data-v-6f6bfc99`]]),P.__docgenInfo=Object.assign({displayName:P.name??P.__name},{exportName:`default`,displayName:`TableHead`,description:``,tags:{},props:[{name:`width`,type:{name:`TableColumnSize`},required:!1},{name:`minWidth`,type:{name:`TableColumnSize`},required:!1},{name:`maxWidth`,type:{name:`TableColumnSize`},required:!1}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Table/TableHead.vue`]})})))()}function R(e,n){return l(),t(`thead`,B,[i(e.$slots,`default`,{},void 0,!0)])}var z,B,V;function H(){return(H=e((()=>{a(),u(),z={},B={class:`table-header`},V=d(z,[[`render`,R],[`__scopeId`,`data-v-e3c3d8d4`]]),z.__docgenInfo=Object.assign({displayName:z.name??z.__name},{displayName:`TableHeader`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Table/TableHeader.vue`]})})))()}function ne(e,n){return l(),t(`tr`,W,[i(e.$slots,`default`,{},void 0,!0)])}var U,W,G;function K(){return(K=e((()=>{a(),u(),U={},W={class:`table-row`},G=d(U,[[`render`,ne],[`__scopeId`,`data-v-9ab7df30`]]),U.__docgenInfo=Object.assign({displayName:U.name??U.__name},{displayName:`TableRow`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Table/TableRow.vue`]})})))()}var q,J,Y,X,Z,Q;function $(){return($=e((()=>{h(),b(),w(),O(),N(),L(),H(),K(),q={title:`Components/Table`,component:m,tags:[`autodocs`]},J=[{invoice:`INV001`,paymentStatus:`Paid`,totalAmount:`$250.00`,paymentMethod:`Credit Card`},{invoice:`INV002`,paymentStatus:`Pending`,totalAmount:`$150.00`,paymentMethod:`PayPal`},{invoice:`INV003`,paymentStatus:`Unpaid`,totalAmount:`$350.00`,paymentMethod:`Bank Transfer`},{invoice:`INV004`,paymentStatus:`Paid`,totalAmount:`$450.00`,paymentMethod:`Credit Card`},{invoice:`INV005`,paymentStatus:`Paid`,totalAmount:`$550.00`,paymentMethod:`PayPal`}],Y=[...J,...J,...J],X={render:()=>({components:{Table:m,TableBody:y,TableCaption:C,TableCell:D,TableFooter:M,TableHead:I,TableHeader:V,TableRow:G},setup(){return{invoices:J}},template:`
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead style="text-align: right;">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="invoice in invoices" :key="invoice.invoice">
            <TableCell style="font-weight: 500;">{{ invoice.invoice }}</TableCell>
            <TableCell>{{ invoice.paymentStatus }}</TableCell>
            <TableCell>{{ invoice.paymentMethod }}</TableCell>
            <TableCell style="text-align: right;">{{ invoice.totalAmount }}</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colspan="3">Total</TableCell>
            <TableCell style="text-align: right;">$1,750.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    `})},Z={render:()=>({components:{Table:m,TableBody:y,TableCell:D,TableHead:I,TableHeader:V,TableRow:G},setup(){return{overflowingInvoices:Y}},template:`
      <Table :max-height="240" sticky-header>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead style="text-align: right;">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="invoice in overflowingInvoices" :key="invoice.invoice">
            <TableCell>{{ invoice.invoice }}</TableCell>
            <TableCell>{{ invoice.paymentStatus }}</TableCell>
            <TableCell>{{ invoice.paymentMethod }}</TableCell>
            <TableCell style="text-align: right;">{{ invoice.totalAmount }}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    `})},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Table,
      TableBody,
      TableCaption,
      TableCell,
      TableFooter,
      TableHead,
      TableHeader,
      TableRow
    },
    setup() {
      return {
        invoices
      };
    },
    template: \`
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead style="text-align: right;">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="invoice in invoices" :key="invoice.invoice">
            <TableCell style="font-weight: 500;">{{ invoice.invoice }}</TableCell>
            <TableCell>{{ invoice.paymentStatus }}</TableCell>
            <TableCell>{{ invoice.paymentMethod }}</TableCell>
            <TableCell style="text-align: right;">{{ invoice.totalAmount }}</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colspan="3">Total</TableCell>
            <TableCell style="text-align: right;">$1,750.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Table,
      TableBody,
      TableCell,
      TableHead,
      TableHeader,
      TableRow
    },
    setup() {
      return {
        overflowingInvoices
      };
    },
    template: \`
      <Table :max-height="240" sticky-header>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead style="text-align: right;">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="invoice in overflowingInvoices" :key="invoice.invoice">
            <TableCell>{{ invoice.invoice }}</TableCell>
            <TableCell>{{ invoice.paymentStatus }}</TableCell>
            <TableCell>{{ invoice.paymentMethod }}</TableCell>
            <TableCell style="text-align: right;">{{ invoice.totalAmount }}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`StickyHeader`]})))()}$();export{X as Default,Z as StickyHeader,Q as __namedExportsOrder,q as default};