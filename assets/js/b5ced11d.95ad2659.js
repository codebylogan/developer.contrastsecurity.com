"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[1168],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,y=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2736:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={title:"Getting Started: Build-Time Security",sidebar_position:2},l=void 0,u={unversionedId:"getting-started/tutorial-java/securing-build-time",id:"getting-started/tutorial-java/securing-build-time",title:"Getting Started: Build-Time Security",description:"Done by: Application Developer",source:"@site/docs/getting-started/tutorial-java/securing-build-time.md",sourceDirName:"getting-started/tutorial-java",slug:"/getting-started/tutorial-java/securing-build-time",permalink:"/docs/getting-started/tutorial-java/securing-build-time",editUrl:"https://github.com/contrastsecurity/developer.contrastsecurity.com/blob/master/docs/getting-started/tutorial-java/securing-build-time.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Getting Started: Build-Time Security",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Securing Java Applications",permalink:"/docs/getting-started/tutorial-java/"},next:{title:"Getting Started: Test Security",permalink:"/docs/getting-started/tutorial-java/iast-security"}},s={},d=[{value:"Set up dependency scans",id:"set-up-dependency-scans",level:2},{value:"Install the scanner (done once)",id:"install-the-scanner-done-once",level:3},{value:"Scanning your dependencies (periodic automation)",id:"scanning-your-dependencies-periodic-automation",level:3},{value:"Set up static code analysis",id:"set-up-static-code-analysis",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Done by: Application Developer"),(0,i.kt)("p",null,"Time needed: 15 minutes"),(0,i.kt)("p",null,"What you get: Security tools used during your build/package phase can find security early on a standard build or pull request."),(0,i.kt)("h2",{id:"set-up-dependency-scans"},"Set up dependency scans"),(0,i.kt)("p",null,"The dependency scanner operates locally, leveraging cloud data for lookups. It identifies vulnerable components and creates a software bill of materials (SBOM)."),(0,i.kt)("h3",{id:"install-the-scanner-done-once"},"Install the scanner (done once)"),(0,i.kt)("p",null,"On a build server, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g @contrast/contrast-cli\n")),(0,i.kt)("h3",{id:"scanning-your-dependencies-periodic-automation"},"Scanning your dependencies (periodic automation)"),(0,i.kt)("p",null,"This step will give you a repeatable job to locate vulnerable dependencies."),(0,i.kt)("p",null,"Locate the continuous integration job that compiles and packages your application. For trial use, you may also locate the build script (pom.xml or build.gradle) on your developer system."),(0,i.kt)("p",null,"Add a step to call the scanner. This will also invoke your build tool's compile step."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"contrast-cli --yamlPath scan.yaml\n")),(0,i.kt)("p",null,"Look for ",(0,i.kt)("strong",{parentName:"p"},"_")," in the output to ensure completion.\nSet up your static code scanner\nStatic code scanning operates in the cloud, locating vulnerabilities for custom code, dependencies, and their interactions. It reports vulnerabilities along relevant code paths to guide understanding and fixes."),(0,i.kt)("h2",{id:"set-up-static-code-analysis"},"Set up static code analysis"),(0,i.kt)("p",null,"Identify your project as described in the Create a scan project document.\nScanning your code (periodic automation)\nSubmit your JAR or WAR file as described in the Start a Scan document.\nPlace your automation steps into the appropriate CI/CD job that packages your JAR or WAR file."))}m.isMDXComponent=!0}}]);