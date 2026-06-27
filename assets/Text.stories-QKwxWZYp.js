import{T as n}from"./Text-BVo0AXrY.js";import"./vue.esm-bundler-i9X9Ld2b.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const u={title:"Components/Text",component:n,tags:["autodocs"],argTypes:{typography:{control:"select",options:["title-1","title-2","title-3","title-4","subtitle-1","subtitle-2","subtitle-3","subtitle-4","label-1","label-2","label-3","paragraph-1","paragraph-2"]},Element:{control:"select",options:["h1","h2","h3","h4","h5","h6","p","span","div"]},color:{control:"select",options:["default","inherit","secondary"]},textAlign:{control:"select",options:["inherit","start","center","end"]}}},c="АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЧЦШЩЬЪЫЭЮЯабвгдеёжзийклмнопрстуфхчцшщьъыэюя",t={args:{typography:"paragraph-1",color:"default",clamp:2,ellipsis:!0,textAlign:"start"},render:a=>({components:{Text:n},setup(){return{args:a,text:c}},template:'<Text v-bind="args">{{text}}</Text>'})},e={render:()=>({components:{Text:n},template:`
      <div>
        <Text typography="title-1">Заголовок</Text>
        <Text typography="subtitle-1">Подзаголовок</Text>
        <br /><br />
        <Text typography="title-2">Заголовок</Text>
        <Text typography="subtitle-2">Подзаголовок</Text>
        <br /><br />
        <Text typography="title-3">Заголовок</Text>
        <Text typography="subtitle-3">Подзаголовок</Text>
        <br /><br />
        <Text typography="title-4">Заголовок</Text>
        <Text typography="subtitle-4">Подзаголовок</Text>
        <br /><br />
        <Text typography="title-4">Заголовок</Text>
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
    `})},r={args:{typography:"title-2",color:"default",clamp:2,ellipsis:!0,textAlign:"start"},render:a=>({components:{Text:n},setup(){return{args:a}},template:'<Text v-bind="args">Это длинный абзац, который должен быть обрезан после определённого числа строк, демонстрируя функциональность обрезки текста в компоненте.</Text>'})};var p,o,s;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    typography: 'paragraph-1',
    color: 'default',
    clamp: 2,
    ellipsis: true,
    textAlign: 'start'
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
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var l,i,x;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Text
    },
    template: \`
      <div>
        <Text typography="title-1">Заголовок</Text>
        <Text typography="subtitle-1">Подзаголовок</Text>
        <br /><br />
        <Text typography="title-2">Заголовок</Text>
        <Text typography="subtitle-2">Подзаголовок</Text>
        <br /><br />
        <Text typography="title-3">Заголовок</Text>
        <Text typography="subtitle-3">Подзаголовок</Text>
        <br /><br />
        <Text typography="title-4">Заголовок</Text>
        <Text typography="subtitle-4">Подзаголовок</Text>
        <br /><br />
        <Text typography="title-4">Заголовок</Text>
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
}`,...(x=(i=e.parameters)==null?void 0:i.docs)==null?void 0:x.source}}};var y,g,T;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    typography: 'title-2',
    color: 'default',
    clamp: 2,
    ellipsis: true,
    textAlign: 'start'
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const m=["Default","Typography","WithClamping"];export{t as Default,e as Typography,r as WithClamping,m as __namedExportsOrder,u as default};
