(this.webpackJsonptodo_list=this.webpackJsonptodo_list||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),i=c(6),a=c.n(i),j=(c(21),c(22),c(15)),o=c(4),r=c(12),l=c.n(r),b=c(1),u=function(e){var t=Object(n.useState)(!0),c=Object(o.a)(t,2),s=c[0],i=c[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"todoitem",children:[Object(b.jsx)("input",{type:"checkbox",className:"checkbox",onClick:function(e){i(!s),console.log(s)}}),Object(b.jsx)("p",{className:"text",children:s?e.text:Object(b.jsx)("strike",{children:e.text})}),Object(b.jsx)("button",{className:"btn",onClick:function(){e.onSelect(e.id)},children:Object(b.jsx)(l.a,{})})]})})},x=c(14),d=c.n(x),O=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)([]),a=Object(o.a)(i,2),r=a[0],l=a[1],x=function(e){l((function(t){return t.filter((function(t,c){return c!==e}))}))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"box2",children:[Object(b.jsx)("input",{type:"text",className:"inputtext",onChange:function(e){s(e.target.value),console.log(e.target.value)},value:c,placeholder:"Enter items..."}),Object(b.jsx)("button",{className:"btnadd",onClick:function(){""===c?alert("ffield is empty => Please! enter the task"):(l((function(e){return[].concat(Object(j.a)(e),[c])})),s(""))},children:Object(b.jsx)(d.a,{})})]}),Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("p",{className:"heading",children:"Essential items"}),Object(b.jsx)("ol",{children:r.map((function(e,t){return Object(b.jsx)(u,{text:e,id:t,onSelect:x},t+1)}))})]}),Object(b.jsx)("div",{className:"box"})]})};var h=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"wow this is my intern pro"}),Object(b.jsx)(O,{})]})};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.5033381c.chunk.js.map