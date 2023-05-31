import{a as x,j as o}from"./jsx-runtime-670450c2.js";import{a as U}from"./chunk-OPEUWD42-e1ecf583.js";import{r as u}from"./index-f1f749bf.js";import{c as I}from"./index-2e4736b8.js";import{I as H}from"./icon-fa19333f.js";import{I as K}from"./input-9b1e4264.js";import{T as Y}from"./transition-3cdaf158.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-5ae439ea.js";import"./index-4d501b15.js";import"./inheritsLoose-9eefaa95.js";import"./index-96c5f47c.js";const J=(e,a)=>{u.useEffect(()=>{const t=r=>{!e.current||e.current.contains(r.target)||a(r)};return document.addEventListener("click",t),()=>{document.removeEventListener("click",t)}},[e,a])},B=(e,a=300)=>{const[t,r]=u.useState(e);return u.useEffect(()=>{const p=setTimeout(()=>r(e),a);return()=>{clearTimeout(p)}},[e,a]),t},i=e=>{const{fetchSuggestions:a,onSelect:t,className:r,renderOption:p,...z}=e,v=u.useRef(!1),k=u.useRef(null),[m,C]=u.useState(""),E=B(m),[s,c]=u.useState(),[L,V]=u.useState(!1),[h,d]=u.useState(-1);J(k,()=>c([]));const P=I("amt-auto-complete",r);u.useEffect(()=>{if(m&&v.current){const n=a(m);n instanceof Promise?(V(!0),n.then(c).finally(()=>V(!1))):c(n)}else c([])},[E]);const M=n=>{const l=n.target.value.trim();v.current=!0,C(l)},g=(n,l)=>{if(!s||s.length===0||l){d(-1);return}n>=s.length?d(0):n<0?d(s.length-1):d(n)},$=n=>{switch(n.key){case"Enter":s&&s.length>0&&(v.current=!1,b(s[h]));break;case"ArrowUp":g(h-1);break;case"ArrowDown":g(h+1);break;case"Escape":c([]),d(-1);break}},b=n=>{C(n.value),t(n)},F=()=>{const n=l=>I("suggestion-item",{"item-highlighted":l===h});return o(Y,{in:s&&s.length>0,timeout:300,animation:"zoom-in-top",children:o("ul",{onMouseLeave:()=>g(-1,!0),className:"amt-suggestion-list",children:L?o(H,{className:"suggestions-loading-icon",icon:"spinner",theme:"dark",spin:!0}):s&&s.length>0&&s.map((l,q)=>o("li",{role:"presentation",className:n(q),onMouseEnter:()=>g(q),onSelect:()=>b(l),onClick:()=>b(l),children:p?p(l):l.value},q))})})};return x("div",{className:P,ref:k,children:[o(K,{value:m,onChange:M,onKeyDown:$,...z}),F()]})};try{i.displayName="AutoComplete",i.__docgenInfo={description:"",displayName:"AutoComplete",props:{fetchSuggestions:{defaultValue:null,description:`Input callback. expect to return data as

1. \`{ value: something }\`

2. Promise. Let's take fetching github user as an example

\`\`\`tsx

const fetchGithubUsers = (query: string) => fetch(\`https://api.github.com/search/users?q=\${query}\`)
.then((res) => res.json())
.then(({ items }) => items.slice(0, 10).map((user: any) => ({ value: user.login, ...user })))

return (
<AutoComplete
  fetchSuggestions={fetchGithubUsers}
/>
)

\`\`\``,name:"fetchSuggestions",required:!0,type:{name:"(keyword: string) => DataSourceObject[] | Promise<DataSourceObject[]>"}},onSelect:{defaultValue:null,description:"Select callback",name:"onSelect",required:!0,type:{name:"(suggestion: DataSourceObject) => void"}},renderOption:{defaultValue:null,description:"Customized suggestions node",name:"renderOption",required:!1,type:{name:"((data: DataSourceObject) => ReactNode)"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconProp"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"md"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},iconTheme:{defaultValue:null,description:"",name:"iconTheme",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'},{value:'"primary"'},{value:'"secondary"'},{value:'"light"'},{value:'"dark"'}]}},prepend:{defaultValue:null,description:"",name:"prepend",required:!1,type:{name:"ReactNode"}},append:{defaultValue:null,description:"",name:"append",required:!1,type:{name:"ReactNode"}}}}}catch{}try{autoComplete.displayName="autoComplete",autoComplete.__docgenInfo={description:"",displayName:"autoComplete",props:{fetchSuggestions:{defaultValue:null,description:`Input callback. expect to return data as

1. \`{ value: something }\`

2. Promise. Let's take fetching github user as an example

\`\`\`tsx

const fetchGithubUsers = (query: string) => fetch(\`https://api.github.com/search/users?q=\${query}\`)
.then((res) => res.json())
.then(({ items }) => items.slice(0, 10).map((user: any) => ({ value: user.login, ...user })))

return (
<AutoComplete
  fetchSuggestions={fetchGithubUsers}
/>
)

\`\`\``,name:"fetchSuggestions",required:!0,type:{name:"(keyword: string) => DataSourceObject[] | Promise<DataSourceObject[]>"}},onSelect:{defaultValue:null,description:"Select callback",name:"onSelect",required:!0,type:{name:"(suggestion: DataSourceObject) => void"}},renderOption:{defaultValue:null,description:"Customized suggestions node",name:"renderOption",required:!1,type:{name:"((data: DataSourceObject) => ReactNode)"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconProp"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"md"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},iconTheme:{defaultValue:null,description:"",name:"iconTheme",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'},{value:'"primary"'},{value:'"secondary"'},{value:'"light"'},{value:'"dark"'}]}},prepend:{defaultValue:null,description:"",name:"prepend",required:!1,type:{name:"ReactNode"}},append:{defaultValue:null,description:"",name:"append",required:!1,type:{name:"ReactNode"}}}}}catch{}const ue={title:"DataInput/AutoComplete",component:i,tags:["autodocs"],parameters:{docs:{description:{component:`This component is based on \`Input\` component.\r
Just try to type several letters in the input\r
<a href="/amtd/?path=/story/datainput-autocomplete--fetch-github-user">here</a>.\r
All data is fetched from Github.\r

You can get input value and return results using \`fetchSuggestions\` attr.\r

The \`renderOption\` can help you customize the suggestion items display.\r
You can check the example <a href="#customize-render">here</a>.\r

It also has the same props as \`Input\` component does since it's based on the latter.\r

> Many thanks to github so that we can fetch github users as a demo.`}}}},D=e=>fetch(`https://api.github.com/search/users?q=${e}`).then(a=>a.json()).then(({items:a})=>a.slice(0,10).map(t=>({value:t.login,...t}))),f=e=>o(i,{...e,fetchSuggestions:D,onSelect:U("select")}),y=e=>{const a=t=>console.log(t);return o(i,{...e,fetchSuggestions:e.fetchSuggestions||D,onSelect:e.onSelect||a})},S=()=>o(i,{fetchSuggestions:D,onSelect:t=>{U(t),console.log(t)},renderOption:t=>{const r=t;return x("div",{style:{display:"flex",alignItems:"center"},children:[o("img",{src:r.avatar_url,alt:r.login,width:60,style:{borderRadius:"50%"}}),x("div",{style:{display:"flex",flexDirection:"column",marginLeft:20},children:[o("h2",{children:r.login}),o("h4",{children:r.url})]})]})}});var _,O,N;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`args =>
/**\r
* hi nihao\r
*/
<AutoComplete {...args} fetchSuggestions={fetchGithubUsers} onSelect={action('select')} />`,...(N=(O=f.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var j,w,A;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const onSelect = (data: any) => console.log(data);
  return <AutoComplete {...args} fetchSuggestions={args.fetchSuggestions || fetchGithubUsers} onSelect={args.onSelect || onSelect} />;
}`,...(A=(w=y.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var G,R,T;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  const onSelect = (data: any) => {
    action(data);
    console.log(data);
  };
  const render = (data: DataSourceType) => {
    const sData = (data as DataSourceType<GithubUserProps>);
    return <div style={{
      display: 'flex',
      alignItems: 'center'
    }}>\r
        <img src={sData.avatar_url} alt={sData.login} width={60} style={{
        borderRadius: '50%'
      }} />\r
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 20
      }}>\r
          <h2>{sData.login}</h2>\r
          <h4>{sData.url}</h4>\r
        </div>\r
      </div>;
  };
  return <AutoComplete fetchSuggestions={fetchGithubUsers} onSelect={onSelect} renderOption={render} />;
}`,...(T=(R=S.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};const ie=["FetchGithubUser","LoadingState","CustomizeRender"];export{S as CustomizeRender,f as FetchGithubUser,y as LoadingState,ie as __namedExportsOrder,ue as default};
//# sourceMappingURL=autoComplete.stories-a35ac607.js.map
