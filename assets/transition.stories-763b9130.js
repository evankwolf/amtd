import{a as c,F as p,j as o}from"./jsx-runtime-670450c2.js";import{r as h}from"./index-f1f749bf.js";import{T as a}from"./transition-3cdaf158.js";import{A as l}from"./alert-1b783e19.js";import{B as u}from"./button-dd56e804.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-9eefaa95.js";import"./index-96c5f47c.js";import"./index-2e4736b8.js";import"./icon-444d8450.js";import"./index-5ae439ea.js";import"./index-4d501b15.js";const b={title:"General/Transition",component:a,parameters:{docs:{description:{component:"This component is based on the `CSSTransition` component from\r\n[React Transition Group](https://reactcommunity.org/react-transition-group/). So you can\r\npass almost the same API to this component as to `CSSTransition`"}}}},r=t=>{const[e,m]=h.useState(!0);return c(p,{children:[o(u,{onClick:()=>m(!e),children:"Click to toggle the Alert below"}),o("hr",{}),o(a,{...t,in:t.show||e,timeout:t.timeout||300,animation:t.animation||"zoom-in-top",children:o(l,{header:"Header",children:"This Alert is used for Transition."})})]})};var n,i,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  const [show, setShow] = useState(true);
  return <>\r
      <Button onClick={() => setShow(!show)}>\r
        Click to toggle the Alert below\r
      </Button>\r
      <hr />\r
      <Transition {...args} in={args.show || show} timeout={args.timeout || 300} animation={args.animation || 'zoom-in-top'}>\r
        <Alert header="Header">\r
          This Alert is used for Transition.\r
        </Alert>\r
      </Transition>\r
    </>;
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const j=["Playground"];export{r as Playground,j as __namedExportsOrder,b as default};
//# sourceMappingURL=transition.stories-763b9130.js.map
