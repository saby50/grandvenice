(this.webpackJsonpumagine=this.webpackJsonpumagine||[]).push([[28],{333:function(e,c,t){"use strict";t.r(c);var r=t(60),s=t(2),n=t(24),a=t(72),i=t(17),o=t(30),d=t(59),l=t.n(d),b=t(61),j=t(5),v=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],u=s.forwardRef((function(e,c){var t=e.bsPrefix,r=e.className,s=e.striped,n=e.bordered,a=e.borderless,d=e.hover,u=e.size,h=e.variant,f=e.responsive,O=Object(o.a)(e,v),p=Object(b.a)(t,"table"),x=l()(r,p,h&&"".concat(p,"-").concat(h),u&&"".concat(p,"-").concat(u),s&&"".concat(p,"-striped"),n&&"".concat(p,"-bordered"),a&&"".concat(p,"-borderless"),d&&"".concat(p,"-hover")),m=Object(j.jsx)("table",Object(i.a)(Object(i.a)({},O),{},{className:x,ref:c}));if(f){var k="".concat(p,"-responsive");return"string"===typeof f&&(k="".concat(k,"-").concat(f)),Object(j.jsx)("div",{className:k,children:m})}return m}));c.default=function(){var e,c=Object(a.a)(n.a.firestore().collection("users")),t=Object(r.a)(c,3),s=t[0];t[1],t[2];return Object(j.jsxs)(u,{striped:!0,bordered:!0,hover:!0,responsive:!0,variant:"dark",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Email"}),Object(j.jsx)("th",{children:"Request Granted"})]})}),Object(j.jsx)("tbody",{children:null===s||void 0===s||null===(e=s.docs)||void 0===e?void 0:e.map((function(e,c){var t,r,s;return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:null===e||void 0===e||null===(t=e.data())||void 0===t?void 0:t.name}),Object(j.jsx)("td",{children:null===e||void 0===e||null===(r=e.data())||void 0===r?void 0:r.email}),Object(j.jsx)("td",{children:Object(j.jsx)("div",{class:"form-check form-switch",children:Object(j.jsx)("input",{class:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",checked:null===e||void 0===e||null===(s=e.data())||void 0===s?void 0:s.access,onChange:function(){return function(e){var c;n.a.firestore().collection("users").doc(e.id).update({access:!(null===e||void 0===e||null===(c=e.data())||void 0===c?void 0:c.access)})}(e)}})})})]})}))})]})}}}]);