(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},20:function(e,t,n){e.exports=n(59)},26:function(e,t,n){},39:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),c=n(10),r=n.n(c),s=(n(26),n(3)),i=n.n(s),u=n(11),l=n(12),d=n(13),p=n(18),h=n(14),f=n(19),m=n(15),b=n.n(m),w=n(16),g=n.n(w),v=(n(39),n(17)),k=n.n(v),y=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"fetchUserInfo",value:function(e,t){e&&t?k.a.post("https://react-oauth-test.herokuapp.com/user?code="+e+"&secret="+t).then(function(e){return console.log(e.data)}).catch(function(){return console.log("Can't access response. Blocked by browser?")}):console.log("Error!")}},{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.parse(window.location.search);case 2:t=e.sent,console.log(t.code),"b09e772d-3037-4f8b-9067-bac2ed9f550e",this.fetchUserInfo(t.code,"b09e772d-3037-4f8b-9067-bac2ed9f550e");case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:g.a,className:"App-logo",alt:"logo"}),a.a.createElement("a",{href:"https://id.heroku.com/oauth/authorize?client_id=9515836f-5ea1-46ae-98cb-b54754291d54&response_type=code&&scope=global&state="},"Login with Heroku")))}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.eb59191a.chunk.js.map