import{a as l,F as c,j as t}from"./jsx-runtime-670450c2.js";import{r as p}from"./index-f1f749bf.js";import{T as n}from"./transition-3cdaf158.js";import{A as u}from"./alert-382e9e16.js";import{B as h}from"./button-ea547205.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-9eefaa95.js";import"./index-96c5f47c.js";import"./index-2e4736b8.js";import"./icon-0c6fe2d8.js";import"./index-5ae439ea.js";import"./index-4d501b15.js";const b={title:"Transition",component:n,tags:["autodocs"]},o=r=>{const[e,m]=p.useState(!0);return l(c,{children:[t(h,{onClick:()=>m(!e),children:"Click to toggle the Alert below"}),t("hr",{}),t(n,{...r,in:r.show||e,timeout:r.timeout||300,animation:r.animation||"zoom-in-top",children:t(u,{header:"Header",children:"This Alert is used for Transition."})})]})};var i,s,a;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [show, setShow] = useState(true);
  return <>\r
      <Button onClick={() => setShow(!show)}>\r
        Click to toggle the Alert below\r
      </Button>\r
      <hr />\r
      <Transition {...args} in={args.show || show} timeout={args.timeout || 300} animation={args.animation || 'zoom-in-top'}>\r
        <Alert header="Header">\r
          This Alert is used for Transition.\r
\r
        </Alert>\r
      </Transition>\r
    </>;
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const y=["Playground"];export{o as Playground,y as __namedExportsOrder,b as default};
//# sourceMappingURL=transition.stories-49c85a86.js.map
