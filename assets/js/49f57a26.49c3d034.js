"use strict";(self.webpackChunkusbnova_com=self.webpackChunkusbnova_com||[]).push([[612],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={title:"Basics",description:"How BadUSB a script looks like.",sidebar_position:10},i=void 0,o={unversionedId:"scripting/basics",id:"scripting/basics",title:"Basics",description:"How BadUSB a script looks like.",source:"@site/docs/scripting/basics.md",sourceDirName:"scripting",slug:"/scripting/basics",permalink:"/docs/scripting/basics",draft:!1,editUrl:"https://github.com/SpacehuhnTech/usbnova.com/blob/main/docs/scripting/basics.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Basics",description:"How BadUSB a script looks like.",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Scripting",permalink:"/docs/category/scripting"},next:{title:"Functions",permalink:"/docs/scripting/functions"}},p={},s=[{value:"Basic rules:",id:"basic-rules",level:2},{value:"Example Script:",id:"example-script",level:2}],d={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"USB Nova's script language is compatible with Ducky Script (1.0). However, some functions and keys were added or expanded.\nYou can find a great Ducky Script quick reference at ",(0,r.kt)("a",{parentName:"p",href:"https://docs.hak5.org/hak5-usb-rubber-ducky/ducky-script-quick-reference"},"docs.hak5.org"),".")),(0,r.kt)("h2",{id:"basic-rules"},"Basic rules:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A single space separates the keys"),(0,r.kt)("li",{parentName:"ul"},"All keys as part of the same line get pressed and released simultaneously"),(0,r.kt)("li",{parentName:"ul"},"To write text, use the ",(0,r.kt)("inlineCode",{parentName:"li"},"STRING")," function"),(0,r.kt)("li",{parentName:"ul"},"Upper and lower case matters!")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Example"),(0,r.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WINDOWS R")),(0,r.kt)("td",{parentName:"tr",align:null},"Press the Windows key and the R key simultaneously")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING Hello World")),(0,r.kt)("td",{parentName:"tr",align:null},'Write "Hello World"')))),(0,r.kt)("h2",{id:"example-script"},"Example Script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"REM Hello World Example Script\nDEFAULTDELAY 200\nDELAY 1000\nGUI r\nSTRING notepad\nENTER\nDELAY 1000\nSTRING Hello World!\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Line"),(0,r.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"REM This is a comment")),(0,r.kt)("td",{parentName:"tr",align:null},"Comment something.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DEFAULTDELAY 200")),(0,r.kt)("td",{parentName:"tr",align:null},"Set the default delay between each line to 200 milliseconds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DELAY 1000")),(0,r.kt)("td",{parentName:"tr",align:null},"Wait 1 seconds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GUI r")),(0,r.kt)("td",{parentName:"tr",align:null},"Press the Windows key and the R key simultaneously to open the run window.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING notepad")),(0,r.kt)("td",{parentName:"tr",align:null},'Type "notepad".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ENTER")),(0,r.kt)("td",{parentName:"tr",align:null},"Press enter key to launch the Windows Notepad application.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DELAY 1000")),(0,r.kt)("td",{parentName:"tr",align:null},"Wait 1 seconds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING Hello World!")),(0,r.kt)("td",{parentName:"tr",align:null},'Type "Hello World!" into the newly opened notepad window.')))))}u.isMDXComponent=!0}}]);