import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,ct as n}from"./iframe-BRZN4f8M.js";import{$t as r,N as i,T as a,Tt as o,d as s,n as c,yt as l}from"./gui-icons.es-CEoFeAM4.js";import{n as u,t as d}from"./Button-BnZoe71I.js";import{n as f,t as p}from"./BaseMenuLabel-BGjfTXBF.js";import{n as m,t as h}from"./BaseMenuSeparator-CfhxjWpS.js";import{n as g,t as _}from"./Dropdown-B485bcN2.js";import{a as v,c as y,d as b,f as x,i as S,l as C,m as w,n as T,o as E,p as D,r as O,s as k,t as A,u as j}from"./DropdownSubTrigger-mShNZw9n.js";var M;function N(){return(N=e((()=>{f(),M=p})))()}var P;function F(){return(F=e((()=>{N(),P=M,M.__docgenInfo=Object.assign({displayName:M.name??M.__name},{exportName:`BaseMenuLabel`,displayName:`BaseMenuLabel`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Dropdown/DropdownLabel.vue`]})})))()}var I;function L(){return(L=e((()=>{m(),I=h})))()}var R;function z(){return(z=e((()=>{L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{displayName:`BaseMenuSeparator`,description:``,tags:{},sourceFiles:[`/home/runner/work/gui/gui/src/components/Dropdown/DropdownSeparator.vue`]})})))()}var B,V,H;function U(){return(U=e((()=>{t(),g(),w(),x(),j(),F(),y(),E(),z(),S(),T(),u(),c(),B={title:`Components/Dropdown`,component:_,tags:[`!autodocs`],argTypes:{},args:{}},V={args:{},render:e=>({components:{Dropdown:_,Button:d,DropdownCheckboxItem:D,DropdownGroup:b,DropdownItem:C,DropdownLabel:P,DropdownRadioGroup:k,DropdownRadioItem:v,DropdownSeparator:R,DropdownSub:O,DropdownSubTrigger:A,IconExternalLinkOutline:l,IconPencilOutline:a,IconShareOutline:s,IconArchiveOutline:r,IconMailOutline:i,IconCopyOutline:o},setup(){return{args:e,statusBar:n(!0),activityBar:n(!1),position:n(`bottom`)}},template:`
      <Dropdown v-bind="args">
        <Button>Открыть Dropdown</Button>
        <template #popper>
          <DropdownGroup>
            <DropdownLabel>Действия</DropdownLabel>
            <DropdownItem><IconPencilOutline />Открыть</DropdownItem>
            <DropdownItem><IconExternalLinkOutline />Открыть в новой вкладке</DropdownItem>
            <DropdownSub>
              <DropdownSubTrigger><IconShareOutline />Поделиться</DropdownSubTrigger>
              <template #popper>
                <DropdownGroup>
                  <DropdownLabel>Поделиться</DropdownLabel>
                  <DropdownItem><IconCopyOutline />Скопировать ссылку</DropdownItem>
                  <DropdownItem><IconMailOutline />Отправить по почте</DropdownItem>
                </DropdownGroup>
              </template>
            </DropdownSub>
          </DropdownGroup>
          <DropdownSeparator />
          <DropdownGroup>
            <DropdownLabel>Отображение</DropdownLabel>
            <DropdownCheckboxItem v-model="statusBar">Строка состояния</DropdownCheckboxItem>
            <DropdownCheckboxItem v-model="activityBar">Панель активности</DropdownCheckboxItem>
          </DropdownGroup>
          <DropdownSeparator />
          <DropdownGroup>
            <DropdownLabel>Позиция</DropdownLabel>
            <DropdownRadioGroup v-model="position">
              <DropdownRadioItem value="top">Сверху</DropdownRadioItem>
              <DropdownRadioItem value="bottom">Снизу</DropdownRadioItem>
            </DropdownRadioGroup>
          </DropdownGroup>
          <DropdownSeparator />
          <DropdownGroup>
            <DropdownItem><IconArchiveOutline />Архивировать</DropdownItem>
          </DropdownGroup>
        </template>
      </Dropdown>`})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      Dropdown,
      Button,
      DropdownCheckboxItem,
      DropdownGroup,
      DropdownItem,
      DropdownLabel,
      DropdownRadioGroup,
      DropdownRadioItem,
      DropdownSeparator,
      DropdownSub,
      DropdownSubTrigger,
      IconExternalLinkOutline,
      IconPencilOutline,
      IconShareOutline,
      IconArchiveOutline,
      IconMailOutline,
      IconCopyOutline
    },
    setup() {
      const statusBar = ref(true);
      const activityBar = ref(false);
      const position = ref("bottom");
      return {
        args,
        statusBar,
        activityBar,
        position
      };
    },
    template: \`
      <Dropdown v-bind="args">
        <Button>Открыть Dropdown</Button>
        <template #popper>
          <DropdownGroup>
            <DropdownLabel>Действия</DropdownLabel>
            <DropdownItem><IconPencilOutline />Открыть</DropdownItem>
            <DropdownItem><IconExternalLinkOutline />Открыть в новой вкладке</DropdownItem>
            <DropdownSub>
              <DropdownSubTrigger><IconShareOutline />Поделиться</DropdownSubTrigger>
              <template #popper>
                <DropdownGroup>
                  <DropdownLabel>Поделиться</DropdownLabel>
                  <DropdownItem><IconCopyOutline />Скопировать ссылку</DropdownItem>
                  <DropdownItem><IconMailOutline />Отправить по почте</DropdownItem>
                </DropdownGroup>
              </template>
            </DropdownSub>
          </DropdownGroup>
          <DropdownSeparator />
          <DropdownGroup>
            <DropdownLabel>Отображение</DropdownLabel>
            <DropdownCheckboxItem v-model="statusBar">Строка состояния</DropdownCheckboxItem>
            <DropdownCheckboxItem v-model="activityBar">Панель активности</DropdownCheckboxItem>
          </DropdownGroup>
          <DropdownSeparator />
          <DropdownGroup>
            <DropdownLabel>Позиция</DropdownLabel>
            <DropdownRadioGroup v-model="position">
              <DropdownRadioItem value="top">Сверху</DropdownRadioItem>
              <DropdownRadioItem value="bottom">Снизу</DropdownRadioItem>
            </DropdownRadioGroup>
          </DropdownGroup>
          <DropdownSeparator />
          <DropdownGroup>
            <DropdownItem><IconArchiveOutline />Архивировать</DropdownItem>
          </DropdownGroup>
        </template>
      </Dropdown>\`
  })
}`,...V.parameters?.docs?.source}}},H=[`Default`]})))()}U();export{V as Default,H as __namedExportsOrder,B as default};