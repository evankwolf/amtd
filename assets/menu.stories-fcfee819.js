import{j as n,a as r,F as B}from"./jsx-runtime-670450c2.js";import{r as p,R as g}from"./index-f1f749bf.js";import{c as _}from"./index-2e4736b8.js";import{I as G}from"./icon-444d8450.js";import{T as H}from"./transition-3cdaf158.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-5ae439ea.js";import"./index-4d501b15.js";import"./inheritsLoose-9eefaa95.js";import"./index-96c5f47c.js";const E=t=>{const{children:m,index:l,disabled:s,className:i,style:o}=t,a=p.useContext(w),c=_("menu-item",i,{"is-disabled":s,"is-active":l===a.index});return n("li",{className:c,style:o,onClick:()=>{a.onSelect&&!s&&a.onSelect(l)},role:"presentation",children:m})};try{menuItem.displayName="menuItem",menuItem.__docgenInfo={description:"",displayName:"menuItem",props:{index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const Y=t=>{const m=p.useContext(w),{defaultOpenSubMenu:l,mode:s}=m,i=s==="vertical",o=l===void 0?!1:l,[a,c]=p.useState(i?o:!1),I=_("menu-item submenu-item",t.className,{"is-active":m.index===t.index,"is-opened":a,"is-vertical":i}),N=u=>{u.preventDefault(),c(!a)};let h;const b=(u,M)=>{clearTimeout(h),u.preventDefault(),h=setTimeout(()=>{c(M)},300)},C=i?{onClick:N}:{},V=i?{}:{onMouseEnter:u=>{b(u,!0)},onMouseLeave:u=>{b(u,!1)}},d=()=>{const u=_("submenu",{"menu-opened":a}),M=g.Children.map(t.children,(q,f)=>{const O=q;if(O.type!==E)throw new Error("Error: SubMenu has at least one child which is not a MenuItem component");return g.cloneElement(O,{index:`${t.index}-${f}`})});return n(H,{in:a,timeout:300,animation:"zoom-in-top",children:n("ul",{className:u,children:M})})};return r("li",{className:I,...V,children:[r("div",{className:"submenu-title",...C,role:"presentation",children:[t.title,n(G,{icon:"arrow-down",theme:"dark",className:"arrow-icon",size:"xs"})]}),d()]},t.index)};try{subMenu.displayName="subMenu",subMenu.__docgenInfo={description:"",displayName:"subMenu",props:{index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const w=p.createContext({index:"0"}),e=t=>{const{className:m,defaultIndex:l,mode:s,style:i,onSelect:o,children:a,defaultOpenSubMenu:c}=t,[I,N]=p.useState(l),h=_("menu",m,{"menu-vertical":s==="vertical","menu-horizontal":s!=="vertical"}),b=d=>{N(d),o&&o(d)},C=p.useMemo(()=>({index:I||"0",onSelect:b,mode:s,defaultOpenSubMenu:c}),[I]),V=()=>g.Children.map(a,(d,u)=>{const M=d,{props:q,type:f}=M;if(f===E||f===Y)return g.cloneElement(M,{index:q.index||String(u)});throw new Error("Error: Menu has at least one child which is not a MenuItem or SubMenu")});return n("ul",{className:h,style:i,"data-testid":"test-menu",children:n(w.Provider,{value:C,children:V()})})};e.defaultProps={defaultIndex:"0",mode:"horizontal"};e.Item=E;e.SubMenu=Y;try{e.displayName="Menu",e.__docgenInfo={description:"",displayName:"Menu",props:{defaultIndex:{defaultValue:{value:"0"},description:"",name:"defaultIndex",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"horizontal"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},defaultOpenSubMenu:{defaultValue:null,description:"",name:"defaultOpenSubMenu",required:!1,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((selectedIndex: string) => void)"}}}}}catch{}const ae={title:"Navigation/Menu",component:e,parameters:{docs:{description:{component:"A basic menu component. It has both `vertical` and `horizontal` version.\r\n\nYou can also set `defaultIndex` to highlight the menu item when user first loads the page.\r\n\nIt includes `MenuItem` and `SubMenu` component."}}}},J=t=>r(e,{...t,children:[n(e.Item,{children:"item1"}),n(e.Item,{children:"item2"}),r(e.SubMenu,{title:"submenu",children:[n(e.Item,{children:"subitem1"}),n(e.Item,{children:"subitem2"})]})]}),S=t=>r(e,{...t,children:[n(e.Item,{children:"Item1"}),n(e.Item,{children:"Item2"}),n(e.Item,{children:"Item3"})]}),x=J.bind({}),v=t=>r(e,{mode:"vertical",...t,children:[n(e.Item,{children:"Item1"}),n(e.Item,{children:"Item2"}),r(e.SubMenu,{title:"submenu",children:[n(e.Item,{children:"subitem1"}),n(e.Item,{children:"subitem2"})]})]}),y=()=>r(B,{children:[r(e,{defaultIndex:"1",children:[n(e.Item,{children:"Item1"}),n(e.Item,{children:"Item2"}),r(e.SubMenu,{title:"submenu",children:[n(e.Item,{children:"subitem1"}),n(e.Item,{children:"subitem2"})]})]}),n("hr",{}),r(e,{defaultIndex:"2-1",defaultOpenSubMenu:!0,mode:"vertical",children:[n(e.Item,{children:"Item1"}),n(e.Item,{children:"Item2"}),r(e.SubMenu,{title:"submenu",children:[n(e.Item,{children:"subitem1"}),n(e.Item,{children:"subitem2"})]})]})]});var k,z,D;S.parameters={...S.parameters,docs:{...(k=S.parameters)==null?void 0:k.docs,source:{originalSource:`args => <Menu {...args}>\r
    <Menu.Item>\r
      Item1\r
    </Menu.Item>\r
    <Menu.Item>\r
      Item2\r
    </Menu.Item>\r
    <Menu.Item>\r
      Item3\r
    </Menu.Item>\r
  </Menu>`,...(D=(z=S.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var P,T,j;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`args => <Menu {...args}>\r
    <Menu.Item>\r
      item1\r
    </Menu.Item>\r
    <Menu.Item>\r
      item2\r
    </Menu.Item>\r
    <Menu.SubMenu title="submenu">\r
      <Menu.Item>subitem1</Menu.Item>\r
      <Menu.Item>subitem2</Menu.Item>\r
    </Menu.SubMenu>\r
  </Menu>`,...(j=(T=x.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var A,F,R;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`args => <Menu mode="vertical" {...args}>\r
    <Menu.Item>\r
      Item1\r
    </Menu.Item>\r
    <Menu.Item>\r
      Item2\r
    </Menu.Item>\r
    <Menu.SubMenu title="submenu">\r
      <Menu.Item>subitem1</Menu.Item>\r
      <Menu.Item>subitem2</Menu.Item>\r
    </Menu.SubMenu>\r
  </Menu>`,...(R=(F=v.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var W,$,L;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`() => <>\r
    <Menu defaultIndex="1">\r
      <Menu.Item>\r
        Item1\r
      </Menu.Item>\r
      <Menu.Item>\r
        Item2\r
      </Menu.Item>\r
      <Menu.SubMenu title="submenu">\r
        <Menu.Item>subitem1</Menu.Item>\r
        <Menu.Item>subitem2</Menu.Item>\r
      </Menu.SubMenu>\r
    </Menu>\r
    <hr />\r
    <Menu defaultIndex="2-1" defaultOpenSubMenu mode="vertical">\r
      <Menu.Item>\r
        Item1\r
      </Menu.Item>\r
      <Menu.Item>\r
        Item2\r
      </Menu.Item>\r
      <Menu.SubMenu title="submenu">\r
        <Menu.Item>subitem1</Menu.Item>\r
        <Menu.Item>subitem2</Menu.Item>\r
      </Menu.SubMenu>\r
    </Menu>\r
  </>`,...(L=($=y.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};const se=["Default","WithSubmenu","VerticalMenu","DefaultIndex"];export{S as Default,y as DefaultIndex,v as VerticalMenu,x as WithSubmenu,se as __namedExportsOrder,ae as default};
//# sourceMappingURL=menu.stories-fcfee819.js.map
