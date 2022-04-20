"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[5154],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2257:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={title:"How It Works for .NET and .NET Core",sidebar_position:1},c=void 0,l={unversionedId:"getting-started/tutorial-dotnet/index",id:"getting-started/tutorial-dotnet/index",title:"How It Works for .NET and .NET Core",description:"Contrast provides a service that analyzes .NET and .NET Core applications on Windows and Linux.",source:"@site/docs/getting-started/tutorial-dotnet/index.md",sourceDirName:"getting-started/tutorial-dotnet",slug:"/getting-started/tutorial-dotnet/",permalink:"/docs/getting-started/tutorial-dotnet/",editUrl:"https://github.com/contrastsecurity/developer.contrastsecurity.com/blob/master/docs/getting-started/tutorial-dotnet/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"How It Works for .NET and .NET Core",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"JVM Languages",permalink:"/docs/getting-started/tutorial-java/jvm-languages"},next:{title:".NET",permalink:"/docs/getting-started/tutorial-dotnet/dotnet"}},u={},p=[{value:"Windows Service",id:"windows-service",level:2},{value:"Linux",id:"linux",level:2},{value:"References",id:"references",level:2}],d={toc:p};function f(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Contrast provides a service that analyzes .NET and .NET Core applications on Windows and Linux."),(0,i.kt)("h2",{id:"windows-service"},"Windows Service"),(0,i.kt)("p",null,"To secure your application, Contrast will install a Windows service. This service will monitor IIS and IIS Express to engage each application with a customized security profiler."),(0,i.kt)("p",null,'The service is named "Contrast.NET Main Service" within the services control panel. Once installed, the service monitors all .NET applications with the opportunity to add exclusions.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Contrast.NET Service",src:r(2725).Z,width:"1026",height:"463"})),(0,i.kt)("p",null,"The security profiler will monitor API execution to for security events, and supports simultaneous use of other profilers through ",(0,i.kt)("a",{parentName:"p",href:"https://docs.contrastsecurity.com/en/-net-framework-profiler-chaining.html"},"Profiler Chaining"),"."),(0,i.kt)("h2",{id:"linux"},"Linux"),(0,i.kt)("p",null,"The techniques to engage .NET Core on Linux are similar to Windows. All work is focused on the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/standard/clr"},"Common Language Runtime (CLR)"),"."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/framework/unmanaged-api/profiling/profiling-overview"},".NET Profiler API"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.contrastsecurity.com/en/-net-framework-profiler-chaining.html"},"Profiler Chaining .NET"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.contrastsecurity.com/en/-net-core-profiler-chaining.html"},"Profiler Chaining .NET Core")))}f.isMDXComponent=!0},2725:function(e,t,r){t.Z=r.p+"assets/images/dotnet-service-bb4b4fcdc585f5168dcb6d6ba48fdfa8.png"}}]);