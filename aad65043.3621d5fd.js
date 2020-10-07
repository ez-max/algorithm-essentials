(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{226:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=(n(0),n(301)),o=n(305),i=n(306);const c={title:"Length of Last Word"},l={unversionedId:"string/length-of-last-word",id:"string/length-of-last-word",isDocsHomePage:!1,title:"Length of Last Word",description:"\u63cf\u8ff0",source:"@site/docs/string/length-of-last-word.md",slug:"/string/length-of-last-word",permalink:"/string/length-of-last-word",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/string/length-of-last-word.md",version:"current",sidebar:"someSidebar",previous:{title:"Simplify Path",permalink:"/string/simplify-path"},next:{title:"Isomorphic Strings",permalink:"/string/isomorphic-strings"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]}],u={rightToc:s};function p({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(a.b)("p",null,"Given a string s consists of upper/lower-case alphabets and empty space characters ",Object(a.b)("inlineCode",{parentName:"p"},"' '"),", return the length of last word in the string."),Object(a.b)("p",null,"If the last word does not exist, return 0."),Object(a.b)("p",null,"Note: A word is defined as a character sequence consists of non-space characters only."),Object(a.b)("p",null,"For example,\nGiven ",Object(a.b)("inlineCode",{parentName:"p"},'s = "Hello World"'),",\nreturn 5."),Object(a.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(a.b)("p",null,"\u6a21\u62df\u3002\u5148\u4ece\u53f3\u5230\u5de6\u627e\u5230\u7b2c\u4e00\u4e2a\u5b57\u6bcd\uff0c\u7136\u540e\u4ece\u53f3\u5230\u5de6\u627e\u5230\u7b2c\u4e00\u4e2a\u975e\u5b57\u6bcd\uff0c\u4e8c\u8005\u7684\u8ddd\u79bb\u5c31\u662f\u6700\u540e\u4e00\u4e2a word \u7684\u957f\u5ea6\u3002"),Object(a.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(a.b)(o.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"java",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Length of Last Word\n// \u5077\u61d2\uff0c\u7528 STL\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public int lengthOfLastWord(String s) {\n        final Predicate isAlphabet = new Predicate() {\n            @Override\n            public boolean apply(char ch) {\n                return Character.isAlphabetic(ch);\n            }\n        };\n        final Predicate isNotAlphabet = new Predicate() {\n            @Override\n            public boolean apply(char ch) {\n                return !Character.isAlphabetic(ch);\n            }\n        };\n        int j = findIf(s, s.length() - 1, isAlphabet);\n        int i = findIf(s, j, isNotAlphabet);\n        return j - i;\n    }\n\n    interface Predicate {\n        boolean apply(char ch);\n    }\n    // from right to left\n    private static int findIf(final String s, int fromIndex, Predicate p) {\n        for (int i = fromIndex; i >= 0; --i) {\n            if (p.apply(s.charAt(i))) return i;\n        }\n        return -1;\n    }\n}\n"))),Object(a.b)(i.a,{value:"cpp",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Length of Last Word\n// \u5077\u61d2\uff0c\u7528 STL\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    int lengthOfLastWord(const string& s) {\n        auto first = find_if(s.rbegin(), s.rend(), ::isalpha);\n        auto last = find_if_not(first, s.rend(), ::isalpha);\n        return distance(first, last);\n    }\n};\n")))))}p.isMDXComponent=!0},301:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,b=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return n?a.a.createElement(b,c(c({ref:t},s),{},{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},302:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},303:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},304:function(e,t,n){"use strict";var r=n(0),a=n(303);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},305:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(304),i=n(302),c=n(49),l=n.n(c);const s=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:c,values:p,groupId:f}=e,{tabGroupChoices:d,setTabGroupChoices:b}=Object(o.a)(),[m,h]=Object(r.useState)(c),[g,O]=Object(r.useState)(!1);if(null!=f){const e=d[f];null!=e&&e!==m&&p.some((t=>t.value===e))&&h(e)}const y=e=>{h(e),null!=f&&b(f,e)},v=[],j=e=>{e.metaKey||e.altKey||e.ctrlKey||O(!0)},w=()=>{O(!1)};return Object(r.useEffect)((()=>{window.addEventListener("keydown",j),window.addEventListener("mousedown",w)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},p.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":m===e,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":m===e}),style:g?{}:{outline:"none"},key:e,ref:e=>v.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e),j(e)},onFocus:()=>y(e),onClick:()=>{y(e),O(!1)},onPointerDown:()=>O(!1)},t)))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((e=>e.props.value===m))[0]))}},306:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);