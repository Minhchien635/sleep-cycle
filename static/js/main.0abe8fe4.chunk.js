(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(5),r=a(4),o=(a(15),a(1));a(3);function s(e){var t=e.label,a=e.setState;return l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{className:"label"},t),l.a.createElement("input",{className:"form-control mb-4",type:"text",name:"bedTime",onChange:function(e){a(e.target.value)}}))}function m(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),m=Object(o.a)(r,2),u=m[0],i=m[1],b=Object(n.useState)(""),g=Object(o.a)(b,2),h=g[0],p=g[1],f=Object(n.useState)(),E=Object(o.a)(f,2),j=E[0],O=E[1],S=Object(n.useState)(),d=Object(o.a)(S,2),k=d[0],v=d[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"title"},"Chu k\u1ef3 gi\u1ea5c ng\u1ee7"),l.a.createElement("div",{className:"form"},l.a.createElement("h4",{className:"mb-4"},"Th\u1eddi gian th\u1ee9c gi\u1ea5c: ",j," ",k),l.a.createElement(s,{label:"Gi\u1edd b\u1eaft \u0111\u1ea7u ng\u1ee7",setState:c}),l.a.createElement(s,{label:"Ph\xfat b\u1eaft \u0111\u1ea7u ng\u1ee7",setState:i}),l.a.createElement(s,{label:"S\u1ed1 chu k\u1ef3 gi\u1ea5c ng\u1ee7 (t\u1eeb 3 -> 6 chu k\u1ef3 l\xe0 t\u1ed1t nh\u1ea5t)",setState:p}),l.a.createElement("button",{className:"form-control btn btn-primary mb-3 mt-3",onClick:function(){if(console.log(a,u,h),0!==a.length&&0!==h.length&&0!==u.length)if(a.match(/^[0-9]+$/)&&u.match(/^[0-9]+$/)&&h.match(/^[0-9]+$/)){var e,t=parseInt(a)+parseInt(u)/60+1.5*parseInt(h)+.233333;console.log(parseFloat(t)),parseFloat(t)&&(console.log(t),t>24&&(t-=24*Math.floor(t/24)),e=60*(t-Math.floor(t)),O(Math.floor(t)+" gi\u1edd "),v(e.toFixed()+" ph\xfat"))}else alert("C\xe1c tr\u01b0\u1eddng nh\u1eadp ph\u1ea3i l\xe0 s\u1ed1 nguy\xean");else alert("C\xe1c tr\u01b0\u1eddng kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng")}},"T\xednh")))}var u=document.getElementById("root");r.createRoot(u).render(n.createElement(c.a,null,n.createElement(m,null)))},3:function(e,t,a){},6:function(e,t,a){e.exports=a(18)}},[[6,2,1]]]);
//# sourceMappingURL=main.0abe8fe4.chunk.js.map