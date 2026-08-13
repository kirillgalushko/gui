import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,O as n,W as r,a as i,gt as a,z as o}from"./iframe-Du9fEe2r.js";import{n as s,t as c}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{F as l,Ut as u,kt as d,l as f,lt as p,n as m,r as h,s as g,tn as _,y as v}from"./gui-icons.es-ypdSzEZR.js";import{n as y,t as b}from"./Button-CfzASKeY.js";import{a as x,c as S,d as C,f as w,i as T,l as E,m as D,n as O,o as k,p as A,r as j,s as M,t as N,u as P}from"./AttachmentTitle-BxF_iHL9.js";var F,I;function L(){return(L=e((()=>{i(),F=[`data-orientation`],I=n({__name:`AttachmentGroup`,props:{orientation:{default:`vertical`}},setup(e){let n=e;return(e,i)=>(o(),t(`div`,{class:a([`attachment-group`,n.orientation]),"data-orientation":n.orientation,role:`list`},[r(e.$slots,`default`,{},void 0,!0)],10,F))}})})))()}var R;function z(){return(z=e((()=>{L(),s(),R=c(I,[[`__scopeId`,`data-v-857b5afd`]]),I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{exportName:`default`,displayName:`AttachmentGroup`,description:``,tags:{},props:[{name:`orientation`,required:!1,type:{name:`AttachmentOrientation`},defaultValue:{func:!1,value:`"vertical"`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Attachment/AttachmentGroup.vue`]})})))()}var B,V,H,U,W,G;function K(){return(K=e((()=>{m(),y(),D(),w(),P(),S(),k(),z(),T(),O(),B={title:`Components/Attachment`,component:A,tags:[`autodocs`],args:{orientation:`horizontal`,size:`medium`,state:`done`,stretched:!0},argTypes:{orientation:{control:{type:`select`},options:[`horizontal`,`vertical`]},size:{control:{type:`select`},options:[`large`,`medium`,`small`,`extra-small`]},state:{control:{type:`select`},options:[`idle`,`uploading`,`processing`,`error`,`done`]}}},V={render:e=>({components:{Attachment:A,AttachmentAction:C,AttachmentActions:E,AttachmentContent:M,AttachmentDescription:x,AttachmentMedia:j,AttachmentTitle:N,IconFileOutline:p,IconLoader2Outline:l,IconXOutline:h},setup:()=>({args:e}),template:`
      <Attachment v-bind="args">
        <AttachmentMedia>
          <IconLoader2Outline v-if="args.state === 'uploading' || args.state === 'processing'" />
          <IconFileOutline v-else />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>sales-dashboard.pdf</AttachmentTitle>
          <AttachmentDescription>
            {{ args.state === "error" ? "Не удалось загрузить" : "PDF · 1.2 МБ" }}
          </AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Удалить файл"><IconXOutline /></AttachmentAction>
        </AttachmentActions>
      </Attachment>
    `})},H={render:()=>({components:{Attachment:A,AttachmentContent:M,AttachmentDescription:x,AttachmentAction:C,AttachmentActions:E,AttachmentGroup:R,AttachmentMedia:j,AttachmentTitle:N,IconXOutline:h},template:`
      <AttachmentGroup orientation="horizontal">
        <Attachment v-for="index in 3" :key="index" orientation="vertical">
          <AttachmentMedia variant="image">
            <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600" alt="" />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>office-reference-{{ index }}.jpg</AttachmentTitle>
            <AttachmentDescription>JPG · 940 КБ</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions>
            <AttachmentAction aria-label="Удалить изображение"><IconXOutline /></AttachmentAction>
          </AttachmentActions>
        </Attachment>
      </AttachmentGroup>
    `})},U={render:()=>({components:{Attachment:A,AttachmentAction:C,AttachmentActions:E,AttachmentContent:M,AttachmentDescription:x,AttachmentGroup:R,AttachmentMedia:j,AttachmentTitle:N,IconAlertSquareRoundedOutline:_,IconCheckOutline:u,IconClockOutline:d,IconFileOutline:p,IconLoader2Outline:l,IconRefreshOutline:v,IconXOutline:h},template:`
      <AttachmentGroup>
        <Attachment stretched state="idle">
          <AttachmentMedia><IconClockOutline /></AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>selected-file.pdf</AttachmentTitle>
            <AttachmentDescription>Готов к загрузке</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions><AttachmentAction aria-label="Удалить"><IconXOutline /></AttachmentAction></AttachmentActions>
        </Attachment>
        <Attachment stretched state="uploading">
          <AttachmentMedia><IconLoader2Outline /></AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>design-system.zip</AttachmentTitle>
            <AttachmentDescription>Загрузка · 64%</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions><AttachmentAction aria-label="Удалить"><IconXOutline /></AttachmentAction></AttachmentActions>
        </Attachment>
        <Attachment stretched state="processing">
          <AttachmentMedia><IconFileOutline /></AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>market-research.pdf</AttachmentTitle>
            <AttachmentDescription>Обработка документа</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions><AttachmentAction aria-label="Удалить"><IconXOutline /></AttachmentAction></AttachmentActions>
        </Attachment>
        <Attachment stretched state="error">
          <AttachmentMedia><IconAlertSquareRoundedOutline /></AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>financial-model.xlsx</AttachmentTitle>
            <AttachmentDescription>Не удалось загрузить. Повторите попытку.</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions>
            <AttachmentAction aria-label="Повторить"><IconRefreshOutline /></AttachmentAction>
            <AttachmentAction aria-label="Удалить"><IconXOutline /></AttachmentAction>
          </AttachmentActions>
        </Attachment>
        <Attachment stretched state="done">
          <AttachmentMedia><IconCheckOutline /></AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>uploaded-report.pdf</AttachmentTitle>
            <AttachmentDescription>Загружен · 1.8 МБ</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions><AttachmentAction aria-label="Удалить"><IconXOutline /></AttachmentAction></AttachmentActions>
        </Attachment>
      </AttachmentGroup>
    `})},W={render:()=>({components:{Attachment:A,AttachmentAction:C,AttachmentActions:E,AttachmentContent:M,AttachmentDescription:x,AttachmentGroup:R,AttachmentMedia:j,AttachmentTitle:N,Button:b,IconFileOutline:p,IconTrashOutline:f,IconUploadOutline:g},template:`
      <div style="display: flex; width: 320px; min-width: 0; flex-direction: column;">
        <AttachmentGroup>
          <Attachment stretched size="small">
            <AttachmentMedia><IconFileOutline /></AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>0586g12000sq8dto52F8B_W_600_0_R5-extremely-long-name.webp</AttachmentTitle>
              <AttachmentDescription>Загружен · 52 КБ</AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
              <Button mode="ghost" size="extra-small"><IconUploadOutline />Заменить</Button>
              <AttachmentAction mode="negative" aria-label="Удалить"><IconTrashOutline /></AttachmentAction>
            </AttachmentActions>
          </Attachment>
        </AttachmentGroup>
      </div>
    `})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Attachment,
      AttachmentAction,
      AttachmentActions,
      AttachmentContent,
      AttachmentDescription,
      AttachmentMedia,
      AttachmentTitle,
      IconFileOutline,
      IconLoader2Outline,
      IconXOutline
    },
    setup: () => ({
      args
    }),
    template: \`
      <Attachment v-bind="args">
        <AttachmentMedia>
          <IconLoader2Outline v-if="args.state === 'uploading' || args.state === 'processing'" />
          <IconFileOutline v-else />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>sales-dashboard.pdf</AttachmentTitle>
          <AttachmentDescription>
            {{ args.state === "error" ? "Не удалось загрузить" : "PDF · 1.2 МБ" }}
          </AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Удалить файл"><IconXOutline /></AttachmentAction>
        </AttachmentActions>
      </Attachment>
    \`
  })
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Attachment,
      AttachmentContent,
      AttachmentDescription,
      AttachmentAction,
      AttachmentActions,
      AttachmentGroup,
      AttachmentMedia,
      AttachmentTitle,
      IconXOutline
    },
    template: \`
      <AttachmentGroup orientation="horizontal">
        <Attachment v-for="index in 3" :key="index" orientation="vertical">
          <AttachmentMedia variant="image">
            <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600" alt="" />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>office-reference-{{ index }}.jpg</AttachmentTitle>
            <AttachmentDescription>JPG · 940 КБ</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions>
            <AttachmentAction aria-label="Удалить изображение"><IconXOutline /></AttachmentAction>
          </AttachmentActions>
        </Attachment>
      </AttachmentGroup>
    \`
  })
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Attachment,
      AttachmentAction,
      AttachmentActions,
      AttachmentContent,
      AttachmentDescription,
      AttachmentGroup,
      AttachmentMedia,
      AttachmentTitle,
      IconAlertSquareRoundedOutline,
      IconCheckOutline,
      IconClockOutline,
      IconFileOutline,
      IconLoader2Outline,
      IconRefreshOutline,
      IconXOutline
    },
    template: \`
      <AttachmentGroup>
        <Attachment stretched state="idle">
          <AttachmentMedia><IconClockOutline /></AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>selected-file.pdf</AttachmentTitle>
            <AttachmentDescription>Готов к загрузке</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions><AttachmentAction aria-label="Удалить"><IconXOutline /></AttachmentAction></AttachmentActions>
        </Attachment>
        <Attachment stretched state="uploading">
          <AttachmentMedia><IconLoader2Outline /></AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>design-system.zip</AttachmentTitle>
            <AttachmentDescription>Загрузка · 64%</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions><AttachmentAction aria-label="Удалить"><IconXOutline /></AttachmentAction></AttachmentActions>
        </Attachment>
        <Attachment stretched state="processing">
          <AttachmentMedia><IconFileOutline /></AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>market-research.pdf</AttachmentTitle>
            <AttachmentDescription>Обработка документа</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions><AttachmentAction aria-label="Удалить"><IconXOutline /></AttachmentAction></AttachmentActions>
        </Attachment>
        <Attachment stretched state="error">
          <AttachmentMedia><IconAlertSquareRoundedOutline /></AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>financial-model.xlsx</AttachmentTitle>
            <AttachmentDescription>Не удалось загрузить. Повторите попытку.</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions>
            <AttachmentAction aria-label="Повторить"><IconRefreshOutline /></AttachmentAction>
            <AttachmentAction aria-label="Удалить"><IconXOutline /></AttachmentAction>
          </AttachmentActions>
        </Attachment>
        <Attachment stretched state="done">
          <AttachmentMedia><IconCheckOutline /></AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>uploaded-report.pdf</AttachmentTitle>
            <AttachmentDescription>Загружен · 1.8 МБ</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions><AttachmentAction aria-label="Удалить"><IconXOutline /></AttachmentAction></AttachmentActions>
        </Attachment>
      </AttachmentGroup>
    \`
  })
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Attachment,
      AttachmentAction,
      AttachmentActions,
      AttachmentContent,
      AttachmentDescription,
      AttachmentGroup,
      AttachmentMedia,
      AttachmentTitle,
      Button,
      IconFileOutline,
      IconTrashOutline,
      IconUploadOutline
    },
    template: \`
      <div style="display: flex; width: 320px; min-width: 0; flex-direction: column;">
        <AttachmentGroup>
          <Attachment stretched size="small">
            <AttachmentMedia><IconFileOutline /></AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>0586g12000sq8dto52F8B_W_600_0_R5-extremely-long-name.webp</AttachmentTitle>
              <AttachmentDescription>Загружен · 52 КБ</AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
              <Button mode="ghost" size="extra-small"><IconUploadOutline />Заменить</Button>
              <AttachmentAction mode="negative" aria-label="Удалить"><IconTrashOutline /></AttachmentAction>
            </AttachmentActions>
          </Attachment>
        </AttachmentGroup>
      </div>
    \`
  })
}`,...W.parameters?.docs?.source}}},G=[`Default`,`Gallery`,`States`,`ConstrainedLongName`]})))()}K();export{W as ConstrainedLongName,V as Default,H as Gallery,U as States,G as __namedExportsOrder,B as default};