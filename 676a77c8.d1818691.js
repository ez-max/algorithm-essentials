(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var i=n(2),r=(n(0),n(301));const l={title:"Best Time to Buy and Sell Stock IV"},a={unversionedId:"dp/best-time-to-buy-and-sell-stock-iv",id:"dp/best-time-to-buy-and-sell-stock-iv",isDocsHomePage:!1,title:"Best Time to Buy and Sell Stock IV",description:"\u63cf\u8ff0",source:"@site/docs/dp/best-time-to-buy-and-sell-stock-iv.md",slug:"/dp/best-time-to-buy-and-sell-stock-iv",permalink:"/dp/best-time-to-buy-and-sell-stock-iv",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/dp/best-time-to-buy-and-sell-stock-iv.md",version:"current",sidebar:"someSidebar",previous:{title:"Best Time to Buy and Sell Stock III",permalink:"/dp/best-time-to-buy-and-sell-stock-iii"},next:{title:"Best Time to Buy and Sell Stock with Cooldown",permalink:"/dp/best-time-to-buy-and-sell-stock-with-cooldown"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u89e3\u6cd51",id:"\u89e3\u6cd51",children:[]},{value:"\u89e3\u6cd52 \u6700\u957fm\u6bb5\u5b50\u6bb5\u548c",id:"\u89e3\u6cd52-\u6700\u957fm\u6bb5\u5b50\u6bb5\u548c",children:[]}],c={rightToc:o};function b({components:e,...t}){return Object(r.b)("wrapper",Object(i.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(r.b)("p",null,"Say you have an array for which the i-th element is the price of a given stock on day ",Object(r.b)("inlineCode",{parentName:"p"},"i"),"."),Object(r.b)("p",null,"Design an algorithm to find the maximum profit. You may complete at most ",Object(r.b)("inlineCode",{parentName:"p"},"k")," transactions."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note"),":\nYou may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again)."),Object(r.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(r.b)("p",null,"\u8bbe\u4e24\u4e2a\u72b6\u6001\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"global[i][j]")," \u8868\u793ai\u5929\u524d\u6700\u591a\u53ef\u4ee5\u8fdb\u884cj\u6b21\u4ea4\u6613\u7684\u6700\u5927\u5229\u6da6\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"local[i][j]"),"\u8868\u793ai\u5929\u524d\u6700\u591a\u53ef\u4ee5\u8fdb\u884cj\u6b21\u4ea4\u6613\uff0c\u4e14\u5728\u7b2ci\u5929\u8fdb\u884c\u4e86\u7b2cj\u6b21\u4ea4\u6613\u7684\u6700\u5927\u5229\u6da6\u3002\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u5982\u4e0b\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"local[i][j] = max(global[i-1][j-1] + max(diff,0), local[i-1][j]+diff)\nglobal[i][j] = max(local[i][j], global[i-1][j])\n")),Object(r.b)("p",null,"\u5173\u4e8e",Object(r.b)("inlineCode",{parentName:"p"},"global"),"\u7684\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u6bd4\u8f83\u7b80\u5355\uff0c\u4e0d\u65ad\u5730\u548c\u5df2\u7ecf\u8ba1\u7b97\u51fa\u7684local\u8fdb\u884c\u6bd4\u8f83\uff0c\u628a\u5927\u7684\u4fdd\u5b58\u5728global\u4e2d\u3002"),Object(r.b)("p",null,"\u5173\u4e8e",Object(r.b)("inlineCode",{parentName:"p"},"local"),"\u7684\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\uff0c\u53d6\u4e0b\u9762\u4e8c\u8005\u4e2d\u8f83\u5927\u7684\u4e00\u4e2a\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5168\u5c40\u524d",Object(r.b)("inlineCode",{parentName:"li"},"i-1"),"\u5929\u8fdb\u884c\u4e86",Object(r.b)("inlineCode",{parentName:"li"},"j-1"),"\u6b21\u4ea4\u6613\uff0c\u7136\u540e\u7136\u540e\u52a0\u4e0a\u4eca\u5929\u7684\u4ea4\u6613\u4ea7\u751f\u7684\u5229\u6da6\uff08\u5982\u679c\u8d5a\u94b1\u5c31\u4ea4\u6613\uff0c\u4e0d\u8d5a\u94b1\u5c31\u4e0d\u4ea4\u6613\uff0c\u4ec0\u4e48\u4e5f\u4e0d\u53d1\u751f\uff0c\u5229\u6da6\u662f0\uff09"),Object(r.b)("li",{parentName:"ul"},"\u5c40\u90e8\u524d",Object(r.b)("inlineCode",{parentName:"li"},"i-1"),"\u5929\u8fdb\u884c\u4e86",Object(r.b)("inlineCode",{parentName:"li"},"j"),"\u6b21\u4ea4\u6613\uff0c\u7136\u540e\u52a0\u4e0a\u4eca\u5929\u7684\u5dee\u4ef7\uff08",Object(r.b)("inlineCode",{parentName:"li"},"local[i-1][j]"),"\u662f\u7b2c",Object(r.b)("inlineCode",{parentName:"li"},"i-1"),"\u5929\u5356\u51fa\u7684\u4ea4\u6613\uff0c\u5b83\u52a0\u4e0adiff\u540e\u53d8\u6210\u7b2c",Object(r.b)("inlineCode",{parentName:"li"},"i"),"\u5929\u5356\u51fa\uff0c\u5e76\u4e0d\u4f1a\u589e\u52a0\u4ea4\u6613\u6b21\u6570\u3002\u65e0\u8bba",Object(r.b)("inlineCode",{parentName:"li"},"diff"),"\u662f\u6b63\u8fd8\u662f\u8d1f\u90fd\u8981\u52a0\u4e0a\uff0c\u5426\u5219\u5c31\u4e0d\u6ee1\u8db3",Object(r.b)("inlineCode",{parentName:"li"},"local[i][j]"),"\u5fc5\u987b\u5728\u6700\u540e\u4e00\u5929\u5356\u51fa\u7684\u6761\u4ef6\u4e86\uff09")),Object(r.b)("p",null,"\u6ce8\u610f\uff0c\u5f53",Object(r.b)("inlineCode",{parentName:"p"},"k"),'\u5927\u4e8e\u6570\u7ec4\u7684\u5927\u5c0f\u65f6\uff0c\u4e0a\u8ff0\u7b97\u6cd5\u5c06\u53d8\u5f97\u4f4e\u6548\uff0c\u6b64\u65f6\u53ef\u4ee5\u6539\u4e3a\u4e0d\u9650\u4ea4\u6613\u6b21\u6570\u7684\u65b9\u5f0f\u89e3\u51b3\uff0c\u5373\u7b49\u4ef7\u4e8e "Best Time to Buy and Sell Stock II"\u3002'),Object(r.b)("h3",{id:"\u89e3\u6cd51"},"\u89e3\u6cd51"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"// Best Time to Buy and Sell Stock IV\n// Time Complexity: O(nk), Space Complexity: O(nk)\npublic class Solution {\n    public int maxProfit(final int k, final int[] prices) {\n        if (prices.length < 2 || k < 1) return 0;\n        if (k >= prices.length) return maxProfit(prices);\n\n        final int[][] local = new int[prices.length][k + 1];\n        final int[][] global = new int[prices.length][k + 1];\n\n        for (int i = 1; i < prices.length; i++) {\n            final int diff = prices[i] - prices[i - 1];\n            for (int j = 1; j < k+1; j++) {\n                local[i][j] = Math.max(\n                        global[i - 1][j - 1] + Math.max(diff, 0),\n                        local[i - 1][j] + diff);\n                global[i][j] = Math.max(global[i - 1][j], local[i][j]);\n            }\n        }\n\n        return global[prices.length - 1][k];\n    }\n\n    // Best Time to Buy and Sell Stock II\n    public static int maxProfit(final int[] prices) {\n        int sum = 0;\n        for (int i = 1; i < prices.length; i++) {\n            int diff = prices[i] - prices[i - 1];\n            if (diff > 0) sum += diff;\n        }\n        return sum;\n    }\n}\n")),Object(r.b)("h3",{id:"\u89e3\u6cd52-\u6700\u957fm\u6bb5\u5b50\u6bb5\u548c"},"\u89e3\u6cd52 \u6700\u957fm\u6bb5\u5b50\u6bb5\u548c"))}b.isMDXComponent=!0},301:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var i=n(0),r=n.n(i);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,d=u["".concat(a,".").concat(m)]||u[m]||s[m]||l;return n?r.a.createElement(d,o(o({ref:t},b),{},{components:n})):r.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var b=2;b<l;b++)a[b]=n[b];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);