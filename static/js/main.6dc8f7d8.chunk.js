(this["webpackJsonpkeeper-app-part-1-starting"]=this["webpackJsonpkeeper-app-part-1-starting"]||[]).push([[0],{42:function(e,t,n){e.exports=n(54)},54:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(6),c=n.n(r),u=n(38),o=n(12),i=n(34),m=n.n(i);var p=function(){var e=Object(a.useState)((new Date).toLocaleTimeString()),t=Object(o.a)(e,2),n=t[0],r=t[1];return setInterval((function(){r((new Date).toLocaleTimeString())}),1e3),l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement(m.a,null),"Keeper"),l.a.createElement("div",{className:"Timer"},n))};var E=function(){var e=new Date;return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright ",e.getFullYear()))},f=n(36),s=n.n(f);var v=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("p",null,e.time),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},l.a.createElement(s.a,null)))},d=n(22),b=n(32),j=n(37),O=n.n(j),g=n(71),h=n(72);var S=function(e){var t=Object(a.useState)({title:"",content:"",timeStamp:""}),n=Object(o.a)(t,2),r=n[0],c=n[1],u=Object(a.useState)(!1),i=Object(o.a)(u,2),m=i[0],p=i[1];function E(e){var t=e.target,n=t.name,a=t.value;c((function(e){var t;return Object(b.a)(Object(b.a)({},e),{},(t={},Object(d.a)(t,n,a),Object(d.a)(t,"timeStamp",(new Date).toLocaleTimeString()),t))}))}return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},m?l.a.createElement("input",{name:"title",onChange:E,value:r.title,placeholder:"Title"}):null,l.a.createElement("textarea",{onClick:function(){p(!0)},name:"content",onChange:E,value:r.content,placeholder:"Take a note...",rows:m?3:1}),l.a.createElement(h.a,{in:m},m?l.a.createElement(g.a,{onClick:function(t){t.preventDefault(),e.onAdd(r),c({title:"",content:""}),p(!m)}},l.a.createElement(O.a,null)):l.a.createElement("div",null))))};var k=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];function c(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))}return l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement(S,{onAdd:function(e){r((function(t){return[].concat(Object(u.a)(t),[e])}))}}),n.map((function(e,t){return l.a.createElement(v,{key:t,id:t,title:e.title,content:e.content,time:e.timeStamp,onDelete:c})})),l.a.createElement(E,null))};c.a.render(l.a.createElement(k,null),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.6dc8f7d8.chunk.js.map