(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),c=n(4),a=n.n(c),l=(n(12),n(6)),s=n(2),i=n(0),u=Object(o.createContext)(),d=function(e){var t=function(e,t){var n=Object(o.useState)(!1),r=Object(s.a)(n,2),c=r[0],a=r[1],l=Object(o.useState)(!0),i=Object(s.a)(l,2),u=i[0],d=i[1],j=Object(o.useState)(t),b=Object(s.a)(j,2),O=b[0],f=b[1];return Object(o.useEffect)((function(){setTimeout((function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify(t)),n=t),f(n),d(!1)}catch(c){a(c)}}),3e3)}),[t,e]),{item:O,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),f(t)}catch(c){a(c)}},loading:u,error:c}}("TODOS_V1",[]),n=t.item,r=t.saveItem,c=t.loading,a=t.error,d=Object(o.useState)(""),j=Object(s.a)(d,2),b=j[0],O=j[1],f=Object(o.useState)(!1),p=Object(s.a)(f,2),m=p[0],x=p[1],h=n.filter((function(e){return!!e.completed})).length,v=n.length,g=[];g=!b.length>=1?n:n.filter((function(e){var t=e.text.toLowerCase(),n=b.toLowerCase();return t.includes(n)}));return Object(i.jsx)(u.Provider,{value:{error:a,loading:c,totalTodos:v,completedTodos:h,searchValue:b,setSearchValue:O,searchedTodos:g,toggleCompleteTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),o=Object(l.a)(n);o[t].completed=!o[t].completed,r(o)},addTodo:function(e){var t=Object(l.a)(n);t.push({completed:!1,text:e}),r(t)},deleteTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),o=Object(l.a)(n);o.splice(t,1),r(o)},openModal:m,setOpenModal:x,saveTodos:r},children:e.children})},j=(n(14),function(){var e=Object(o.useContext)(u),t=e.totalTodos,n=e.completedTodos;return Object(i.jsxs)("h2",{className:"TodoCounter",children:["Has completado ",n," de ",t," TODOs"]})}),b=(n(15),function(){var e=Object(o.useContext)(u),t=e.searchValue,n=e.setSearchValue;return Object(i.jsx)("input",{className:"TodoSearch",placeholder:"Cebolla",onChange:function(e){e.preventDefault(),n(e.target.value)},value:t})}),O=(n(16),function(e){return Object(i.jsx)("section",{children:Object(i.jsx)("ul",{children:e.children})})});function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.createElement("defs",null,o.createElement("style",null,".cls-1{}")),x=o.createElement("path",{className:"cls-1",d:"M118.52326,36.73483l-17.22791-20.5351a21.58065,21.58065,0,0,0-12.77347-7.3761L62.12027,4.16943A21.554,21.554,0,0,0,47.591,6.72877L24.37583,20.13394a21.5618,21.5618,0,0,0-9.48022,11.301L5.73123,56.62425A21.54433,21.54433,0,0,0,5.72658,71.3718l9.169,25.19395a21.5791,21.5791,0,0,0,9.48022,11.301L47.591,121.26731a21.55616,21.55616,0,0,0,14.52923,2.564l26.40161-4.65882a21.53362,21.53362,0,0,0,12.77347-7.3761l17.22791-20.53045a21.57094,21.57094,0,0,0,5.049-13.865V50.59519A21.55855,21.55855,0,0,0,118.52326,36.73483ZM94.30014,53.14523,61.17272,86.27264a8.10767,8.10767,0,0,1-11.50077,0L33.61919,70.21523a7.839,7.839,0,0,1-2.35032-5.69A8.1159,8.1159,0,0,1,45.14318,58.812L55.4595,69.12834,82.85975,41.72809a8.10237,8.10237,0,0,1,11.51934.02322,7.8508,7.8508,0,0,1,2.355,5.69A7.62208,7.62208,0,0,1,94.30014,53.14523Z"});function h(e,t){var n=e.title,r=e.titleId,c=p(e,["title","titleId"]);return o.createElement("svg",f({id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128",ref:t,"aria-labelledby":r},c),m,void 0===n?o.createElement("title",{id:r},"x"):n?o.createElement("title",{id:r},n):null,x)}var v=o.forwardRef(h);n.p;function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var T=o.createElement("path",{d:"M59.595,52.861L37.094,30.359L59.473,7.98c1.825-1.826,1.825-4.786,0-6.611 c-1.826-1.825-4.785-1.825-6.611,0L30.483,23.748L8.105,1.369c-1.826-1.825-4.785-1.825-6.611,0c-1.826,1.826-1.826,4.786,0,6.611 l22.378,22.379L1.369,52.861c-1.826,1.826-1.826,4.785,0,6.611c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369 l22.502-22.502l22.501,22.502c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369 C61.42,57.647,61.42,54.687,59.595,52.861z"});function C(e,t){var n=e.title,r=e.titleId,c=y(e,["title","titleId"]);return o.createElement("svg",g({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 60.963 60.842",style:{enableBackground:"new 0 0 60.963 60.842"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?o.createElement("title",{id:r},n):null,T)}var w=o.forwardRef(C),I=(n.p,n(17),{check:function(e){return Object(i.jsx)(v,{className:"Icon-svg Icon-svg--check",fill:e})},delete:function(e){return Object(i.jsx)(w,{className:"Icon-svg Icon-svg--delete",fill:e})}}),S=function(e){var t=e.type,n=e.color,o=void 0===n?"gray":n,r=e.onClick;return Object(i.jsx)("span",{className:"Icon-container Icon-container--".concat(t),onClick:r,children:I[t](o)})},L=function(e){var t=e.completed,n=e.onComplete;return Object(i.jsx)(S,{type:"check",color:t?"#4caf50":"gray",onClick:n})},N=function(e){var t=e.onDelete;return Object(i.jsx)(S,{type:"delete",onClick:t})},k=(n(18),function(e){return Object(i.jsxs)("li",{className:"TodoItem",children:[Object(i.jsx)(L,{completed:e.completed,onComplete:e.onComplete}),Object(i.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(i.jsx)(N,{onDelete:e.onDelete})]})}),E=(n(19),function(e){var t=Object(o.useContext)(u),n=t.openModal;t.setOpenModal;return Object(i.jsx)("button",{className:"CreateTodoButton",onClick:function(){e.setOpenModal(!n)},children:"+"})}),M=(n(20),function(e){var t=e.children;return a.a.createPortal(Object(i.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}),D=(n(21),function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(o.useContext)(u),a=c.addTodo,l=c.setOpenModal;return Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a(n),l(!1)},children:[Object(i.jsx)("label",{children:"Escribe tu nuevo TODO"}),Object(i.jsx)("textarea",{placeholder:"Cortar la cebolla para el almuerzo",value:n,onChange:function(e){r(e.target.value)}}),Object(i.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(i.jsx)("button",{type:"button",className:"TodoForm-button TodoForm-button--cancel",onClick:function(){l(!1)},children:"Cancelar"}),Object(i.jsx)("button",{className:"TodoForm-button TodoForm-button--add",type:"submit",children:"A\xf1adir"})]})]})}),P=function(e){e.error;return Object(i.jsx)("p",{children:"Desesp\xe9rate, hubo un error..."})},A=(n(22),function(e){e.error;return Object(i.jsxs)("div",{className:"LoadingTodo-container",children:[Object(i.jsx)("span",{className:"LoadingTodo-completeIcon"}),Object(i.jsx)("p",{className:"LoadingTodo-text",children:"Cargando TODOs..."}),Object(i.jsx)("span",{className:"LoadingTodo-deleteIcon"})]})}),B=function(){return Object(i.jsx)("p",{children:"Crea tu primer TODO!"})},F=function(){var e=Object(o.useContext)(u),t=e.error,n=e.loading,c=e.searchedTodos,a=e.toggleCompleteTodo,l=e.deleteTodo,s=e.openModal,d=e.setOpenModal;return Object(i.jsxs)(r.a.Fragment,{children:[Object(i.jsx)(j,{}),Object(i.jsx)(b,{}),Object(i.jsxs)(O,{children:[t&&Object(i.jsx)(P,{error:t}),n&&new Array(5).fill(1).map((function(e,t){return Object(i.jsx)(A,{},t)})),!n&&!c.length&&Object(i.jsx)(B,{}),c.map((function(e,t){return Object(i.jsx)(k,{text:e.text,completed:e.completed,onComplete:function(){return a(e.text)},onDelete:function(){return l(e.text)}},t)}))]}),!!s&&Object(i.jsx)(M,{children:Object(i.jsx)(D,{})}),Object(i.jsx)(E,{setOpenModal:d})]})};var V=function(){return Object(i.jsx)(d,{children:Object(i.jsx)(F,{})})};a.a.render(Object(i.jsx)(V,{}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.2bdff57c.chunk.js.map