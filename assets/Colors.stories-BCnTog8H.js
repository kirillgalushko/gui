import{r as n,b as p}from"./vue.esm-bundler-i9X9Ld2b.js";const m={title:"1. @gui/3. Цвета",parameters:{layout:"fullscreen"}},o={name:"Цвета",render:()=>({setup(){const l=n([]);return p(()=>{const r=getComputedStyle(document.documentElement),s=[];for(let e=0;e<r.length;e++){const t=r[e];t.startsWith("--color-")&&s.push({name:t,value:r.getPropertyValue(t).trim()})}s.sort((e,t)=>e.name.localeCompare(t.name)),l.value=s}),{colors:l}},template:`
      <div style="padding: 24px;">
        <h2 style="margin-bottom: 16px;">Color tokens</h2>

        <div style="display: grid; grid-template-columns: 1fr; gap: 8px;">
          <div
            v-for="c in colors"
            :key="c.name"
            style="
              display: grid;
              grid-template-columns: 240px 1fr 120px;
              align-items: center;
              gap: 12px;
              padding: 8px;
              border-bottom: 1px solid hsl(var(--border));
            "
          >
            <code style="font-size: 12px;">{{ c.name }}</code>

            <code style="font-size: 12px; opacity: 0.7;">
              {{ c.value }}
            </code>

            <div
              :style="{
                width: '100%',
                height: '24px',
                borderRadius: '6px',
                background: 'lab(' + c.value.replace('lab(', '').replace(')', '') + ')'
              }"
            />
          </div>
        </div>
      </div>
    `})};var a,i,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Цвета',
  render: () => ({
    setup() {
      const colors = ref<{
        name: string;
        value: string;
      }[]>([]);
      onMounted(() => {
        const styles = getComputedStyle(document.documentElement);
        const result: {
          name: string;
          value: string;
        }[] = [];
        for (let i = 0; i < styles.length; i++) {
          const key = styles[i];
          if (key.startsWith('--color-')) {
            result.push({
              name: key,
              value: styles.getPropertyValue(key).trim()
            });
          }
        }
        result.sort((a, b) => a.name.localeCompare(b.name));
        colors.value = result;
      });
      return {
        colors
      };
    },
    template: \`
      <div style="padding: 24px;">
        <h2 style="margin-bottom: 16px;">Color tokens</h2>

        <div style="display: grid; grid-template-columns: 1fr; gap: 8px;">
          <div
            v-for="c in colors"
            :key="c.name"
            style="
              display: grid;
              grid-template-columns: 240px 1fr 120px;
              align-items: center;
              gap: 12px;
              padding: 8px;
              border-bottom: 1px solid hsl(var(--border));
            "
          >
            <code style="font-size: 12px;">{{ c.name }}</code>

            <code style="font-size: 12px; opacity: 0.7;">
              {{ c.value }}
            </code>

            <div
              :style="{
                width: '100%',
                height: '24px',
                borderRadius: '6px',
                background: 'lab(' + c.value.replace('lab(', '').replace(')', '') + ')'
              }"
            />
          </div>
        </div>
      </div>
    \`
  })
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const u=["Colors"];export{o as Colors,u as __namedExportsOrder,m as default};
