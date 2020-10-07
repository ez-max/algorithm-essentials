(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{219:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=(n(0),n(301)),i=n(305),l=n(306);const o={title:"Rotate List"},c={unversionedId:"linear-list/linked-list/rotate-list",id:"linear-list/linked-list/rotate-list",isDocsHomePage:!1,title:"Rotate List",description:"\u63cf\u8ff0",source:"@site/docs/linear-list/linked-list/rotate-list.md",slug:"/linear-list/linked-list/rotate-list",permalink:"/linear-list/linked-list/rotate-list",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/linear-list/linked-list/rotate-list.md",version:"current",sidebar:"someSidebar",previous:{title:"Remove Duplicates from Sorted List II",permalink:"/linear-list/linked-list/remove-duplicates-from-sorted-list-ii"},next:{title:"Remove Nth Node From End of List",permalink:"/linear-list/linked-list/remove-nth-node-from-end-of-list"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]}],u={rightToc:s};function p({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(a.b)("p",null,"Given a list, rotate the list to the right by ",Object(a.b)("inlineCode",{parentName:"p"},"k")," places, where ",Object(a.b)("inlineCode",{parentName:"p"},"k")," is non-negative."),Object(a.b)("p",null,"For example:\nGiven ",Object(a.b)("inlineCode",{parentName:"p"},"1->2->3->4->5->nullptr")," and ",Object(a.b)("inlineCode",{parentName:"p"},"k = 2"),", return ",Object(a.b)("inlineCode",{parentName:"p"},"4->5->1->2->3->nullptr"),"."),Object(a.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(a.b)("p",null,"\u5148\u904d\u5386\u4e00\u904d\uff0c\u5f97\u51fa\u94fe\u8868\u957f\u5ea6",Object(a.b)("inlineCode",{parentName:"p"},"len"),"\uff0c\u6ce8\u610f",Object(a.b)("inlineCode",{parentName:"p"},"k"),"\u53ef\u80fd\u5927\u4e8e",Object(a.b)("inlineCode",{parentName:"p"},"len"),"\uff0c\u56e0\u6b64\u4ee4",Object(a.b)("inlineCode",{parentName:"p"},"k %= len"),"\u3002\u5c06\u5c3e\u8282\u70b9 next \u6307\u9488\u6307\u5411\u9996\u8282\u70b9\uff0c\u5f62\u6210\u4e00\u4e2a\u73af\uff0c\u63a5\u7740\u5f80\u540e\u8dd1",Object(a.b)("inlineCode",{parentName:"p"},"len-k"),"\u6b65\uff0c\u4ece\u8fd9\u91cc\u65ad\u5f00\uff0c\u5c31\u662f\u8981\u6c42\u7684\u7ed3\u679c\u4e86\u3002"),Object(a.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(a.b)(i.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(a.b)(l.a,{value:"java",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Remove Rotate List\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\n    public ListNode rotateRight(ListNode head, int k) {\n        if (head == null || k == 0) return head;\n\n        int len = 1;\n        ListNode p = head;\n        while (p.next != null) { // \u6c42\u957f\u5ea6\n            len++;\n            p = p.next;\n        }\n        k = len - k % len;\n\n        p.next = head; // \u9996\u5c3e\u76f8\u8fde\n        for(int step = 0; step < k; step++) {\n            p = p.next;  //\u63a5\u7740\u5f80\u540e\u8dd1\n        }\n        head = p.next; // \u65b0\u7684\u9996\u8282\u70b9\n        p.next = null; // \u65ad\u5f00\u73af\n        return head;\n    }\n};\n"))),Object(a.b)(l.a,{value:"cpp",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Remove Rotate List\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    ListNode *rotateRight(ListNode *head, int k) {\n        if (head == nullptr || k == 0) return head;\n\n        int len = 1;\n        ListNode* p = head;\n        while (p->next != nullptr) { // \u6c42\u957f\u5ea6\n            len++;\n            p = p->next;\n        }\n        k = len - k % len;\n\n        p->next = head; // \u9996\u5c3e\u76f8\u8fde\n        for(int step = 0; step < k; step++) {\n            p = p->next;  //\u63a5\u7740\u5f80\u540e\u8dd1\n        }\n        head = p->next; // \u65b0\u7684\u9996\u8282\u70b9\n        p->next = nullptr; // \u65ad\u5f00\u73af\n        return head;\n    }\n};\n")))))}p.isMDXComponent=!0},301:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,f=p["".concat(l,".").concat(b)]||p[b]||d[b]||i;return n?a.a.createElement(f,o(o({ref:t},s),{},{components:n})):a.a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},302:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},303:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},304:function(e,t,n){"use strict";var r=n(0),a=n(303);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},305:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(304),l=n(302),o=n(49),c=n.n(o);const s=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:o,values:p,groupId:d}=e,{tabGroupChoices:b,setTabGroupChoices:f}=Object(i.a)(),[m,O]=Object(r.useState)(o),[v,h]=Object(r.useState)(!1);if(null!=d){const e=b[d];null!=e&&e!==m&&p.some((t=>t.value===e))&&O(e)}const j=e=>{O(e),null!=d&&f(d,e)},y=[],g=e=>{e.metaKey||e.altKey||e.ctrlKey||h(!0)},k=()=>{h(!1)};return Object(r.useEffect)((()=>{window.addEventListener("keydown",g),window.addEventListener("mousedown",k)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t})},p.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":m===e,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":m===e}),style:v?{}:{outline:"none"},key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e),g(e)},onFocus:()=>j(e),onClick:()=>{j(e),h(!1)},onPointerDown:()=>h(!1)},t)))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((e=>e.props.value===m))[0]))}},306:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);