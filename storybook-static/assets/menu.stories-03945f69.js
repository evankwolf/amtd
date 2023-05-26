import{j as a,a as S}from"./jsx-runtime-670450c2.js";import{r as c,R as _}from"./index-f1f749bf.js";import{c as g}from"./index-2e4736b8.js";import{I as B}from"./icon-29039a88.js";import{T as F}from"./transition-3cdaf158.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-5ae439ea.js";import"./index-4d501b15.js";import"./inheritsLoose-9eefaa95.js";import"./index-96c5f47c.js";const M=e=>{const{children:u,index:l,disabled:r,className:s,style:i}=e,t=c.useContext(C),o=g("menu-item",s,{"is-disabled":r,"is-active":l===t.index});return a("li",{className:o,style:i,onClick:()=>{t.onSelect&&!r&&t.onSelect(l)},role:"presentation",children:u})};try{menuItem.displayName="menuItem",menuItem.__docgenInfo={description:"",displayName:"menuItem",props:{index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const $=e=>{const u=c.useContext(C),{defaultOpenSubMenu:l,mode:r}=u,s=r==="vertical",i=l===void 0?!1:l,[t,o]=c.useState(s?i:!1),m=g("menu-item submenu-item",e.className,{"is-active":u.index===e.index,"is-opened":t,"is-vertical":s}),N=n=>{n.preventDefault(),o(!t)};let y;const I=(n,p)=>{clearTimeout(y),n.preventDefault(),y=setTimeout(()=>{o(p)},300)},d={...s?{onClick:N}:{},...s?{}:{onMouseEnter:n=>{I(n,!0)},onMouseLeave:n=>{I(n,!1)}}},V=()=>{const n=g("submenu",{"menu-opened":t}),p=_.Children.map(e.children,(b,L)=>{const O=b;if(O.type.name!=="MenuItem")throw new Error("Error: SubMenu has at least one child which is not a MenuItem component");return _.cloneElement(O,{index:`${e.index}-${L}`})});return a(F,{in:t,timeout:300,animation:"zoom-in-top",children:a("ul",{className:n,children:p})})};return S("li",{className:m,...d,children:[S("div",{className:"submenu-title",children:[e.title,a(B,{icon:"arrow-down",theme:"dark",className:"arrow-icon",size:"xs"})]}),V()]},e.index)};try{subMenu.displayName="subMenu",subMenu.__docgenInfo={description:"",displayName:"subMenu",props:{index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const C=c.createContext({index:"0"}),h=e=>{const{className:u,defaultIndex:l,mode:r,style:s,onSelect:i,children:t,defaultOpenSubMenu:o}=e,[m,N]=c.useState(l),y=g("menu",u,{"menu-vertical":r==="vertical","menu-horizontal":r!=="vertical"}),I=d=>{N(d),i&&i(d)},E=c.useMemo(()=>({index:m||"0",onSelect:I,mode:r,defaultOpenSubMenu:o}),[m]),z=()=>_.Children.map(t,(d,V)=>{const n=d,{props:p,type:b}=n;if(b===M||b===$)return _.cloneElement(n,{index:p.index||String(V)});throw new Error("Error: Menu has at least one child which is not a MenuItem")});return a("ul",{className:y,style:s,"data-testid":"test-menu",children:a(C.Provider,{value:E,children:z()})})};h.defaultProps={defaultIndex:"0",mode:"horizontal"};try{h.displayName="Menu",h.__docgenInfo={description:"",displayName:"Menu",props:{defaultIndex:{defaultValue:{value:"0"},description:"",name:"defaultIndex",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"horizontal"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},defaultOpenSubMenu:{defaultValue:null,description:"",name:"defaultOpenSubMenu",required:!1,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((selectedIndex: string) => void)"}}}}}catch{}try{menu.displayName="menu",menu.__docgenInfo={description:"",displayName:"menu",props:{defaultIndex:{defaultValue:{value:"0"},description:"",name:"defaultIndex",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"horizontal"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},defaultOpenSubMenu:{defaultValue:null,description:"",name:"defaultOpenSubMenu",required:!1,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((selectedIndex: string) => void)"}}}}}catch{}const ne={title:"Menu",component:h,tags:["autodocs"]},q=e=>S(h,{...e,children:[a(M,{children:"item1"}),a(M,{children:"item2"}),S($,{title:"submenu",children:[a(M,{children:"subitem1"}),a(M,{children:"subitem2"})]})]}),v=q.bind({}),f=q.bind({});f.args={mode:"vertical"};const x=q.bind({});var k,w,P;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`args => <Menu {...args}>\r
    <MenuItem>\r
      item1\r
    </MenuItem>\r
    <MenuItem>\r
      item2\r
    </MenuItem>\r
    <SubMenu title="submenu">\r
      <MenuItem>subitem1</MenuItem>\r
      <MenuItem>subitem2</MenuItem>\r
    </SubMenu>\r
  </Menu>`,...(P=(w=v.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var T,j,A;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`args => <Menu {...args}>\r
    <MenuItem>\r
      item1\r
    </MenuItem>\r
    <MenuItem>\r
      item2\r
    </MenuItem>\r
    <SubMenu title="submenu">\r
      <MenuItem>subitem1</MenuItem>\r
      <MenuItem>subitem2</MenuItem>\r
    </SubMenu>\r
  </Menu>`,...(A=(j=f.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var D,H,R;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`args => <Menu {...args}>\r
    <MenuItem>\r
      item1\r
    </MenuItem>\r
    <MenuItem>\r
      item2\r
    </MenuItem>\r
    <SubMenu title="submenu">\r
      <MenuItem>subitem1</MenuItem>\r
      <MenuItem>subitem2</MenuItem>\r
    </SubMenu>\r
  </Menu>`,...(R=(H=x.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};const te=["HorizontalMenu","VerticalMenu","Playground"];export{v as HorizontalMenu,x as Playground,f as VerticalMenu,te as __namedExportsOrder,ne as default};
//# sourceMappingURL=menu.stories-03945f69.js.map
