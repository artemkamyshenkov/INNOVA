"use strict";(self.webpackChunkinnova_ipr=self.webpackChunkinnova_ipr||[]).push([[693],{9693:function(n,r,e){e.r(r),e.d(r,{default:function(){return f}});var t=e(5893),c=e(7294),u=e(6424),i=e(3314),a=e(2216),o=e(1659),s=function(n){var r=n.photoData;return(0,t.jsx)(o.Z,{src:null==r?void 0:r.url,width:500,height:500,className:"riHfl4UB",preview:!1})},l=function(n,r,e){if(e||2===arguments.length)for(var t,c=0,u=r.length;c<u;c++)!t&&c in r||(t||(t=Array.prototype.slice.call(r,0,c)),t[c]=r[c]);return n.concat(t||Array.prototype.slice.call(r))},f=function(){var n=(0,c.useState)([]),r=n[0],e=n[1],o=(0,c.useState)(1),f=o[0],p=o[1],v=(0,u.jb)(f),d=v.data,h=v.isLoading,g=v.isFetching,b=(0,c.useCallback)((function(){g||p((function(n){return n+1}))}),[g]);return(0,c.useEffect)((function(){!h&&d&&e((function(n){return l(l([],n,!0),d,!0)}))}),[d,h]),h?(0,t.jsx)(i.w,{}):(0,t.jsxs)(a.T,{className:"wEs1SOZg",onScrollEnd:b,children:[r&&r.map((function(n){return(0,t.jsx)(s,{photoData:n},null==n?void 0:n.id)})),g&&(0,t.jsx)(i.w,{})]})}},2216:function(n,r,e){e.d(r,{T:function(){return a}});var t=e(5893),c=e(7294),u=e(4184),i=e.n(u),a=function(n){var r=n.className,e=n.children,u=n.onScrollEnd,a=(0,c.useRef)(),o=(0,c.useRef)();return function(n){var r=n.callback,e=n.wrapperRef,t=n.triggerRef,u=(0,c.useRef)(null);(0,c.useEffect)((function(){var n=t.current;return r&&(u.current=new IntersectionObserver((function(n){n[0].isIntersecting&&r()}),{root:null,rootMargin:"0px",threshold:1}),u.current.observe(n)),function(){u.current&&n&&u.current.unobserve(n)}}),[e,t,r])}({triggerRef:o,wrapperRef:a,callback:u}),(0,t.jsxs)("section",{ref:a,className:i()("GbBEaO_D",r),children:[e,(0,t.jsx)("div",{ref:o})]})}}}]);