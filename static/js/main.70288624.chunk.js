(this["webpackJsonpkeeper-app-part-1-starting"]=this["webpackJsonpkeeper-app-part-1-starting"]||[]).push([[0],{36:function(e,t,n){e.exports=n(48)},48:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(6),c=n.n(r),o=n(29),i=n.n(o);var u=function(){const[e,t]=Object(a.useState)((new Date).toLocaleTimeString());return setInterval(()=>{t((new Date).toLocaleTimeString())},1e3),l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement(i.a,null),"Ud@Y's Notebook"),l.a.createElement("div",{className:"Timer"},e))};var m=function(){const e=new Date;return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright ",e.getFullYear()))},s=n(31),E=n.n(s);var p=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("p",null,e.time),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},l.a.createElement(E.a,null)))},d=n(32),f=n.n(d),v=n(65),g=n(66);var h=function(e){const[t,n]=Object(a.useState)({title:"",content:"",timeStamp:""}),[r,c]=Object(a.useState)(!1);function o(e){const{name:t,value:a}=e.target;n(e=>({...e,[t]:a,timeStamp:(new Date).toLocaleTimeString()}))}return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},r?l.a.createElement("input",{name:"title",onChange:o,value:t.title,placeholder:"Title"}):null,l.a.createElement("textarea",{onClick:function(){c(!0)},name:"content",onChange:o,value:t.content,placeholder:"Take a note...",rows:r?3:1}),l.a.createElement(g.a,{in:r},r?l.a.createElement(v.a,{onClick:function(a){a.preventDefault(),e.onAdd(t),n({title:"",content:""}),c(!r)}},l.a.createElement(f.a,null)):l.a.createElement("div",null))))};var k=function(){const[e,t]=Object(a.useState)([]);function n(e){t(t=>t.filter((t,n)=>n!==e))}return l.a.createElement("div",null,l.a.createElement(u,null),l.a.createElement(h,{onAdd:function(e){t(t=>[...t,e])}}),e.map((e,t)=>l.a.createElement(p,{key:t,id:t,title:e.title,content:e.content,time:e.timeStamp,onDelete:n})),l.a.createElement(m,null))};c.a.render(l.a.createElement(k,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.70288624.chunk.js.map