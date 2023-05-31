import{j as e,a as r,F as a}from"./jsx-runtime-670450c2.js";import{M as s}from"./index-0b41f0d9.js";import{u as o}from"./index-4fb8b842.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-fe81b529.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-96c5f47c.js";import"./index-d37d4223.js";import"./inheritsLoose-9eefaa95.js";import"./index-7508b8ba.js";import"./index-356e4a49.js";const l=""+new URL("react-40246a66.svg",import.meta.url).href,p=""+new URL("font-awesome-9fdfeb36.svg",import.meta.url).href,c=""+new URL("github-44448296.svg",import.meta.url).href,m=""+new URL("storybook-a9437bbe.svg",import.meta.url).href,d=""+new URL("vite-194ce6ae.svg",import.meta.url).href,h=""+new URL("vitest-39933647.svg",import.meta.url).href;function i(n){const t=Object.assign({h1:"h1",p:"p",a:"a"},o(),n.components);return r(a,{children:[e(s,{title:"Introduction"}),`
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
`,e(t.p,{children:"I use the tools below to build this library."}),`
`,r(t.p,{children:[e(t.a,{href:"https://react.dev/",target:"_blank",rel:"nofollow noopener noreferrer",children:"React"}),` to build UI.
`,e(t.a,{href:"https://vitejs.dev/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Vite"}),` to build the project.
`,e(t.a,{href:"https://vitest.dev/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Vitest"}),` to write test cases for components.
`,e(t.a,{href:"https://storybook.js.org/docs",target:"_blank",rel:"nofollow noopener noreferrer",children:"Storybook"})," to automatically generate this doc."]}),`
`,e(t.p,{children:"Many thanks to these open source resources which really make everything a lot easier for a rookie. 😋"}),`
`,e("div",{className:"subheading",children:"Many Thanks"}),`
`,r("div",{className:"link-list",children:[r("a",{className:"link-item",href:"https://react.dev/",target:"_blank",children:[e("img",{src:l,alt:"React"}),e("span",{children:r(t.p,{children:[e("strong",{children:"React"}),`
The library for web and native user interfaces.`]})})]}),r("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank",children:[e("img",{src:m,alt:"Storybook"}),e("span",{children:r(t.p,{children:[e("strong",{children:"Storybook"}),`
A frontend workshop for building UI components and pages in isolation.`]})})]}),r("a",{className:"link-item",href:"https://vitejs.dev/",target:"_blank",children:[e("img",{src:d,alt:"Vite"}),e("span",{children:r(t.p,{children:[e("strong",{children:"Vite"}),`
Next generation frontend tooling.`]})})]}),r("a",{className:"link-item",href:"https://vitest.dev/",target:"_blank",children:[e("img",{src:h,alt:"Vitest"}),e("span",{children:r(t.p,{children:[e("strong",{children:"Vitest"}),`
Blazing fast unit test framework.`]})})]}),r("a",{className:"link-item",href:"https://fontawesome.com/",target:"_blank",children:[e("img",{src:p,alt:"FontAwesome"}),e("span",{children:r(t.p,{children:[e("strong",{children:"FontAwesome"}),`
An Internet's icon library and toolkit.`]})})]}),r("a",{className:"link-item",href:"https://github.com/",target:"_blank",children:[e("img",{src:c,alt:"Github"}),e("span",{children:r(t.p,{children:[e("strong",{children:"Github"}),`
An Internet hosting service for software development and version control using Git.`]})})]})]})]})}function A(n={}){const{wrapper:t}=Object.assign({},o(),n.components);return t?e(t,Object.assign({},n,{children:e(i,n)})):i(n)}export{A as default};
//# sourceMappingURL=Introduction-a91f5fb1.js.map
