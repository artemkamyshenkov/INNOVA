"use strict";(self.webpackChunkinnova_ipr=self.webpackChunkinnova_ipr||[]).push([[196],{3196:(e,r,n)=>{n.r(r),n.d(r,{default:()=>k});var t=n(5893),a=n(7536),s=n(7702),i=n(823);let l=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,r)=>e+((r&=63)<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r>62?"-":"_")),"");var o=n(3166);var c=n(4425),u=n(7003),f=n(8499),d=n(2691),p=function(){var e=(0,a.cI)(),r=e.register,n=e.handleSubmit,p=e.reset,v=(0,c.s)(),h=(0,u.C)((function(e){return e.user})),m=h.user,g=h.authData,b=function(e){var r=e.message;r&&""!==r.trim()&&(v.emit("send_message",{message:r,id:l(),sender:(null==m?void 0:m.firstName)||(null==m?void 0:m.username),senderId:null==g?void 0:g.id}),p())};return(0,t.jsxs)("form",{name:"formMessage",onSubmit:n(b),className:"LFx5lNsf",children:[(0,t.jsx)(s.Z,{title:"Для быстрой вставки текста и отправки сообщения кликните два раза",style:{width:"100%"},children:(0,t.jsx)(o.I,{fieldName:"message",register:r,id:"message",className:"fk1qlI4S",rules:{required:!0},autoComplete:"off",placeholder:"Введите сообщение...",onDoubleClick:function(){return e=void 0,r=void 0,t=function(){var e;return function(e,r){var n,t,a,s,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function l(l){return function(o){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;s&&(s=0,l[0]&&(i=0)),i;)try{if(n=1,t&&(a=2&l[0]?t.return:l[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,l[1])).done)return a;switch(t=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,t=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){i.label=l[1];break}if(6===l[0]&&i.label<a[1]){i.label=a[1],a=l;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(l);break}a[2]&&i.ops.pop(),i.trys.pop();continue}l=r.call(e,i)}catch(e){l=[6,e],t=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,o])}}}(this,(function(r){switch(r.label){case 0:return[4,d.T.pasteText()];case 1:return e=r.sent(),b({message:e}),[2]}}))},new((n=void 0)||(n=Promise))((function(a,s){function i(e){try{o(t.next(e))}catch(e){s(e)}}function l(e){try{o(t.throw(e))}catch(e){s(e)}}function o(e){var r;e.done?a(e.value):(r=e.value,r instanceof n?r:new n((function(e){e(r)}))).then(i,l)}o((t=t.apply(e,r||[])).next())}));var e,r,n,t}})}),(0,t.jsx)(f.h,{label:"Фото",onChange:function(e){var r=new FileReader,n=e.target.files[0];n&&(r.onload=function(e){var r=e.target.result;v.emit("send_message",{message:"",id:l(),sender:(null==m?void 0:m.firstName)||(null==m?void 0:m.username),senderId:null==g?void 0:g.id,file:r})},r.readAsDataURL(n))}}),(0,t.jsx)(i.ZP,{htmlType:"submit",children:"Отправить"})]})},v=n(7294),h=n(4184),m=n.n(h),g=n(1659),b=n(6373),x=function(e,r,n){if(n||2===arguments.length)for(var t,a=0,s=r.length;a<s;a++)!t&&a in r||(t||(t=Array.prototype.slice.call(r,0,a)),t[a]=r[a]);return e.concat(t||Array.prototype.slice.call(r))},y=function(){var e=(0,v.useState)([]),r=e[0],n=e[1],a=(0,c.s)(),s=(0,b.a)().id;return(0,v.useEffect)((function(){a.on("receive_message",(function(e){n((function(r){return x(x([],r,!0),[e],!1)}))}))}),[]),(0,t.jsx)("div",{className:"etkvg7Eo",children:r.map((function(e){var r=e.message,n=e.id,a=e.sender,i=e.senderId,l=e.file;return(0,t.jsxs)("div",{className:m()("lSut7kJu",s===i?"e0Wvq6lv":"tGLeh5KS"),children:[(0,t.jsx)("p",{children:"".concat(a,": ").concat(r)}),l&&(0,t.jsx)(g.Z,{src:l,alt:"file",width:200})]},n)}))})},j=function(){return(0,t.jsxs)("div",{className:"DTt5MrHd",children:[(0,t.jsx)(y,{}),(0,t.jsx)(p,{})]})},w=n(2216),N=n(2553);const k=function(){return(0,t.jsx)(w.T,{children:(0,t.jsx)(N.X2,{className:"cnMZBi0i",children:(0,t.jsx)(N.JX,{className:"DDoSEsk3",children:(0,t.jsx)(j,{})})})})}},2691:(e,r,n)=>{n.d(r,{T:()=>t});var t={copyText:function(e){return navigator.clipboard.writeText(e).then((function(e){return e})).catch((function(e){return console.error(e),""}))},pasteText:function(){return navigator.clipboard.readText().then((function(e){return e})).catch((function(e){return console.error(e),""}))}}},8499:(e,r,n)=>{n.d(r,{h:()=>a});var t=n(5893);var a=function(e){var r=e.accept,n=void 0===r?"image/png, image/jpeg":r,a=e.onChange,s=e.label,i=void 0===s?"Выберите файл":s;return(0,t.jsxs)("label",{className:"rZNh8Dm5",children:[i,(0,t.jsx)("input",{type:"file",accept:n,onChange:a,className:"luYGfs7s"})]})}},3166:(e,r,n)=>{n.d(r,{I:()=>l});var t=n(5893),a=n(4184),s=n.n(a);var i=function(){return i=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var a in r=arguments[n])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},i.apply(this,arguments)},l=function(e){var r=e.fieldName,n=e.id,a=e.register,l=e.rules,o=void 0===l?{}:l,c=e.label,u=e.error,f=e.className,d=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]])}return n}(e,["fieldName","id","register","rules","label","error","className"]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("label",{htmlFor:n,children:c}),(0,t.jsxs)("div",{className:"qB7FoCJj",children:[(0,t.jsx)("input",i({},a(r,i({},o)),{id:n,className:s()("LVdIPwcx",f)},d)),u&&(0,t.jsx)("p",{className:"BgTYZ9zp",children:u||"Ошибка"})]})]})}},2216:(e,r,n)=>{n.d(r,{T:()=>l});var t=n(5893),a=n(7294),s=n(4184),i=n.n(s);var l=function(e){var r=e.className,n=e.children,s=e.onScrollEnd,l=(0,a.useRef)(),o=(0,a.useRef)();return function(e){var r=e.callback,n=e.wrapperRef,t=e.triggerRef,s=(0,a.useRef)(null);(0,a.useEffect)((function(){var e=t.current;return r&&(s.current=new IntersectionObserver((function(e){e[0].isIntersecting&&r()}),{root:null,rootMargin:"0px",threshold:1}),s.current.observe(e)),function(){s.current&&e&&s.current.unobserve(e)}}),[n,t,r])}({triggerRef:o,wrapperRef:l,callback:s}),(0,t.jsxs)("section",{ref:l,className:i()("GbBEaO_D",r),children:[n,(0,t.jsx)("div",{ref:o})]})}}}]);