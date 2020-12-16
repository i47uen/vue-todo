(function(t){function e(e){for(var o,l,s=e[0],c=e[1],a=e[2],d=0,p=[];d<s.length;d++)l=s[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,a||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var o={},r={app:0},i=[];function l(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=o,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(n,o,function(e){return t[e]}.bind(null,o));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/vue-todo/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var a=0;a<s.length;a++)e(s[a]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=(n("8a4f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("TodoList")],1)}),i=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo-list container"},[n("h2",[t._v("Список дел | всего дел: "+t._s(t.todos.length))]),n("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("p",[t._v("Добавить задачу:")]),n("div",[n("span",{directives:[{name:"show",rawName:"v-show",value:t.formErr,expression:"formErr"}],staticStyle:{color:"red"}},[t._v(t._s(t.formErrMsg))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newTaskTitle,expression:"newTaskTitle"}],attrs:{type:"text",placeholder:"Введите текст"},domProps:{value:t.newTaskTitle},on:{input:function(e){e.target.composing||(t.newTaskTitle=e.target.value)}}}),n("button",{on:{click:t.addTask}},[t._v("Добавить")])])]),n("hr"),t.todos.length>0?n("div",{staticClass:"row"},[n("transition",{attrs:{name:"fade"}},[n("div",{staticClass:"col-lg-6 row"},[n("p",[t._v("Не завершенные:")]),t._l(t.inCompletedTasks,(function(e,o){return n("div",{key:o,staticClass:"col-lg-12 todo-item",class:{completed:e.completed}},[n("p",[t._v(" "+t._s(e.title)+" "),n("button",{attrs:{title:"вернуть"},on:{click:function(n){return t.taskToggleActive(e)}}},[t._v("x")])])])}))],2)]),n("div",{staticClass:"col-lg-6 row"},[n("p",[t._v("Завершенные:")]),t._l(t.completedTasks,(function(e,o){return n("div",{key:o,staticClass:"col-lg-12 todo-item",class:{completed:e.completed}},[n("p",[t._v(" "+t._s(e.title)+" "),n("button",{attrs:{title:"вернуть"},on:{click:function(n){return t.taskToggleActive(e)}}},[t._v("+")])])])}))],2)],1):n("p",{staticClass:"mt-5"},[t._v(" У вас нет дел. "),n("br"),t._v(" Добавьте задачу в форме выше ↑ ")])])},s=[],c=(n("4de4"),{name:"TodoList",data:function(){return{todos:[{id:1,title:"Изучить основы React",completed:!0},{id:2,title:"Понять, что реакт сложна",completed:!0},{id:3,title:"Изучить основы vue",completed:!0},{id:4,title:"Написать приложение TodoApp",completed:!0},{id:5,title:"Покормить кота",completed:!1},{id:6,title:"Покормить второго кота",completed:!1}],newTaskTitle:"",formErr:!1,formErrMsg:"Минимально количество символов: 5"}},computed:{completedTasks:function(){return this.todos.filter((function(t){return t.completed}))},inCompletedTasks:function(){return this.todos.filter((function(t){return!t.completed}))}},methods:{taskToggleActive:function(t){t.completed=!t.completed},addTask:function(){""!==this.newTaskTitle&&this.newTaskTitle.length>=5?(this.todos.push({id:this.todos.length+1,title:this.newTaskTitle,completed:!1}),this.newTaskTitle="",this.formErr=!1):this.formErr=!0},onSubmit:function(){return null}}}),a=c,u=(n("ed30"),n("2877")),d=Object(u["a"])(a,l,s,!1,null,null,null),p=d.exports,f={components:{TodoList:p}},m=f,v=(n("034f"),Object(u["a"])(m,r,i,!1,null,null,null)),h=v.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(h)}}).$mount("#app")},"85ec":function(t,e,n){},"89d2":function(t,e,n){},"8a4f":function(t,e,n){},ed30:function(t,e,n){"use strict";var o=n("89d2"),r=n.n(o);r.a}});
//# sourceMappingURL=app.5b8f9100.js.map