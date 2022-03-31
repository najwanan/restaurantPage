(()=>{"use strict";var n={407:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"\n\n*, \n*::before, \n*::after{\n    box-sizing: border-box;\n}\n\n:root{\n  --fw-reg:200;\n  --fw-bold:500;\n\n    --clr-light: #FAF9F5;\n    --clr-dark:#0D0D0D;\n    --clr-accent1:#D9A404;\n    --clr-accent2:#D98E04;\n    --clr-accent3:#F2C6A0;\n    --clr-accent4:#D9725B;\n    --clr-accent5: #BF1304;\n \n}\n\nbody{\n    margin:0;\n    padding: 0;\n}\n\n#content{\n    width: 100vw;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    background-color: var(--clr-accent2);\n \n    \n}\nh1{\n    color: var(--clr-light);\n}\n\n.tabBtns{\n    width: 10em;\n    height: 5em;\n    background-color: var(--clr-accent3);\n    margin: 2em;\n}\n\n.menuWrapper{\n    background-color: var(--clr-accent4);\n    height: 30vh;\n    width: 100vw;\n}\n\n#navBar{\n    width: 100vw;\n    background-color: var(--clr-accent4);\n    display: flex;\n    padding: 3%;\n \n}",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var u=0;u<n.length;u++){var s=[].concat(n[u]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var l=n[c],u=r.base?l[0]+r.base:l[0],s=a[u]||0,d="".concat(u," ").concat(s);a[u]=s+1;var p=t(d),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var l=r(n,o),u=0;u<a.length;u++){var s=t(a[u]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=l}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),l=t.n(c),u=t(216),s=t.n(u),d=t(589),p=t.n(d),m=t(407),f={};f.styleTagTransform=p(),f.setAttributes=l(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=s(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;(function(){console.log("the header is here!");const n=document.querySelector("#content"),e=document.createElement("div");e.innerHTML='\n    <nav id="navBar">\n    <h1 id= "header">The Sweet Shop<h1>\n     <button class="tabBtns">Menu</button>\n      <button class="tabBtns">Home</button>\n       <button class="tabBtns">Contact</button>\n    </nav>\n    ',n.appendChild(e)})(),(()=>{const n=document.querySelector("#content"),e=document.createElement("div");e.innerHTML='\n    <div>\n        <h1>Contact</h1>\n        <h3>We\'d love to hear from you!</h3>\n         <ul>\n            <li>Sweet Shop Hours</li>\n            <li>Monday-Friday 8am -8pm</li>\n            <li>Saturday 9am-8pm</li>\n            <li> Sunday 10am-6pm</li>\n         </ul>\n       \n         <h3>Have other questions? Tell us what\'s on your mind</h3>\n        <label>Name</label>\n        <input class = "contactFormInput"><input>\n        <label>E-mail</label>\n        <input class = "contactFormInput"><input>\n        <label></label>\n        <input class = "contactFormInput"><input>\n    </div>\n    \n    ',n.appendChild(e)})(),function(){const n=document.createElement("div"),e=document.querySelector("#content");n.innerHTML="<div>\n      <h1>Your destination for Sweetness</h1>\n\n         <p>Welcome to the Sweet Shop! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n    <div>\n    ",e.appendChild(n)}()})()})();