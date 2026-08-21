import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,C as n,K as r,M as i,O as a,V as o,W as s,a as c,gt as l,mt as u,vt as d,x as f,y as p,z as m}from"./iframe-DSPFKwNv.js";import{n as h,t as g}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{$ as ee,Vt as te,Y as ne,Yt as re,Z as ie,kt as ae,n as oe,qt as se,r as ce,tt as le}from"./gui-icons.es-BLyOnAQu.js";import{n as ue,t as de}from"./Card-CMNAHxXH.js";import{n as fe,t as pe}from"./Avatar-DhkNKh4Y.js";import{n as me,t as he}from"./Badge-hgdrW5Br.js";import{n as ge,t as _e}from"./Stack-C4ahZnk7.js";import{a as ve,c as ye,i as be,n as xe,o as Se,r as Ce,s as we,t as Te}from"./ItemTitle-BYyVxuZM.js";var _,v;function y(){return(y=e((()=>{_=Symbol(`timeline`),v=Symbol(`timeline-item`)})))()}var b,x;function S(){return(S=e((()=>{c(),y(),b=[`data-orientation`,`data-direction`,`data-date-position`],x=a({__name:`Timeline`,props:{orientation:{default:`vertical`},direction:{default:`forward`},datePosition:{default:`top`},activeStep:{},railSize:{default:`40px`}},setup(e){let t=e,r=p(()=>({"--timeline-rail-size":t.railSize}));return o(_,{orientation:p(()=>t.orientation),direction:p(()=>t.direction),datePosition:p(()=>t.datePosition),activeStep:p(()=>t.activeStep)}),(e,i)=>(m(),n(`div`,{class:l([`timeline`,t.orientation,t.direction]),style:d(r.value),"data-orientation":t.orientation,"data-direction":t.direction,"data-date-position":t.datePosition,role:`list`},[s(e.$slots,`default`,{},void 0,!0)],14,b))}})})))()}var C;function w(){return(w=e((()=>{S(),h(),C=g(x,[[`__scopeId`,`data-v-503eae87`]]),x.__docgenInfo=Object.assign({displayName:x.name??x.__name},{exportName:`default`,displayName:`Timeline`,description:``,tags:{},props:[{name:`orientation`,required:!1,type:{name:`TimelineOrientation`},defaultValue:{func:!1,value:`"vertical"`}},{name:`direction`,required:!1,type:{name:`TimelineDirection`},defaultValue:{func:!1,value:`"forward"`}},{name:`datePosition`,required:!1,type:{name:`TimelineDatePosition`},defaultValue:{func:!1,value:`"top"`}},{name:`activeStep`,required:!1,type:{name:`TimelineStep`}},{name:`railSize`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"40px"`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Timeline/Timeline.vue`]})})))()}function Ee(e,t){return m(),n(`div`,E,[s(e.$slots,`default`,{},void 0,!0)])}var T,E,D;function O(){return(O=e((()=>{c(),h(),T={},E={class:`timeline-content`},D=g(T,[[`render`,Ee],[`__scopeId`,`data-v-102a947a`]]),T.__docgenInfo=Object.assign({displayName:T.name??T.__name},{displayName:`TimelineContent`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Timeline/TimelineContent.vue`]})})))()}var k;function A(){return(A=e((()=>{c(),k=a({__name:`TimelineDate`,props:{datetime:{},Element:{default:`time`}},setup(e){let n=e;return(e,i)=>(m(),f(r(n.Element),{class:`timeline-date`,datetime:n.Element===`time`?n.datetime:void 0},{default:t(()=>[s(e.$slots,`default`,{},void 0,!0)]),_:3},8,[`datetime`]))}})})))()}var j;function M(){return(M=e((()=>{A(),h(),j=g(k,[[`__scopeId`,`data-v-9dca09fd`]]),k.__docgenInfo=Object.assign({displayName:k.name??k.__name},{exportName:`default`,displayName:`TimelineDate`,description:``,tags:{},props:[{name:`datetime`,required:!1,type:{name:`string`}},{name:`Element`,required:!1,type:{name:`union`,elements:[{name:`"time"`},{name:`"div"`},{name:`"span"`}]},defaultValue:{func:!1,value:`"time"`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Timeline/TimelineDate.vue`]})})))()}function De(e,t){return m(),n(`div`,P,[s(e.$slots,`default`,{},void 0,!0)])}var N,P,Oe;function F(){return(F=e((()=>{c(),h(),N={},P={class:`timeline-header`},Oe=g(N,[[`render`,De],[`__scopeId`,`data-v-02296ebb`]]),N.__docgenInfo=Object.assign({displayName:N.name??N.__name},{displayName:`TimelineHeader`,description:``,tags:{},slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Timeline/TimelineHeader.vue`]})})))()}var I,L;function R(){return(R=e((()=>{c(),y(),I=[`data-state`],L=a({__name:`TimelineIndicator`,props:{variant:{default:`solid`},size:{default:`medium`},mode:{default:`auto`},color:{}},setup(e){let t=e,r=i(_),a=i(v);if(!r||!a)throw Error(`TimelineIndicator must be used inside TimelineItem`);let o=p(()=>t.mode===`auto`?a.state.value===`completed`?`default`:a.state.value===`current`?`accent`:a.state.value===`pending`?`muted`:`default`:t.mode),c=p(()=>t.size===`small`||t.size===`medium`||t.size===`large`?{small:`12px`,medium:`24px`,large:`40px`}[t.size]:t.size),f=p(()=>{let e=t.color?`var(--color-${t.color}-500)`:{default:`hsl(var(--primary))`,muted:`hsl(var(--muted-foreground))`,accent:`hsl(var(--accent))`,positive:`hsl(var(--positive))`,negative:`hsl(var(--negative))`,danger:`hsl(var(--danger))`,warning:`hsl(var(--warning))`}[o.value],n=o.value==="default"&&!t.color?`hsl(var(--primary-foreground))`:`hsl(0 0% 98%)`;return{"--timeline-indicator-size":c.value,"--timeline-indicator-color":e,"--timeline-indicator-foreground":n}});return(e,i)=>(m(),n(`span`,{class:l([`timeline-indicator`,u(r).orientation.value,t.variant]),style:d(f.value),"data-state":u(a).state.value},[s(e.$slots,`default`,{},void 0,!0)],14,I))}})})))()}var z;function B(){return(B=e((()=>{R(),h(),z=g(L,[[`__scopeId`,`data-v-21702622`]]),L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{exportName:`default`,displayName:`TimelineIndicator`,description:``,tags:{},props:[{name:`variant`,required:!1,type:{name:`TimelineIndicatorVariant`},defaultValue:{func:!1,value:`"solid"`}},{name:`size`,required:!1,type:{name:`TimelineIndicatorSize`},defaultValue:{func:!1,value:`"medium"`}},{name:`mode`,required:!1,type:{name:`TimelineTone`},defaultValue:{func:!1,value:`"auto"`}},{name:`color`,required:!1,type:{name:`Color`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Timeline/TimelineIndicator.vue`]})})))()}var V,H;function U(){return(U=e((()=>{c(),y(),V=[`data-orientation`,`data-direction`,`data-date-position`,`data-state`,`data-step`,`aria-current`],H=a({__name:`TimelineItem`,props:{step:{},state:{}},setup(e){let t=e,r=i(_);if(!r)throw Error(`TimelineItem must be used inside Timeline`);let a=p(()=>{if(t.state)return t.state;let e=r.activeStep.value;return e===void 0||t.step===void 0?`default`:t.step===e?`current`:typeof t.step==`number`&&typeof e==`number`?t.step<e?`completed`:`pending`:`default`});return o(v,{state:a}),(e,i)=>(m(),n(`div`,{class:l([`timeline-item`,u(r).orientation.value,u(r).direction.value,`date-${u(r).datePosition.value}`]),"data-orientation":u(r).orientation.value,"data-direction":u(r).direction.value,"data-date-position":u(r).datePosition.value,"data-state":a.value,"data-step":t.step,"aria-current":a.value===`current`?`step`:void 0,role:`listitem`},[s(e.$slots,`default`,{},void 0,!0)],10,V))}})})))()}var ke;function Ae(){return(Ae=e((()=>{U(),h(),ke=g(H,[[`__scopeId`,`data-v-eb9ce8fd`]]),H.__docgenInfo=Object.assign({displayName:H.name??H.__name},{exportName:`default`,displayName:`TimelineItem`,description:``,tags:{},props:[{name:`step`,required:!1,type:{name:`TimelineStep`}},{name:`state`,required:!1,type:{name:`TimelineItemState`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Timeline/TimelineItem.vue`]})})))()}var W;function je(){return(je=e((()=>{c(),y(),W=a({__name:`TimelineSeparator`,props:{dashed:{type:Boolean,default:!1}},setup(e){let t=e,r=i(_),a=i(v);if(!r||!a)throw Error(`TimelineSeparator must be used inside TimelineItem`);return(e,i)=>(m(),n(`span`,{class:l([`timeline-separator`,u(r).orientation.value,{dashed:t.dashed}]),"aria-hidden":`true`},null,2))}})})))()}var Me;function Ne(){return(Ne=e((()=>{je(),h(),Me=g(W,[[`__scopeId`,`data-v-ea56cc1a`]]),W.__docgenInfo=Object.assign({displayName:W.name??W.__name},{exportName:`default`,displayName:`TimelineSeparator`,description:``,tags:{},props:[{name:`dashed`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Timeline/TimelineSeparator.vue`]})})))()}var G;function Pe(){return(Pe=e((()=>{c(),G=a({__name:`TimelineTitle`,props:{Element:{default:`h3`}},setup(e){let n=e;return(e,i)=>(m(),f(r(n.Element),{class:`timeline-title`},{default:t(()=>[s(e.$slots,`default`,{},void 0,!0)]),_:3}))}})})))()}var K;function Fe(){return(Fe=e((()=>{Pe(),h(),K=g(G,[[`__scopeId`,`data-v-2657c8a7`]]),G.__docgenInfo=Object.assign({displayName:G.name??G.__name},{exportName:`default`,displayName:`TimelineTitle`,description:``,tags:{},props:[{name:`Element`,required:!1,type:{name:`union`,elements:[{name:`"h2"`},{name:`"h3"`},{name:`"h4"`},{name:`"div"`},{name:`"span"`}]},defaultValue:{func:!1,value:`"h3"`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/gui/gui/src/components/Timeline/TimelineTitle.vue`]})})))()}var q,Ie,J,Y,X,Z,Q,Le;function $(){return($=e((()=>{oe(),fe(),me(),ue(),ye(),Se(),be(),xe(),ge(),w(),O(),M(),F(),B(),Ae(),Ne(),Fe(),q={Timeline:C,TimelineContent:D,TimelineDate:j,TimelineHeader:Oe,TimelineIndicator:z,TimelineItem:ke,TimelineSeparator:Me,TimelineTitle:K},Ie={title:`Components/Timeline`,component:C,tags:[`autodocs`],args:{orientation:`vertical`,direction:`reverse`,datePosition:`top`,railSize:`40px`},argTypes:{orientation:{control:{type:`select`},options:[`vertical`,`horizontal`]},direction:{control:{type:`select`},options:[`forward`,`reverse`]},datePosition:{control:{type:`select`},options:[`top`,`side`]}}},J={render:e=>({components:q,setup:()=>({args:e,events:[{step:1,datetime:`2024-07-15`,date:`15 июля 2024`,title:`Запущен проект`,color:`red`},{step:2,datetime:`2024-08-01`,date:`1 августа 2024`,title:`Собраны требования`,color:`blue`},{step:3,datetime:`2025-10-15`,date:`15 октября 2025`,title:`Начат этап дизайна`,color:`fuchsia`},{step:4,datetime:`2025-11-01`,date:`1 ноября 2025`,title:`Проведено UX-тестирование`,color:`violet`},{step:5,datetime:`2025-12-15`,date:`15 декабря 2025`,title:`Завершена бета-программа`,color:`emerald`}]}),template:`
      <Timeline v-bind="args">
        <TimelineItem v-for="event in events" :key="event.step" :step="event.step">
          <TimelineSeparator />
          <TimelineIndicator :color="event.color" size="small" />
          <TimelineDate :datetime="event.datetime">{{ event.date }}</TimelineDate>
          <TimelineHeader>
            <TimelineTitle>{{ event.title }}</TimelineTitle>
          </TimelineHeader>
        </TimelineItem>
      </Timeline>
    `})},Y={render:()=>({components:q,template:`
      <Timeline orientation="horizontal" direction="forward" date-position="top" :active-step="2">
        <TimelineItem v-for="item in 3" :key="item" :step="item">
          <TimelineDate>{{ ['Неделя 1', 'Неделя 2', 'Неделя 4'][item - 1] }}</TimelineDate>
          <TimelineSeparator />
          <TimelineIndicator variant="outline" size="medium" />
          <TimelineHeader>
            <TimelineTitle>{{ ['Планирование', 'Дизайн', 'Разработка'][item - 1] }}</TimelineTitle>
          </TimelineHeader>
          <TimelineContent>
            {{ ['Объём и план ресурсов.', 'UI/UX и прототипирование.', 'Реализация ключевых функций.'][item - 1] }}
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    `})},X={render:()=>({components:{...q,IconGitCompareOutline:ee,IconGitForkOutline:le,IconGitMergeOutline:ie,IconGitPullRequestOutline:ne},template:`
      <Timeline direction="reverse" :active-step="3">
        <TimelineItem :step="1">
          <TimelineSeparator />
          <TimelineIndicator variant="soft"><IconGitForkOutline /></TimelineIndicator>
          <TimelineHeader><TimelineTitle>Создан форк репозитория</TimelineTitle></TimelineHeader>
          <TimelineContent>Создана ветка для разработки новой функции.</TimelineContent>
          <TimelineDate datetime="2026-07-27T12:00:00">15 минут назад</TimelineDate>
        </TimelineItem>
        <TimelineItem :step="2">
          <TimelineSeparator />
          <TimelineIndicator variant="soft"><IconGitPullRequestOutline /></TimelineIndicator>
          <TimelineHeader><TimelineTitle>Отправлен pull request</TimelineTitle></TimelineHeader>
          <TimelineContent>PR #342 ожидает code review.</TimelineContent>
          <TimelineDate datetime="2026-07-27T12:05:00">10 минут назад</TimelineDate>
        </TimelineItem>
        <TimelineItem :step="3">
          <TimelineSeparator />
          <TimelineIndicator variant="solid"><IconGitCompareOutline /></TimelineIndicator>
          <TimelineHeader><TimelineTitle>Сравнение веток</TimelineTitle></TimelineHeader>
          <TimelineContent>Получены замечания по обработке ошибок.</TimelineContent>
          <TimelineDate datetime="2026-07-27T12:10:00">5 минут назад</TimelineDate>
        </TimelineItem>
        <TimelineItem :step="4">
          <TimelineSeparator />
          <TimelineIndicator variant="outline"><IconGitMergeOutline /></TimelineIndicator>
          <TimelineHeader><TimelineTitle>Слияние ожидается</TimelineTitle></TimelineHeader>
          <TimelineContent>Ветка будет объединена после проверок.</TimelineContent>
          <TimelineDate datetime="2026-07-27T12:15:00">Сейчас</TimelineDate>
        </TimelineItem>
      </Timeline>
    `})},Z={render:()=>({components:{...q,Badge:he,IconCheckOutline:te,IconClockOutline:ae,IconXOutline:ce},template:`
      <Timeline direction="forward" date-position="side" rail-size="48px">
        <TimelineItem :step="1" state="completed">
          <TimelineSeparator dashed />
          <TimelineIndicator mode="negative" size="32px"><IconXOutline /></TimelineIndicator>
          <TimelineHeader>
            <TimelineTitle>Preview deploy</TimelineTitle>
            <Badge mode="negative">failed</Badge>
          </TimelineHeader>
          <TimelineContent>i7j8k9l · feat/auth · 1m 12s</TimelineContent>
          <TimelineDate datetime="2026-07-27T12:49:00">1 час назад</TimelineDate>
        </TimelineItem>
        <TimelineItem :step="2" state="completed">
          <TimelineSeparator />
          <TimelineIndicator mode="positive" size="large"><IconCheckOutline /></TimelineIndicator>
          <TimelineHeader>
            <TimelineTitle>Production deploy</TimelineTitle>
            <Badge mode="positive">success</Badge>
          </TimelineHeader>
          <TimelineContent>a1b2c3d · main · 42s</TimelineContent>
          <TimelineDate datetime="2026-07-27T13:47:00">2 минуты назад</TimelineDate>
        </TimelineItem>
        <TimelineItem :step="3" state="pending">
          <TimelineSeparator />
          <TimelineIndicator variant="outline" size="medium"><IconClockOutline /></TimelineIndicator>
          <TimelineHeader>
            <TimelineTitle>Повторный запуск</TimelineTitle>
            <Badge mode="secondary">pending</Badge>
          </TimelineHeader>
          <TimelineContent>Ожидает свободного runner.</TimelineContent>
          <TimelineDate datetime="2026-07-27T14:00:00">Запланировано на 14:00</TimelineDate>
        </TimelineItem>
      </Timeline>
    `})},Q={render:()=>({components:{...q,Avatar:pe,Badge:he,Card:de,IconBellCheckOutline:re,IconBellExclamationOutline:se,Item:we,ItemContent:ve,ItemDescription:Ce,ItemTitle:Te,Stack:_e},template:`
      <Timeline direction="reverse" rail-size="40px">
        <TimelineItem :step="1" state="completed">
          <TimelineSeparator />
          <TimelineIndicator variant="outline" mode="positive" size="medium">
            <IconBellCheckOutline />
          </TimelineIndicator>
          <TimelineHeader><TimelineTitle>Уборка завершена</TimelineTitle></TimelineHeader>
          <TimelineContent>Объект готов к следующему заселению.</TimelineContent>
          <TimelineDate datetime="2026-07-26T18:40:00">Вчера, 18:40</TimelineDate>
        </TimelineItem>
        <TimelineItem :step="2" state="completed">
          <TimelineSeparator />
          <TimelineIndicator variant="ghost" size="large">
            <Avatar name="Анна Смирнова" size="40px" color="violet" />
          </TimelineIndicator>
          <TimelineHeader>
            <TimelineTitle>Гость подтвердил заезд</TimelineTitle>
            <Badge mode="positive">Бронь</Badge>
          </TimelineHeader>
          <TimelineContent>
            <Card stretched :padding="8">
              <Item mode="plain" size="small" stretched :padding="0">
                <ItemContent>
                  <ItemTitle>Апартаменты №24 · Анна Смирнова</ItemTitle>
                  <ItemDescription>Заезд сегодня в 15:00, 2 гостя</ItemDescription>
                </ItemContent>
              </Item>
            </Card>
          </TimelineContent>
          <TimelineDate datetime="2026-07-27T13:44:00">5 минут назад</TimelineDate>
        </TimelineItem>
        <TimelineItem :step="3" state="current">
          <TimelineSeparator dashed />
          <TimelineIndicator variant="soft" mode="warning" size="large">
            <IconBellExclamationOutline />
          </TimelineIndicator>
          <TimelineHeader>
            <TimelineTitle>Нужна проверка оплаты</TimelineTitle>
            <Badge mode="warning">Важно</Badge>
          </TimelineHeader>
          <TimelineContent>
            <Card stretched :padding="8">
              <Stack direction="column" :gap="1">
                <ItemTitle>Бронь #1048</ItemTitle>
                <ItemDescription>Платёж не подтверждён в течение 20 минут.</ItemDescription>
              </Stack>
            </Card>
          </TimelineContent>
          <TimelineDate datetime="2026-07-27T13:49:00">Сейчас</TimelineDate>
        </TimelineItem>
      </Timeline>
    `})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: timelineComponents,
    setup: () => ({
      args,
      events: [{
        step: 1,
        datetime: "2024-07-15",
        date: "15 июля 2024",
        title: "Запущен проект",
        color: "red"
      }, {
        step: 2,
        datetime: "2024-08-01",
        date: "1 августа 2024",
        title: "Собраны требования",
        color: "blue"
      }, {
        step: 3,
        datetime: "2025-10-15",
        date: "15 октября 2025",
        title: "Начат этап дизайна",
        color: "fuchsia"
      }, {
        step: 4,
        datetime: "2025-11-01",
        date: "1 ноября 2025",
        title: "Проведено UX-тестирование",
        color: "violet"
      }, {
        step: 5,
        datetime: "2025-12-15",
        date: "15 декабря 2025",
        title: "Завершена бета-программа",
        color: "emerald"
      }]
    }),
    template: \`
      <Timeline v-bind="args">
        <TimelineItem v-for="event in events" :key="event.step" :step="event.step">
          <TimelineSeparator />
          <TimelineIndicator :color="event.color" size="small" />
          <TimelineDate :datetime="event.datetime">{{ event.date }}</TimelineDate>
          <TimelineHeader>
            <TimelineTitle>{{ event.title }}</TimelineTitle>
          </TimelineHeader>
        </TimelineItem>
      </Timeline>
    \`
  })
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: timelineComponents,
    template: \`
      <Timeline orientation="horizontal" direction="forward" date-position="top" :active-step="2">
        <TimelineItem v-for="item in 3" :key="item" :step="item">
          <TimelineDate>{{ ['Неделя 1', 'Неделя 2', 'Неделя 4'][item - 1] }}</TimelineDate>
          <TimelineSeparator />
          <TimelineIndicator variant="outline" size="medium" />
          <TimelineHeader>
            <TimelineTitle>{{ ['Планирование', 'Дизайн', 'Разработка'][item - 1] }}</TimelineTitle>
          </TimelineHeader>
          <TimelineContent>
            {{ ['Объём и план ресурсов.', 'UI/UX и прототипирование.', 'Реализация ключевых функций.'][item - 1] }}
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    \`
  })
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ...timelineComponents,
      IconGitCompareOutline,
      IconGitForkOutline,
      IconGitMergeOutline,
      IconGitPullRequestOutline
    },
    template: \`
      <Timeline direction="reverse" :active-step="3">
        <TimelineItem :step="1">
          <TimelineSeparator />
          <TimelineIndicator variant="soft"><IconGitForkOutline /></TimelineIndicator>
          <TimelineHeader><TimelineTitle>Создан форк репозитория</TimelineTitle></TimelineHeader>
          <TimelineContent>Создана ветка для разработки новой функции.</TimelineContent>
          <TimelineDate datetime="2026-07-27T12:00:00">15 минут назад</TimelineDate>
        </TimelineItem>
        <TimelineItem :step="2">
          <TimelineSeparator />
          <TimelineIndicator variant="soft"><IconGitPullRequestOutline /></TimelineIndicator>
          <TimelineHeader><TimelineTitle>Отправлен pull request</TimelineTitle></TimelineHeader>
          <TimelineContent>PR #342 ожидает code review.</TimelineContent>
          <TimelineDate datetime="2026-07-27T12:05:00">10 минут назад</TimelineDate>
        </TimelineItem>
        <TimelineItem :step="3">
          <TimelineSeparator />
          <TimelineIndicator variant="solid"><IconGitCompareOutline /></TimelineIndicator>
          <TimelineHeader><TimelineTitle>Сравнение веток</TimelineTitle></TimelineHeader>
          <TimelineContent>Получены замечания по обработке ошибок.</TimelineContent>
          <TimelineDate datetime="2026-07-27T12:10:00">5 минут назад</TimelineDate>
        </TimelineItem>
        <TimelineItem :step="4">
          <TimelineSeparator />
          <TimelineIndicator variant="outline"><IconGitMergeOutline /></TimelineIndicator>
          <TimelineHeader><TimelineTitle>Слияние ожидается</TimelineTitle></TimelineHeader>
          <TimelineContent>Ветка будет объединена после проверок.</TimelineContent>
          <TimelineDate datetime="2026-07-27T12:15:00">Сейчас</TimelineDate>
        </TimelineItem>
      </Timeline>
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ...timelineComponents,
      Badge,
      IconCheckOutline,
      IconClockOutline,
      IconXOutline
    },
    template: \`
      <Timeline direction="forward" date-position="side" rail-size="48px">
        <TimelineItem :step="1" state="completed">
          <TimelineSeparator dashed />
          <TimelineIndicator mode="negative" size="32px"><IconXOutline /></TimelineIndicator>
          <TimelineHeader>
            <TimelineTitle>Preview deploy</TimelineTitle>
            <Badge mode="negative">failed</Badge>
          </TimelineHeader>
          <TimelineContent>i7j8k9l · feat/auth · 1m 12s</TimelineContent>
          <TimelineDate datetime="2026-07-27T12:49:00">1 час назад</TimelineDate>
        </TimelineItem>
        <TimelineItem :step="2" state="completed">
          <TimelineSeparator />
          <TimelineIndicator mode="positive" size="large"><IconCheckOutline /></TimelineIndicator>
          <TimelineHeader>
            <TimelineTitle>Production deploy</TimelineTitle>
            <Badge mode="positive">success</Badge>
          </TimelineHeader>
          <TimelineContent>a1b2c3d · main · 42s</TimelineContent>
          <TimelineDate datetime="2026-07-27T13:47:00">2 минуты назад</TimelineDate>
        </TimelineItem>
        <TimelineItem :step="3" state="pending">
          <TimelineSeparator />
          <TimelineIndicator variant="outline" size="medium"><IconClockOutline /></TimelineIndicator>
          <TimelineHeader>
            <TimelineTitle>Повторный запуск</TimelineTitle>
            <Badge mode="secondary">pending</Badge>
          </TimelineHeader>
          <TimelineContent>Ожидает свободного runner.</TimelineContent>
          <TimelineDate datetime="2026-07-27T14:00:00">Запланировано на 14:00</TimelineDate>
        </TimelineItem>
      </Timeline>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ...timelineComponents,
      Avatar,
      Badge,
      Card,
      IconBellCheckOutline,
      IconBellExclamationOutline,
      Item,
      ItemContent,
      ItemDescription,
      ItemTitle,
      Stack
    },
    template: \`
      <Timeline direction="reverse" rail-size="40px">
        <TimelineItem :step="1" state="completed">
          <TimelineSeparator />
          <TimelineIndicator variant="outline" mode="positive" size="medium">
            <IconBellCheckOutline />
          </TimelineIndicator>
          <TimelineHeader><TimelineTitle>Уборка завершена</TimelineTitle></TimelineHeader>
          <TimelineContent>Объект готов к следующему заселению.</TimelineContent>
          <TimelineDate datetime="2026-07-26T18:40:00">Вчера, 18:40</TimelineDate>
        </TimelineItem>
        <TimelineItem :step="2" state="completed">
          <TimelineSeparator />
          <TimelineIndicator variant="ghost" size="large">
            <Avatar name="Анна Смирнова" size="40px" color="violet" />
          </TimelineIndicator>
          <TimelineHeader>
            <TimelineTitle>Гость подтвердил заезд</TimelineTitle>
            <Badge mode="positive">Бронь</Badge>
          </TimelineHeader>
          <TimelineContent>
            <Card stretched :padding="8">
              <Item mode="plain" size="small" stretched :padding="0">
                <ItemContent>
                  <ItemTitle>Апартаменты №24 · Анна Смирнова</ItemTitle>
                  <ItemDescription>Заезд сегодня в 15:00, 2 гостя</ItemDescription>
                </ItemContent>
              </Item>
            </Card>
          </TimelineContent>
          <TimelineDate datetime="2026-07-27T13:44:00">5 минут назад</TimelineDate>
        </TimelineItem>
        <TimelineItem :step="3" state="current">
          <TimelineSeparator dashed />
          <TimelineIndicator variant="soft" mode="warning" size="large">
            <IconBellExclamationOutline />
          </TimelineIndicator>
          <TimelineHeader>
            <TimelineTitle>Нужна проверка оплаты</TimelineTitle>
            <Badge mode="warning">Важно</Badge>
          </TimelineHeader>
          <TimelineContent>
            <Card stretched :padding="8">
              <Stack direction="column" :gap="1">
                <ItemTitle>Бронь #1048</ItemTitle>
                <ItemDescription>Платёж не подтверждён в течение 20 минут.</ItemDescription>
              </Stack>
            </Card>
          </TimelineContent>
          <TimelineDate datetime="2026-07-27T13:49:00">Сейчас</TimelineDate>
        </TimelineItem>
      </Timeline>
    \`
  })
}`,...Q.parameters?.docs?.source}}},Le=[`Default`,`Horizontal`,`GitActivity`,`StatusesAndSizes`,`PmsNotifications`]})))()}$();export{J as Default,X as GitActivity,Y as Horizontal,Q as PmsNotifications,Z as StatusesAndSizes,Le as __namedExportsOrder,Ie as default};