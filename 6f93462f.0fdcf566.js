(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),a=(n(0),n(301)),o=n(305),i=n(306);const l={title:"Reverse Integer"},u={unversionedId:"simulation/reverse-integer",id:"simulation/reverse-integer",isDocsHomePage:!1,title:"Reverse Integer",description:"\u63cf\u8ff0",source:"@site/docs/simulation/reverse-integer.md",slug:"/simulation/reverse-integer",permalink:"/simulation/reverse-integer",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/simulation/reverse-integer.md",version:"current",sidebar:"someSidebar",previous:{title:"\u7b80\u4ecb",permalink:"/simulation/README"},next:{title:"Palindrome Number",permalink:"/simulation/palindrome-number"}},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],s={rightToc:c};function b({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(a.b)("p",null,"Reverse digits of an integer."),Object(a.b)("p",null,"Example1: x = 123, return 321"),Object(a.b)("p",null,"Example2: x = -123, return -321"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Have you thought about this?")),Object(a.b)("p",null,"Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!"),Object(a.b)("p",null,"If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100."),Object(a.b)("p",null,"Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?"),Object(a.b)("p",null,"Throw an exception? Good, but what if throwing an exception is not an option? You would then have to re-design the function (ie, add an extra parameter)."),Object(a.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(a.b)("p",null,"\u77ed\u5c0f\u7cbe\u608d\u7684\u9898\uff0c\u4ee3\u7801\u4e5f\u53ef\u4ee5\u5199\u7684\u5f88\u77ed\u5c0f\u3002"),Object(a.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(a.b)(o.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"java",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Reverse Integer\n// \u65f6\u95f4\u590d\u6742\u5ea6O(logn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\n// \u8003\u8651 1.\u8d1f\u6570\u7684\u60c5\u51b5 2. \u6ea2\u51fa\u7684\u60c5\u51b5(\u6b63\u6ea2\u51fa&&\u8d1f\u6ea2\u51fa\uff0c\u6bd4\u5982 x = -2147483648(\u5373-2^31) )\npublic class Solution {\n    public int reverse(int x) {\n        long r = 0;\n        long t = x;\n        t = t > 0 ? t : -t;\n        for (; t > 0; t /= 10)\n            r = r * 10 + t % 10;\n\n        boolean sign = x > 0 ? false: true;\n        if (r > 2147483647 || (sign && r > Integer.MAX_VALUE)) {\n            return 0;\n        } else {\n            if (sign) {\n                return (int)-r;\n            } else {\n                return (int)r;\n            }\n        }\n    }\n}\n"))),Object(a.b)(i.a,{value:"cpp",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Reverse Integer\n// \u65f6\u95f4\u590d\u6742\u5ea6O(logn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\n// \u8003\u8651 1.\u8d1f\u6570\u7684\u60c5\u51b5 2. \u6ea2\u51fa\u7684\u60c5\u51b5(\u6b63\u6ea2\u51fa&&\u8d1f\u6ea2\u51fa\uff0c\u6bd4\u5982 x = -2147483648(\u5373-2^31) )\nclass Solution {\npublic:\n    int reverse (int x) {\n        long long r = 0;\n        long long t = x;\n        t = t > 0 ? t : -t;\n        for (; t; t /= 10)\n            r = r * 10 + t % 10;\n\n        bool sign = x > 0 ? false: true;\n        if (r > 2147483647 || (sign && r > 2147483648)) {\n            return 0;\n        } else {\n            if (sign) {\n                return -r;\n            } else {\n                return r;\n            }\n        }\n    }\n};\n")))),Object(a.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/simulation/palindrome-number"}),"Palindrome Number"))))}b.isMDXComponent=!0},301:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),b=s(n),f=r,d=b["".concat(i,".").concat(f)]||b[f]||p[f]||o;return n?a.a.createElement(d,l(l({ref:t},c),{},{components:n})):a.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},302:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},303:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},304:function(e,t,n){"use strict";var r=n(0),a=n(303);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},305:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(304),i=n(302),l=n(49),u=n.n(l);const c=37,s=39;t.a=function(e){const{block:t,children:n,defaultValue:l,values:b,groupId:p}=e,{tabGroupChoices:f,setTabGroupChoices:d}=Object(o.a)(),[m,v]=Object(r.useState)(l),[g,O]=Object(r.useState)(!1);if(null!=p){const e=f[p];null!=e&&e!==m&&b.some((t=>t.value===e))&&v(e)}const h=e=>{v(e),null!=p&&d(p,e)},y=[],j=e=>{e.metaKey||e.altKey||e.ctrlKey||O(!0)},w=()=>{O(!1)};return Object(r.useEffect)((()=>{window.addEventListener("keydown",j),window.addEventListener("mousedown",w)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},b.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":m===e,className:Object(i.a)("tabs__item",u.a.tabItem,{"tabs__item--active":m===e}),style:g?{}:{outline:"none"},key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case s:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e),j(e)},onFocus:()=>h(e),onClick:()=>{h(e),O(!1)},onPointerDown:()=>O(!1)},t)))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((e=>e.props.value===m))[0]))}},306:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);