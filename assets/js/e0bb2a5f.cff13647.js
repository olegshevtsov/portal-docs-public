"use strict";(self.webpackChunkcloudpbx_portal_docs=self.webpackChunkcloudpbx_portal_docs||[]).push([[1790],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(f,l(l({ref:t},u),{},{components:a})):n.createElement(f,l({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8787:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={slug:"release-notes-0.56.0",title:"Release Notes 0.56.0",authors:"sat",tags:["release notes","portal","0.56.0"]},l=void 0,i={permalink:"/portal-docs-public/blog/release-notes-0.56.0",editUrl:"https://github.com/olegshevtsov/portal-docs/tree/development/blog/2023-05-06-0.55.0.md",source:"@site/blog/2023-05-06-0.55.0.md",title:"Release Notes 0.56.0",description:"Release 0.56.0 brings beautiful wallboards and bugfixes",date:"2023-05-06T00:00:00.000Z",formattedDate:"May 6, 2023",tags:[{label:"release notes",permalink:"/portal-docs-public/blog/tags/release-notes"},{label:"portal",permalink:"/portal-docs-public/blog/tags/portal"},{label:"0.56.0",permalink:"/portal-docs-public/blog/tags/0-56-0"}],readingTime:1.555,hasTruncateMarker:!0,authors:[{name:"Oleg Shevtsov",title:"Head of PMD",url:"https://www.linkedin.com/in/olegshevtsov/",imageURL:"https://blog.portaone.com/wp-content/uploads/2022/06/cropped-new_shevtsov.jpg",key:"sat"}],frontMatter:{slug:"release-notes-0.56.0",title:"Release Notes 0.56.0",authors:"sat",tags:["release notes","portal","0.56.0"]},prevItem:{title:"Release Notes 0.55.0",permalink:"/portal-docs-public/blog/release-notes-0.55.0"},nextItem:{title:"Welcome",permalink:"/portal-docs-public/blog/welcome"}},s={authorsImageUrls:[void 0]},c=[{value:"Enhancements:",id:"enhancements",level:3},{value:"Bugfixes:",id:"bugfixes",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Release 0.56.0 brings beautiful wallboards and bugfixes"),(0,r.kt)("h3",{id:"enhancements"},"Enhancements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ICAP-1592 Dashboard shows 0 in DIDs statistics if DID component is restricted by API role"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1633 Show time intervals for auto-attendant menus based on the value of period"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1081 Highlight the tab with an error to help users understand why their changes cannot be saved")),(0,r.kt)("h3",{id:"bugfixes"},"Bugfixes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ICAP-1636 The quick access panel overlaps the dashboard"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1726 Disable the Save button for widget dialogues if their mandatory fields are not filled in"),(0,r.kt)("li",{parentName:"ul"},'ICAP-1757 Show "Transfer to fax mailbox" instead of "Transfer to voicemail" if fax_only_mode is inherited by the auto-attendant from its product'),(0,r.kt)("li",{parentName:"ul"},"ICAP-1828 Remove the unnecessary scroll for the call volumes widget"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1836 Fields are jumping on validating the port for SIP contact"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1842 Tab names for SIP trunk details and AA menu"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1847 Impossible to assign device lines to extensions except for the first line"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1851 Device name is shown like model if the same device has several lines assigned to the same extension"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1852 Unassigned device is cached after re-opening the Assign device dialogue"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1860 Cannot upload MOH for call queue in Ring Group on CloudPBX UI"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1854 Layout issues on the dashboard"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1855 Extension is not shown for an active call"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1861 The Save button is active for the dialogue even if no changes are made for a device/port assigned to an extension"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1865 The call queue on-hold music is disabled after a ringback tone is changed for the same ring group"),(0,r.kt)("li",{parentName:"ul"},'ICAP-1866 Link in "Access to the extension portal" section does not redirect to tab Device'),(0,r.kt)("li",{parentName:"ul"},"ICAP-1867 Number of calls checkbox is missing for Call volumes widget"),(0,r.kt)("li",{parentName:"ul"},'ICAP-1869 Enabled "Number of calls" option of a call volume widget is reset when the "Show" filter changes its value')))}d.isMDXComponent=!0}}]);