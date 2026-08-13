import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Text-CY8H8lpg.js";var r,i,a,o,s,c;function l(){return(l=e((()=>{t(),r={title:`Components/Text`,component:n,tags:[`autodocs`],argTypes:{typography:{control:`select`,options:[`title-1`,`title-2`,`title-3`,`title-4`,`title-5`,`title-6`,`title-7`,`title-8`,`title-9`,`title-10`,`subtitle-1`,`subtitle-2`,`subtitle-3`,`subtitle-4`,`label-1`,`label-2`,`label-3`,`paragraph-1`,`paragraph-2`]},Element:{control:`select`,options:[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`p`,`span`,`div`]},color:{control:`select`,options:[`default`,`inherit`,`secondary`,`negative`]},inline:{control:`boolean`},textAlign:{control:`select`,options:[`inherit`,`start`,`center`,`end`]}}},i=`АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЧЦШЩЬЪЫЭЮЯабвгдеёжзийклмнопрстуфхчцшщьъыэюя`,a={args:{typography:`paragraph-1`,color:`default`,clamp:2,ellipsis:!0,inline:!1,textAlign:`start`},render:e=>({components:{Text:n},setup(){return{args:e,text:i}},template:`<Text v-bind="args">{{text}}</Text>`})},o={render:()=>({components:{Text:n},template:`
      <div>
        <Text typography="title-1">Заголовок</Text>
        <br /><br />
        <Text typography="title-2">Заголовок</Text>
        <br /><br />
        <Text typography="title-3">Заголовок</Text>
        <br /><br />
        <Text typography="title-4">Заголовок</Text>
        <br /><br />
        <Text typography="title-5">Заголовок</Text>
        <br /><br />
        <Text typography="title-6">Заголовок</Text>
        <br /><br />
        <Text typography="title-7">Заголовок</Text>
        <br /><br />
        <Text typography="title-8">Заголовок</Text>
        <br /><br />
        <Text typography="title-9">Заголовок</Text>
        <br /><br />
        <Text typography="title-10">Заголовок</Text>
        <br /><br />
        <Text typography="subtitle-1">Подзаголовок</Text>
        <Text typography="subtitle-2">Подзаголовок</Text>
        <Text typography="subtitle-3">Подзаголовок</Text>
        <Text typography="subtitle-4">Подзаголовок</Text>
        <br /><br />
        <Text typography="paragraph-1">Параграф c текстом, который просто демонстрирует как будет выглядеть текст</Text>
        <br /><br />
        <div style="display: flex; flex-direction: row; align-items: center; gap: 8px">
          <div style="width: 40px; height: 40px; background: white; border-radius: 100%" /> 
          <div>
            <Text typography="label-1">Иван Иванов</Text>
            <Text typography="label-2" color="secondary">Дизайнер интерьеров</Text>
          </div>
        </div>
      </div>
    `})},s={args:{typography:`title-2`,color:`default`,clamp:2,ellipsis:!0,textAlign:`start`},render:e=>({components:{Text:n},setup(){return{args:e}},template:`<Text v-bind="args">Это длинный абзац, который должен быть обрезан после определённого числа строк, демонстрируя функциональность обрезки текста в компоненте.</Text>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    typography: "paragraph-1",
    color: "default",
    clamp: 2,
    ellipsis: true,
    inline: false,
    textAlign: "start"
  },
  render: args => ({
    components: {
      Text
    },
    setup() {
      return {
        args,
        text
      };
    },
    template: \`<Text v-bind="args">{{text}}</Text>\`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Text
    },
    template: \`
      <div>
        <Text typography="title-1">Заголовок</Text>
        <br /><br />
        <Text typography="title-2">Заголовок</Text>
        <br /><br />
        <Text typography="title-3">Заголовок</Text>
        <br /><br />
        <Text typography="title-4">Заголовок</Text>
        <br /><br />
        <Text typography="title-5">Заголовок</Text>
        <br /><br />
        <Text typography="title-6">Заголовок</Text>
        <br /><br />
        <Text typography="title-7">Заголовок</Text>
        <br /><br />
        <Text typography="title-8">Заголовок</Text>
        <br /><br />
        <Text typography="title-9">Заголовок</Text>
        <br /><br />
        <Text typography="title-10">Заголовок</Text>
        <br /><br />
        <Text typography="subtitle-1">Подзаголовок</Text>
        <Text typography="subtitle-2">Подзаголовок</Text>
        <Text typography="subtitle-3">Подзаголовок</Text>
        <Text typography="subtitle-4">Подзаголовок</Text>
        <br /><br />
        <Text typography="paragraph-1">Параграф c текстом, который просто демонстрирует как будет выглядеть текст</Text>
        <br /><br />
        <div style="display: flex; flex-direction: row; align-items: center; gap: 8px">
          <div style="width: 40px; height: 40px; background: white; border-radius: 100%" /> 
          <div>
            <Text typography="label-1">Иван Иванов</Text>
            <Text typography="label-2" color="secondary">Дизайнер интерьеров</Text>
          </div>
        </div>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    typography: "title-2",
    color: "default",
    clamp: 2,
    ellipsis: true,
    textAlign: "start"
  },
  render: args => ({
    components: {
      Text
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Text v-bind="args">Это длинный абзац, который должен быть обрезан после определённого числа строк, демонстрируя функциональность обрезки текста в компоненте.</Text>\`
  })
}`,...s.parameters?.docs?.source}}},c=[`Default`,`Typography`,`WithClamping`]})))()}l();export{a as Default,o as Typography,s as WithClamping,c as __namedExportsOrder,r as default};