(this.webpackJsonpumagine=this.webpackJsonpumagine||[]).push([[13],{343:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var c=n(60),r=n(2),a=(n(69),n(24)),s=n(72),i=n(63),l=n(64),o=n(66),d=n(67),j=(n(68),n(10)),m=n(5);function b(){var e=Object(r.useState)({}),t=Object(c.a)(e,2),n=t[0],b=t[1],h=Object(j.h)().brandname,u=Object(s.a)(a.a.firestore().collection("store").where("slug","==",h)),x=Object(c.a)(u,3),O=x[0],f=x[1];x[2];return Object(r.useEffect)((function(){var e;b(null===O||void 0===O||null===(e=O.docs[0])||void 0===e?void 0:e.data())}),[f]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(i.a,{}),Object(m.jsx)(l.a,{}),Object(m.jsxs)("div",{className:"container-fluid",style:{fontFamily:"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif"},children:["   ",Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row py-5",children:[Object(m.jsx)("div",{className:"col-md-3",children:Object(m.jsx)("img",{className:"border",src:null===n||void 0===n?void 0:n.image_url})}),Object(m.jsxs)("div",{className:"col-md-6",children:[Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:Object(m.jsx)("b",{children:null===n||void 0===n?void 0:n.name})})}),Object(m.jsx)("div",{children:Object(m.jsx)("p",{children:"Built on a passion for competition and a sporting lifestyle, adidas offers premium sport apparel, footwear and accessories to elevate your performance and fit your style."})})]})]})})]}),Object(m.jsx)(o.a,{}),Object(m.jsx)(d.a,{})]})}},63:function(e,t,n){"use strict";var c=n(2),r=n(5),a=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"container-fluid py-2",style:{backgroundColor:"#000000",fontSize:"12px"},children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("p",{className:"text-light mb-0 d-flex justify-content-between w-100",children:Object(r.jsxs)("strong",{children:["Strict COVID 19 protocols are in place. Store hours may vary from center hours. Contact each retailer or restaurant directly for more information."," "]})})})})})};t.a=Object(c.memo)(a)},64:function(e,t,n){"use strict";var c=n(71),r=n(65),a=n(2),s=n(353),i=n(335),l=n(352),o=n(32),d=n(5),j=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(s.a,{collapseOnSelect:!0,expand:"lg",bg:"light",variant:"light",children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(s.a.Brand,{href:"/home",children:Object(d.jsxs)("div",{className:"d-flex align-items-center",children:[Object(d.jsxs)("span",{className:"me-3",style:{fontSize:"11px",fontWeight:"bold"},children:[" ",Object(d.jsx)(r.a,{icon:c.a})]}),Object(d.jsxs)("span",{children:["THE ",Object(d.jsx)("strong",{children:"GRAND VENICE MALL"})]})]})}),Object(d.jsx)(s.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(d.jsxs)(s.a.Collapse,{id:"responsive-navbar-nav",children:[Object(d.jsx)(l.a,{className:"me-auto",style:{fontSize:"11px",fontWeight:"bold"},children:Object(d.jsx)(l.a.Link,{className:"me-3",children:Object(d.jsx)(o.b,{to:"/",style:{color:"inherit",textDecoration:"inherit"}})})}),Object(d.jsxs)(l.a,{style:{fontSize:"11px",fontWeight:"bold"},children:[Object(d.jsx)(l.a.Link,{className:"me-3",children:Object(d.jsx)(o.b,{to:"/dining",style:{color:"inherit",textDecoration:"inherit"},children:"DINING"})}),Object(d.jsx)(l.a.Link,{className:"me-3",children:Object(d.jsx)(o.b,{to:"/stores",style:{color:"inherit",textDecoration:"inherit"},children:"STORES"})}),Object(d.jsx)(l.a.Link,{className:"me-3",children:Object(d.jsx)(o.b,{to:"/hours",style:{color:"inherit",textDecoration:"inherit"},children:"HOURS"})}),Object(d.jsx)(l.a.Link,{className:"me-3",children:Object(d.jsx)(o.b,{to:"/about",style:{color:"inherit",textDecoration:"inherit"},children:"ABOUT"})}),Object(d.jsx)(l.a.Link,{className:"me-3",children:Object(d.jsx)(o.b,{to:"/lease",style:{color:"inherit",textDecoration:"inherit"},children:"LEASING"})}),Object(d.jsx)(l.a.Link,{className:"me-3",children:Object(d.jsx)(o.b,{to:"/contact",style:{color:"inherit",textDecoration:"inherit"},children:"CONTACT"})})]})]})]})})})};t.a=Object(a.memo)(j)},66:function(e,t,n){"use strict";var c=n(31),r=n(17),a=n(60),s=n(2),i=n(24),l=n(70),o=n.n(l),d=n(5),j=function(){var e=Object(s.useState)({name:"",email:"",access:!1}),t=Object(a.a)(e,2),n=t[0],l=t[1],j=function(e){l(Object(r.a)(Object(r.a)({},n),{},Object(c.a)({},e.target.name,e.target.value)))};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"container-fluid py-5",style:{backgroundColor:"black"},children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("p",{className:"d-none d-md-block text-light text-center",style:{fontSize:"1.5rem",lineHeight:"2",marginBottom:"20px",fontWeight:"600"},children:"BECOME A MALL INSIDER TODAY."}),Object(d.jsxs)("div",{className:"p-2 mx-auto rounded",style:{maxWidth:"600px"},children:[Object(d.jsx)("form",{className:"form-inline",onSubmit:function(e){e.preventDefault(),""==n.name||""==n.email?alert("please fill the form correctly"):i.a.firestore().collection("users").add(n).then((function(e){o.a.post("https://us-central1-the-mall-site.cloudfunctions.net/sendEmail",{to:"info@veniceindia.com",subject:"[Access Request] MALL INSIDER",html_content:"<html><h3>User details</h3><p><b>Name: </b>".concat(n.name,"</p><p><b>Email address: </b>").concat(n.email,"</p></html>"),bcc:"me@iarani.com"}),alert("Thanks for registering")})).catch((function(e){return console.log("error",e)})).finally((function(){return l({name:"",email:""})}))},children:Object(d.jsxs)("div",{className:"row gx-1",children:[Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsx)("input",{type:"text",className:"form-control mr-sm-2 mb-md-0 mb-2",id:"inlineFormInputName",placeholder:"Your name",name:"name",onChange:j,value:null===n||void 0===n?void 0:n.name})}),Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsx)("input",{type:"email",className:"form-control mr-sm-2 mb-md-0 mb-2",id:"inlineFormInputEmail",placeholder:"Your email",name:"email",onChange:j,value:null===n||void 0===n?void 0:n.email})}),Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsx)("button",{type:"submit",className:"btn btn-danger w-100",children:Object(d.jsx)("span",{className:"small",children:"REQUEST ACCESS"})})})]})}),Object(d.jsx)("div",{className:"row gx-1 mt-5",children:Object(d.jsx)("div",{className:"col-md-12 text-center",children:Object(d.jsxs)("a",{href:"/reward",className:"text-light text-underline text-decoration-none border-bottom",children:["Learn more about ",Object(d.jsx)("strong",{children:"The Mall Insider Pass"})," "]})})})]})]})})})};t.a=Object(s.memo)(j)},67:function(e,t,n){"use strict";var c=n(2),r=n(65),a=n(73),s=n(5),i=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"container-fluid py-5",style:{backgroundColor:"white"},children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col-md-4",children:[Object(s.jsxs)("p",{style:{fontSize:"1.5rem",lineHeight:"1",fontWeight:"700"},children:[Object(s.jsx)("span",{style:{color:"#707070"},children:" DEALS. EVENTS."}),Object(s.jsx)("br",{})," EXCLUSIVE OFFERS!"," "]}),Object(s.jsx)("p",{classname:"mb-3 d-block",style:{fontSize:"0.9rem",lineHeight:"1.2"},children:"Become a Mall Insider today and get the first one to receive latest updates on deals, events and exclusive offers."}),Object(s.jsx)("p",{className:"small",children:"\xa9 2021 The Grand Venice Mall, Venture of Bhasin Infotech & Infrastructure Private Limited"})]}),Object(s.jsxs)("div",{className:"col-md-8",children:[Object(s.jsxs)("div",{className:"d-flex justify-content-between pb-4 border-bottom",children:[Object(s.jsxs)("div",{className:"",children:[Object(s.jsx)("a",{className:"text-decoration-none me-3 text-dark d-none d-md-inline",href:"https://www.facebook.com/GrandVenice",target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)("small",{children:Object(s.jsx)(r.a,{icon:a.a})})}),Object(s.jsx)("a",{className:"text-decoration-none m-3 text-dark d-none d-md-inline",href:"https://www.instagram.com/grandvenicemall/",target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)("small",{children:Object(s.jsx)(r.a,{icon:a.b})})}),Object(s.jsx)("a",{className:"text-decoration-none m-3 text-dark d-none d-md-inline",href:"https://twitter.com/grandvenicemall",target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)("small",{children:Object(s.jsx)(r.a,{icon:a.d})})}),Object(s.jsx)("a",{className:"text-decoration-none m-3 text-dark d-none d-md-inline",href:"https://www.linkedin.com/company/28705772/",target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)("small",{children:Object(s.jsx)(r.a,{icon:a.c})})})]}),Object(s.jsx)("div",{className:"",children:Object(s.jsx)("a",{className:"text-decoration-none m-3 text-dark d-none d-md-inline",href:"/stores",children:Object(s.jsx)("small",{children:"STORES"})})})]}),Object(s.jsxs)("div",{className:"row py-3 justify-content-between",children:[Object(s.jsx)("div",{className:"col-md-2 col-6 small",children:Object(s.jsx)("a",{href:"/about",className:"d-block mb-2 text-dark text-decoration-none",children:"ABOUT"})}),Object(s.jsx)("div",{className:"col-md-2 col-6 small",children:Object(s.jsx)("a",{href:"/venture",className:"d-block mb-2 text-dark text-decoration-none",children:"ADVERTISING"})}),Object(s.jsx)("div",{className:"col-md-2 col-6 small",children:Object(s.jsx)("a",{href:"/lease",className:"d-block mb-2 text-dark text-decoration-none",children:"LEASING"})}),Object(s.jsx)("div",{className:"col-md-2 col-6 small",children:Object(s.jsx)("a",{href:"/reward",className:"d-block mb-2 text-dark text-decoration-none",children:"INSIDER PASS"})}),Object(s.jsx)("div",{className:"col-md-4 col-6 small",children:Object(s.jsx)("a",{href:"/certifications",className:"d-block mb-2 text-dark text-decoration-none",children:"CERTIFICATES AND AWARDS"})})]})]})]})})})})};t.a=Object(c.memo)(i)},68:function(e,t,n){"use strict";var c=n(2),r=n(5),a=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"feedback",children:Object(r.jsx)("button",{type:"submit",className:"btn btn-danger w-35",children:Object(r.jsx)("span",{style:{fontWeight:"700"},children:"Feedback"})})})})};t.a=Object(c.memo)(a)},69:function(e,t,n){},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(2),r=function(){return(r=Object.assign||function(e){for(var t,n=1,c=arguments.length;n<c;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},a=function(e){return{loading:void 0===e||null===e,value:e}},s=function(e){var t=e?e():void 0,n=Object(c.useReducer)((function(e,t){switch(t.type){case"error":return r({},e,{error:t.error,loading:!1,value:void 0});case"reset":return a(t.defaultValue);case"value":return r({},e,{error:void 0,loading:!1,value:t.value});default:return e}}),a(t)),s=n[0],i=n[1],l=function(){var t=e?e():void 0;i({type:"reset",defaultValue:t})},o=function(e){i({type:"error",error:e})},d=function(e){i({type:"value",value:e})};return Object(c.useMemo)((function(){return{error:s.error,loading:s.loading,reset:l,setError:o,setValue:d,value:s.value}}),[s.error,s.loading,l,o,d,s.value])},i=function(e,t){var n=!e&&!t,c=!!e&&!!t&&e.isEqual(t);return n||c},l=function(e,t){return function(e,t,n){var r=Object(c.useRef)(e);return Object(c.useEffect)((function(){t(e,r.current)||(r.current=e,n&&n())})),r}(e,i,t)},o=function(e,t){return d(!0,e,t)},d=function(e,t,n){var r=s(),a=r.error,i=r.loading,o=r.reset,d=r.setError,j=r.setValue,m=r.value,b=l(t,o);Object(c.useEffect)((function(){if(b.current){if(e){var t=n&&n.snapshotListenOptions?b.current.onSnapshot(n.snapshotListenOptions,j,d):b.current.onSnapshot(j,d);return function(){t()}}b.current.get(n?n.getOptions:void 0).then(j).catch(d)}else j(void 0)}),[b.current]);var h=[m,i,a];return Object(c.useMemo)((function(){return h}),h)}}}]);