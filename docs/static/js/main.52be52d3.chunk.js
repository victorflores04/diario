(this.webpackJsonpdiario=this.webpackJsonpdiario||[]).push([[0],{156:function(e,t,a){},157:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(30),o=a.n(c),i=a(7),l=a.n(i),u=a(10),s=a(18),m=a(19),d=a(9),p=a(27);a(67),a(70);p.a.initializeApp({apiKey:"AIzaSyDoZ94VjCFgKY2qeYvpzfNgGS44Y3k6hu4",authDomain:"diario-95d22.firebaseapp.com",projectId:"diario-95d22",storageBucket:"diario-95d22.appspot.com",messagingSenderId:"295278916559",appId:"1:295278916559:web:5bc03e17e1d5c916b058ba",measurementId:"G-QFX167BQVZ"});var f=p.a.firestore(),b=new p.a.auth.GoogleAuthProvider,h=a(6),E=a(4),v=a(20),_=a.n(v),g=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/chrostyburguer/upload",(a=new FormData).append("upload_preset","react-diario"),a.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/chrostyburguer/upload",{method:"POST",body:a});case 7:if(!(n=e.sent).ok){e.next=15;break}return e.next=11,n.json();case 11:return r=e.sent,e.abrupt("return",r.secure_url);case 15:return e.next=17,n.json();case 17:throw e.sent;case 18:e.next=23;break;case 20:throw e.prev=20,e.t0=e.catch(4),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.collection("".concat(t,"/jornual/notes")).get();case 2:return a=e.sent,n=[],a.forEach((function(e){n.push(Object(E.a)({id:e.id},e.data()))})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y="[Auth] Login",O="[Auth] Logout",N="[UI] Set error",w="[UI] Remove error",x="[UI] Start loading",k="[UI] Finish loading",C="[Nodes] New note",S="[Nodes] Set active note",I="[Nodes] Load notes",A="[Nodes] Update note",P="[Nodes] Delete note",D="[Nodes] Logout Cleaning",L=function(e,t){return{type:S,payload:Object(E.a)({id:e},t)}},U=function(e,t){return{type:C,payload:Object(E.a)({id:e},t)}},B=function(e){return function(){var t=Object(u.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e);case 2:n=t.sent,a(G(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},G=function(e){return{type:I,payload:e}},R=function(e){return function(){var t=Object(u.a)(l.a.mark((function t(a,n){var r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.uid,e.url||delete e.url,delete(c=Object(E.a)({},e)).id,t.next=6,f.doc("".concat(r,"/jornual/notes/").concat(e.id)).update(c);case 6:a(z(e.id,c)),_.a.fire("saved",e.title,"success");case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},z=function(e,t){return{type:A,payload:{id:e,note:Object(E.a)({id:e},t)}}},F=function(e){return{type:P,payload:e}},T=a(33),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(s.a)(t,2),r=a[0],c=a[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;c(t)},i=function(e){var t=e.target;c(Object(E.a)(Object(E.a)({},r),{},Object(T.a)({},t.name,t.value)))};return[r,i,o]},q=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.notes})).active;return r.a.createElement("div",{className:"notes__appbar"},r.a.createElement("span",null,"19 de Octubre"),r.a.createElement("input",{id:"fileSelector",type:"file",name:"file",style:{display:"none"},onChange:function(t){var a=t.target.files[0];a&&e(function(e){return function(){var t=Object(u.a)(l.a.mark((function t(a,n){var r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().notes.active,_.a.fire({title:"Uploading...",text:"Please my Queen wait...",showConfirmButton:!1,onBeforeOpen:function(){_.a.showLoading()}}),t.next=4,g(e);case 4:c=t.sent,r.url=c,a(R(r)),_.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(a))}}),r.a.createElement("div",null,r.a.createElement("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()}},"picture"),r.a.createElement("button",{className:"btn",onClick:function(){e(R(t))}},"save")))},Q=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.notes})).active,a=W(t),c=Object(s.a)(a,3),o=c[0],i=c[1],m=c[2],d=o.body,p=o.title,b=o.id,v=Object(n.useRef)(t.id);Object(n.useEffect)((function(){t.id!==v.current&&(m(t),v.current=t.id)}),[t,m]),Object(n.useEffect)((function(){e(L(o.id,Object(E.a)({},o)))}),[o,e]);return r.a.createElement("div",{className:"notes__main-content"},r.a.createElement(q,null),r.a.createElement("div",{className:"notes__content"},r.a.createElement("input",{className:"notes__title-input",name:"title",value:p,onChange:i,type:"text",placeholder:"Some awesome title"}),r.a.createElement("textarea",{className:"notes__textarea",name:"body",value:d,onChange:i,placeholder:"what happend today"}),t.url&&r.a.createElement("div",{className:"notes__image"},r.a.createElement("img",{src:t.url,alt:"description"}))),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){e(function(e){return function(){var t=Object(u.a)(l.a.mark((function t(a,n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.uid,t.next=3,f.doc("".concat(r,"/jornual/notes/").concat(e)).delete();case 3:a(F(e));case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(b))}},"Delete"))},V=function(){return r.a.createElement("div",{className:"nothing__main-content"},r.a.createElement("p",null,"select something",r.a.createElement("br",null),"by create an entry!"),r.a.createElement("i",{className:"far fa-star fa-4x mt-5"}))},X=function(e){return{type:N,payload:e}},Y=function(){return{type:k}},J=function(e,t){return function(a){a({type:x}),p.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;a(K(t.uid,t.displayName)),a(Y())})).catch((function(e){console.log(e),a(Y()),_.a.fire("Error",e.message,"error")}))}},K=function(e,t){return{type:y,payload:{uid:e,displayName:t}}},Z=function(){return{type:O}},M=a(58),H=a.n(M),$=function(e){var t=e.id,a=e.date,n=e.title,c=e.body,o=e.url,i=H()(a),l=Object(h.b)();return r.a.createElement("div",{className:"jornual__entry pointer animate__animated animate__fadeIn animete_faster",onClick:function(){l(L(t,{date:a,title:n,body:c,url:o}))}},o&&r.a.createElement("div",{className:"jornual__entry-picture",style:{backgroundSize:"cover",backgroundImage:" url(".concat(o,")")}}),r.a.createElement("div",{className:"jornual__entry-body"},r.a.createElement("p",{className:"jornual__entry-title"},n),r.a.createElement("p",{className:"jornual__entry-content"},c)),r.a.createElement("div",{className:"jornual__entry-date-box"},r.a.createElement("span",null,i.format("dddd")),r.a.createElement("h4",null,i.format("Do"))))},ee=function(){var e=Object(h.c)((function(e){return e.notes})).notes;return r.a.createElement("div",{className:"jornual__entries "},e.map((function(e){return r.a.createElement($,Object.assign({key:e.id},e))})))},te=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.auth})).name;return r.a.createElement("aside",{className:"jornual__sidebar"},r.a.createElement("div",{className:"jornual__sidebar-navbar"},r.a.createElement("h3",{className:"mt-5"},r.a.createElement("i",{className:"far fa-moon"}),r.a.createElement("span",null," ",t)),r.a.createElement("button",{className:"btn",onClick:function(){e(function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.auth().signOut();case 2:t(Z()),t({type:D});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"logout")),r.a.createElement("div",{className:"jornual__new-entry",onClick:function(){e(function(){var e=Object(u.a)(l.a.mark((function e(t,a){var n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().auth.uid,r={title:"",body:"",date:(new Date).getTime()},e.next=4,f.collection("".concat(n,"/jornual/notes")).add(r);case 4:c=e.sent,t(L(c.id,r)),t(U(c.id,r));case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())}},r.a.createElement("i",{className:"far fa-calendar-plus fa-5x"}),r.a.createElement("p",{className:"mt-5"},"new entry")),r.a.createElement(ee,null))},ae=function(){var e=Object(h.c)((function(e){return e.notes})).active;return r.a.createElement("div",{className:"jornual__main-content animate__animated animate__fadeIn animete_faster"},r.a.createElement(te,null),r.a.createElement("main",null,e?r.a.createElement(Q,null):r.a.createElement(V,null)))},ne=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.ui})).loading,a=W({email:"adriana.b@gmail.com",password:"123456"}),n=Object(s.a)(a,2),c=n[0],o=n[1],i=c.email,l=c.password;return r.a.createElement("div",null,r.a.createElement("h3",{className:"auth__title"},"Login"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(J(i,l))},className:"animate__animated animate__fadeIn animete_faster"},r.a.createElement("label",{className:"auth__label"},"Email "),r.a.createElement("input",{className:"auth__input",type:"text",value:i,onChange:o,placeholder:"  Email",name:"email"}),r.a.createElement("label",{className:"auth__label"},"Password "),r.a.createElement("input",{className:"auth__input",type:"password",value:l,onChange:o,placeholder:"  Password",name:"password"}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",disabled:t},"Ingresar"),r.a.createElement("div",{className:"auth__social-networks"},r.a.createElement("p",{className:"auth__social-title"},"Sign in with"),r.a.createElement("div",{className:"google-btn",onClick:function(){e((function(e){p.a.auth().signInWithPopup(b).then((function(t){var a=t.user;e(K(a.uid,a.displayName))}))}))}},r.a.createElement("div",{className:"google-icon-wrapper"},r.a.createElement("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})),r.a.createElement("p",{className:"btn-text"},r.a.createElement("b",null,"Sign in with google")))),r.a.createElement(m.b,{to:"/auth/register",className:"link"},"Create new account")))},re=a(59),ce=a.n(re),oe=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.ui})).msgError,a=W({name:"adriana",email:"adriana.b@gmail.com",password:"123456",password2:"123456"}),n=Object(s.a)(a,2),c=n[0],o=n[1],i=c.name,d=c.email,f=c.password,b=c.password2,E=function(){return 0===i.trim().length?(e(X("name is required")),!1):ce.a.isEmail(d)?f!==b||f.length<5?(e(X("password should be at least 6 characters and match each other ")),!1):(e({type:w}),!0):(e(X("email is no valid")),!1)};return r.a.createElement("div",null,r.a.createElement("h3",{className:"auth__title"},"Register"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),E()&&e(function(e,t,a){return function(n){p.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(u.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.user,e.next=3,r.updateProfile({displayName:a});case 3:n(K(r.uid,r.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),_.a.fire("Error",e.message,"error")}))}}(d,f,i))},className:"animate__animated animate__fadeIn animete_faster"},t&&r.a.createElement("div",{className:"auth__alert-error"},t),r.a.createElement("label",{className:"auth__label"},"Nombre "),r.a.createElement("input",{className:"auth__input",type:"text",placeholder:"  Name",name:"name",value:i,onChange:o}),r.a.createElement("label",{className:"auth__label"},"Email "),r.a.createElement("input",{className:"auth__input",type:"text",placeholder:"  Email",name:"email",value:d,onChange:o}),r.a.createElement("label",{className:"auth__label"},"Password "),r.a.createElement("input",{className:"auth__input",type:"password",placeholder:"  Password",name:"password",value:f,onChange:o}),r.a.createElement("label",{className:"auth__label"},"Confirm Password "),r.a.createElement("input",{className:"auth__input",type:"password",placeholder:"  Confirm Password",name:"password2",value:b,onChange:o}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block mb-5"},"Register"),r.a.createElement(m.b,{to:"/auth/login",className:"link mt-5"},"Already register?")))},ie=function(){return r.a.createElement("div",{className:"auth__main"},r.a.createElement("div",{className:"auth__box-container"},r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/auth/login",component:ne}),r.a.createElement(d.b,{path:"/auth/register",component:oe}),r.a.createElement(d.a,{to:"/auth/login"}))))},le=a(34),ue=function(e){var t=e.isAuthenticated,a=e.component,n=Object(le.a)(e,["isAuthenticated","component"]);return r.a.createElement(d.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(d.a,{to:"/auth/login"})}}))},se=function(e){var t=e.isAuthenticated,a=e.component,n=Object(le.a)(e,["isAuthenticated","component"]);return r.a.createElement(d.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(d.a,{to:"/"}):r.a.createElement(a,e)}}))},me=function(){var e=Object(h.b)(),t=Object(n.useState)(!0),a=Object(s.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(!1),f=Object(s.a)(i,2),b=f[0],E=f[1];return Object(n.useEffect)((function(){p.a.auth().onAuthStateChanged(function(){var t=Object(u.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===a||void 0===a?void 0:a.uid)?(e(K(a.uid,a.displayName)),E(!0),e(B(a.uid))):E(!1),o(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,o,E]),c?r.a.createElement("h1",null,"Wait..."):r.a.createElement(m.a,null,r.a.createElement("div",null,r.a.createElement(d.d,null,r.a.createElement(se,{isAuthenticated:b,path:"/auth",component:ie}),r.a.createElement(ue,{exact:!0,isAuthenticated:b,path:"/",component:ae}),r.a.createElement(d.a,{to:"/auth/login"}))))},de=a(60),pe=a(22),fe={loading:!1,msgError:null},be=a(42),he={notes:[],active:null},Ee="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pe.d,ve=Object(pe.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return{uid:t.payload.uid,name:t.payload.displayName};case O:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(E.a)(Object(E.a)({},e),{},{msgError:t.payload});case w:return Object(E.a)(Object(E.a)({},e),{},{msgError:null});case x:return Object(E.a)(Object(E.a)({},e),{},{loading:!0});case k:return Object(E.a)(Object(E.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(E.a)(Object(E.a)({},e),{},{active:Object(E.a)({},t.payload)});case C:return Object(E.a)(Object(E.a)({},e),{},{notes:[t.payload].concat(Object(be.a)(e.notes))});case I:return Object(E.a)(Object(E.a)({},e),{},{notes:Object(be.a)(t.payload)});case A:return Object(E.a)(Object(E.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case P:return Object(E.a)(Object(E.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case D:return Object(E.a)(Object(E.a)({},e),{},{active:null,notes:[]});default:return e}}}),_e=Object(pe.e)(ve,Ee(Object(pe.a)(de.a))),ge=function(){return r.a.createElement(h.a,{store:_e},r.a.createElement(me,null))};a(156);o.a.render(r.a.createElement(ge,null),document.getElementById("root"))},61:function(e,t,a){e.exports=a(157)}},[[61,1,2]]]);
//# sourceMappingURL=main.52be52d3.chunk.js.map