/*! For license information please see 9.495c6561.chunk.js.LICENSE.txt */
(this.webpackJsonpumagine=this.webpackJsonpumagine||[]).push([[9],{101:function(e,a,t){"use strict";function r(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,r=new Array(a);t<a;t++)r[t]=e[t];return r}t.d(a,"a",(function(){return r}))},104:function(e,a,t){"use strict";var r=t(17),c=t(30),n=t(59),i=t.n(n),s=t(2),o=t(61),l=t(5),d=["bsPrefix","className","as"],b=["xxl","xl","lg","md","sm","xs"],f=s.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,s=e.as,f=void 0===s?"div":s,u=Object(c.a)(e,d),v=Object(o.a)(t,"row"),j="".concat(v,"-cols"),m=[];return b.forEach((function(e){var a,t=u[e];delete u[e],a=null!=t&&"object"===typeof t?t.cols:t;var r="xs"!==e?"-".concat(e):"";null!=a&&m.push("".concat(j).concat(r,"-").concat(a))})),Object(l.jsx)(f,Object(r.a)(Object(r.a)({ref:a},u),{},{className:i.a.apply(void 0,[n,v].concat(m))}))}));f.displayName="Row",a.a=f},328:function(e,a,t){"use strict";var r=t(17),c=t(60),n=t(30),i=t(59),s=t.n(i),o=t(2),l=t(90),d=t(61),b=t(5),f=["as","bsPrefix","variant","size","active","className"],u=o.forwardRef((function(e,a){var t=e.as,i=e.bsPrefix,o=e.variant,u=e.size,v=e.active,j=e.className,m=Object(n.a)(e,f),O=Object(d.a)(i,"btn"),p=Object(l.b)(Object(r.a)({tagName:t},m)),x=Object(c.a)(p,2),y=x[0],h=x[1].tagName;return Object(b.jsx)(h,Object(r.a)(Object(r.a)(Object(r.a)({},m),y),{},{ref:a,className:s()(j,O,v&&"active",o&&"".concat(O,"-").concat(o),u&&"".concat(O,"-").concat(u),m.href&&m.disabled&&"disabled")}))}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},a.a=u},331:function(e,a,t){"use strict";var r=t(17),c=t(30),n=t(59),i=t.n(n),s=t(18),o=t.n(s),l=t(2),d=t(5),b=["as","className","type","tooltip"],f={type:o.a.string,tooltip:o.a.bool,as:o.a.elementType},u=l.forwardRef((function(e,a){var t=e.as,n=void 0===t?"div":t,s=e.className,o=e.type,l=void 0===o?"valid":o,f=e.tooltip,u=void 0!==f&&f,v=Object(c.a)(e,b);return Object(d.jsx)(n,Object(r.a)(Object(r.a)({},v),{},{ref:a,className:i()(s,"".concat(l,"-").concat(u?"tooltip":"feedback"))}))}));u.displayName="Feedback",u.propTypes=f;var v=u,j=l.createContext({}),m=t(61),O=["id","bsPrefix","className","type","isValid","isInvalid","as"],p=l.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,s=e.className,o=e.type,b=void 0===o?"checkbox":o,f=e.isValid,u=void 0!==f&&f,v=e.isInvalid,p=void 0!==v&&v,x=e.as,y=void 0===x?"input":x,h=Object(c.a)(e,O),N=Object(l.useContext)(j).controlId;return n=Object(m.a)(n,"form-check-input"),Object(d.jsx)(y,Object(r.a)(Object(r.a)({},h),{},{ref:a,type:b,id:t||N,className:i()(s,n,u&&"is-valid",p&&"is-invalid")}))}));p.displayName="FormCheckInput";var x=p,y=["bsPrefix","className","htmlFor"],h=l.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,s=e.htmlFor,o=Object(c.a)(e,y),b=Object(l.useContext)(j).controlId;return t=Object(m.a)(t,"form-check-label"),Object(d.jsx)("label",Object(r.a)(Object(r.a)({},o),{},{ref:a,htmlFor:s||b,className:i()(n,t)}))}));h.displayName="FormCheckLabel";var N=h,g=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","as"],P=l.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,s=e.bsSwitchPrefix,o=e.inline,b=void 0!==o&&o,f=e.disabled,u=void 0!==f&&f,O=e.isValid,p=void 0!==O&&O,y=e.isInvalid,h=void 0!==y&&y,P=e.feedbackTooltip,w=void 0!==P&&P,I=e.feedback,C=e.className,F=e.style,k=e.title,R=void 0===k?"":k,S=e.type,z=void 0===S?"checkbox":S,T=e.label,V=e.children,A=e.as,L=void 0===A?"input":A,D=Object(c.a)(e,g);n=Object(m.a)(n,"form-check"),s=Object(m.a)(s,"form-switch");var E=Object(l.useContext)(j).controlId,H=Object(l.useMemo)((function(){return{controlId:t||E}}),[E,t]),M=null!=T&&!1!==T&&!V,U=Object(d.jsx)(x,Object(r.a)(Object(r.a)({},D),{},{type:"switch"===z?"checkbox":z,ref:a,isValid:p,isInvalid:h,disabled:u,as:L}));return Object(d.jsx)(j.Provider,{value:H,children:Object(d.jsx)("div",{style:F,className:i()(C,T&&n,b&&"".concat(n,"-inline"),"switch"===z&&s),children:V||Object(d.jsxs)(d.Fragment,{children:[U,M&&Object(d.jsx)(N,{title:R,children:T}),(p||h)&&Object(d.jsx)(v,{type:p?"valid":"invalid",tooltip:w,children:I})]})})})}));P.displayName="FormCheck";var w=Object.assign(P,{Input:x,Label:N}),I=t(31),C=(t(94),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),F=l.forwardRef((function(e,a){var t,n,s=e.bsPrefix,o=e.type,b=e.size,f=e.htmlSize,u=e.id,v=e.className,O=e.isValid,p=void 0!==O&&O,x=e.isInvalid,y=void 0!==x&&x,h=e.plaintext,N=e.readOnly,g=e.as,P=void 0===g?"input":g,w=Object(c.a)(e,C),F=Object(l.useContext)(j).controlId;(s=Object(m.a)(s,"form-control"),h)?t=Object(I.a)({},"".concat(s,"-plaintext"),!0):(n={},Object(I.a)(n,s,!0),Object(I.a)(n,"".concat(s,"-").concat(b),b),t=n);return Object(d.jsx)(P,Object(r.a)(Object(r.a)({},w),{},{type:o,size:f,ref:a,readOnly:N,id:u||F,className:i()(v,t,p&&"is-valid",y&&"is-invalid","color"===o&&"".concat(s,"-color"))}))}));F.displayName="FormControl";var k=Object.assign(F,{Feedback:v}),R=t(80),S=Object(R.a)("form-floating"),z=["controlId","as"],T=l.forwardRef((function(e,a){var t=e.controlId,n=e.as,i=void 0===n?"div":n,s=Object(c.a)(e,z),o=Object(l.useMemo)((function(){return{controlId:t}}),[t]);return Object(d.jsx)(j.Provider,{value:o,children:Object(d.jsx)(i,Object(r.a)(Object(r.a)({},s),{},{ref:a}))})}));T.displayName="FormGroup";var V=T,A=t(86),L=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],D=l.forwardRef((function(e,a){var t=e.as,n=void 0===t?"label":t,s=e.bsPrefix,o=e.column,b=e.visuallyHidden,f=e.className,u=e.htmlFor,v=Object(c.a)(e,L),O=Object(l.useContext)(j).controlId;s=Object(m.a)(s,"form-label");var p="col-form-label";"string"===typeof o&&(p="".concat(p," ").concat(p,"-").concat(o));var x=i()(f,s,b&&"visually-hidden",o&&p);return u=u||O,o?Object(d.jsx)(A.a,Object(r.a)({ref:a,as:"label",className:x,htmlFor:u},v)):Object(d.jsx)(n,Object(r.a)({ref:a,className:x,htmlFor:u},v))}));D.displayName="FormLabel",D.defaultProps={column:!1,visuallyHidden:!1};var E=D,H=["bsPrefix","className","id"],M=l.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,s=e.id,o=Object(c.a)(e,H),b=Object(l.useContext)(j).controlId;return t=Object(m.a)(t,"form-range"),Object(d.jsx)("input",Object(r.a)(Object(r.a)({},o),{},{type:"range",ref:a,className:i()(n,t),id:s||b}))}));M.displayName="FormRange";var U=M,B=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],G=l.forwardRef((function(e,a){var t=e.bsPrefix,n=e.size,s=e.htmlSize,o=e.className,b=e.isValid,f=void 0!==b&&b,u=e.isInvalid,v=void 0!==u&&u,O=e.id,p=Object(c.a)(e,B),x=Object(l.useContext)(j).controlId;return t=Object(m.a)(t,"form-select"),Object(d.jsx)("select",Object(r.a)(Object(r.a)({},p),{},{size:s,ref:a,className:i()(o,t,n&&"".concat(t,"-").concat(n),f&&"is-valid",v&&"is-invalid"),id:O||x}))}));G.displayName="FormSelect";var J=G,K=["bsPrefix","className","as","muted"],$=l.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,s=e.as,o=void 0===s?"small":s,l=e.muted,b=Object(c.a)(e,K);return t=Object(m.a)(t,"form-text"),Object(d.jsx)(o,Object(r.a)(Object(r.a)({},b),{},{ref:a,className:i()(n,t,l&&"text-muted")}))}));$.displayName="FormText";var _=$,q=l.forwardRef((function(e,a){return Object(d.jsx)(w,Object(r.a)(Object(r.a)({},e),{},{ref:a,type:"switch"}))}));q.displayName="Switch";var Q=Object.assign(q,{Input:w.Input,Label:w.Label}),W=["bsPrefix","className","children","controlId","label"],X=l.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,s=e.children,o=e.controlId,l=e.label,b=Object(c.a)(e,W);return t=Object(m.a)(t,"form-floating"),Object(d.jsxs)(V,Object(r.a)(Object(r.a)({ref:a,className:i()(n,t),controlId:o},b),{},{children:[s,Object(d.jsx)("label",{htmlFor:o,children:l})]}))}));X.displayName="FloatingLabel";var Y=X,Z=["className","validated","as"],ee={_ref:o.a.any,validated:o.a.bool,as:o.a.elementType},ae=l.forwardRef((function(e,a){var t=e.className,n=e.validated,s=e.as,o=void 0===s?"form":s,l=Object(c.a)(e,Z);return Object(d.jsx)(o,Object(r.a)(Object(r.a)({},l),{},{ref:a,className:i()(t,n&&"was-validated")}))}));ae.displayName="Form",ae.propTypes=ee;a.a=Object.assign(ae,{Group:V,Control:k,Floating:S,Check:w,Switch:Q,Label:E,Text:_,Range:U,Select:J,FloatingLabel:Y})},59:function(e,a,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function c(){for(var e=[],a=0;a<arguments.length;a++){var r=arguments[a];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)){if(r.length){var i=c.apply(null,r);i&&e.push(i)}}else if("object"===n)if(r.toString===Object.prototype.toString)for(var s in r)t.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(r=function(){return c}.apply(a,[]))||(e.exports=r)}()},60:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var r=t(87);function c(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,c=!1,n=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(t.push(i.value),!a||t.length!==a);r=!0);}catch(o){c=!0,n=o}finally{try{r||null==s.return||s.return()}finally{if(c)throw n}}return t}}(e,a)||Object(r.a)(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},61:function(e,a,t){"use strict";t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return i}));t(17);var r=t(2),c=(t(5),r.createContext({prefixes:{}}));c.Consumer,c.Provider;function n(e,a){var t=Object(r.useContext)(c).prefixes;return e||t[a]||a}function i(){return"rtl"===Object(r.useContext)(c).dir}},80:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var r=t(17),c=t(30),n=t(59),i=t.n(n),s=/-(.)/g;var o=t(2),l=t(61),d=t(5),b=["className","bsPrefix","as"],f=function(e){return e[0].toUpperCase()+(a=e,a.replace(s,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function u(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.displayName,n=void 0===t?f(e):t,s=a.Component,u=a.defaultProps,v=o.forwardRef((function(a,t){var n=a.className,o=a.bsPrefix,f=a.as,u=void 0===f?s||"div":f,v=Object(c.a)(a,b),j=Object(l.a)(o,e);return Object(d.jsx)(u,Object(r.a)({ref:t,className:i()(n,j)},v))}));return v.defaultProps=u,v.displayName=n,v}},86:function(e,a,t){"use strict";var r=t(60),c=t(17),n=t(30),i=t(59),s=t.n(i),o=t(2),l=t(61),d=t(5),b=["as","bsPrefix","className"],f=["className"],u=["xxl","xl","lg","md","sm","xs"];var v=o.forwardRef((function(e,a){var t=function(e){var a=e.as,t=e.bsPrefix,r=e.className,i=Object(n.a)(e,b);t=Object(l.a)(t,"col");var o=[],d=[];return u.forEach((function(e){var a,r,c,n=i[e];if(delete i[e],"object"===typeof n&&null!=n){var s=n.span;a=void 0===s||s,r=n.offset,c=n.order}else a=n;var l="xs"!==e?"-".concat(e):"";a&&o.push(!0===a?"".concat(t).concat(l):"".concat(t).concat(l,"-").concat(a)),null!=c&&d.push("order".concat(l,"-").concat(c)),null!=r&&d.push("offset".concat(l,"-").concat(r))})),[Object(c.a)(Object(c.a)({},i),{},{className:s.a.apply(void 0,[r].concat(d,o))}),{as:a,bsPrefix:t,spans:o}]}(e),i=Object(r.a)(t,2),o=i[0],v=o.className,j=Object(n.a)(o,f),m=i[1],O=m.as,p=void 0===O?"div":O,x=m.bsPrefix,y=m.spans;return Object(d.jsx)(p,Object(c.a)(Object(c.a)({},j),{},{ref:a,className:s()(v,!y.length&&x)}))}));v.displayName="Col",a.a=v},87:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var r=t(101);function c(e,a){if(e){if("string"===typeof e)return Object(r.a)(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(r.a)(e,a):void 0}}},90:function(e,a,t){"use strict";t.d(a,"b",(function(){return s}));var r=t(60),c=t(2),n=t(5),i=["as","disabled"];function s(e){var a=e.tagName,t=e.disabled,r=e.href,c=e.target,n=e.rel,i=e.onClick,s=e.tabIndex,o=void 0===s?0:s,l=e.type;a||(a=null!=r||null!=c||null!=n?"a":"button");var d={tagName:a};if("button"===a)return[{type:l||"button",disabled:t},d];var b=function(e){(t||"a"===a&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),t?e.stopPropagation():null==i||i(e)};return[{role:"button",disabled:void 0,tabIndex:t?void 0:o,href:"a"===a&&t?void 0:r,target:"a"===a?c:void 0,"aria-disabled":t||void 0,rel:"a"===a?n:void 0,onClick:b,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),b(e))}},d]}var o=c.forwardRef((function(e,a){var t=e.as,c=e.disabled,o=function(e,a){if(null==e)return{};var t,r,c={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,i),l=s(Object.assign({tagName:t,disabled:c},o)),d=Object(r.a)(l,2),b=d[0],f=d[1].tagName;return Object(n.jsx)(f,Object.assign({},o,b,{ref:a}))}));o.displayName="Button",a.a=o},94:function(e,a,t){"use strict";var r=function(){};e.exports=r}}]);