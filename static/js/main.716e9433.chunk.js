(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},17:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(8),r=a.n(c),o=(a(15),a(1)),i=a(2),s=a(4),u=a(3),d=a(5),m=a(6),h=(a(16),a(17),a(18),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4 col-md-4"}),l.a.createElement("div",{className:"col-lg-4 col-md-4"},l.a.createElement("p",null,"Select a date"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4 col-md-4"}),l.a.createElement("div",{className:"col-lg-4 col-md-4"},l.a.createElement("input",{className:"calendar",type:"date",id:"date",onChange:this.props.updateOnDateChange}))))}}]),t}(l.a.Component)),p=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("header",null,l.a.createElement("div",null,l.a.createElement("h1",null,"toDate")),l.a.createElement("div",{className:"line"}))}}]),t}(l.a.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",null,l.a.createElement("p",{className:"floatRight"}," Photo by George Dolgikh from Pexels"))}}]),t}(l.a.Component),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"US",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"01",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"01",n="https://cors-anywhere.herokuapp.com/http://api.holid.co/v1/".concat(e,"/").concat(a,"/").concat(t);return fetch(n,{method:"GET",mode:"cors"}).then(function(e){console.log(e.status);var t=e.json();return e.status>=200&&e.status<300?(console.log("events ".concat(t)),t):t.then(Promise.reject.bind(Promise))})},b=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("img",{src:"./loading.gif"}))}}]),t}(l.a.Component),f=function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t=this.props.holidays;if("loading"==t)return l.a.createElement(b,null);if(t.constructor===Array)if(0==t.length)e=l.a.createElement("div",null,l.a.createElement("p",null,"No holidays, sorry"));else{var a=t.map(function(e){return l.a.createElement("div",null,l.a.createElement("p",null,"Date : ",e.date," "),l.a.createElement("p",null,"Name : ",e.name))});e=l.a.createElement("div",null,a)}else e=void 0===t.date?l.a.createElement("div",null,l.a.createElement("p",null,"No holidays, sorry")):l.a.createElement("div",null,l.a.createElement("p",null,"Date : ",t.date," "),l.a.createElement("p",null,"Name : ",t.name));return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4 col-md-4"}),l.a.createElement("div",{className:"holidayList col-lg-4 col-md-4"},e))}}]),t}(l.a.Component),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={holidays:{}},a.updateOnDateChange=a.updateOnDateChange.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,null),l.a.createElement("div",{className:"mainBody"},l.a.createElement(h,{updateOnDateChange:this.updateOnDateChange,date:this.state.date}),l.a.createElement(f,{holidays:this.state.holidays})),l.a.createElement(v,null))}},{key:"updateOnDateChange",value:function(e){var t=this;this.setState({holidays:"loading"});var a=document.getElementById("date").value;E("US",a.substring(5,7),a.substring(8,10)).then(function(e){return t.setState({holidays:e.holidays}),e.holidays})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(19);r.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(20)}},[[9,1,2]]]);
//# sourceMappingURL=main.716e9433.chunk.js.map