"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[4614],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,h=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3141:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={title:"How It DOESN'T Work"},c=void 0,l={unversionedId:"getting-started/how-it-works/how-it-doesnt-work",id:"getting-started/how-it-works/how-it-doesnt-work",title:"How It DOESN'T Work",description:"As people compare DevSec with other technologies, we commonly explain what the technology isn't...",source:"@site/docs/getting-started/how-it-works/how-it-doesnt-work.md",sourceDirName:"getting-started/how-it-works",slug:"/getting-started/how-it-works/how-it-doesnt-work",permalink:"/docs/getting-started/how-it-works/how-it-doesnt-work",editUrl:"https://github.com/contrastsecurity/developer.contrastsecurity.com/blob/master/docs/getting-started/how-it-works/how-it-doesnt-work.md",tags:[],version:"current",frontMatter:{title:"How It DOESN'T Work"},sidebar:"tutorialSidebar",previous:{title:"How Integrated Analysis Works",permalink:"/docs/getting-started/how-it-works/how-integrated-analysis-works"},next:{title:"How Dependency Scans Work",permalink:"/docs/getting-started/how-it-works/how-oss-works"}},u={},d=[{value:"It&#39;s not signature-based.",id:"its-not-signature-based",level:2},{value:"It doesn&#39;t require fully perfect tests.",id:"it-doesnt-require-fully-perfect-tests",level:2},{value:"It doesn&#39;t impact production performance.",id:"it-doesnt-impact-production-performance",level:2}],p={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As people compare DevSec with other technologies, we commonly explain what the technology isn't..."),(0,i.kt)("h2",{id:"its-not-signature-based"},"It's not signature-based."),(0,i.kt)("p",null,"Signatures look for common patterns in technology. The difficulty of signatures is that there are so many and it's impossible to be large and accurate.\nContrast tech does not look for basic signatures like unsafe characters.",(0,i.kt)("br",null),"\nInstead we look for unsafe combinations where APIs meet in an unsafe way:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/learn-devsec/vulnerabilities/sqli"},"SQL injection")," does not occur because someone used an ' character, it occurs when a user controls query input. We track the control and have full visibility of the query from the database API."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/learn-devsec/vulnerabilities/command-injection"},"Command injection")," occurs when any user input reaches a command shell."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/learn-devsec/vulnerabilities/path-traversal"},"Path Traversal")," occurs when users can control the file being accessed and is most often exploited when the directories go up.")),(0,i.kt)("h2",{id:"it-doesnt-require-fully-perfect-tests"},"It doesn't require fully perfect tests."),(0,i.kt)("p",null,"No organization fully tests 100% of everything. It's unreasonable to demand full test coverage before you test security."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Contrast OSS does not require any usage to locate vulnerable dependencies, it just needs the build system's bill-of-materials."),(0,i.kt)("li",{parentName:"ul"},"Contrast Scan does not require any usage to locate vulnerabilities, it just needs code/bytecode."),(0,i.kt)("li",{parentName:"ul"},"Contrast Assess can generate light results without usage but improves as you use the app. Work in line to your confidence."),(0,i.kt)("li",{parentName:"ul"},"Contrast Protect will defend production applications from exploitation and does not require advance training.")),(0,i.kt)("h2",{id:"it-doesnt-impact-production-performance"},"It doesn't impact production performance."),(0,i.kt)("p",null,"During QA when an application is tested, agents gather the most information. The audience is a developer who can fix issues to gain the most context.\nDuring production, the audience is the agent's autonomous decision-making. By defending specific APIs against specific threats, the agent saves time by not evaluating security risks that aren't happening."),(0,i.kt)("p",null,"You should use Contrast Protect in production to defend applications against exploitation.",(0,i.kt)("br",null),"\nYou should NOT use Contrast Assess in production, as it is intended for QA environments.",(0,i.kt)("br",null),"\nYou can easily use the right setting either through the UI or the agent configuration file."))}f.isMDXComponent=!0}}]);