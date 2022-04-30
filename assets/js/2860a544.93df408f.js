"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[3225],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=i,v=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(v,a(a({ref:t},p),{},{components:n})):r.createElement(v,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2632:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={title:"Application Security Monitoring"},l=void 0,c={unversionedId:"guides/learn-devsec/defenses/asm",id:"guides/learn-devsec/defenses/asm",title:"Application Security Monitoring",description:"Application Security Monitoring is a way of securing applications by working inside of application APIs. This provides a fine-grained level of insight into how an application operates with the ability to offer protection at very precise locations, such as defending file access in the File APIs.",source:"@site/learn/guides/learn-devsec/defenses/asm.md",sourceDirName:"guides/learn-devsec/defenses",slug:"/guides/learn-devsec/defenses/asm",permalink:"/learn/guides/learn-devsec/defenses/asm",editUrl:"https://github.com/contrastsecurity/developer.contrastsecurity.com/blob/master/learn/guides/learn-devsec/defenses/asm.md",tags:[],version:"current",frontMatter:{title:"Application Security Monitoring"},sidebar:"docsSidebar",previous:{title:"Common Active Defenses",permalink:"/learn/guides/learn-devsec/defenses/common-defenses"},next:{title:"Infrastructure Security",permalink:"/learn/guides/learn-devsec/defenses/infra"}},p={},u=[{value:"Developer Involvement",id:"developer-involvement",level:2}],f={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Application Security Monitoring is a way of securing applications by working inside of application APIs. This provides a fine-grained level of insight into how an application operates with the ability to offer protection at very precise locations, such as defending file access in the File APIs."),(0,o.kt)("p",null,"There are two key differentiators of ASM:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The ability to see and act on data after it has left the network."),(0,o.kt)("li",{parentName:"ol"},"The ability to see the impact of an attack and prioritize effective attacks/exploits over ineffective attacks.")),(0,o.kt)("p",null,"The visibility of ASM includes elements such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Record classes that are used during deserialization, to defend deserialization attacks."),(0,o.kt)("li",{parentName:"ul"},"Understanding the exact SQL/NoSQL queries that are run."),(0,o.kt)("li",{parentName:"ul"},"View files and other potentially sensitive assets that are in use."),(0,o.kt)("li",{parentName:"ul"},"Any scripting used by the application, such as JavaScript, OGNL, or various domain-specific languages.")),(0,o.kt)("p",null,"Application Security Monitoring is also known as Runtime Application Self Protection (RASP)."),(0,o.kt)("h2",{id:"developer-involvement"},"Developer Involvement"),(0,o.kt)("p",null,"Developers often integrate the Application Security Monitoring Agent into their application, service, or container."),(0,o.kt)("p",null,"Developers may prioritize fixes to an area where ASM is actively blocking exploitation."))}d.isMDXComponent=!0}}]);