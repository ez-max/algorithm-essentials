(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{301:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var i=t(0),r=t.n(i);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),l=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},u=function(e){var n=l(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},v={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},f=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),f=i,b=u["".concat(a,".").concat(f)]||u[f]||v[f]||o;return t?r.a.createElement(b,d(d({ref:n},c),{},{components:t})):r.a.createElement(b,d({ref:n},c))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d.mdxType="string"==typeof e?e:i,a[1]=d;for(var c=2;c<o;c++)a[c]=t[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},302:function(e,n,t){"use strict";function i(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=i(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=i(e))&&(r&&(r+=" "),r+=n);return r}},303:function(e,n,t){"use strict";var i=t(0);const r=Object(i.createContext)(void 0);n.a=r},304:function(e,n,t){"use strict";var i=t(0),r=t(303);n.a=function(){const e=Object(i.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},305:function(e,n,t){"use strict";var i=t(0),r=t.n(i),o=t(304),a=t(302),d=t(49),s=t.n(d);const c=37,l=39;n.a=function(e){const{block:n,children:t,defaultValue:d,values:u,groupId:v}=e,{tabGroupChoices:f,setTabGroupChoices:b}=Object(o.a)(),[p,m]=Object(i.useState)(d),[g,O]=Object(i.useState)(!1);if(null!=v){const e=f[v];null!=e&&e!==p&&u.some((n=>n.value===e))&&m(e)}const y=e=>{m(e),null!=v&&b(v,e)},j=[],w=e=>{e.metaKey||e.altKey||e.ctrlKey||O(!0)},h=()=>{O(!1)};return Object(i.useEffect)((()=>{window.addEventListener("keydown",w),window.addEventListener("mousedown",h)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(a.a)("tabs",{"tabs--block":n})},u.map((({value:e,label:n})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":p===e,className:Object(a.a)("tabs__item",s.a.tabItem,{"tabs__item--active":p===e}),style:g?{}:{outline:"none"},key:e,ref:e=>j.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case l:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case c:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(j,e.target,e),w(e)},onFocus:()=>y(e),onClick:()=>{y(e),O(!1)},onPointerDown:()=>O(!1)},n)))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},i.Children.toArray(t).filter((e=>e.props.value===p))[0]))}},306:function(e,n,t){"use strict";var i=t(0),r=t.n(i);n.a=function(e){return r.a.createElement("div",null,e.children)}},63:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return v}));var i=t(2),r=t(7),o=(t(0),t(301)),a=t(305),d=t(306),s={title:"Divide Two Integers"},c={unversionedId:"simulation/divide-two-integers",id:"simulation/divide-two-integers",isDocsHomePage:!1,title:"Divide Two Integers",description:"\u63cf\u8ff0",source:"@site/docs/simulation/divide-two-integers.md",slug:"/simulation/divide-two-integers",permalink:"/simulation/divide-two-integers",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/simulation/divide-two-integers.md",version:"current",sidebar:"someSidebar",previous:{title:"ZigZag Conversion",permalink:"/simulation/zigzag-conversion"},next:{title:"Text Justification",permalink:"/simulation/text-justification"}},l=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]}],u={rightToc:l};function v(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(o.b)("p",null,"Divide two integers without using multiplication, division and mod operator."),Object(o.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(o.b)("p",null,"\u4e0d\u80fd\u7528\u4e58\u3001\u9664\u548c\u53d6\u6a21\uff0c\u90a3\u5269\u4e0b\u7684\uff0c\u8fd8\u6709\u52a0\u3001\u51cf\u548c\u4f4d\u8fd0\u7b97\u3002"),Object(o.b)("p",null,"\u6700\u7b80\u5355\u7684\u65b9\u6cd5\uff0c\u662f\u4e0d\u65ad\u51cf\u53bb\u88ab\u9664\u6570\u3002\u5728\u8fd9\u4e2a\u57fa\u7840\u4e0a\uff0c\u53ef\u4ee5\u505a\u4e00\u70b9\u4f18\u5316\uff0c\u6bcf\u6b21\u628a\u88ab\u9664\u6570\u7ffb\u500d\uff0c\u4ece\u800c\u52a0\u901f\u3002"),Object(o.b)("p",null,"\u6ce8\u610f\uff0c\u5199\u4ee3\u7801\u7684\u65f6\u5019\uff0c\u7981\u6b62\u4f7f\u7528 long."),Object(o.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(o.b)(a.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(o.b)(d.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"// Divide Two Integers\n// \u65f6\u95f4\u590d\u6742\u5ea6O(logn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public int divide(int dividend, int divisor) {\n        if(dividend == 0) return 0;\n        if (divisor == 0) return Integer.MAX_VALUE;\n\n        // \u5f53 dividend = INT_MIN\uff0cdivisor = -1\u65f6\uff0c\u7ed3\u679c\u4f1a\u6ea2\u51fa\n        if (dividend == Integer.MIN_VALUE) {\n            if (divisor == -1) return Integer.MAX_VALUE;\n            else if (divisor < 0)\n                return 1 + divide(dividend - divisor, divisor);\n            else\n                return - 1 + divide((dividend + divisor), divisor);\n        }\n        if(divisor == Integer.MIN_VALUE){\n            return dividend == divisor ? 1 : 0;\n        }\n\n        int a = dividend > 0 ? dividend : -dividend;\n        int b = divisor > 0 ? divisor : -divisor;\n\n        int result = 0;\n        while (a >= b) {\n            int c = b;\n            for (int i = 0; a >= c;) {\n                a -= c;\n                result += 1 << i;\n                if (c < Integer.MAX_VALUE / 2) { // prevent overflow\n                    ++i;\n                    c <<= 1;\n                }\n            }\n        }\n\n        return ((dividend^divisor) >> 31) != 0 ? (-result) : (result);\n    }\n}\n"))),Object(o.b)(d.a,{value:"cpp",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),"// Divide Two Integers\n// \u65f6\u95f4\u590d\u6742\u5ea6O(logn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    int divide(int dividend, int divisor) {\n        if (dividend == 0) return 0;\n        if (divisor == 0) return INT_MAX;\n\n        // \u5f53 dividend = INT_MIN\uff0cdivisor = -1\u65f6\uff0c\u7ed3\u679c\u4f1a\u6ea2\u51fa\n        if (dividend == INT_MIN) {\n            if (divisor == -1) return INT_MAX;\n            else if (divisor < 0)\n                return 1 + divide(dividend - divisor, divisor);\n            else\n                return - 1 + divide((dividend + divisor), divisor);\n        }\n        if(divisor == INT_MIN){\n            return dividend == divisor ? 1 : 0;\n        }\n\n        int a = dividend > 0 ? dividend : -dividend;\n        int b = divisor > 0 ? divisor : -divisor;\n\n        int result = 0;\n        while (a >= b) {\n            int c = b;\n            for (int i = 0; a >= c;) {\n                a -= c;\n                result += 1 << i;\n                if (c < INT_MAX / 2) { // prevent overflow\n                    ++i;\n                    c <<= 1;\n                }\n            }\n        }\n\n        return ((dividend^divisor) >> 31) ? (-result) : (result);\n    }\n};\n")))))}v.isMDXComponent=!0}}]);