import{j as D}from"./jsx-runtime-670450c2.js";import{p as A,i as L}from"./index-5ae439ea.js";import{p as n}from"./index-4d501b15.js";import{R as W}from"./index-f1f749bf.js";import{c as $}from"./index-2e4736b8.js";function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?z(Object(r),!0).forEach(function(a){m(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function O(e){return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(e)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function q(e,t){if(e==null)return{};var r={},a=Object.keys(e),o,i;for(i=0;i<a.length;i++)o=a[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function U(e,t){if(e==null)return{};var r=q(e,t),a,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function k(e){return V(e)||K(e)||H(e)||M()}function V(e){if(Array.isArray(e))return N(e)}function K(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function H(e,t){if(e){if(typeof e=="string")return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return N(e,t)}}function N(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function M(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(e){var t,r=e.beat,a=e.fade,o=e.beatFade,i=e.bounce,d=e.shake,p=e.flash,l=e.spin,s=e.spinPulse,u=e.spinReverse,w=e.pulse,x=e.fixedWidth,b=e.inverse,I=e.border,v=e.listItem,f=e.flip,_=e.size,h=e.rotation,P=e.pull,T=(t={"fa-beat":r,"fa-fade":a,"fa-beat-fade":o,"fa-bounce":i,"fa-shake":d,"fa-flash":p,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":s,"fa-pulse":w,"fa-fw":x,"fa-inverse":b,"fa-border":I,"fa-li":v,"fa-flip":f===!0,"fa-flip-horizontal":f==="horizontal"||f==="both","fa-flip-vertical":f==="vertical"||f==="both"},m(t,"fa-".concat(_),typeof _<"u"&&_!==null),m(t,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),m(t,"fa-pull-".concat(P),typeof P<"u"&&P!==null),m(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(T).map(function(g){return T[g]?g:null}).filter(function(g){return g})}function G(e){return e=e-0,e===e}function R(e){return G(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,r){return r?r.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var J=["style"];function Q(e){return e.charAt(0).toUpperCase()+e.slice(1)}function X(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,r){var a=r.indexOf(":"),o=R(r.slice(0,a)),i=r.slice(a+1).trim();return o.startsWith("webkit")?t[Q(o)]=i:t[o]=i,t},{})}function E(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(l){return E(e,l)}),o=Object.keys(t.attributes||{}).reduce(function(l,s){var u=t.attributes[s];switch(s){case"class":l.attrs.className=u,delete t.attributes.class;break;case"style":l.attrs.style=X(u);break;default:s.indexOf("aria-")===0||s.indexOf("data-")===0?l.attrs[s.toLowerCase()]=u:l.attrs[R(s)]=u}return l},{attrs:{}}),i=r.style,d=i===void 0?{}:i,p=U(r,J);return o.attrs.style=c(c({},o.attrs.style),d),e.apply(void 0,[t.tag,c(c({},o.attrs),p)].concat(k(a)))}var F=!1;try{F=!0}catch{}function Y(){if(!F&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function C(e){if(e&&O(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(A.icon)return A.icon(e);if(e===null)return null;if(e&&O(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function j(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?m({},e,t):{}}var y=W.forwardRef(function(e,t){var r=e.icon,a=e.mask,o=e.symbol,i=e.className,d=e.title,p=e.titleId,l=e.maskId,s=C(r),u=j("classes",[].concat(k(B(e)),k(i.split(" ")))),w=j("transform",typeof e.transform=="string"?A.transform(e.transform):e.transform),x=j("mask",C(a)),b=L(s,c(c(c(c({},u),w),x),{},{symbol:o,title:d,titleId:p,maskId:l}));if(!b)return Y("Could not find icon",s),null;var I=b.abstract,v={ref:t};return Object.keys(e).forEach(function(f){y.defaultProps.hasOwnProperty(f)||(v[f]=e[f])}),Z(I[0],v)});y.displayName="FontAwesomeIcon";y.propTypes={beat:n.bool,border:n.bool,beatFade:n.bool,bounce:n.bool,className:n.string,fade:n.bool,flash:n.bool,mask:n.oneOfType([n.object,n.array,n.string]),maskId:n.string,fixedWidth:n.bool,inverse:n.bool,flip:n.oneOf([!0,!1,"horizontal","vertical","both"]),icon:n.oneOfType([n.object,n.array,n.string]),listItem:n.bool,pull:n.oneOf(["right","left"]),pulse:n.bool,rotation:n.oneOf([0,90,180,270]),shake:n.bool,size:n.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:n.bool,spinPulse:n.bool,spinReverse:n.bool,symbol:n.oneOfType([n.bool,n.string]),title:n.string,titleId:n.string,transform:n.oneOfType([n.string,n.object]),swapOpacity:n.bool};y.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Z=E.bind(null,W.createElement);const S=e=>{const{theme:t,className:r,...a}=e,o=$("icon",r,{[`icon-${t}`]:t});return D(y,{className:o,...a})};S.defaultProps={theme:"secondary"};try{S.displayName="Icon",S.__docgenInfo={description:"",displayName:"Icon",props:{icon:{defaultValue:null,description:`font awesome icon name

e.g. \`arrow-down\`

get more from [here](https://fontawesome.com/search)`,name:"icon",required:!0,type:{name:"IconProp"}},theme:{defaultValue:{value:"secondary"},description:"icon color",name:"theme",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'},{value:'"primary"'},{value:'"secondary"'},{value:'"light"'},{value:'"dark"'}]}}}}}catch{}try{icon.displayName="icon",icon.__docgenInfo={description:"",displayName:"icon",props:{icon:{defaultValue:null,description:`font awesome icon name

e.g. \`arrow-down\`

get more from [here](https://fontawesome.com/search)`,name:"icon",required:!0,type:{name:"IconProp"}},theme:{defaultValue:{value:"secondary"},description:"icon color",name:"theme",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'},{value:'"primary"'},{value:'"secondary"'},{value:'"light"'},{value:'"dark"'}]}}}}}catch{}export{S as I};
//# sourceMappingURL=icon-fa19333f.js.map
