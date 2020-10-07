(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{212:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(2),a=(n(0),n(301)),l=n(305),i=n(306);const o={title:"Remove Duplicates from Sorted List"},c={unversionedId:"linear-list/linked-list/remove-duplicates-from-sorted-list",id:"linear-list/linked-list/remove-duplicates-from-sorted-list",isDocsHomePage:!1,title:"Remove Duplicates from Sorted List",description:"\u63cf\u8ff0",source:"@site/docs/linear-list/linked-list/remove-duplicates-from-sorted-list.md",slug:"/linear-list/linked-list/remove-duplicates-from-sorted-list",permalink:"/linear-list/linked-list/remove-duplicates-from-sorted-list",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/linear-list/linked-list/remove-duplicates-from-sorted-list.md",version:"current",sidebar:"someSidebar",previous:{title:"Partition List",permalink:"/linear-list/linked-list/partition-list"},next:{title:"Remove Duplicates from Sorted List II",permalink:"/linear-list/linked-list/remove-duplicates-from-sorted-list-ii"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u9012\u5f52\u7248",id:"\u9012\u5f52\u7248",children:[]},{value:"\u8fed\u4ee3\u7248",id:"\u8fed\u4ee3\u7248",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],s={rightToc:u};function d({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(a.b)("p",null,"Given a sorted linked list, delete all duplicates such that each element appear only once."),Object(a.b)("p",null,"For example,"),Object(a.b)("p",null,"Given ",Object(a.b)("inlineCode",{parentName:"p"},"1->1->2"),", return ",Object(a.b)("inlineCode",{parentName:"p"},"1->2"),"."),Object(a.b)("p",null,"Given ",Object(a.b)("inlineCode",{parentName:"p"},"1->1->2->3->3"),", return ",Object(a.b)("inlineCode",{parentName:"p"},"1->2->3"),"."),Object(a.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(a.b)("p",null,"\u65e0"),Object(a.b)("h3",{id:"\u9012\u5f52\u7248"},"\u9012\u5f52\u7248"),Object(a.b)(l.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"java",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Remove Duplicates from Sorted List\n// \u9012\u5f52\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\n    public ListNode deleteDuplicates(ListNode head) {\n        if (head == null) return head;\n        ListNode dummy = new ListNode(head.val + 1); // \u503c\u53ea\u8981\u8ddfhead\u4e0d\u540c\u5373\u53ef\n        dummy.next = head;\n\n        recur(dummy, head);\n        return dummy.next;\n    }\n    private static void recur(ListNode prev, ListNode cur) {\n        if (cur == null) return;\n\n        if (prev.val == cur.val) { // \u5220\u9664head\n            prev.next = cur.next;\n            recur(prev, prev.next);\n        } else {\n            recur(prev.next, cur.next);\n        }\n    }\n};\n"))),Object(a.b)(i.a,{value:"cpp",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Remove Duplicates from Sorted List\n// \u9012\u5f52\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    ListNode *deleteDuplicates(ListNode *head) {\n        if (!head) return head;\n        ListNode dummy(head->val + 1); // \u503c\u53ea\u8981\u8ddfhead\u4e0d\u540c\u5373\u53ef\n        dummy.next = head;\n\n        recur(&dummy, head);\n        return dummy.next;\n    }\nprivate:\n    static void recur(ListNode *prev, ListNode *cur) {\n        if (cur == nullptr) return;\n\n        if (prev->val == cur->val) { // \u5220\u9664head\n            prev->next = cur->next;\n            delete cur;\n            recur(prev, prev->next);\n        } else {\n            recur(prev->next, cur->next);\n        }\n    }\n};\n")))),Object(a.b)("h3",{id:"\u8fed\u4ee3\u7248"},"\u8fed\u4ee3\u7248"),Object(a.b)(l.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"java",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Remove Duplicates from Sorted List\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic ListNode deleteDuplicates(ListNode head) {\n        if (head == null) return null;\n\n        for (ListNode prev = head, cur = head.next; cur != null; cur = prev.next) {\n            if (prev.val == cur.val) {\n                prev.next = cur.next;\n            } else {\n                prev = cur;\n            }\n        }\n        return head;\n    }\n};\n"))),Object(a.b)(i.a,{value:"cpp",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Remove Duplicates from Sorted List\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    ListNode *deleteDuplicates(ListNode *head) {\n        if (head == nullptr) return nullptr;\n\n        for (ListNode *prev = head, *cur = head->next; cur != nullptr; cur = prev->next) {\n            if (prev->val == cur->val) {\n                prev->next = cur->next;\n                delete cur;\n            } else {\n                prev = cur;\n            }\n        }\n        return head;\n    }\n};\n")))),Object(a.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/linear-list/linked-list/remove-duplicates-from-sorted-list-ii"}),"Remove Duplicates from Sorted List II"))))}d.isMDXComponent=!0},301:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||l;return n?a.a.createElement(m,o(o({ref:t},u),{},{components:n})):a.a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},302:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},303:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},304:function(e,t,n){"use strict";var r=n(0),a=n(303);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},305:function(e,t,n){"use strict";var r=n(0),a=n.n(r),l=n(304),i=n(302),o=n(49),c=n.n(o);const u=37,s=39;t.a=function(e){const{block:t,children:n,defaultValue:o,values:d,groupId:p}=e,{tabGroupChoices:b,setTabGroupChoices:m}=Object(l.a)(),[v,f]=Object(r.useState)(o),[O,j]=Object(r.useState)(!1);if(null!=p){const e=b[p];null!=e&&e!==v&&d.some((t=>t.value===e))&&f(e)}const h=e=>{f(e),null!=p&&m(p,e)},y=[],x=e=>{e.metaKey||e.altKey||e.ctrlKey||j(!0)},g=()=>{j(!1)};return Object(r.useEffect)((()=>{window.addEventListener("keydown",x),window.addEventListener("mousedown",g)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},d.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===e}),style:O?{}:{outline:"none"},key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case s:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e),x(e)},onFocus:()=>h(e),onClick:()=>{h(e),j(!1)},onPointerDown:()=>j(!1)},t)))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((e=>e.props.value===v))[0]))}},306:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);