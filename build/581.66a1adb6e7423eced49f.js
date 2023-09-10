"use strict";(self.webpackChunkinnova_ipr=self.webpackChunkinnova_ipr||[]).push([[581],{5884:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(4184),a=n.n(r),i=n(344),l=n(7294),s=n(8924);let o;var c=n(3124),u=n(4173);const d=l.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),m=d.Provider;var f=e=>{let{className:t,direction:n,index:r,marginDirection:a,children:i,split:s,wrap:o,style:c}=e;const{horizontalSize:u,verticalSize:m,latestIndex:f,supportFlexGap:g}=l.useContext(d);let h={};return g||("vertical"===n?r<f&&(h={marginBottom:u/(s?2:1)}):h=Object.assign(Object.assign({},r<f&&{[a]:u/(s?2:1)}),o&&{paddingBottom:m})),null==i?null:l.createElement(l.Fragment,null,l.createElement("div",{className:t,style:Object.assign(Object.assign({},h),c)},i),r<f&&s&&l.createElement("span",{className:`${t}-split`,style:h},s))},g=n(1418);const h={small:8,middle:16,large:24},p=l.forwardRef(((e,t)=>{var n,r;const{getPrefixCls:u,space:d,direction:p}=l.useContext(c.E_),{size:v=(null==d?void 0:d.size)||"small",align:b,className:x,rootClassName:y,children:j,direction:$="horizontal",prefixCls:w,split:C,style:N,wrap:k=!1,classNames:O,styles:E}=e,z=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap","classNames","styles"]),S=(()=>{const[e,t]=l.useState(!1);return l.useEffect((()=>{t((()=>{if(!(0,s.Z)()||!window.document.documentElement)return!1;if(void 0!==o)return o;const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div"));const t=document.createElement("div");return t.style.position="absolute",t.style.zIndex="-9999",t.appendChild(e),document.body.appendChild(t),o=1===e.scrollHeight,document.body.removeChild(t),o})())}),[]),e})(),[P,Z]=l.useMemo((()=>(Array.isArray(v)?v:[v,v]).map((e=>function(e){return"string"==typeof e?h[e]:e||0}(e)))),[v]),H=(0,i.Z)(j,{keepEmpty:!0}),R=void 0===b&&"horizontal"===$?"center":b,T=u("space",w),[I,M]=(0,g.Z)(T),B=a()(T,null==d?void 0:d.className,M,`${T}-${$}`,{[`${T}-rtl`]:"rtl"===p,[`${T}-align-${R}`]:R},x,y),F=a()(`${T}-item`,null!==(n=null==O?void 0:O.item)&&void 0!==n?n:null===(r=null==d?void 0:d.classNames)||void 0===r?void 0:r.item),G="rtl"===p?"marginLeft":"marginRight";let q=0;const A=H.map(((e,t)=>{var n,r;null!=e&&(q=t);const a=e&&e.key||`${F}-${t}`;return l.createElement(f,{className:F,key:a,direction:$,index:t,marginDirection:G,split:C,wrap:k,style:null!==(n=null==E?void 0:E.item)&&void 0!==n?n:null===(r=null==d?void 0:d.styles)||void 0===r?void 0:r.item},e)})),X=l.useMemo((()=>({horizontalSize:P,verticalSize:Z,latestIndex:q,supportFlexGap:S})),[P,Z,q,S]);if(0===H.length)return null;const L={};return k&&(L.flexWrap="wrap",S||(L.marginBottom=-Z)),S&&(L.columnGap=P,L.rowGap=Z),I(l.createElement("div",Object.assign({ref:t,className:B,style:Object.assign(Object.assign(Object.assign({},L),null==d?void 0:d.style),N)},z),l.createElement(m,{value:X},A)))})),v=p;v.Compact=u.ZP;var b=v},3581:function(e,t,n){n.r(t),n.d(t,{default:function(){return de}});var r=n(5893),a=n(7835),i=n(4184),l=n.n(i),s=n(7294),o=n(3124),c=n(8423),u=e=>{const{prefixCls:t,className:n,style:r,size:a,shape:i}=e,o=l()({[`${t}-lg`]:"large"===a,[`${t}-sm`]:"small"===a}),c=l()({[`${t}-circle`]:"circle"===i,[`${t}-square`]:"square"===i,[`${t}-round`]:"round"===i}),u=s.useMemo((()=>"number"==typeof a?{width:a,height:a,lineHeight:`${a}px`}:{}),[a]);return s.createElement("span",{className:l()(t,o,c,n),style:Object.assign(Object.assign({},u),r)})},d=n(2794),m=n(7968),f=n(5503);const g=new d.E4("ant-skeleton-loading",{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),h=e=>({height:e,lineHeight:`${e}px`}),p=e=>Object.assign({width:e},h(e)),v=e=>({background:e.skeletonLoadingBackground,backgroundSize:"400% 100%",animationName:g,animationDuration:e.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite"}),b=e=>Object.assign({width:5*e,minWidth:5*e},h(e)),x=e=>{const{skeletonAvatarCls:t,gradientFromColor:n,controlHeight:r,controlHeightLG:a,controlHeightSM:i}=e;return{[`${t}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:n},p(r)),[`${t}${t}-circle`]:{borderRadius:"50%"},[`${t}${t}-lg`]:Object.assign({},p(a)),[`${t}${t}-sm`]:Object.assign({},p(i))}},y=e=>{const{controlHeight:t,borderRadiusSM:n,skeletonInputCls:r,controlHeightLG:a,controlHeightSM:i,gradientFromColor:l}=e;return{[`${r}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:l,borderRadius:n},b(t)),[`${r}-lg`]:Object.assign({},b(a)),[`${r}-sm`]:Object.assign({},b(i))}},j=e=>Object.assign({width:e},h(e)),$=e=>{const{skeletonImageCls:t,imageSizeBase:n,gradientFromColor:r,borderRadiusSM:a}=e;return{[`${t}`]:Object.assign(Object.assign({display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",background:r,borderRadius:a},j(2*n)),{[`${t}-path`]:{fill:"#bfbfbf"},[`${t}-svg`]:Object.assign(Object.assign({},j(n)),{maxWidth:4*n,maxHeight:4*n}),[`${t}-svg${t}-svg-circle`]:{borderRadius:"50%"}}),[`${t}${t}-circle`]:{borderRadius:"50%"}}},w=(e,t,n)=>{const{skeletonButtonCls:r}=e;return{[`${n}${r}-circle`]:{width:t,minWidth:t,borderRadius:"50%"},[`${n}${r}-round`]:{borderRadius:t}}},C=e=>Object.assign({width:2*e,minWidth:2*e},h(e)),N=e=>{const{borderRadiusSM:t,skeletonButtonCls:n,controlHeight:r,controlHeightLG:a,controlHeightSM:i,gradientFromColor:l}=e;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[`${n}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:l,borderRadius:t,width:2*r,minWidth:2*r},C(r))},w(e,r,n)),{[`${n}-lg`]:Object.assign({},C(a))}),w(e,a,`${n}-lg`)),{[`${n}-sm`]:Object.assign({},C(i))}),w(e,i,`${n}-sm`))},k=e=>{const{componentCls:t,skeletonAvatarCls:n,skeletonTitleCls:r,skeletonParagraphCls:a,skeletonButtonCls:i,skeletonInputCls:l,skeletonImageCls:s,controlHeight:o,controlHeightLG:c,controlHeightSM:u,gradientFromColor:d,padding:m,marginSM:f,borderRadius:g,titleHeight:h,blockRadius:b,paragraphLiHeight:j,controlHeightXS:w,paragraphMarginTop:C}=e;return{[`${t}`]:{display:"table",width:"100%",[`${t}-header`]:{display:"table-cell",paddingInlineEnd:m,verticalAlign:"top",[`${n}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:d},p(o)),[`${n}-circle`]:{borderRadius:"50%"},[`${n}-lg`]:Object.assign({},p(c)),[`${n}-sm`]:Object.assign({},p(u))},[`${t}-content`]:{display:"table-cell",width:"100%",verticalAlign:"top",[`${r}`]:{width:"100%",height:h,background:d,borderRadius:b,[`+ ${a}`]:{marginBlockStart:u}},[`${a}`]:{padding:0,"> li":{width:"100%",height:j,listStyle:"none",background:d,borderRadius:b,"+ li":{marginBlockStart:w}}},[`${a}> li:last-child:not(:first-child):not(:nth-child(2))`]:{width:"61%"}},[`&-round ${t}-content`]:{[`${r}, ${a} > li`]:{borderRadius:g}}},[`${t}-with-avatar ${t}-content`]:{[`${r}`]:{marginBlockStart:f,[`+ ${a}`]:{marginBlockStart:C}}},[`${t}${t}-element`]:Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},N(e)),x(e)),y(e)),$(e)),[`${t}${t}-block`]:{width:"100%",[`${i}`]:{width:"100%"},[`${l}`]:{width:"100%"}},[`${t}${t}-active`]:{[`\n        ${r},\n        ${a} > li,\n        ${n},\n        ${i},\n        ${l},\n        ${s}\n      `]:Object.assign({},v(e))}}};var O=(0,m.Z)("Skeleton",(e=>{const{componentCls:t}=e,n=(0,f.TS)(e,{skeletonAvatarCls:`${t}-avatar`,skeletonTitleCls:`${t}-title`,skeletonParagraphCls:`${t}-paragraph`,skeletonButtonCls:`${t}-button`,skeletonInputCls:`${t}-input`,skeletonImageCls:`${t}-image`,imageSizeBase:1.5*e.controlHeight,borderRadius:100,skeletonLoadingBackground:`linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,skeletonLoadingMotionDuration:"1.4s"});return[k(n)]}),(e=>{const{colorFillContent:t,colorFill:n}=e;return{color:t,colorGradientEnd:n,gradientFromColor:t,gradientToColor:n,titleHeight:e.controlHeight/2,blockRadius:e.borderRadiusSM,paragraphMarginTop:e.marginLG+e.marginXXS,paragraphLiHeight:e.controlHeight/2}}),{deprecatedTokens:[["color","gradientFromColor"],["colorGradientEnd","gradientToColor"]]}),E=n(7462),z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"},S=n(7029),P=function(e,t){return s.createElement(S.Z,(0,E.Z)({},e,{ref:t,icon:z}))},Z=s.forwardRef(P),H=n(3433),R=e=>{const t=t=>{const{width:n,rows:r=2}=e;return Array.isArray(n)?n[t]:r-1===t?n:void 0},{prefixCls:n,className:r,style:a,rows:i}=e,o=(0,H.Z)(Array(i)).map(((e,n)=>s.createElement("li",{key:n,style:{width:t(n)}})));return s.createElement("ul",{className:l()(n,r),style:a},o)},T=e=>{let{prefixCls:t,className:n,width:r,style:a}=e;return s.createElement("h3",{className:l()(t,n),style:Object.assign({width:r},a)})};function I(e){return e&&"object"==typeof e?e:{}}const M=e=>{const{prefixCls:t,loading:n,className:r,rootClassName:a,style:i,children:c,avatar:d=!1,title:m=!0,paragraph:f=!0,active:g,round:h}=e,{getPrefixCls:p,direction:v,skeleton:b}=s.useContext(o.E_),x=p("skeleton",t),[y,j]=O(x);if(n||!("loading"in e)){const e=!!d,t=!!m,n=!!f;let o,c;if(e){const e=Object.assign(Object.assign({prefixCls:`${x}-avatar`},function(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}(t,n)),I(d));o=s.createElement("div",{className:`${x}-header`},s.createElement(u,Object.assign({},e)))}if(t||n){let r,a;if(t){const t=Object.assign(Object.assign({prefixCls:`${x}-title`},function(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}(e,n)),I(m));r=s.createElement(T,Object.assign({},t))}if(n){const n=Object.assign(Object.assign({prefixCls:`${x}-paragraph`},function(e,t){const n={};return e&&t||(n.width="61%"),n.rows=!e&&t?3:2,n}(e,t)),I(f));a=s.createElement(R,Object.assign({},n))}c=s.createElement("div",{className:`${x}-content`},r,a)}const p=l()(x,{[`${x}-with-avatar`]:e,[`${x}-active`]:g,[`${x}-rtl`]:"rtl"===v,[`${x}-round`]:h},null==b?void 0:b.className,r,a,j);return y(s.createElement("div",{className:p,style:Object.assign(Object.assign({},null==b?void 0:b.style),i)},o,c))}return void 0!==c?c:null};M.Button=e=>{const{prefixCls:t,className:n,rootClassName:r,active:a,block:i=!1,size:d="default"}=e,{getPrefixCls:m}=s.useContext(o.E_),f=m("skeleton",t),[g,h]=O(f),p=(0,c.Z)(e,["prefixCls"]),v=l()(f,`${f}-element`,{[`${f}-active`]:a,[`${f}-block`]:i},n,r,h);return g(s.createElement("div",{className:v},s.createElement(u,Object.assign({prefixCls:`${f}-button`,size:d},p))))},M.Avatar=e=>{const{prefixCls:t,className:n,rootClassName:r,active:a,shape:i="circle",size:d="default"}=e,{getPrefixCls:m}=s.useContext(o.E_),f=m("skeleton",t),[g,h]=O(f),p=(0,c.Z)(e,["prefixCls","className"]),v=l()(f,`${f}-element`,{[`${f}-active`]:a},n,r,h);return g(s.createElement("div",{className:v},s.createElement(u,Object.assign({prefixCls:`${f}-avatar`,shape:i,size:d},p))))},M.Input=e=>{const{prefixCls:t,className:n,rootClassName:r,active:a,block:i,size:d="default"}=e,{getPrefixCls:m}=s.useContext(o.E_),f=m("skeleton",t),[g,h]=O(f),p=(0,c.Z)(e,["prefixCls"]),v=l()(f,`${f}-element`,{[`${f}-active`]:a,[`${f}-block`]:i},n,r,h);return g(s.createElement("div",{className:v},s.createElement(u,Object.assign({prefixCls:`${f}-input`,size:d},p))))},M.Image=e=>{const{prefixCls:t,className:n,rootClassName:r,style:a,active:i}=e,{getPrefixCls:c}=s.useContext(o.E_),u=c("skeleton",t),[d,m]=O(u),f=l()(u,`${u}-element`,{[`${u}-active`]:i},n,r,m);return d(s.createElement("div",{className:f},s.createElement("div",{className:l()(`${u}-image`,n),style:a},s.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:`${u}-image-svg`},s.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:`${u}-image-path`})))))},M.Node=e=>{const{prefixCls:t,className:n,rootClassName:r,style:a,active:i,children:c}=e,{getPrefixCls:u}=s.useContext(o.E_),d=u("skeleton",t),[m,f]=O(d),g=l()(d,`${d}-element`,{[`${d}-active`]:i},f,n,r),h=null!=c?c:s.createElement(Z,null);return m(s.createElement("div",{className:g},s.createElement("div",{className:l()(`${d}-image`,n),style:a},h)))};var B=M,F=n(7360),G=n(7003),q=n(2216),A=n(2553),X=n(5884),L=n(7180),V=n(8212),J={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"}}]},name:"save",theme:"outlined"},D=function(e,t){return s.createElement(S.Z,(0,E.Z)({},e,{ref:t,icon:J}))},_=s.forwardRef(D),W=n(7536),U=n(6047),K=n(6665),Y="LiHAcGOZ",Q="T1tUnazi",ee="y9b875tc",te="Bev9KPMO",ne="gyewWwKZ",re=n(3166),ae=n(8499),ie=function(){return ie=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},ie.apply(this,arguments)},le=function(e){var t,n,a,i,s=e.user,o=e.onEditProfile,c=e.onFileChange,u=e.notify,d=(0,W.cI)({mode:"onBlur",defaultValues:{about:null==s?void 0:s.about}}),m=d.register,f=d.control,g=d.handleSubmit,h=d.formState.errors,p=(0,G.T)();return(0,r.jsx)(A.X2,{className:Y,children:(0,r.jsx)(A.JX,{xl:12,children:(0,r.jsxs)("form",{name:"loginForm",onSubmit:g((function(e){return t=void 0,n=void 0,a=function(){var t;return function(e,t){var n,r,a,i,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(o){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(l=0)),l;)try{if(n=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return l.label++,{value:s[1],done:!1};case 5:l.label++,r=s[1],s=[0];continue;case 7:s=l.ops.pop(),l.trys.pop();continue;default:if(!((a=(a=l.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){l=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){l.label=s[1];break}if(6===s[0]&&l.label<a[1]){l.label=a[1],a=s;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(s);break}a[2]&&l.ops.pop(),l.trys.pop();continue}s=t.call(e,l)}catch(e){s=[6,e],r=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}}(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,p((0,F.Nq)(e))];case 1:return n.sent(),o(),u.success({message:"Данные успешно обновлены"}),[3,3];case 2:return t=n.sent(),console.error(t),u.error({message:t.message}),[3,3];case 3:return[2]}}))},new((r=void 0)||(r=Promise))((function(e,i){function l(e){try{o(a.next(e))}catch(e){i(e)}}function s(e){try{o(a.throw(e))}catch(e){i(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(l,s)}o((a=a.apply(t,n||[])).next())}));var t,n,r,a})),children:[(0,r.jsx)(A.JX,{className:Q,xl:4,children:(0,r.jsx)("img",{src:(null==s?void 0:s.avatarUrl)||K.Z,alt:"avatar"})}),(0,r.jsxs)(A.JX,{className:l()([ee,"E8HyCbnl"]),xl:8,children:[(0,r.jsx)(re.I,{defaultValue:(null==s?void 0:s.firstName)||"",id:"firstName",fieldName:"firstName",register:m,rules:{required:"Поле обязательно к заполнению"},error:null===(t=null==h?void 0:h.firstName)||void 0===t?void 0:t.message,isProfile:!0}),(0,r.jsx)(re.I,{defaultValue:(null==s?void 0:s.lastName)||"",id:"lastName",fieldName:"lastName",register:m,rules:{required:"Поле обязательно к заполнению"},error:null===(n=null==h?void 0:h.lastName)||void 0===n?void 0:n.message,isProfile:!0}),(0,r.jsx)(re.I,{defaultValue:(null==s?void 0:s.username)||"",id:"username",fieldName:"username",register:m,rules:{required:"Поле обязательно к заполнению"},error:null===(a=null==h?void 0:h.username)||void 0===a?void 0:a.message,isProfile:!0})]}),(0,r.jsx)(A.JX,{xl:4,className:te,children:(0,r.jsx)(re.I,{defaultValue:(null==s?void 0:s.email)||"",id:"email",fieldName:"email",register:m,rules:{required:"Поле обязательно к заполнению"},error:null===(i=null==h?void 0:h.email)||void 0===i?void 0:i.message,isProfile:!0})}),(0,r.jsx)(A.JX,{xl:4,className:te,children:(0,r.jsx)(W.Qr,{name:"about",control:f,render:function(e){var t=e.field;return(0,r.jsx)(U.Z,ie({},t,{placeholder:"Добавьте информацию о себе, чтобы другие пользователи больше узнали о вас (например увлечения, хобби и пр.)",defaultValue:(null==s?void 0:s.about)||""}))}})}),(0,r.jsx)(A.JX,{children:(0,r.jsxs)(X.Z,{children:[(0,r.jsx)(ae.h,{onChange:c,children:"Обновить фото"}),(0,r.jsx)(L.ZP,{onClick:o,icon:(0,r.jsx)(V.Z,{}),children:"Редактировать профиль"}),(0,r.jsx)(L.ZP,{icon:(0,r.jsx)(_,{}),type:"primary",htmlType:"submit",children:"Сохранить"})]})})]})})})},se=n(5807),oe=n(1964),ce=n(2691),ue=function(e){var t=e.user,n=e.mode,i=e.onFileChange,l=e.onEditProfile,s=a.Z.useNotification(),o=s[0],c=s[1],u=function(e){return t=void 0,n=void 0,a=function(){var t;return function(e,t){var n,r,a,i,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(o){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(l=0)),l;)try{if(n=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return l.label++,{value:s[1],done:!1};case 5:l.label++,r=s[1],s=[0];continue;case 7:s=l.ops.pop(),l.trys.pop();continue;default:if(!((a=(a=l.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){l=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){l.label=s[1];break}if(6===s[0]&&l.label<a[1]){l.label=a[1],a=s;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(s);break}a[2]&&l.ops.pop(),l.trys.pop();continue}s=t.call(e,l)}catch(e){s=[6,e],r=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}}(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,ce.T.copyText(e)];case 1:return n.sent(),o.success({message:"Данные успешно скопированы"}),[3,3];case 2:return t=n.sent(),console.error(t),o.error({message:"Возникла ошибка, попробуйте еще раз"}),[3,3];case 3:return[2]}}))},new((r=void 0)||(r=Promise))((function(e,i){function l(e){try{o(a.next(e))}catch(e){i(e)}}function s(e){try{o(a.throw(e))}catch(e){i(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(l,s)}o((a=a.apply(t,n||[])).next())}));var t,n,r,a};return(0,r.jsxs)(r.Fragment,{children:[c,(0,r.jsx)(A.X2,{className:Y,children:(0,r.jsxs)(A.JX,{xl:12,children:[(0,r.jsx)(A.JX,{className:Q,xl:4,children:(0,r.jsx)("img",{src:(null==t?void 0:t.avatarUrl)||K.Z,alt:"avatar"})}),(0,r.jsxs)(A.JX,{className:ee,xl:4,children:[(0,r.jsx)(se.Z,{title:"Копировать",placement:"right",children:(0,r.jsxs)(oe.Z.Title,{level:4,onClick:function(){u("".concat(null==t?void 0:t.firstName," ").concat(null==t?void 0:t.lastName))},className:ne,children:[null==t?void 0:t.firstName," ",null==t?void 0:t.lastName]})}),(0,r.jsx)(oe.Z.Title,{level:5,onClick:function(){u("".concat((null==t?void 0:t.username)||""))},className:ne,children:(null==t?void 0:t.username)?"(".concat(null==t?void 0:t.username,")"):""})]}),(0,r.jsx)(A.JX,{xl:2,className:te,children:"Email: ".concat((null==t?void 0:t.email)||"Not email yet :(")}),(0,r.jsx)(A.JX,{xl:4,className:te,children:"О себе: ".concat((null==t?void 0:t.about)||"Добавьте информацию о себе, чтобы другие пользователи больше узнали о вас \n          (например увлечения, хобби и пр.)")}),(0,r.jsx)(A.JX,{children:(0,r.jsxs)(X.Z,{children:[(0,r.jsx)(ae.h,{onChange:i,children:"Обновить фото"}),(0,r.jsx)(L.ZP,{onClick:l,icon:(0,r.jsx)(V.Z,{}),children:"Редактировать профиль"}),(0,r.jsx)(L.ZP,{icon:(0,r.jsx)(_,{}),type:"primary",disabled:"view"===n,children:"Сохранить"})]})})]})})]})},de=function(){var e=(0,G.C)((function(e){return e.user})),t=e.user,n=e.authData,i=e.loading,l=a.Z.useNotification(),o=l[0],c=l[1],u=(0,s.useState)("view"),d=u[0],m=u[1],f=(0,G.T)(),g=function(e){return t=void 0,n=void 0,a=function(){var t,n;return function(e,t){var n,r,a,i,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(o){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(l=0)),l;)try{if(n=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return l.label++,{value:s[1],done:!1};case 5:l.label++,r=s[1],s=[0];continue;case 7:s=l.ops.pop(),l.trys.pop();continue;default:if(!((a=(a=l.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){l=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){l.label=s[1];break}if(6===s[0]&&l.label<a[1]){l.label=a[1],a=s;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(s);break}a[2]&&l.ops.pop(),l.trys.pop();continue}s=t.call(e,l)}catch(e){s=[6,e],r=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}}(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),t=e.target.files[0],[4,f((0,F.BA)(t))];case 1:return r.sent(),o.success({message:"Данные успешно обновлены"}),[3,3];case 2:return n=r.sent(),console.error(n),o.error({message:n.message}),[3,3];case 3:return[2]}}))},new((r=void 0)||(r=Promise))((function(e,i){function l(e){try{o(a.next(e))}catch(e){i(e)}}function s(e){try{o(a.throw(e))}catch(e){i(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(l,s)}o((a=a.apply(t,n||[])).next())}));var t,n,r,a},h=function(){m("view"===d?"edit":"view")};return i?(0,r.jsx)(B,{}):(0,r.jsxs)(q.T,{children:[c,"view"===d?(0,r.jsx)(ue,{user:t,mode:d,onEditProfile:h,onFileChange:g}):(0,r.jsx)(le,{user:t,authData:n,onFileChange:g,onEditProfile:h,notify:o})]})}},6665:function(e,t,n){t.Z=n.p+"ab45eb1d42b1faaf3d12b84117e3d937.png"},2691:function(e,t,n){n.d(t,{T:function(){return r}});var r={copyText:function(e){return navigator.clipboard.writeText(e).then((function(e){return e})).catch((function(e){return console.error(e),""}))},pasteText:function(){return navigator.clipboard.readText().then((function(e){return e})).catch((function(e){return console.error(e),""}))}}},8499:function(e,t,n){n.d(t,{h:function(){return a}});var r=n(5893),a=function(e){var t=e.accept,n=void 0===t?"image/png, image/jpeg":t,a=e.onChange,i=e.label,l=void 0===i?"Выберите файл":i;return(0,r.jsxs)("label",{className:"rZNh8Dm5",children:[l,(0,r.jsx)("input",{type:"file",accept:n,onChange:a,className:"luYGfs7s"})]})}},3166:function(e,t,n){n.d(t,{I:function(){return s}});var r=n(5893),a=n(4184),i=n.n(a),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)},s=function(e){var t,n=e.fieldName,a=e.id,s=e.register,o=e.rules,c=void 0===o?{}:o,u=e.label,d=e.error,m=e.className,f=e.isProfile,g=void 0!==f&&f,h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["fieldName","id","register","rules","label","error","className","isProfile"]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("label",{htmlFor:a,children:u}),(0,r.jsxs)("div",{className:"qB7FoCJj",children:[(0,r.jsx)("input",l({},s(n,l({},c)),{id:a,className:i()("LVdIPwcx",m)},h)),d&&(0,r.jsx)("p",{className:i()((t={},t.LHeVUdIV=g,t),"BgTYZ9zp"),children:d||"Ошибка"})]})]})}},2216:function(e,t,n){n.d(t,{T:function(){return s}});var r=n(5893),a=n(7294),i=n(4184),l=n.n(i),s=function(e){var t=e.className,n=e.children,i=e.onScrollEnd,s=(0,a.useRef)(),o=(0,a.useRef)();return function(e){var t=e.callback,n=e.wrapperRef,r=e.triggerRef,i=(0,a.useRef)(null);(0,a.useEffect)((function(){var e=r.current;return t&&(i.current=new IntersectionObserver((function(e){e[0].isIntersecting&&t()}),{root:null,rootMargin:"0px",threshold:1}),i.current.observe(e)),function(){i.current&&e&&i.current.unobserve(e)}}),[n,r,t])}({triggerRef:o,wrapperRef:s,callback:i}),(0,r.jsxs)("section",{ref:s,className:l()("GbBEaO_D",t),children:[n,(0,r.jsx)("div",{ref:o})]})}}}]);