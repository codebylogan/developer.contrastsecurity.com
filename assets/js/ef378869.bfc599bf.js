"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[7252],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7474:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"Performance",sidebar_position:3},c=void 0,l={unversionedId:"guides/devsec-with-contrast/how-it-works/performance",id:"guides/devsec-with-contrast/how-it-works/performance",title:"Performance",description:"Speed of execution is a crucial to execution. Security tooling performs differently in the three areas:",source:"@site/learn/guides/devsec-with-contrast/how-it-works/performance.md",sourceDirName:"guides/devsec-with-contrast/how-it-works",slug:"/guides/devsec-with-contrast/how-it-works/performance",permalink:"/learn/guides/devsec-with-contrast/how-it-works/performance",editUrl:"https://github.com/contrastsecurity/developer.contrastsecurity.com/blob/master/learn/guides/devsec-with-contrast/how-it-works/performance.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Performance",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Accuracy",permalink:"/learn/guides/devsec-with-contrast/how-it-works/accuracy"},next:{title:"How Integrated Analysis Works",permalink:"/learn/guides/devsec-with-contrast/how-it-works/how-integrated-analysis-works"}},u={},d=[{value:"During Your Secured Build",id:"during-your-secured-build",level:2},{value:"While You Test",id:"while-you-test",level:2},{value:"While Your App Runs (In Production)",id:"while-your-app-runs-in-production",level:2}],p={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Speed of execution is a crucial to execution. Security tooling performs differently in the three areas:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When applications are built and packaged, security scans generally add between a few seconds (to scan dependencies) to a few minutes (to scan the code). This can be on all builds or select builds."),(0,i.kt)("li",{parentName:"ul"},"When applications are tested, there is a moderate impact on performance due to the collection of detailed security information. Integrated Application Security Testing tools should be disabled during performance testing and turned on during other automated tests."),(0,i.kt)("li",{parentName:"ul"},"In production, Runtime Protection may add a few milliseconds per request. The performance impact is significantly less than the test phase because less data is collected.")),(0,i.kt)("h2",{id:"during-your-secured-build"},"During Your Secured Build"),(0,i.kt)("p",null,"At build time, two key aspects occur:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A local scanner inventories resolved dependencies, queries a service, and obtains a list of vulnerabilities that are present in each dependency. This may take a few seconds."),(0,i.kt)("li",{parentName:"ul"},"When a static scan is requested, a utility uploads the fully packaged application to a cloud service, which then performs a static scan. Scans may take a few minutes to complete, when results will become available. If desired, builds can wait for these results to fail a vulnerable build.")),(0,i.kt)("p",null,"Performance considerations of the static scan:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Scan time is improved relative to common static analyzers because it focuses on accessible code paths (from entry points to where they go) rather than traversing all possible code paths."),(0,i.kt)("li",{parentName:"ul"},"Static scans do not need to run on every build. Select a frequency that is common but not an interference.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Teams with infrequent or periodic builds can select every build."),(0,i.kt)("li",{parentName:"ul"},"Teams with frequent build cycles can run on deployment-oriented builds."))),(0,i.kt)("li",{parentName:"ul"},"Scan results can be tracked and merged over time, for example to mark vulnerabilities with mitigating controls. This tracking can prevent these issues from failing future builds.")),(0,i.kt)("h2",{id:"while-you-test"},"While You Test"),(0,i.kt)("p",null,"When applications are tested, an automated security agent is woven in to the runtime to watch execution and gather data. The agent contains all security intelligence, so users simply use the application as normal."),(0,i.kt)("p",null,"The agent performs two actions that impact performance:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"At startup, a quick static analysis is performed during each file load to identify immediate issues and determine where runtime monitoring will go. Applications may experience a slight startup delay of 500ms to one minute. Most applications are a few seconds and time varies with the number of loads. When a relevant class or file is loaded, the security agent will add a statement at the beginning or end of a select functions/methods to perform a security check or improve intelligence of future security checks. Most functions are left alone."),(0,i.kt)("li",{parentName:"ul"},"At runtime, the added checks observe data used by the application to determine any custom risk within the application.")),(0,i.kt)("p",null,"Performance considerations at test time:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Functionality is equivalent. You do not need to duplicate with and without the agent."),(0,i.kt)("li",{parentName:"ul"},"Performance-related testing should be done without the agent present.")),(0,i.kt)("p",null,"If desired, adding additional memory may improve application performance during the security tests."),(0,i.kt)("h2",{id:"while-your-app-runs-in-production"},"While Your App Runs (In Production)"),(0,i.kt)("p",null,"Production applications have  highest performance demand and cannot tolerate impact. While the production and test agents use similar technology, performance is significantly different because of what they do with it."),(0,i.kt)("p",null,"Contrast Protect addresses production performance by changing the audience and adjusting the level of data collection. Unlike Test where the audience is a human, the agent becomes the audience and it gathers enough data for three goals:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Allow the action/request (most common), is the action either considered safe or not unsafe enough to block. In this case the agent has minimal impact."),(0,i.kt)("li",{parentName:"ul"},"Block the action, is there enough data available to deem the action unsafe and worth blocking."),(0,i.kt)("li",{parentName:"ul"},"Report the action asynchronously, does enough information exist that the action is in-between safe and unsafe but merits a record. In this case the report is async to allow the original request to continue without delay.")),(0,i.kt)("p",null,"Unlike performance at test, the agent does not collect as much data in-between when data enter the system and when it makes one of these decisions. As a result performance is similar to an unprotected application."))}h.isMDXComponent=!0}}]);