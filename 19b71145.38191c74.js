(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{301:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,j=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return n?r.a.createElement(j,l(l({ref:t},u),{},{components:n})):r.a.createElement(j,l({ref:t},u))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},302:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},303:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},304:function(e,t,n){"use strict";var a=n(0),r=n(303);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},305:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(304),o=n(302),l=n(49),c=n.n(l);const u=37,s=39;t.a=function(e){const{block:t,children:n,defaultValue:l,values:p,groupId:b}=e,{tabGroupChoices:m,setTabGroupChoices:j}=Object(i.a)(),[d,f]=Object(a.useState)(l),[A,O]=Object(a.useState)(!1);if(null!=b){const e=m[b];null!=e&&e!==d&&p.some((t=>t.value===e))&&f(e)}const x=e=>{f(e),null!=b&&j(b,e)},y=[],g=e=>{e.metaKey||e.altKey||e.ctrlKey||O(!0)},v=()=>{O(!1)};return Object(a.useEffect)((()=>{window.addEventListener("keydown",g),window.addEventListener("mousedown",v)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},p.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":d===e,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":d===e}),style:A?{}:{outline:"none"},key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case s:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e),g(e)},onFocus:()=>x(e),onClick:()=>{x(e),O(!1)},onPointerDown:()=>O(!1)},t)))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((e=>e.props.value===d))[0]))}},306:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},354:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(7),i=(n(0),n(301)),o=n(305),l=n(306),c={title:"Rotate Image"},u={unversionedId:"linear-list/array/rotate-image",id:"linear-list/array/rotate-image",isDocsHomePage:!1,title:"Rotate Image",description:"\u63cf\u8ff0",source:"@site/docs/linear-list/array/rotate-image.md",slug:"/linear-list/array/rotate-image",permalink:"/linear-list/array/rotate-image",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/linear-list/array/rotate-image.md",version:"current",sidebar:"someSidebar",previous:{title:"Trapping Rain Water",permalink:"/linear-list/array/trapping-rain-water"},next:{title:"Plus One",permalink:"/linear-list/array/plus-one"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801 1",id:"\u4ee3\u7801-1",children:[]},{value:"\u4ee3\u7801 2",id:"\u4ee3\u7801-2",children:[]}],p={rightToc:s};function b(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(i.b)("p",null,"You are given an ",Object(i.b)("inlineCode",{parentName:"p"},"n \xd7 n")," 2D matrix representing an image."),Object(i.b)("p",null,"Rotate the image by 90 degrees (clockwise)."),Object(i.b)("p",null,"Follow up:\nCould you do this in-place?"),Object(i.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(i.b)("p",null,"\u9996\u5148\u60f3\u5230\uff0c\u7eaf\u6a21\u62df\uff0c\u4ece\u5916\u5230\u5185\u4e00\u5708\u4e00\u5708\u7684\u8f6c\uff0c\u4f46\u8fd9\u4e2a\u65b9\u6cd5\u592a\u6162\u3002"),Object(i.b)("p",null,"\u5982\u4e0b\u56fe\uff0c\u9996\u5148\u6cbf\u7740\u526f\u5bf9\u89d2\u7ebf\u7ffb\u8f6c\u4e00\u6b21\uff0c\u7136\u540e\u6cbf\u7740\u6c34\u5e73\u4e2d\u7ebf\u7ffb\u8f6c\u4e00\u6b21\u3002"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Rotate image",src:n(354).default})),Object(i.b)("p",null,"\u6216\u8005\uff0c\u9996\u5148\u6cbf\u7740\u6c34\u5e73\u4e2d\u7ebf\u7ffb\u8f6c\u4e00\u6b21\uff0c\u7136\u540e\u6cbf\u7740\u4e3b\u5bf9\u89d2\u7ebf\u7ffb\u8f6c\u4e00\u6b21\u3002"),Object(i.b)("h3",{id:"\u4ee3\u7801-1"},"\u4ee3\u7801 1"),Object(i.b)(o.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// Rotate Image\n// \u601d\u8def 1\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public void rotate(final int[][] matrix) {\n        final int n = matrix.length;\n\n        for (int i = 0; i < n; ++i)  // \u6cbf\u7740\u526f\u5bf9\u89d2\u7ebf\u53cd\u8f6c\n            for (int j = 0; j < n - i; ++j)\n                swap(matrix, i, j, n - 1 - j, n - 1 - i);\n\n        for (int i = 0; i < n / 2; ++i) // \u6cbf\u7740\u6c34\u5e73\u4e2d\u7ebf\u53cd\u8f6c\n            for (int j = 0; j < n; ++j)\n                swap(matrix, i, j, n - 1 - i, j);\n    }\n    private static void swap(final int[][] matrix,\n            int i, int j, int p, int q) {\n        int tmp = matrix[i][j];\n        matrix[i][j] = matrix[p][q];\n        matrix[p][q] = tmp;\n    }\n};\n"))),Object(i.b)(l.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"// Rotate Image\n// \u601d\u8def 1\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    void rotate(vector<vector<int>>& matrix) {\n        const int n = matrix.size();\n\n        for (int i = 0; i < n; ++i)  // \u6cbf\u7740\u526f\u5bf9\u89d2\u7ebf\u53cd\u8f6c\n            for (int j = 0; j < n - i; ++j)\n                swap(matrix[i][j], matrix[n - 1 - j][n - 1 - i]);\n\n        for (int i = 0; i < n / 2; ++i) // \u6cbf\u7740\u6c34\u5e73\u4e2d\u7ebf\u53cd\u8f6c\n            for (int j = 0; j < n; ++j)\n                swap(matrix[i][j], matrix[n - 1 - i][j]);\n    }\n};\n")))),Object(i.b)("h3",{id:"\u4ee3\u7801-2"},"\u4ee3\u7801 2"),Object(i.b)(o.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// Rotate Image\n// \u601d\u8def 2\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public void rotate(final int[][] matrix) {\n        final int n = matrix.length;\n\n        for (int i = 0; i < n / 2; ++i) // \u6cbf\u7740\u6c34\u5e73\u4e2d\u7ebf\u53cd\u8f6c\n            for (int j = 0; j < n; ++j)\n                swap(matrix, i, j, n - 1 - i, j);\n\n        for (int i = 0; i < n; ++i)  // \u6cbf\u7740\u4e3b\u5bf9\u89d2\u7ebf\u53cd\u8f6c\n            for (int j = i + 1; j < n; ++j)\n                swap(matrix, i, j, j, i);\n    }\n    private static void swap(final int[][] matrix,\n            int i, int j, int p, int q) {\n        int tmp = matrix[i][j];\n        matrix[i][j] = matrix[p][q];\n        matrix[p][q] = tmp;\n    }\n};\n"))),Object(i.b)(l.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"// Rotate Image\n// \u601d\u8def 2\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    void rotate(vector<vector<int>>& matrix) {\n        const int n = matrix.size();\n\n        for (int i = 0; i < n / 2; ++i) // \u6cbf\u7740\u6c34\u5e73\u4e2d\u7ebf\u53cd\u8f6c\n            for (int j = 0; j < n; ++j)\n                swap(matrix[i][j], matrix[n - 1 - i][j]);\n\n        for (int i = 0; i < n; ++i)  // \u6cbf\u7740\u4e3b\u5bf9\u89d2\u7ebf\u53cd\u8f6c\n            for (int j = i + 1; j < n; ++j)\n                swap(matrix[i][j], matrix[j][i]);\n    }\n};\n")))))}b.isMDXComponent=!0}}]);