import{j as e,a as n,F as a}from"./jsx-runtime-670450c2.js";import{M as l}from"./index-143aafd1.js";import{u as o}from"./index-4fb8b842.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-15a2171b.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-96c5f47c.js";import"./index-d37d4223.js";import"./inheritsLoose-9eefaa95.js";import"./index-7508b8ba.js";import"./index-356e4a49.js";const s=""+new URL("react-40246a66.svg",import.meta.url).href,c=""+new URL("font-awesome-9fdfeb36.svg",import.meta.url).href,d=""+new URL("github-44448296.svg",import.meta.url).href,p=""+new URL("storybook-a9437bbe.svg",import.meta.url).href,h=""+new URL("vite-194ce6ae.svg",import.meta.url).href,m=""+new URL("vitest-39933647.svg",import.meta.url).href;function i(r){const t=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},o(),r.components);return n(a,{children:[e(l,{title:"Introduction"}),`
`,e("style",{children:`
    .subheading {
      --mediumdark: '#999999';
      font-weight: 700;
      font-size: 13px;
      color: #999;
      letter-spacing: 6px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 12px;
      margin-top: 40px;
    }

    .link-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
    }

    @media (min-width: 620px) {
      .link-list {
        row-gap: 20px;
        column-gap: 20px;
        grid-template-columns: 1fr 1fr;
      }
    }

    @media all and (-ms-high-contrast:none) {
    .link-list {
        display: -ms-grid;
        -ms-grid-columns: 1fr 1fr;
        -ms-grid-rows: 1fr 1fr;
      }
    }

    .link-item {
      display: block;
      padding: 20px;
      border: 1px solid #00000010;
      border-radius: 5px;
      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
      color: #333333;
      display: flex;
      align-items: flex-start;
    }

    .link-item:hover {
      border-color: #1EA7FD50;
      transform: translate3d(0, -3px, 0);
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
    }

    .link-item:active {
      border-color: #1EA7FD;
      transform: translate3d(0, 0, 0);
    }

    .link-item strong {
      font-weight: 700;
      display: block;
      margin-bottom: 2px;
    }

    .link-item img {
      height: 40px;
      width: 40px;
      margin-right: 15px;
      flex: none;
    }

    .link-item span,
    .link-item p {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
    }

    .tip {
      display: inline-block;
      border-radius: 1em;
      font-size: 11px;
      line-height: 12px;
      font-weight: 700;
      background: #E7FDD8;
      color: #66BF3C;
      padding: 4px 12px;
      margin-right: 10px;
      vertical-align: top;
    }

    .tip-wrapper {
      font-size: 13px;
      line-height: 20px;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .tip-wrapper code {
      font-size: 12px;
      display: inline-block;
    }
  `}),`
`,e(t.h1,{id:"welcome-to-amt-designlol",children:"Welcome to Amt-design(lol)"}),`
`,e(t.p,{children:"This is a react component library."}),`
`,e(t.p,{children:`This library is only built for personal practice. The source codes are pretty simple, and it's not
very hard to learn.`}),`
`,e(t.h2,{id:"install",children:"Install"}),`
`,e(t.pre,{children:e(t.code,{className:"language-bash",children:`pnpm install @kwolfsanta/amtd
`})}),`
`,e(t.h2,{id:"usage",children:"Usage"}),`
`,e(t.pre,{children:e(t.code,{className:"language-tsx",children:`// Something.tsx
import React, { useState } from 'react'

import { Button } from '@kwolfsanta/amtd'
import '@kwolfsanta/amtd/dist/es/style.css'

const HelloWorld = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <Button btnType="primary" onClick={handleClick}>Current count: {count}</Button>
    </div>
  )
}

`})}),`
`,e(t.p,{children:"I use the tools below to build this library:"}),`
`,n(t.ul,{children:[`
`,n(t.li,{children:[e(t.a,{href:"https://react.dev/",target:"_blank",rel:"nofollow noopener noreferrer",children:"React"})," to build UI."]}),`
`,n(t.li,{children:[e(t.a,{href:"https://vitejs.dev/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Vite"})," to build the project."]}),`
`,n(t.li,{children:[e(t.a,{href:"https://vitest.dev/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Vitest"})," to write test cases for components."]}),`
`,n(t.li,{children:[e(t.a,{href:"https://storybook.js.org/docs",target:"_blank",rel:"nofollow noopener noreferrer",children:"Storybook"})," to automatically generate this doc."]}),`
`]}),`
`,e(t.p,{children:"Many thanks to these open source resources which really make everything a lot easier for a rookie. 😋"}),`
`,e("div",{className:"subheading",children:"Many Thanks"}),`
`,n("div",{className:"link-list",children:[n("a",{className:"link-item",href:"https://react.dev/",target:"_blank",children:[e("img",{src:s,alt:"React"}),e("span",{children:n(t.p,{children:[e("strong",{children:"React"}),`
The library for web and native user interfaces.`]})})]}),n("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank",children:[e("img",{src:p,alt:"Storybook"}),e("span",{children:n(t.p,{children:[e("strong",{children:"Storybook"}),`
A frontend workshop for building UI components and pages in isolation.`]})})]}),n("a",{className:"link-item",href:"https://vitejs.dev/",target:"_blank",children:[e("img",{src:h,alt:"Vite"}),e("span",{children:n(t.p,{children:[e("strong",{children:"Vite"}),`
Next generation frontend tooling.`]})})]}),n("a",{className:"link-item",href:"https://vitest.dev/",target:"_blank",children:[e("img",{src:m,alt:"Vitest"}),e("span",{children:n(t.p,{children:[e("strong",{children:"Vitest"}),`
Blazing fast unit test framework.`]})})]}),n("a",{className:"link-item",href:"https://fontawesome.com/",target:"_blank",children:[e("img",{src:c,alt:"FontAwesome"}),e("span",{children:n(t.p,{children:[e("strong",{children:"FontAwesome"}),`
An Internet's icon library and toolkit.`]})})]}),n("a",{className:"link-item",href:"https://github.com/",target:"_blank",children:[e("img",{src:d,alt:"Github"}),e("span",{children:n(t.p,{children:[e("strong",{children:"Github"}),`
An Internet hosting service for software development and version control using Git.`]})})]})]})]})}function R(r={}){const{wrapper:t}=Object.assign({},o(),r.components);return t?e(t,Object.assign({},r,{children:e(i,r)})):i(r)}export{R as default};
//# sourceMappingURL=Introduction-b6b801ce.js.map
