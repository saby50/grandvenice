(this.webpackJsonpumagine=this.webpackJsonpumagine||[]).push([[26,27],{130:function(e,t,n){"use strict";n.r(t);var c=n(60),r=n(2),a=n(350),o=n(331),s=n(328),i=n(24),l=n(72),d=n(5);t.default=function(e){var t,n=e.setCat,u=e.showCat,j=Object(l.a)(i.a.firestore().collection("storeCategory")),b=Object(c.a)(j,3),f=b[0],h=b[1],v=(b[2],Object(r.useState)("")),x=Object(c.a)(v,2),O=x[0],g=x[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(a.a,{show:u,onHide:function(){return n(!1)},children:[Object(d.jsx)(a.a.Header,{closeButton:!0,children:Object(d.jsx)(a.a.Title,{children:"Store Update"})}),Object(d.jsxs)(a.a.Body,{children:[Object(d.jsxs)(o.a,{onSubmit:function(e){return function(e,t){t.preventDefault(),i.a.firestore().collection("storeCategory").add({label:e,id:e,value:e.toLowerCase()}).then((function(e){return alert("category added success")})).catch((function(e){return console.log(e)})).finally((function(){return g("")}))}(O,e)},children:[Object(d.jsxs)(o.a.Group,{children:[Object(d.jsx)(o.a.Label,{children:"Add category"}),Object(d.jsx)(o.a.Control,{type:"text",name:"store_category",onChange:function(e){g(e.target.value)}})]}),Object(d.jsx)("br",{}),Object(d.jsx)(s.a,{variant:"primary",type:"submit",children:"Upload"})]}),h&&Object(d.jsx)("div",{class:"d-flex justify-content-center",children:Object(d.jsx)("div",{class:"spinner-border",role:"status",children:Object(d.jsx)("span",{class:"sr-only",children:"Loading..."})})}),Object(d.jsx)("div",{className:"d-flex flex-column",children:null===f||void 0===f||null===(t=f.docs)||void 0===t?void 0:t.map((function(e,t){var n;return Object(d.jsxs)("div",{className:" my-1 d-flex justify-content-between",children:[null===e||void 0===e||null===(n=e.data())||void 0===n?void 0:n.label,Object(d.jsx)(s.a,{onClick:function(){return t=null===e||void 0===e?void 0:e.id,void i.a.firestore().collection("storeCategory").doc(t).delete().then((function(e){return alert("category deleted success")})).catch((function(e){return console.log(e)}));var t},variant:"danger",size:"sm",children:"DELETE"})]})}))})]})]})})}}}]);