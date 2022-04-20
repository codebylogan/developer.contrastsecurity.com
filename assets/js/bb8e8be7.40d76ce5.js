"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[3414],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),h=l(r),d=a,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||o;return r?n.createElement(m,i(i({ref:e},u),{},{components:r})):n.createElement(m,i({ref:e},u))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},584:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={title:"Accuracy",sidebar_position:2},c=void 0,l={unversionedId:"getting-started/how-it-works/accuracy",id:"getting-started/how-it-works/accuracy",title:"Accuracy",description:"All tools focus on a level of high accuracy. Teams with limited time should focus on Critical vulnerabilities with few, if any cases where a tool is wrong.",source:"@site/docs/getting-started/how-it-works/accuracy.md",sourceDirName:"getting-started/how-it-works",slug:"/getting-started/how-it-works/accuracy",permalink:"/docs/getting-started/how-it-works/accuracy",editUrl:"https://github.com/contrastsecurity/developer.contrastsecurity.com/blob/master/docs/getting-started/how-it-works/accuracy.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Accuracy",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How It Works",permalink:"/docs/getting-started/how-it-works/"},next:{title:"Performance",permalink:"/docs/getting-started/how-it-works/performance"}},u={},p=[{value:"Contrast Assess, the runtime agent",id:"contrast-assess-the-runtime-agent",level:2},{value:"Contrast OSS, the composition analyzer",id:"contrast-oss-the-composition-analyzer",level:2},{value:"Contrast Scan, the static analysis tool",id:"contrast-scan-the-static-analysis-tool",level:2}],h={toc:p};function d(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"All tools focus on a level of high accuracy. Teams with limited time should focus on Critical vulnerabilities with few, if any cases where a tool is wrong."),(0,o.kt)("h2",{id:"contrast-assess-the-runtime-agent"},"Contrast Assess, the runtime agent"),(0,o.kt)("p",null,"Accuracy is gained by monitoring code execution and reporting on events that it was able to observe. Accuracy is commonly measured through suites like the entire ",(0,o.kt)("a",{parentName:"p",href:"https://owasp.org/www-project-benchmark/"},"OWASP Benchmark"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Accuracy is higher than static analysis because the observed paths are put together by the runtime (during execution) rather than by the analysis tool."),(0,o.kt)("li",{parentName:"ul"},"Accuracy is higher than dynamic analysis because observation occurs at the API level and does not require information sent back in the response.")),(0,o.kt)("h2",{id:"contrast-oss-the-composition-analyzer"},"Contrast OSS, the composition analyzer"),(0,o.kt)("p",null,"Accuracy is gained by tracking dependencies at two points:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"At build time, the analyzer obtains libraries from the build tool that looks up and downloads dependencies. This data comes from the build tool."),(0,o.kt)("li",{parentName:"ul"},"At run time, the analyzer observes package information for all loaded files. The benefit of run time tracking is the ability to distinguish libraries that are present but not used by the application. This data comes from enumerating the avaliable application libraries and monitoring what is loades.")),(0,o.kt)("h2",{id:"contrast-scan-the-static-analysis-tool"},"Contrast Scan, the static analysis tool"),(0,o.kt)("p",null,"Accuracy is gained by focusing analysis on remotely accessible code endpoints first. Rather than tracing all possible paths to report all possible issues, Contrast Scan looks at the application's attack surface and tracks from there. Accuracy is commonly measured through suites like the ",(0,o.kt)("a",{parentName:"p",href:"https://samate.nist.gov/SARD/testsuite.php"},"NIST Juliet Suite")))}d.isMDXComponent=!0}}]);