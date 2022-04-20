"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[8648],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=s(n),d=i,f=h["".concat(l,".").concat(d)]||h[d]||p[d]||r;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},348:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],c={title:"XPath Injection"},l=void 0,s={unversionedId:"learn-devsec/vulnerabilities/xpath-injection",id:"learn-devsec/vulnerabilities/xpath-injection",title:"XPath Injection",description:"What is XPath Injection",source:"@site/docs/learn-devsec/vulnerabilities/xpath-injection.mdx",sourceDirName:"learn-devsec/vulnerabilities",slug:"/learn-devsec/vulnerabilities/xpath-injection",permalink:"/docs/learn-devsec/vulnerabilities/xpath-injection",editUrl:"https://github.com/contrastsecurity/developer.contrastsecurity.com/blob/master/docs/learn-devsec/vulnerabilities/xpath-injection.mdx",tags:[],version:"current",frontMatter:{title:"XPath Injection"},sidebar:"tutorialSidebar2",previous:{title:"Weak Random Number Generator",permalink:"/docs/learn-devsec/vulnerabilities/weak-random"},next:{title:"Cross Site Scripting (XSS)",permalink:"/docs/learn-devsec/vulnerabilities/xss"}},u={},p=[{value:"What is XPath Injection",id:"what-is-xpath-injection",level:2},{value:"When can XPath Injection affect my application",id:"when-can-xpath-injection-affect-my-application",level:2},{value:"How do I know if/where my application has an XPath Injection vulnerability",id:"how-do-i-know-ifwhere-my-application-has-an-xpath-injection-vulnerability",level:2},{value:"How do I fix XPath Injection",id:"how-do-i-fix-xpath-injection",level:2},{value:"How do people attack XPath Injection flaws",id:"how-do-people-attack-xpath-injection-flaws",level:2}],h={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-xpath-injection"},"What is XPath Injection"),(0,r.kt)("p",null,"XPath Injection lets attackers access parts of an XML document that may contain additional information that they should not have.\nBy modifying the XPath query, attackers can obtain this additional, possibly sensitive data."),(0,r.kt)("h2",{id:"when-can-xpath-injection-affect-my-application"},"When can XPath Injection affect my application"),(0,r.kt)("p",null,"XPath Injection affects applications that process XML documents and query those documents through the XPath syntax.\nXPath Injection does not impact applications that do not parse XML, but similar vulnerabilities exist for other document query languages."),(0,r.kt)("h2",{id:"how-do-i-know-ifwhere-my-application-has-an-xpath-injection-vulnerability"},"How do I know if/where my application has an XPath Injection vulnerability"),(0,r.kt)("p",null,"Contrast Assess can detect if users can control XPath queries as an application is tested."),(0,r.kt)("h2",{id:"how-do-i-fix-xpath-injection"},"How do I fix XPath Injection"),(0,r.kt)("p",null,"Developers should create an allow-list of permitted XPath queries rather than using input as the query.\nIf user input must go into the query, consider using an allow-list of what is permitted."),(0,r.kt)("h2",{id:"how-do-people-attack-xpath-injection-flaws"},"How do people attack XPath Injection flaws"),(0,r.kt)("p",null,"Attackers often attempt to inject query control characters for XPath queries.\nThese will often leave a trailing ' character to balance the injection. It is difficult to create a deny-list of characters to stop the attack."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"account' or true or 'a'='\n")))}d.isMDXComponent=!0}}]);