(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{187:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return u}));var i=t(2),r=(t(0),t(301)),a=t(305),s=t(306);const l={title:"Interleaving String"},c={unversionedId:"dp/interleaving-string",id:"dp/interleaving-string",isDocsHomePage:!1,title:"Interleaving String",description:"\u63cf\u8ff0",source:"@site/docs/dp/interleaving-string.md",slug:"/dp/interleaving-string",permalink:"/dp/interleaving-string",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/dp/interleaving-string.md",version:"current",sidebar:"someSidebar",previous:{title:"Best Time to Buy and Sell Stock with Cooldown",permalink:"/dp/best-time-to-buy-and-sell-stock-with-cooldown"},next:{title:"Scramble String",permalink:"/dp/scramble-string"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u9012\u5f52",id:"\u9012\u5f52",children:[]},{value:"\u52a8\u89c4",id:"\u52a8\u89c4",children:[]},{value:"\u52a8\u89c4+\u6eda\u52a8\u6570\u7ec4",id:"\u52a8\u89c4\u6eda\u52a8\u6570\u7ec4",children:[]}],b={rightToc:o};function u({components:e,...n}){return Object(r.b)("wrapper",Object(i.a)({},b,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(r.b)("p",null,"Given ",Object(r.b)("inlineCode",{parentName:"p"},"s1, s2, s3"),", find whether ",Object(r.b)("inlineCode",{parentName:"p"},"s3")," is formed by the interleaving of ",Object(r.b)("inlineCode",{parentName:"p"},"s1")," and ",Object(r.b)("inlineCode",{parentName:"p"},"s2"),"."),Object(r.b)("p",null,"For example, Given: ",Object(r.b)("inlineCode",{parentName:"p"},'s1 = "aabcc", s2 = "dbbca"'),","),Object(r.b)("p",null,"When ",Object(r.b)("inlineCode",{parentName:"p"},'s3 = "aadbbcbcac"'),", return true."),Object(r.b)("p",null,"When ",Object(r.b)("inlineCode",{parentName:"p"},'s3 = "aadbbbaccc"'),", return false."),Object(r.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(r.b)("p",null,"\u8bbe\u72b6\u6001",Object(r.b)("inlineCode",{parentName:"p"},"f[i][j]"),"\uff0c\u8868\u793a",Object(r.b)("inlineCode",{parentName:"p"},"s1[0,i]"),"\u548c",Object(r.b)("inlineCode",{parentName:"p"},"s2[0,j]"),"\uff0c\u5339\u914d",Object(r.b)("inlineCode",{parentName:"p"},"s3[0, i+j]"),"\u3002\u5982\u679c s1 \u7684\u6700\u540e\u4e00\u4e2a\u5b57\u7b26\u7b49\u4e8e s3 \u7684\u6700\u540e\u4e00\u4e2a\u5b57\u7b26\uff0c\u5219",Object(r.b)("inlineCode",{parentName:"p"},"f[i][j]=f[i-1][j]"),"\uff1b\u5982\u679c s2 \u7684\u6700\u540e\u4e00\u4e2a\u5b57\u7b26\u7b49\u4e8e s3 \u7684\u6700\u540e\u4e00\u4e2a\u5b57\u7b26\uff0c\u5219",Object(r.b)("inlineCode",{parentName:"p"},"f[i][j]=f[i][j-1]"),"\u3002\u56e0\u6b64\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u5982\u4e0b\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"f[i][j] = (s1[i - 1] == s3 [i + j - 1] && f[i - 1][j])\n       || (s2[j - 1] == s3 [i + j - 1] && f[i][j - 1]);\n")),Object(r.b)("h3",{id:"\u9012\u5f52"},"\u9012\u5f52"),Object(r.b)(a.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"// Interleaving String\n// \u9012\u5f52\uff0c\u4f1a\u8d85\u65f6\uff0c\u4ec5\u7528\u6765\u5e2e\u52a9\u7406\u89e3\npublic class Solution {\n    public boolean isInterleave(String s1, String s2, String s3) {\n        if (s3.length() != s1.length() + s2.length())\n            return false;\n        if (s1.isEmpty() || s2.isEmpty()) return true;\n\n        return isInterleave(s1, 0, s1.length(),\n                s2, 0, s2.length(), s3, 0, s3.length());\n    }\n\n    private static boolean isInterleave(String s1, int begin1, int end1,\n                                        String s2, int begin2, int end2,\n                                        String s3, int begin3, int end3) {\n        if (begin3 == end3)\n            return begin1 == end1 && begin2 == end2;\n\n        return (begin1 < end1 && s1.charAt(begin1) == s3.charAt(begin3) &&\n                isInterleave(s1, begin1 + 1, end1, s2, begin2, end2,\n                        s3, begin3 + 1, end3)) ||\n                (begin2 < end2 && s2.charAt(begin2) == s3.charAt(begin3) &&\n                        isInterleave(s1, begin1, end1,\n                                s2, begin2 + 1, end2, s3, begin3 + 1, end3));\n    }\n}\n"))),Object(r.b)(s.a,{value:"cpp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),"// Interleaving String\n// \u9012\u5f52\uff0c\u4f1a\u8d85\u65f6\uff0c\u4ec5\u7528\u6765\u5e2e\u52a9\u7406\u89e3\nclass Solution {\npublic:\n    bool isInterleave(const string& s1, const string& s2, const string& s3) {\n        if (s3.length() != s1.length() + s2.length())\n            return false;\n\n        return isInterleave(begin(s1), end(s1), begin(s2), end(s2),\n                begin(s3), end(s3));\n    }\n\n    template<typename InIt>\n    bool isInterleave(InIt first1, InIt last1, InIt first2, InIt last2,\n            InIt first3, InIt last3) {\n        if (first3 == last3)\n            return first1 == last1 && first2 == last2;\n\n        return (*first1 == *first3\n                && isInterleave(next(first1), last1, first2, last2,\n                        next(first3), last3))\n                || (*first2 == *first3\n                        && isInterleave(first1, last1, next(first2), last2,\n                                next(first3), last3));\n    }\n};\n")))),Object(r.b)("h3",{id:"\u52a8\u89c4"},"\u52a8\u89c4"),Object(r.b)(a.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"// Interleaving String\n// \u4e8c\u7ef4\u52a8\u89c4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^2)\npublic class Solution {\n    public boolean isInterleave(String s1, String s2, String s3) {\n        if (s3.length() != s1.length() + s2.length())\n            return false;\n\n        boolean[][] f = new boolean[s1.length() + 1][s2.length() + 1];\n        for (int i = 0; i < s1.length() + 1; ++i)\n            Arrays.fill(f[i], true);\n\n        for (int i = 1; i <= s1.length(); ++i)\n            f[i][0] = f[i - 1][0] && s1.charAt(i - 1) == s3.charAt(i - 1);\n\n        for (int i = 1; i <= s2.length(); ++i)\n            f[0][i] = f[0][i - 1] && s2.charAt(i - 1) == s3.charAt(i - 1);\n\n        for (int i = 1; i <= s1.length(); ++i)\n            for (int j = 1; j <= s2.length(); ++j)\n                f[i][j] = (s1.charAt(i - 1) == s3.charAt(i + j - 1) && f[i - 1][j])\n                        || (s2.charAt(j - 1) == s3.charAt(i + j - 1) && f[i][j - 1]);\n\n        return f[s1.length()][s2.length()];\n    }\n}\n"))),Object(r.b)(s.a,{value:"cpp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),"// Interleaving String\n// \u4e8c\u7ef4\u52a8\u89c4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^2)\nclass Solution {\npublic:\n    bool isInterleave(const string& s1, const string& s2, const string& s3) {\n        if (s3.length() != s1.length() + s2.length())\n            return false;\n\n        vector<vector<bool>> f(s1.length() + 1,\n                vector<bool>(s2.length() + 1, true));\n\n        for (size_t i = 1; i <= s1.length(); ++i)\n            f[i][0] = f[i - 1][0] && s1[i - 1] == s3[i - 1];\n\n        for (size_t i = 1; i <= s2.length(); ++i)\n            f[0][i] = f[0][i - 1] && s2[i - 1] == s3[i - 1];\n\n        for (size_t i = 1; i <= s1.length(); ++i)\n            for (size_t j = 1; j <= s2.length(); ++j)\n                f[i][j] = (s1[i - 1] == s3[i + j - 1] && f[i - 1][j])\n                        || (s2[j - 1] == s3[i + j - 1] && f[i][j - 1]);\n\n        return f[s1.length()][s2.length()];\n    }\n};\n")))),Object(r.b)("h3",{id:"\u52a8\u89c4\u6eda\u52a8\u6570\u7ec4"},"\u52a8\u89c4+\u6eda\u52a8\u6570\u7ec4"),Object(r.b)(a.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"// Interleaving String\n// \u4e8c\u7ef4\u52a8\u89c4+\u6eda\u52a8\u6570\u7ec4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public boolean isInterleave(String s1, String s2, String s3) {\n        if (s1.length() + s2.length() != s3.length())\n            return false;\n\n        if (s1.length() < s2.length())\n            return isInterleave(s2, s1, s3);\n\n        boolean[] f = new boolean[s2.length() + 1];\n        Arrays.fill(f, true);\n\n        for (int i = 1; i <= s2.length(); ++i)\n            f[i] = s2.charAt(i - 1) == s3.charAt(i - 1) && f[i - 1];\n\n        for (int i = 1; i <= s1.length(); ++i) {\n            f[0] = s1.charAt(i - 1) == s3.charAt(i - 1) && f[0];\n\n            for (int j = 1; j <= s2.length(); ++j)\n                f[j] = (s1.charAt(i - 1) == s3.charAt(i + j - 1) && f[j])\n                        || (s2.charAt(j - 1) == s3.charAt(i + j - 1) && f[j - 1]);\n        }\n\n        return f[s2.length()];\n    }\n}\n"))),Object(r.b)(s.a,{value:"cpp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),"// Interleaving String\n// \u4e8c\u7ef4\u52a8\u89c4+\u6eda\u52a8\u6570\u7ec4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    bool isInterleave(const string& s1, const string& s2, const string& s3) {\n        if (s1.length() + s2.length() != s3.length())\n            return false;\n\n        if (s1.length() < s2.length())\n            return isInterleave(s2, s1, s3);\n\n        vector<bool> f(s2.length() + 1, true);\n\n        for (size_t i = 1; i <= s2.length(); ++i)\n            f[i] = s2[i - 1] == s3[i - 1] && f[i - 1];\n\n        for (size_t i = 1; i <= s1.length(); ++i) {\n            f[0] = s1[i - 1] == s3[i - 1] && f[0];\n\n            for (size_t j = 1; j <= s2.length(); ++j)\n                f[j] = (s1[i - 1] == s3[i + j - 1] && f[j])\n                        || (s2[j - 1] == s3[i + j - 1] && f[j - 1]);\n        }\n\n        return f[s2.length()];\n    }\n};\n")))))}u.isMDXComponent=!0},301:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return g}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),b=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=b(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=b(t),p=i,g=u["".concat(s,".").concat(p)]||u[p]||f[p]||a;return t?r.a.createElement(g,l(l({ref:n},o),{},{components:t})):r.a.createElement(g,l({ref:n},o))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var o=2;o<a;o++)s[o]=t[o];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},302:function(e,n,t){"use strict";function i(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=i(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=i(e))&&(r&&(r+=" "),r+=n);return r}},303:function(e,n,t){"use strict";var i=t(0);const r=Object(i.createContext)(void 0);n.a=r},304:function(e,n,t){"use strict";var i=t(0),r=t(303);n.a=function(){const e=Object(i.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},305:function(e,n,t){"use strict";var i=t(0),r=t.n(i),a=t(304),s=t(302),l=t(49),c=t.n(l);const o=37,b=39;n.a=function(e){const{block:n,children:t,defaultValue:l,values:u,groupId:f}=e,{tabGroupChoices:p,setTabGroupChoices:g}=Object(a.a)(),[d,j]=Object(i.useState)(l),[h,v]=Object(i.useState)(!1);if(null!=f){const e=p[f];null!=e&&e!==d&&u.some((n=>n.value===e))&&j(e)}const m=e=>{j(e),null!=f&&g(f,e)},O=[],y=e=>{e.metaKey||e.altKey||e.ctrlKey||v(!0)},I=()=>{v(!1)};return Object(i.useEffect)((()=>{window.addEventListener("keydown",y),window.addEventListener("mousedown",I)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n})},u.map((({value:e,label:n})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":d===e,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":d===e}),style:h?{}:{outline:"none"},key:e,ref:e=>O.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case b:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case o:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(O,e.target,e),y(e)},onFocus:()=>m(e),onClick:()=>{m(e),v(!1)},onPointerDown:()=>v(!1)},n)))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},i.Children.toArray(t).filter((e=>e.props.value===d))[0]))}},306:function(e,n,t){"use strict";var i=t(0),r=t.n(i);n.a=function(e){return r.a.createElement("div",null,e.children)}}}]);