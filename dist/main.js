(()=>{"use strict";var e={426:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(81),a=r.n(n),o=r(645),i=r.n(o)()(a());i.push([e.id,"/* \r\n  bg #000\r\n  orange #ff9501\r\n  grey #a6a6a6\r\n  white #e1dada\r\n */\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.calc {\r\n  margin: 50px auto;\r\n  align-items: center;\r\n  overflow: auto;\r\n\r\n  width: 350px;\r\n  min-height: 500px;\r\n  padding-bottom: 50px;\r\n  background-color: rgb(32, 32, 32);\r\n  color: #e1dada;\r\n  border-radius: 5%;\r\n  box-shadow: 0px 0px 10px 3px rgb(32, 32, 32);\r\n}\r\n\r\n.calc-screen {\r\n  margin: 50px auto 0px;\r\n  width: 262px;\r\n  min-height: 85px;\r\n  text-align: right;\r\n}\r\n\r\n.record-data-block {\r\n  font-size: 30px;\r\n  min-height: 40px;\r\n  word-wrap: break-word;\r\n  word-break: break-all;\r\n}\r\n.prev-data-block {\r\n  min-height: 20px;\r\n}\r\n.m-btns {\r\n  display: flex;\r\n  margin: 15px auto;\r\n  width: 262px;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n.m-btn {\r\n  cursor: pointer;\r\n  user-select: none;\r\n}\r\n.m-btn:hover {\r\n  filter: brightness(115%);\r\n}\r\n.m-btn:active {\r\n  filter: brightness(90%);\r\n}\r\n\r\n.btns {\r\n  display: grid;\r\n  grid-template-columns: repeat(5, 50px);\r\n  grid-gap: 3px;\r\n  justify-content: center;\r\n  justify-items: center;\r\n}\r\n\r\n.btn-num {\r\n  width: 50px;\r\n  height: 50px;\r\n  /* background-color: #a6a6a6; */\r\n  line-height: 50px;\r\n  border-radius: 3%;\r\n  text-align: center;\r\n  color: #000;\r\n  cursor: pointer;\r\n  user-select: none;\r\n}\r\n.btn:hover {\r\n  filter: brightness(115%);\r\n}\r\n.btn:active {\r\n  filter: brightness(95%);\r\n}\r\n\r\n.theme-btn {\r\n  width: 50px;\r\n  height: 50px;\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 10%;\r\n  left: 5%;\r\n\r\n  border-radius: 50%;\r\n}\r\n.theme-img {\r\n  height: 80%;\r\n  width: 80%;\r\n  display: block;\r\n  margin: 5px auto;\r\n}\r\n\r\n/* some buttons & background */\r\n.day-theme-gray {\r\n  background-color: #a2a1a1;\r\n}\r\n.day-theme-orange {\r\n  background-color: #e6c563;\r\n}\r\n\r\n/* right-sided buttons & theme-btn*/\r\n.night-theme-gray {\r\n  background-color: #48455b;\r\n}\r\n.night-theme-blue {\r\n  background-color: #694c97;\r\n}\r\n",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);n&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],u=n.base?c[0]+n.base:c[0],d=o[u]||0,p="".concat(u," ").concat(d);o[u]=d+1;var l=r(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)t[l].references++,t[l].updater(h);else{var m=a(h,n);n.byIndex=s,t.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function a(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,a){var o=n(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=r(o[i]);t[s].references--}for(var c=n(e,a),u=0;u<o.length;u++){var d=r(o[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=c}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,a&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={id:n,exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e=r(379),t=r.n(e),n=r(795),a=r.n(n),o=r(569),i=r.n(o),s=r(565),c=r.n(s),u=r(216),d=r.n(u),p=r(589),l=r.n(p),h=r(426),m={};m.styleTagTransform=l(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),t()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals,r.p,r.p;const x=class{constructor(e,t){this.operandsArray=e,this.operationAttributes=t}execute(){throw new Error("Execute method is not implemented")}undo(){throw new Error("Undo method is not implemented")}};class g extends x{execute(){const[e,t]=this.operandsArray;return+e+ +t}}class b extends x{execute(){const[e,t]=this.operandsArray;return+e-+t}}class y extends x{execute(){const[e,t]=this.operandsArray;return+e*+t}}class f extends x{execute(){const[e,t]=this.operandsArray;return+e/+t}}const v=class extends x{execute(){const e=this.operandsArray[0];return e*e}},N=class extends x{execute(){return this.operandsArray[0]**3}},w=class extends x{execute(){const[e,t]=this.operandsArray;return e**t}},C=class extends x{execute(){const e=this.operandsArray[0];return 1==+e?1:e**.5}},A=class extends x{execute(){const e=this.operandsArray[0];return 1==+e?1:e**(1/3)}},k=class extends x{execute(){const[e,t]=this.operandsArray;return e**(1/t)}},S=class extends x{count(e){return 1!==e?e*this.count(e-1):e}execute(){const e=this.operandsArray[0];return 0==+e||1==+e?1:+e<0||+e>=1e3?"invalid input":this.count(e)}},L=class extends x{execute(){return 1/this.operandsArray[0]}},E=class extends x{execute(){return 10**this.operandsArray[0]}};class O{constructor(e,t,r){this.operationId=e,this.operationSign=t,this.operationType=r}static list={add:g,substract:b,mult:y,divide:f,"degree-y":w,"root-y":k,degree2:v,degree3:N,root2:C,root3:A,fact:S,inverse:L,tenDegreeX:E};create(e){return new(0,O.list[this.operationId])(e,[this.operationSign,this.operationId,this.operationType])}}const T=O,q=class{constructor(e){this.calc=e}execute(){return this}},B=class extends q{execute(){this.calc.currentNum=0,this.calc.prevNum="",this.calc.operation={sign:"",id:""}}},M=class extends q{execute(){this.calc.currentNum=0}},j=class extends q{constructor(e){super(e),this.currentOperand=document.querySelector(".record-data-block"),this.prevOperand=document.querySelector(".prev-data-block")}execute(){this.currentOperand.textContent=this.calc.currentNum,this.prevOperand.textContent=`${this.calc.prevNum} ${this.calc.operation.sign}`}},I=class extends q{execute(){this.calc.currentNum=0}},F=new class{constructor(){this.currentNum=0,this.prevNum="",this.memory=new class{memNum=0;add(e){return this.memNum+=Number(e),this.memNum}substr(e){return this.memNum-=Number(e),this.memNum}recall(){return Number(this.memNum)}clear(){this.memNum=0}},this.operation={sign:"",id:"",type:""}}executeCommand(e){const t=e.execute();return t!==1/0&&!Number.isNaN(+t)&&(this.prevNum=parseFloat(t.toFixed(10)),this.currentNum=parseFloat(t.toFixed(10)),this.operation={sign:"",id:"",type:""},!0)}forseState(e){if(0===e.length)return this.prevNum="",this.currentNum=0,void(this.operation={sign:"",id:"",type:""});[this.prevNum,this.currentNum]=e.operandsArray,[this.operation.sign,this.operation.id,this.operation.type]=e.operationAttributes}},P=new class{constructor(){this.operations=[]}addOperation(e){this.operations.push(e)}getOperation(){return 0===this.operations.length?[]:this.operations.pop()}},Z=document.querySelector(".m-btns"),$=document.querySelector(".record-data-block"),U=document.querySelector(".btns");document.querySelector(".theme-btn").addEventListener("click",(()=>{const e=document.body,t=document.querySelectorAll(".btn");e.classList.contains("day-theme-gray")?(e.classList.remove("day-theme-gray"),e.classList.add("night-theme-gray"),t.forEach((e=>{e.classList.contains("day-theme-gray")?(e.classList.remove("day-theme-gray"),e.classList.add("night-theme-gray")):(e.classList.remove("day-theme-orange"),e.classList.add("night-theme-blue"))}))):(e.classList.remove("night-theme-gray"),e.classList.add("day-theme-gray"),t.forEach((e=>{e.classList.contains("night-theme-gray")?(e.classList.remove("night-theme-gray"),e.classList.add("day-theme-gray")):(e.classList.remove("night-theme-blue"),e.classList.add("day-theme-orange"))})))})),Z.addEventListener("click",(e=>{const t=document.querySelector(".mem-data-block");Number.isNaN(Number($.textContent))||(e.target.hasAttribute("data-memory-clear")&&(F.memory.clear(),t.textContent=""),e.target.hasAttribute("data-memory-add")&&(F.memory.add($.textContent),t.textContent="M"),e.target.hasAttribute("data-memory-substr")&&(F.memory.substr($.textContent),t.textContent="M"),e.target.hasAttribute("data-memory-recall")&&(F.currentNum=F.memory.recall(),new j(F).execute()))})),U.addEventListener("click",(e=>{if(e.target.hasAttribute("data-num")&&((""!==F.prevNum&&""===F.operation.id||"single"===F.operation.type)&&(new B(F).execute(),new j(F).execute()),new class{constructor(e){this.textBlock=e}execute(e){"."===e&&this.textBlock.textContent.includes(".")||(this.textBlock.textContent+=e,this.textBlock.textContent=String(this.textBlock.textContent).replace(/^00+/g,"0"),this.textBlock.textContent=String(this.textBlock.textContent).replace(/^0+[1-9]+/g,/[1-9]+/g.exec(String(this.textBlock.textContent))||this.textBlock.textContent))}}($).execute(e.target.textContent)),e.target.hasAttribute("data-single-operation")){if(Number.isNaN(Number($.textContent)))return;F.operation.id=e.target.id,F.operation.sign=e.target.getAttribute("data-value"),F.operation.type="single";const t=new T(F.operation.id,F.operation.sign,F.operation.type).create([$.textContent,$.textContent]);F.executeCommand(t)?(P.addOperation(t),new j(F).execute()):($.textContent="invalid operation",new B(F).execute())}if(e.target.hasAttribute("data-pair-operation")){if(Number.isNaN(Number($.textContent)))return;if(""!==F.operation.id){const t=new T(F.operation.id,F.operation.sign,F.operation.type).create([F.prevNum,$.textContent]);return F.executeCommand(t),P.addOperation(t),F.operation.id=e.target.id,F.operation.sign=e.target.getAttribute("data-value"),F.operation.type="pair",new I(F).execute(),void new j(F).execute()}F.prevNum=$.textContent,F.operation.id=e.target.id,F.operation.sign=e.target.getAttribute("data-value"),F.operation.type="pair",new I(F).execute(),new j(F).execute()}if(e.target.hasAttribute("data-equal")){if(Number.isNaN(Number($.textContent)))return;if(""===F.operation.id)return;const e=new T(F.operation.id,F.operation.sign,F.operation.type).create([F.prevNum,$.textContent]);F.executeCommand(e)?(P.addOperation(e),new j(F).execute()):($.textContent="invalid operation",new B(F).execute())}if(e.target.hasAttribute("data-percent")){if(Number.isNaN(+$.textContent))return;F.currentNum=F.prevNum*($.textContent/100),new j(F).execute()}if(e.target.hasAttribute("data-plus-minus")){if(Number.isNaN(+$.textContent))return;F.currentNum=-Number($.textContent),new j(F).execute()}if(e.target.hasAttribute("data-clear-all")&&(new B(F).execute(),new j(F).execute()),e.target.hasAttribute("data-clear-entry")&&(new M(F).execute(),new j(F).execute()),e.target.hasAttribute("data-undo")){const e=P.getOperation();F.forseState(e),new I(F).execute(),new j(F).execute()}}))})()})();