(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{26:function(e,t,r){},41:function(e,t,r){},42:function(e,t,r){},49:function(e,t,r){},50:function(e,t,r){},52:function(e,t,r){},53:function(e,t,r){},54:function(e,t,r){},55:function(e,t,r){},56:function(e,t,r){"use strict";r.r(t);var c=r(1),a=r.n(c),s=r(28),n=r.n(s),o=(r(41),r(42),r(9)),i=r(3),d=r(22),l=(r(26),r(67)),j=r(34),u=r(19),b=r.n(u),m=b()((function(e,t){return{compras:[],guardarProductos:function(t,r){e((function(e){return{compras:[].concat(Object(j.a)(e.compras),[{name:t,url:r}])}}))},eliminarProductos:function(r){var c=t().compras;e({compras:c.filter((function(e){return e.name!==r}))})},numCompras:0,obtenerNumCompras:function(){e((function(e){return{numCompras:e.compras.length}}))}}})),h=r(12),p=r.n(h),O=r(0);function x(e){var t=e.name,r=e.url,c=m((function(e){return{guardarProductos:e.guardarProductos,eliminarProductos:e.eliminarProductos,obtenerNumCompras:e.obtenerNumCompras,numCompras:e.numCompras}}),p.a),a=c.guardarProductos,s=c.eliminarProductos,n=c.obtenerNumCompras,d=Object(i.f)();return Object(O.jsxs)("div",{className:"card-div",children:[Object(O.jsx)("h2",{className:"card-title",children:t}),Object(O.jsx)("div",{className:"card-description",children:"Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."}),Object(O.jsxs)("div",{className:"card-stars",children:[Object(O.jsx)(l.a,{children:"grade"}),Object(O.jsx)(l.a,{children:"grade"}),Object(O.jsx)(l.a,{children:"grade"}),Object(O.jsx)(l.a,{children:"grade"}),Object(O.jsx)(l.a,{children:"grade"})]}),Object(O.jsxs)("div",{className:"card-foot",children:["/Buy"!==d.pathname&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("button",{className:"card-botton",children:Object(O.jsx)(o.b,{className:"card-botton-product",to:"/producto/".concat(r.split("/")[6]),children:"Ver m\xe1s"})}),Object(O.jsx)("button",{className:"card-botton",onClick:function(){a(t,r),n()},children:"Agregar al carrito"})]}),Object(O.jsx)("button",{className:"card-botton",onClick:function(){s(t),n()},children:"Quitar del carrito"})]})]})}r(49);function f(e){var t=e.productos;return Object(O.jsx)("div",{className:"productos",children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(O.jsx)(x,Object(d.a)({},e),t)}))})}var v=r(14);r(50);function g(e){e.onIconValue;var t=m((function(e){return{numCompras:e.numCompras}}),p.a).numCompras;return Object(O.jsx)("div",{children:t})}var N=Object(c.createContext)("usuario");function C(){var e=Object(c.useContext)(N),t=e.jwt,r=e.setJwt,a=Object(c.useCallback)((function(e){e.userName,e.password;r("test")}),[r]),s=Object(c.useCallback)((function(){r(null)}),[r]);return{isLogged:Boolean(t),login:a,logout:s}}function w(){var e=C(),t=e.isLogged,r=e.logout,a=Object(c.useState)(!1),s=Object(v.a)(a,2),n=s[0],i=s[1];return Object(O.jsx)("nav",{className:"barra-nav",children:Object(O.jsxs)("ul",{className:"barra-ul",children:[Object(O.jsx)("li",{className:"principal",children:Object(O.jsx)(o.b,{className:"barra-li",to:"/",children:Object(O.jsx)(l.a,{children:"storefront"})})}),t?Object(O.jsx)("li",{className:"second ".concat(n?"active":""),children:Object(O.jsx)(o.b,{className:"barra-li",onClick:r,children:"Logout"})}):Object(O.jsx)("li",{className:"second ".concat(n?"active":""),children:Object(O.jsx)(o.b,{className:"barra-li",to:"/Login",children:"Login"})}),Object(O.jsx)("li",{className:"second ".concat(n?"active":""),children:Object(O.jsx)(o.b,{className:"barra-li",to:"/SigIn",children:"Sign In"})}),Object(O.jsx)("li",{className:"second ".concat(n?"active":""),children:Object(O.jsxs)(o.b,{className:"barra-li icon",to:"/Buy",children:[Object(O.jsx)(g,{}),Object(O.jsx)(l.a,{children:"shopping_cart"})]})}),Object(O.jsx)("li",{className:"barra-li toggle",onClick:function(){return i(!n)},children:n?Object(O.jsx)(l.a,{children:"highlight_off"}):Object(O.jsx)(l.a,{children:"menu"})})]})})}function P(e){var t=e.title;return Object(O.jsx)("div",{children:Object(O.jsx)("p",{children:t})})}function L(e){var t=e.message;return Object(O.jsx)("p",{children:t})}var k=r(13),y=r.n(k),E=r(17);function S(e){return M.apply(this,arguments)}function M(){return(M=Object(E.a)(y.a.mark((function e(t){var r,c,a,s,n,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.url,c=t.method,a=void 0===c?"get":c,s=t.body,n=t.headers,e.prev=1,e.next=4,fetch(r,{method:a,body:s,headers:n});case 4:return o=e.sent,e.abrupt("return",o.json());case 8:e.prev=8,e.t0=e.catch(1),Promise.reject(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}var D=b()((function(e,t){return{getProductos:function(){var t=Object(E.a)(y.a.mark((function t(){var r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e({isLoading:!0,errorMessage:"",hasError:!1}),t.next=4,S({url:"https://pokeapi.co/api/v2/pokemon?limit=100"});case 4:r=t.sent,e({productos:r.results}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e({productos:[],errorMessage:"Algo ha pasado",hasError:!0});case 11:return t.prev=11,e({isLoading:!1}),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}(),productos:[],getProductoDetail:function(){var t=Object(E.a)(y.a.mark((function t(r){var c;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r||Promise.reject("Id es requerido"),t.prev=1,e({isLoading:!0,errorMessage:"",hasError:!1}),t.next=5,S({url:"https://pokeapi.co/api/v2/pokemon/".concat(r)});case 5:c=t.sent,e({productoDetail:c}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e({hasError:!0,errorMessage:"Algo ha pasado",productoDetail:{}});case 12:return t.prev=12,e({isLoading:!1}),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(e){return t.apply(this,arguments)}}(),productoDetail:{},isLoading:!1,errorMessage:"",hasError:!1}})),F=D;function I(){var e=F((function(e){return{getProductos:e.getProductos,productos:e.productos,isLoading:e.isLoading,hasError:e.hasError,errorMessage:e.errorMessage}}),p.a),t=e.getProductos,r=e.productos,a=e.isLoading,s=e.hasError,n=e.errorMessage;return Object(c.useEffect)((function(){t().catch(null)}),[t]),a?Object(O.jsx)(P,{title:"Cargando resultados..."}):Object(O.jsx)(O.Fragment,{children:s?Object(O.jsx)(L,{message:n}):Object(O.jsxs)("div",{children:[Object(O.jsx)(w,{}),Object(O.jsx)(f,{productos:r})]})})}r(52);function q(){var e=m((function(e){return{compras:e.compras}})).compras;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(w,{}),Object(O.jsx)("div",{className:"productos",children:null===e||void 0===e?void 0:e.map((function(e,t){return Object(O.jsx)(x,Object(d.a)({},e),t)}))}),Object(O.jsx)("div",{className:"compra",children:Object(O.jsx)("button",{className:"compra-button",children:"Confirmar compra"})})]})}function B(e){var t=e.name,r=e.peso,c=e.height;return Object(O.jsxs)("div",{className:"card-div",children:[Object(O.jsx)("h2",{className:"card-title",children:t}),Object(O.jsx)("div",{className:"card-description",children:"Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."}),Object(O.jsx)("p",{children:"Peso: ".concat(r," kgs.")}),Object(O.jsx)("p",{children:"Altura: ".concat(c," cms.")}),Object(O.jsxs)("div",{className:"card-foot",children:[Object(O.jsx)("button",{className:"card-botton",children:"Agregar al carrito"}),Object(O.jsx)("button",{className:"card-botton",children:"Quitar del carrito"})]})]})}r(53);function A(){var e=Object(i.g)().id,t=F((function(e){return{getProductoDetail:e.getProductoDetail,productoDetail:e.productoDetail,isLoading:e.isLoading,hasError:e.hasError,errorMessage:e.errorMessage}}),p.a),r=t.getProductoDetail,a=t.productoDetail,s=t.isLoading,n=t.hasError,o=t.errorMessage;return Object(c.useEffect)((function(){r(e).catch(null)}),[r,e]),s?Object(O.jsx)(P,{title:"Cargando producto..."}):Object(O.jsx)("div",{children:n?Object(O.jsx)(L,{message:o}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(w,{}),Object(O.jsx)("div",{className:"mustcard",children:Object(O.jsx)(B,{name:null===a||void 0===a?void 0:a.name,peso:null===a||void 0===a?void 0:a.weight,height:null===a||void 0===a?void 0:a.height})})]})})}r(54);function T(){var e=Object(c.useState)(""),t=Object(v.a)(e,2),r=t[0],a=t[1],s=Object(c.useState)(""),n=Object(v.a)(s,2),o=n[0],d=n[1],l=C(),j=l.login,u=l.isLogged,b=Object(i.f)();Object(c.useEffect)((function(){u&&b("/")}),[u,b]);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(w,{}),Object(O.jsx)("di",{className:"contend",children:Object(O.jsxs)("div",{className:"contend-elements",children:[Object(O.jsx)("p",{className:"contend-elements-title",children:"Client"}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j({userName:r,password:o})},action:"",method:"POST",className:"contend-elements-form",children:[Object(O.jsxs)("div",{className:"form-div",children:[Object(O.jsx)("label",{for:"email",children:"E-mail"}),Object(O.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return a(e.target.value)},value:r,required:!0}),Object(O.jsx)("span",{className:"form-div-barra"})]}),Object(O.jsxs)("div",{className:"form-div",children:[Object(O.jsx)("label",{for:"password",children:"Password"}),Object(O.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return d(e.target.value)},value:o,required:!0}),Object(O.jsx)("span",{className:"form-div-barra"})]}),Object(O.jsx)("div",{className:"form-div",children:Object(O.jsx)("button",{className:"form-div-button",type:"submit",children:"Send"})})]})]})})]})}r(55);function J(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(w,{}),Object(O.jsx)("div",{className:"contend",children:Object(O.jsxs)("div",{className:"contend-elements",children:[Object(O.jsx)("p",{className:"contend-elements-title",children:"Personal information"}),Object(O.jsxs)("form",{action:"",method:"POST",className:"contend-elements-form",children:[Object(O.jsxs)("div",{className:"form-div",children:[Object(O.jsx)("label",{for:"nombre",children:"Name"}),Object(O.jsx)("input",{type:"text",name:"nombre",id:"nombre",required:!0}),Object(O.jsx)("span",{className:"form-div-barra"})]}),Object(O.jsxs)("div",{className:"form-div",children:[Object(O.jsx)("label",{for:"apellido",children:"Last name"}),Object(O.jsx)("input",{type:"text",name:"apellido",id:"apellido",required:!0}),Object(O.jsx)("span",{className:"form-div-barra"})]}),Object(O.jsxs)("div",{className:"form-tel",children:[Object(O.jsx)("label",{for:"telefono",children:"Cell phone"}),Object(O.jsx)("input",{type:"tel",name:"telefono",id:"telefono",required:!0}),Object(O.jsx)("span",{className:"form-div-barra"})]}),Object(O.jsxs)("div",{className:"form-div",children:[Object(O.jsx)("label",{for:"email",children:"E-mail"}),Object(O.jsx)("input",{type:"email",name:"email",id:"email",required:!0}),Object(O.jsx)("span",{className:"form-div-barra"})]}),Object(O.jsxs)("div",{className:"form-div",children:[Object(O.jsx)("label",{for:"password",children:"Password"}),Object(O.jsx)("input",{type:"password",name:"password",id:"password",required:!0}),Object(O.jsx)("span",{className:"form-div-barra"})]}),Object(O.jsxs)("div",{className:"form-check",children:[Object(O.jsx)("input",{type:"checkbox",id:"check"}),Object(O.jsx)("label",{for:"check",children:"I accept the Terms and Conditions and authorize the use of my data in accordance with the Privacy Statement."})]}),Object(O.jsx)("div",{className:"form-div",children:Object(O.jsx)("button",{className:"form-div-button",type:"submit",children:"Send"})})]})]})})]})}function V(){return Object(O.jsx)(o.a,{children:Object(O.jsxs)(i.c,{children:[Object(O.jsx)(i.a,{path:"/",exact:!0,children:Object(O.jsx)(I,{})}),Object(O.jsx)(i.a,{path:"/producto/:id",children:Object(O.jsx)(A,{})}),Object(O.jsx)(i.a,{path:"/Login",exact:!0,children:Object(O.jsx)(T,{})}),Object(O.jsx)(i.a,{path:"/SigIn",exact:!0,children:Object(O.jsx)(J,{})}),Object(O.jsx)(i.a,{path:"/Buy",exact:!0,children:Object(O.jsx)(q,{})})]})})}function H(e){var t=e.children,r=Object(c.useState)(null),a=Object(v.a)(r,2),s=a[0],n=a[1];return Object(O.jsx)(N.Provider,{value:{jwt:s,setJwt:n},children:t})}var Q=function(){return Object(O.jsx)(H,{children:Object(O.jsx)(V,{})})},R=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,68)).then((function(t){var r=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,n=t.getTTFB;r(e),c(e),a(e),s(e),n(e)}))};n.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(Q,{})}),document.getElementById("root")),R()}},[[56,1,2]]]);
//# sourceMappingURL=main.8176611d.chunk.js.map