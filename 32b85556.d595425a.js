(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{116:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return u})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return b}));var r=t(2),a=t(7),o=(t(0),t(300)),i=t(304),c=t(305),u={title:"Integer to Roman"},l={unversionedId:"string/integer-to-roman",id:"string/integer-to-roman",isDocsHomePage:!1,title:"Integer to Roman",description:"\u63cf\u8ff0",source:"@site/docs/string/integer-to-roman.md",slug:"/string/integer-to-roman",permalink:"/string/integer-to-roman",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/string/integer-to-roman.md",version:"current",sidebar:"someSidebar",previous:{title:"Valid Number",permalink:"/string/valid-number"},next:{title:"Roman to Integer",permalink:"/string/roman-to-integer"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],m={rightToc:s};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(o.b)("p",null,"Given an integer, convert it to a roman numeral."),Object(o.b)("p",null,"Input is guaranteed to be within the range from 1 to 3999."),Object(o.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(o.b)("p",null,"\u65e0"),Object(o.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(o.b)(i.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'// Integer to Roman\n// \u65f6\u95f4\u590d\u6742\u5ea6O(num)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\n    public String intToRoman(int num) {\n        final int radix[] = {1000, 900, 500, 400, 100, 90,\n                50, 40, 10, 9, 5, 4, 1};\n        final String symbol[] = {"M", "CM", "D", "CD", "C", "XC",\n                "L", "XL", "X", "IX", "V", "IV", "I"};\n\n        StringBuilder roman = new StringBuilder();\n        for (int i = 0; num > 0; ++i) {\n            int count = num / radix[i];\n            num %= radix[i];\n            for (; count > 0; --count) roman.append(symbol[i]);\n        }\n        return roman.toString();\n    }\n}\n'))),Object(o.b)(c.a,{value:"cpp",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),'// Integer to Roman\n// \u65f6\u95f4\u590d\u6742\u5ea6O(num)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    string intToRoman(int num) {\n        const int radix[] = {1000, 900, 500, 400, 100, 90,\n                50, 40, 10, 9, 5, 4, 1};\n        const string symbol[] = {"M", "CM", "D", "CD", "C", "XC",\n                "L", "XL", "X", "IX", "V", "IV", "I"};\n\n        string roman;\n        for (size_t i = 0; num > 0; ++i) {\n            int count = num / radix[i];\n            num %= radix[i];\n            for (; count > 0; --count) roman += symbol[i];\n        }\n        return roman;\n    }\n};\n')))),Object(o.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/string/roman-to-integer"}),"Roman to Integer"))))}b.isMDXComponent=!0},300:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return p}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=s(t),f=r,p=m["".concat(i,".").concat(f)]||m[f]||b[f]||o;return t?a.a.createElement(p,c(c({ref:n},l),{},{components:t})):a.a.createElement(p,c({ref:n},l))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},301:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},302:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},303:function(e,n,t){"use strict";var r=t(0),a=t(302);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},304:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(303),i=t(301),c=t(49),u=t.n(c),l=37,s=39;n.a=function(e){var n=e.block,t=e.children,c=e.defaultValue,m=e.values,b=e.groupId,f=Object(o.a)(),p=f.tabGroupChoices,d=f.setTabGroupChoices,g=Object(r.useState)(c),v=g[0],O=g[1],y=Object(r.useState)(!1),j=y[0],h=y[1];if(null!=b){var w=p[b];null!=w&&w!==v&&m.some((function(e){return e.value===w}))&&O(w)}var x=function(e){O(e),null!=b&&d(b,e)},C=[],I=function(e){e.metaKey||e.altKey||e.ctrlKey||h(!0)},E=function(){h(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",I),window.addEventListener("mousedown",E)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n})},m.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===n,className:Object(i.a)("tabs__item",u.a.tabItem,{"tabs__item--active":v===n}),style:j?{}:{outline:"none"},key:n,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case s:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case l:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(C,e.target,e),I(e)},onFocus:function(){return x(n)},onClick:function(){x(n),h(!1)},onPointerDown:function(){return h(!1)}},t)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter((function(e){return e.props.value===v}))[0]))}},305:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){return a.a.createElement("div",null,e.children)}}}]);