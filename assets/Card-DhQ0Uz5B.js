import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{o as i,s as a}from"./blocks-DiDWYVew.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Components/Card/Documentation`}),`
`,(0,c.jsx)(t.h1,{id:`card`,children:`Card`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`Card`}),` группирует связанный контент на общей поверхности. Используйте составные части для
структуры, аналогичной shadcn: `,(0,c.jsx)(t.code,{children:`CardHeader`}),`, `,(0,c.jsx)(t.code,{children:`CardContent`}),` и `,(0,c.jsx)(t.code,{children:`CardFooter`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<Card stretched :padding="24">
  <CardHeader border>
    <Text typography="title-2">Условия использования</Text>
    <Text typography="paragraph-2" color="secondary">
      Ознакомьтесь с условиями перед продолжением.
    </Text>
  </CardHeader>
  <CardContent border>
    Первая секция содержимого.
  </CardContent>
  <CardContent>
    Вторая секция содержимого.
  </CardContent>
  <CardFooter>
    <Button mode="default">Отменить</Button>
    <Button mode="contrast">Продолжить</Button>
  </CardFooter>
</Card>
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`CardHeader`}),` выравнивает содержимое по верхнему краю карточки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`CardContent`}),` содержит основной контент и получает отступы Card.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`CardFooter`}),` имеет верхний разделитель и поверхность для действий.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Props `,(0,c.jsx)(t.code,{children:`border`}),` у `,(0,c.jsx)(t.code,{children:`CardHeader`}),` и `,(0,c.jsx)(t.code,{children:`CardContent`}),` добавляют нижний разделитель. Если следующая
секция — `,(0,c.jsx)(t.code,{children:`CardFooter`}),`, Card скрывает его повторный верхний разделитель.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Отступ и радиус всех секций наследуются от props `,(0,c.jsx)(t.code,{children:`padding`}),` и `,(0,c.jsx)(t.code,{children:`borderRadius`}),` компонента `,(0,c.jsx)(t.code,{children:`Card`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};