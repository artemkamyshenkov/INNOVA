"use strict";(self.webpackChunkinnova_ipr=self.webpackChunkinnova_ipr||[]).push([[679],{4679:(e,r,n)=>{n.r(r),n.d(r,{default:()=>N});var t=n(5893),a=n(2553),s=n(7085),l=n(1748),i=n(7536),o=n(5884),c=n(823),u=n(2507),d=n(9250),m=n(9655),f=n(7360),p=n(3528),v=n(2675),h=n(2410),b=n(7003),g=n(3166),y=n(6814);const j={buttonsContainer:"FUPw1_I8",signupButton:"kfaqW1Jl",iconContainer:"Mb9NfSic",error:"Vuipi_wK",passwordError:"_DwiE3Ua"};var w=n(2750),x=function(){var e,r,n,x,N,O,I=(0,i.cI)({mode:"onBlur"}),P=I.register,S=I.handleSubmit,k=I.formState.errors,C=I.watch,E=(0,p.DW)(),F=E[0],Z=E[1],B=Z.error,q=Z.isLoading,M=(0,b.T)(),L=(0,d.s0)(),A=C("password","");return C("confirmPassword",""),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.X2,{align:"center",justify:"center",children:(0,t.jsx)(a.JX,{xl:4,className:j.iconContainer,children:(0,t.jsx)(y.A,{name:"telegram"})})}),(0,t.jsx)(a.X2,{align:"center",justify:"center",children:(0,t.jsx)(a.JX,{xl:4,children:(0,t.jsxs)("form",{name:"loginForm",onSubmit:S((function(e){var r,n,t,a,s=e.email,i=e.password,o=e.firstName,c=e.lastName,u=e.username;return r=void 0,n=void 0,a=function(){var e,r,n;return function(e,r){var n,t,a,s,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(i){return function(o){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s&&(s=0,i[0]&&(l=0)),l;)try{if(n=1,t&&(a=2&i[0]?t.return:i[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,i[1])).done)return a;switch(t=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,t=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!((a=(a=l.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){l.label=i[1];break}if(6===i[0]&&l.label<a[1]){l.label=a[1],a=i;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(i);break}a[2]&&l.ops.pop(),l.trys.pop();continue}i=r.call(e,l)}catch(e){i=[6,e],t=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}}(this,(function(t){switch(t.label){case 0:return t.trys.push([0,4,,5]),[4,F({email:s,password:i,returnSecureToken:!0}).unwrap()];case 1:return e=t.sent(),M(f.hI.setAuthData({id:e.localId,email:e.email})),[4,(0,l.t8)((0,l.iH)(v.Fs,"users/".concat(e.localId)),{firstName:o,lastName:c,username:u,email:s,uid:e.localId})];case 2:return t.sent(),[4,w.W.getCurrentUser(e.localId)];case 3:return r=t.sent(),M(f.hI.setCurrentUser(r)),L("/",{replace:!0}),[3,5];case 4:return n=t.sent(),console.error(n),[3,5];case 5:return[2]}}))},new((t=void 0)||(t=Promise))((function(e,s){function l(e){try{o(a.next(e))}catch(e){s(e)}}function i(e){try{o(a.throw(e))}catch(e){s(e)}}function o(r){var n;r.done?e(r.value):(n=r.value,n instanceof t?n:new t((function(e){e(n)}))).then(l,i)}o((a=a.apply(r,n||[])).next())}))})),children:[(0,t.jsx)(g.I,{label:"Имя",id:"firstName",register:P,fieldName:"firstName",rules:{required:"Поле обязательно к заполнению"},error:null===(e=null==k?void 0:k.firstName)||void 0===e?void 0:e.message}),(0,t.jsx)(g.I,{label:"Фамилия",id:"lastName",register:P,fieldName:"lastName",rules:{required:"Поле обязательно к заполнению"},error:null===(r=null==k?void 0:k.lastName)||void 0===r?void 0:r.message}),(0,t.jsx)(g.I,{label:"Имя пользователя",id:"username",register:P,fieldName:"username",rules:{required:"Поле обязательно к заполнению",minLength:{value:3,message:"Минимум 3 символа"}},error:null===(n=null==k?void 0:k.username)||void 0===n?void 0:n.message}),(0,t.jsx)(g.I,{label:"Электронная почта",id:"email",register:P,type:"email",fieldName:"email",rules:{required:"Поле обязательно к заполнению"},error:null===(x=null==k?void 0:k.email)||void 0===x?void 0:x.message}),(0,t.jsx)(g.I,{label:"Пароль",id:"password",register:P,type:"password",fieldName:"password",rules:{required:"Поле обязательно к заполнению",minLength:{value:6,message:"Минимум 6 символов"}},error:null===(N=null==k?void 0:k.password)||void 0===N?void 0:N.message}),(0,t.jsx)(g.I,{label:"Повторите пароль",id:"confirmPassword",register:P,type:"password",fieldName:"confirmPassword",rules:{required:"Поле обязательно к заполнению",minLength:{value:6,message:"Минимум 6 символов"},validate:function(e){return e===A||"Пароли не совпадают"}},error:null===(O=null==k?void 0:k.confirmPassword)||void 0===O?void 0:O.message}),B&&(0,t.jsx)("p",{className:j.error,children:(0,h.S)(B)}),(0,t.jsxs)(o.Z,{direction:"vertical",className:j.buttonsContainer,children:[q?(0,t.jsx)(c.ZP,{type:"primary",className:j.signinButton,disabled:!0,children:(0,t.jsx)(u.Z,{indicator:(0,t.jsx)(s.Z,{className:j.spin})})}):(0,t.jsx)(c.ZP,{type:"primary",htmlType:"submit",className:j.signupButton,children:"Зарегистрироваться"}),(0,t.jsx)(m.rU,{to:"/login",children:"Уже есть аккаунт? Войти"})]})]})})})]})};const N=function(){return(0,t.jsx)(a.W2,{className:"VKmM0nLA",children:(0,t.jsx)(x,{})})}},6665:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"ab45eb1d42b1faaf3d12b84117e3d937.png"},2410:(e,r,n)=>{n.d(r,{S:()=>a});var t=n(5142);function a(e){var r=e.data.error.message;return t.V[r]}},3166:(e,r,n)=>{n.d(r,{I:()=>i});var t=n(5893),a=n(4184),s=n.n(a);var l=function(){return l=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var a in r=arguments[n])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},l.apply(this,arguments)},i=function(e){var r=e.fieldName,n=e.id,a=e.register,i=e.rules,o=void 0===i?{}:i,c=e.label,u=e.error,d=e.className,m=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]])}return n}(e,["fieldName","id","register","rules","label","error","className"]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("label",{htmlFor:n,children:c}),(0,t.jsxs)("div",{className:"qB7FoCJj",children:[(0,t.jsx)("input",l({},a(r,l({},o)),{id:n,className:s()("LVdIPwcx",d)},m)),u&&(0,t.jsx)("p",{className:"BgTYZ9zp",children:u||"Ошибка"})]})]})}},6814:(e,r,n)=>{n.d(r,{A:()=>b});var t,a,s,l,i=n(5893),o=n(6165),c=n(4184),u=n.n(c),d=n(7294);function m(){return m=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},m.apply(this,arguments)}var f=n(6665);const p={telegram:"SP0g5ika"};var v=function(){return v=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var a in r=arguments[n])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},v.apply(this,arguments)},h={telegram:function(e){return d.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",width:800,height:800,preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 256"},e),t||(t=d.createElement("path",{fill:"#40B3E0",d:"M128 0C57.307 0 0 57.307 0 128s57.307 128 128 128 128-57.307 128-128S198.693 0 128 0Z"})),a||(a=d.createElement("path",{fill:"#FFF",d:"M190.283 73.63 167.42 188.899s-3.197 7.994-11.99 4.157l-52.758-40.448-19.184-9.272-32.294-10.872s-4.956-1.758-5.436-5.595c-.48-3.837 5.596-5.915 5.596-5.915l128.376-50.36s10.552-4.636 10.552 3.038"})),s||(s=d.createElement("path",{fill:"#D2E5F1",d:"M98.618 187.603s-1.54-.144-3.46-6.22c-1.917-6.075-11.67-38.049-11.67-38.049l77.538-49.24s4.477-2.718 4.317 0c0 0 .799.48-1.6 2.718-2.397 2.239-60.91 54.836-60.91 54.836"})),l||(l=d.createElement("path",{fill:"#B5CFE4",d:"m122.901 168.115-20.867 19.026s-1.632 1.238-3.416.462l3.996-35.34"})))},avatar:f.Z},b=function(e){var r=e.name,n=e.color,t=(e.strokeColor,e.className),a=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]])}return n}(e,["name","color","strokeColor","className"]);return(0,i.jsx)(o.Z,{component:function(){var e=h[r],s=p[r],l={fill:n,color:n};return(0,i.jsx)(e,v({},a,{className:u()([p.serviceIcon,s,t]),style:l}))}})}}}]);