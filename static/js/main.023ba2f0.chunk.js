(this["webpackJsonpsales-app"]=this["webpackJsonpsales-app"]||[]).push([[0],{35:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var r=c(1),s=c(0),a=c.n(s),n=c(28),i=c.n(n),l=(c(35),c(8)),o=c(3),d=c(14),j=c(10);var b=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"font-bold py-3",children:"SalesApp"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"/",className:"text-blue-500 py-3 border-t border-b block",onClick:e.closeMenu,children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"/about",className:"text-blue-500 py-3 border-b block",onClick:e.closeMenu,children:"About"})})]})]})};var u=function(){var e=Object(s.useState)(!1),t=Object(d.a)(e,2),c=t[0],a=t[1],n=Object(j.b)(c,null,{from:{position:"absolute",opacity:0},enter:{opacity:1},leave:{opacity:0}}),i=Object(j.b)(c,null,{from:{opacity:0,transform:"translateX(-100%)"},enter:{opacity:1,transform:"translateX(0%)"},leave:{opacity:0,transform:"translateX(-100%)"}}),l=Object(r.jsx)("i",{class:"fas fa-bars",onClick:function(){return a(!c)}}),o=Object(r.jsx)("i",{class:"fas fa-times",onClick:function(){return a(!c)}}),u=Object(j.b)(c,null,{from:{position:"absolute",opacity:0,right:"20px",top:"10px"},enter:{opacity:1},leave:{opacity:0}});return Object(r.jsxs)("nav",{children:[Object(r.jsx)("span",{className:"text-xl",children:Object(r.jsx)("div",{className:"right-5 top-3",children:u.map((function(e){var t=e.item,c=(e.key,e.props);return t?Object(r.jsx)(j.a.div,{style:c,children:o}):Object(r.jsx)(j.a.div,{style:c,children:l})}))})}),n.map((function(e){var t=e.item,c=e.key,s=e.props;return t&&Object(r.jsx)(j.a.div,{style:s,className:"bg-black-t-50 fixed top-0 left-0 w-full h-full z-50",onClick:function(){return a(!1)}},c)})),i.map((function(e){var t=e.item,c=e.key,s=e.props;return t&&Object(r.jsx)(j.a.div,{style:s,className:"fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3",children:Object(r.jsx)(b,{closeMenu:function(){return a(!1)}})},c)}))]})};var p=function(){return Object(r.jsxs)("header",{className:"border-b p-3 flex justify-between items-center",children:[Object(r.jsx)("span",{className:"font-bold",children:Object(r.jsx)(l.b,{to:"/",children:"App Name"})}),Object(r.jsx)(u,{})]})};var x=function(){return Object(r.jsx)("footer",{className:"bg-gray-200 text-center text-xs p-3 absolute bottom-0 w-full",children:"SalesApp, \xa9 Copyright 2020"})};var h=function(){return Object(r.jsx)("div",{className:"flex justify-center",children:Object(r.jsx)("div",{className:"loader"})})};var O=function(e){return Object(r.jsxs)("div",{className:"border mb-4 rounded overflow-hidden",children:[Object(r.jsx)(l.b,{to:"/products/".concat(e.product.id),children:Object(r.jsx)("div",{className:"w-full h-64 bg-blue bg-cover",style:{backgroundImage:"url('".concat(e.product.images,"')")}})}),Object(r.jsxs)("div",{className:"p-3",children:[Object(r.jsx)("h3",{className:"font-bold text-xl mb-3",children:Object(r.jsx)(l.b,{to:"/products/".concat(e.product.id),children:e.product.name})}),Object(r.jsxs)("div",{className:"font-bold mb-3",children:["$ ",e.product.price]}),Object(r.jsx)("div",{className:"mb-3",children:e.product.description}),Object(r.jsx)(l.b,{to:"/products/".concat(e.product.id),className:"bg-blue-500 text-white p-2 flex justify-center w-full",children:"View"})]})]})},f=c(17),m=c.n(f);function v(e){var t=Object(s.useState)({loading:!1,data:null,error:!1}),c=Object(d.a)(t,2),r=c[0],a=c[1];return Object(s.useEffect)((function(){a({loading:!0,data:null,error:!1}),m.a.get(e).then((function(e){a({loading:!1,data:e.data,error:!1})})).catch((function(){a({loading:!1,data:null,error:!0})}))}),[e]),r}var g=function(){var e=v("https://5fb02f3a7edddb00164682d5.mockapi.io/products/?page=2&limit=10"),t=null;return e.error&&(t=Object(r.jsx)("p",{children:"There was an error, please refresh or try again later."})),e.loading&&(t=Object(r.jsx)(h,{})),e.data&&(t=e.data.map((function(e,t){return Object(r.jsx)("div",{children:Object(r.jsx)(O,{product:e})},e.id)}))),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"font-bold text-2xl mb-3",children:"Best Sellers"}),t]})};var y=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"font-bold text-2xl",children:"This is the about page"}),Object(r.jsx)("p",{children:"This is the about page content"})]})};var N=function(){var e=Object(o.f)().id,t=v("https://5fb02f3a7edddb00164682d5.mockapi.io/products/".concat(e)),c=null;return t.error&&(c=Object(r.jsx)("p",{children:"There was an error, please refresh or try again later."})),t.loading&&(c=Object(r.jsx)(h,{})),t.data&&(c=Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"text-2xl font-bold mb-3",children:t.data.name}),Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:"https://picsum.photos/600",alt:t.data.name})}),Object(r.jsxs)("div",{className:"font-bold text-xl mb-3",children:["$ ",t.data.price]}),Object(r.jsx)("div",{children:t.data.description})]})),Object(r.jsx)("div",{children:c})};var k=function(){return Object(r.jsx)("div",{className:"relative pb-10 min-h-screen",children:Object(r.jsxs)(l.a,{children:[Object(r.jsx)(p,{}),Object(r.jsx)("div",{className:"p-3",children:Object(r.jsxs)(o.c,{children:[Object(r.jsx)(o.a,{exact:!0,path:"/",children:Object(r.jsx)(g,{})}),Object(r.jsx)(o.a,{path:"/about",children:Object(r.jsx)(y,{})}),Object(r.jsx)(o.a,{path:"/products/:id",children:Object(r.jsx)(N,{})})]})}),Object(r.jsx)(x,{})]})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,62)).then((function(t){var c=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,n=t.getTTFB;c(e),r(e),s(e),a(e),n(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(k,{})}),document.getElementById("root")),w()}},[[61,1,2]]]);
//# sourceMappingURL=main.023ba2f0.chunk.js.map