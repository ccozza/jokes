(window.webpackJsonpapp=window.webpackJsonpapp||[]).push([[0],{16:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),u=n(3),s=n(1),o=n.n(s),l=n(2),i=n(5),p=n.n(i),f="http://localhost:3050",m=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("".concat(f,"/types/create/"),{_id:"n/a",name:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat(f,"/types/get"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat(f,"/jokes/random"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(o.a.mark((function e(t,n,a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=6;break}return e.next=3,p.a.get("".concat(f,"/jokes/get/page/").concat(t,"/size/").concat(n));case 3:return e.abrupt("return",e.sent);case 6:return e.next=8,p.a.get("".concat(f,"/jokes/get/type/").concat(a,"/page/").concat(t,"/size/").concat(n));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),h=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.delete("".concat(f,"/jokes/delete"),{data:{_id:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(o.a.mark((function e(t,n,a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.put("".concat(f,"/jokes/update"),{_id:t,_type:n,text:a});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),j=function(){var e=Object(l.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("".concat(f,"/jokes/create"),{_id:"n/a",_type:t,text:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),E=function(e){var t=function(){var t=Object(l.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b();case 3:(n=t.sent)&&200===n.status&&e.setSelectList(n.data),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),alert("Errors Errors Errors Everywhere :c check logs"),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){t()}),[]),r.a.createElement("select",{id:"select-type",value:e.selectedType,onChange:function(t){return e.setSelectedType(t.target.value)}},r.a.createElement("option",{value:""}),e.selectList.map((function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.name)})))},g=function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(""),p=Object(u.a)(i,2),f=p[0],m=p[1],b=Object(a.useState)([]),d=Object(u.a)(b,2),v=d[0],h=d[1],k=function(){var t=Object(l.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c&&f){t.next=4;break}alert("A very tiny bird told me that you should select a type and then write an amazing joke before hiting save"),t.next=15;break;case 4:return t.prev=4,t.next=7,j(f,c);case 7:(n=t.sent)&&201===n.status&&e.close(),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(4),alert("Oh no :c we have an error saving this amazing joke"),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[4,11]])})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{id:"create-joke"},r.a.createElement(E,{selectList:v,setSelectList:h,setSelectedType:m,selectedType:f}),r.a.createElement("input",{onChange:function(e){return s(e.target.value)},type:"text",placeholder:"Write here your best joke"}),r.a.createElement("button",{className:"save",onClick:k},"Save"),r.a.createElement("hr",null))},y=function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],s=n[1],i=function(){var t=Object(l.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m(c);case 3:(n=t.sent)&&201===n.status&&e.close(),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),alert("I'm not calling the server without a name, she gets angry easily :c"),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{id:"create-type"},r.a.createElement("input",{onChange:function(e){return s(e.target.value)},type:"text",placeholder:"Type name here"}),r.a.createElement("button",{className:"save",onClick:i},"Save"),r.a.createElement("hr",null))},O=function(){var e=Object(a.useState)({}),t=Object(u.a)(e,2),n=t[0],c=t[1],s=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d();case 3:(t=e.sent)&&200===t.status&&c(t.data),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),alert("I think this error appeared because I cannot find a nice Joke :c check logs please"),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){s()}),[]),r.a.createElement("div",{id:"random-joke"},n.text,r.a.createElement("h2",null,"Nice one :)"))},x=function(){var e=Object(a.useState)({page:0,size:10}),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),i=Object(u.a)(s,2),p=i[0],f=i[1],m=Object(a.useState)(""),b=Object(u.a)(m,2),d=b[0],j=b[1],g=Object(a.useState)([]),y=Object(u.a)(g,2),O=y[0],x=y[1],w=Object(a.useState)(""),S=Object(u.a)(w,2),C=S[0],_=S[1],N=Object(a.useState)(""),z=Object(u.a)(N,2),J=z[0],T=z[1],L=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v(n.page,n.size,""!==E?d:null);case 3:(t=e.sent)&&200===t.status&&f(t.data),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),alert("Something happened trying to get some nice jokes, check the logs"),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c({page:t,size:10});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h(t);case 3:(n=e.sent)&&200===n.status&&f(p.filter((function(e){return e._id!==t}))),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),alert("Cannot remove this Joke, because it's too much amazing... No :c check the logs"),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(l.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(t,n,J);case 3:(a=e.sent)&&200===a.status&&(f(p.map((function(e){return e._id===t&&(e.text=J),e}))),T(""),_("")),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T(""),_(t===C?"":t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){L()}),[n.page]),Object(a.useEffect)((function(){c({page:0,size:10}),L()}),[d]),r.a.createElement("div",{id:"jokes"},r.a.createElement("h4",null,"You can filter by type...",r.a.createElement(E,{selectList:O,setSelectList:x,setSelectedType:j,selectedType:d})),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{id:"tb-joke"},"Joke"),r.a.createElement("th",{id:"tb-type"},"Type"),r.a.createElement("th",{id:"tb-opt"},"Options"),C?r.a.createElement("th",null,"Input"):null)),r.a.createElement("tbody",null,p.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.text),r.a.createElement("td",null,e._type.name),r.a.createElement("td",null,r.a.createElement("button",{className:"delete",onClick:function(){return G(e._id)}},"delete")," |",r.a.createElement("button",{className:"update",onClick:function(){return B(e._id)}},"update")),r.a.createElement("td",null,C===e._id?r.a.createElement("div",{id:"update"},r.a.createElement("input",{type:"text",onChange:function(e){return T(e.target.value)}}),r.a.createElement("button",{className:"save",onClick:function(){return A(C,e._type._id)}},"save")):null))})))),r.a.createElement("div",{id:"pagination"},n.page>0?r.a.createElement("button",{className:"pag",onClick:function(){return I(n.page-1)}},"previous page"):null,r.a.createElement("button",{className:"pag",onClick:function(){return I(n.page+1)}},"next page")))},w=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),o=Object(u.a)(s,2),l=o[0],i=o[1],p=Object(a.useState)(!1),f=Object(u.a)(p,2),m=f[0],b=f[1],d=Object(a.useState)(!1),v=Object(u.a)(d,2),h=v[0],k=v[1];return r.a.createElement("div",{id:"home"},r.a.createElement("h1",null,"Jokes Portal"),n?r.a.createElement(g,{close:function(){return c(!1)}}):null,l?r.a.createElement(y,{close:function(){return i(!1)}}):null,r.a.createElement("button",{className:"menu",onClick:function(){i(!l),c(!1)}},"Create new Type"),r.a.createElement("button",{className:"menu",onClick:function(){c(!n),i(!1)}},"Create new Joke"),r.a.createElement("button",{className:"menu",onClick:function(){k(!h),b(!1)}},"Get Jokes"),r.a.createElement("button",{className:"menu",onClick:function(){b(!m),k(!1)}},"Get Random Joke"),r.a.createElement("hr",null),h?r.a.createElement(x,null):null,m?r.a.createElement(O,null):null)};Object(c.render)(r.a.createElement((function(){return r.a.createElement("div",null,r.a.createElement(w,null))}),null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.1eb812d7.chunk.js.map