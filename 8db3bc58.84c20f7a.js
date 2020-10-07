(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{205:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return r})),t.d(a,"metadata",(function(){return b})),t.d(a,"rightToc",(function(){return p})),t.d(a,"default",(function(){return l}));var n=t(2),m=(t(0),t(301)),s=t(305),c=t(306);const r={title:"Palindrome Partitioning II"},b={unversionedId:"dp/palindrome-partitioning-ii",id:"dp/palindrome-partitioning-ii",isDocsHomePage:!1,title:"Palindrome Partitioning II",description:"\u63cf\u8ff0",source:"@site/docs/dp/palindrome-partitioning-ii.md",slug:"/dp/palindrome-partitioning-ii",permalink:"/dp/palindrome-partitioning-ii",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/dp/palindrome-partitioning-ii.md",version:"current",sidebar:"someSidebar",previous:{title:"Longest Increasing Subsequence",permalink:"/dp/longest-increasing-subsequence"},next:{title:"Maximal Rectangle",permalink:"/dp/maximal-rectangle"}},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],i={rightToc:p};function l({components:e,...a}){return Object(m.b)("wrapper",Object(n.a)({},i,a,{components:e,mdxType:"MDXLayout"}),Object(m.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(m.b)("p",null,"Given a string s, partition s such that every substring of the partition is a palindrome."),Object(m.b)("p",null,"Return the minimum cuts needed for a palindrome partitioning of s."),Object(m.b)("p",null,"For example, given ",Object(m.b)("inlineCode",{parentName:"p"},'s = "aab"'),","),Object(m.b)("p",null,"Return 1 since the palindrome partitioning ",Object(m.b)("inlineCode",{parentName:"p"},'["aa","b"]')," could be produced using 1 cut."),Object(m.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(m.b)("p",null,"\u5b9a\u4e49\u72b6\u6001",Object(m.b)("inlineCode",{parentName:"p"},"f(i,j)"),"\u8868\u793a\u533a\u95f4",Object(m.b)("inlineCode",{parentName:"p"},"[i,j]"),"\u4e4b\u95f4\u6700\u5c0f\u7684 cut \u6570\uff0c\u5219\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u4e3a"),Object(m.b)("div",{className:"math math-display"},Object(m.b)("span",Object(n.a)({parentName:"div"},{className:"katex-display"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"f"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(m.b)("mi",{parentName:"mrow"},"i"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),","),Object(m.b)("mi",{parentName:"mrow"},"j"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")"),Object(m.b)("mo",{parentName:"mrow"},"="),Object(m.b)("mi",{parentName:"mrow"},"min"),Object(m.b)("mo",{parentName:"mrow"},"\u2061"),Object(m.b)("mrow",{parentName:"mrow"},Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{fence:"true"}),"{"),Object(m.b)("mi",{parentName:"mrow"},"f"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(m.b)("mi",{parentName:"mrow"},"i"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),","),Object(m.b)("mi",{parentName:"mrow"},"k"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")"),Object(m.b)("mo",{parentName:"mrow"},"+"),Object(m.b)("mi",{parentName:"mrow"},"f"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(m.b)("mi",{parentName:"mrow"},"k"),Object(m.b)("mo",{parentName:"mrow"},"+"),Object(m.b)("mn",{parentName:"mrow"},"1"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),","),Object(m.b)("mi",{parentName:"mrow"},"j"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{fence:"true"}),"}")),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),","),Object(m.b)("mi",{parentName:"mrow"},"i"),Object(m.b)("mo",{parentName:"mrow"},"\u2264"),Object(m.b)("mi",{parentName:"mrow"},"k"),Object(m.b)("mo",{parentName:"mrow"},"\u2264"),Object(m.b)("mi",{parentName:"mrow"},"j"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),","),Object(m.b)("mn",{parentName:"mrow"},"0"),Object(m.b)("mo",{parentName:"mrow"},"\u2264"),Object(m.b)("mi",{parentName:"mrow"},"i"),Object(m.b)("mo",{parentName:"mrow"},"\u2264"),Object(m.b)("mi",{parentName:"mrow"},"j"),Object(m.b)("mo",{parentName:"mrow"},"<"),Object(m.b)("mi",{parentName:"mrow"},"n")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"f(i,j)=\\min\\left\\{f(i,k)+f(k+1,j)\\right\\}, i \\leq k \\leq j, 0 \\leq i \\leq j<n")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"i"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),","),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.05724em"}}),"j"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),"="),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mop"}),"min"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"minner"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mopen delimcenter",style:{top:"0em"}}),"{"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"i"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),","),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.03148em"}}),"k"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mbin"}),"+"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.03148em"}}),"k"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mbin"}),"+"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"1"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),","),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.05724em"}}),"j"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mclose delimcenter",style:{top:"0em"}}),"}")),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),","),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"i"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),"\u2264"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.83041em",verticalAlign:"-0.13597em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.03148em"}}),"k"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),"\u2264"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.85396em",verticalAlign:"-0.19444em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.05724em"}}),"j"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),","),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"0"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),"\u2264"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.79549em",verticalAlign:"-0.13597em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"i"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),"\u2264"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.85396em",verticalAlign:"-0.19444em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.05724em"}}),"j"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),"<"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"n")))))),Object(m.b)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u4e8c\u7ef4\u51fd\u6570\uff0c\u5b9e\u9645\u5199\u4ee3\u7801\u6bd4\u8f83\u9ebb\u70e6\u3002"),Object(m.b)("p",null,"\u6240\u4ee5\u8981\u8f6c\u6362\u6210\u4e00\u7ef4 DP\u3002\u5982\u679c\u6bcf\u6b21\uff0c\u4ece i \u5f80\u53f3\u626b\u63cf\uff0c\u6bcf\u627e\u5230\u4e00\u4e2a\u56de\u6587\u5c31\u7b97\u4e00\u6b21 DP \u7684\u8bdd\uff0c\u5c31\u53ef\u4ee5\u8f6c\u6362\u4e3a",Object(m.b)("inlineCode",{parentName:"p"},"f(i)=\u533a\u95f4[i, n-1]\u4e4b\u95f4\u6700\u5c0f\u7684cut\u6570"),"\uff0cn \u4e3a\u5b57\u7b26\u4e32\u957f\u5ea6\uff0c\u5219\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u4e3a"),Object(m.b)("div",{className:"math math-display"},Object(m.b)("span",Object(n.a)({parentName:"div"},{className:"katex-display"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"f"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(m.b)("mi",{parentName:"mrow"},"i"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")"),Object(m.b)("mo",{parentName:"mrow"},"="),Object(m.b)("mi",{parentName:"mrow"},"min"),Object(m.b)("mo",{parentName:"mrow"},"\u2061"),Object(m.b)("mrow",{parentName:"mrow"},Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{fence:"true"}),"{"),Object(m.b)("mi",{parentName:"mrow"},"f"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(m.b)("mi",{parentName:"mrow"},"j"),Object(m.b)("mo",{parentName:"mrow"},"+"),Object(m.b)("mn",{parentName:"mrow"},"1"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")"),Object(m.b)("mo",{parentName:"mrow"},"+"),Object(m.b)("mn",{parentName:"mrow"},"1"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{fence:"true"}),"}")),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),","),Object(m.b)("mi",{parentName:"mrow"},"i"),Object(m.b)("mo",{parentName:"mrow"},"\u2264"),Object(m.b)("mi",{parentName:"mrow"},"j"),Object(m.b)("mo",{parentName:"mrow"},"<"),Object(m.b)("mi",{parentName:"mrow"},"n")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"f(i)=\\min\\left\\{f(j+1)+1\\right\\}, i \\leq j<n")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"i"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),"="),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mop"}),"min"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"minner"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mopen delimcenter",style:{top:"0em"}}),"{"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.05724em"}}),"j"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mbin"}),"+"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"1"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mbin"}),"+"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"1"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mclose delimcenter",style:{top:"0em"}}),"}")),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),","),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"i"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),"\u2264"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.85396em",verticalAlign:"-0.19444em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.05724em"}}),"j"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),"<"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"n")))))),Object(m.b)("p",null,"\u4e00\u4e2a\u95ee\u9898\u51fa\u73b0\u4e86\uff0c\u5c31\u662f\u5982\u4f55\u5224\u65ad",Object(m.b)("inlineCode",{parentName:"p"},"[i,j]"),"\u662f\u5426\u662f\u56de\u6587\uff1f\u6bcf\u6b21\u90fd\u4ece i \u5230 j \u6bd4\u8f83\u4e00\u904d\uff1f\u592a\u6d6a\u8d39\u4e86\uff0c\u8fd9\u91cc\u4e5f\u662f\u4e00\u4e2a DP \u95ee\u9898\u3002"),Object(m.b)("p",null,"\u5b9a\u4e49\u72b6\u6001 ",Object(m.b)("inlineCode",{parentName:"p"},"P[i][j] = true if [i,j]\u4e3a\u56de\u6587"),"\uff0c\u90a3\u4e48"),Object(m.b)("pre",null,Object(m.b)("code",Object(n.a)({parentName:"pre"},{}),"P[i][j] = str[i] == str[j] && P[i+1][j-1]\n")),Object(m.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(m.b)(s.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(m.b)(c.a,{value:"java",mdxType:"TabItem"},Object(m.b)("pre",null,Object(m.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// Palindrome Partitioning II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^2)\npublic class Solution {\n    public int minCut(String s) {\n        final int n = s.length();\n        int[] f = new int[n+1];\n        boolean[][] p = new boolean[n][n];\n        //the worst case is cutting by each char\n        for (int i = 0; i <= n; i++)\n            f[i] = n - 1 - i; // \u6700\u540e\u4e00\u4e2af[n]=-1\n        for (int i = n - 1; i >= 0; i--) {\n            for (int j = i; j < n; j++) {\n                if (s.charAt(i) == s.charAt(j) &&\n                        (j - i < 2 || p[i + 1][j - 1])) {\n                    p[i][j] = true;\n                    f[i] = Math.min(f[i], f[j + 1] + 1);\n                }\n            }\n        }\n        return f[0];\n    }\n}\n"))),Object(m.b)(c.a,{value:"cpp",mdxType:"TabItem"},Object(m.b)("pre",null,Object(m.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"// Palindrome Partitioning II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^2)\nclass Solution {\npublic:\n    int minCut(const string& s) {\n        const int n = s.size();\n        int f[n+1];\n        bool p[n][n];\n        fill_n(&p[0][0], n * n, false);\n        //the worst case is cutting by each char\n        for (int i = 0; i <= n; i++)\n            f[i] = n - 1 - i; // \u6700\u540e\u4e00\u4e2af[n]=-1\n        for (int i = n - 1; i >= 0; i--) {\n            for (int j = i; j < n; j++) {\n                if (s[i] == s[j] && (j - i < 2 || p[i + 1][j - 1])) {\n                    p[i][j] = true;\n                    f[i] = min(f[i], f[j + 1] + 1);\n                }\n            }\n        }\n        return f[0];\n    }\n};\n")))),Object(m.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(m.b)("ul",null,Object(m.b)("li",{parentName:"ul"},Object(m.b)("a",Object(n.a)({parentName:"li"},{href:"/dfs/palindrome-partitioning"}),"Palindrome Partitioning"))))}l.isMDXComponent=!0},301:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return O}));var n=t(0),m=t.n(n);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function b(e,a){if(null==e)return{};var t,n,m=function(e,a){if(null==e)return{};var t,n,m={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(m[t]=e[t]);return m}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(m[t]=e[t])}return m}var p=m.a.createContext({}),i=function(e){var a=m.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},l=function(e){var a=i(e.components);return m.a.createElement(p.Provider,{value:a},e.children)},j={inlineCode:"code",wrapper:function(e){var a=e.children;return m.a.createElement(m.a.Fragment,{},a)}},o=m.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),l=i(t),o=n,O=l["".concat(c,".").concat(o)]||l[o]||j[o]||s;return t?m.a.createElement(O,r(r({ref:a},p),{},{components:t})):m.a.createElement(O,r({ref:a},p))}));function O(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,c=new Array(s);c[0]=o;var r={};for(var b in a)hasOwnProperty.call(a,b)&&(r[b]=a[b]);r.originalType=e,r.mdxType="string"==typeof e?e:n,c[1]=r;for(var p=2;p<s;p++)c[p]=t[p];return m.a.createElement.apply(null,c)}return m.a.createElement.apply(null,t)}o.displayName="MDXCreateElement"},302:function(e,a,t){"use strict";function n(e){var a,t,m="";if("string"==typeof e||"number"==typeof e)m+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(m&&(m+=" "),m+=t);else for(a in e)e[a]&&(m&&(m+=" "),m+=a);return m}a.a=function(){for(var e,a,t=0,m="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(m&&(m+=" "),m+=a);return m}},303:function(e,a,t){"use strict";var n=t(0);const m=Object(n.createContext)(void 0);a.a=m},304:function(e,a,t){"use strict";var n=t(0),m=t(303);a.a=function(){const e=Object(n.useContext)(m.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},305:function(e,a,t){"use strict";var n=t(0),m=t.n(n),s=t(304),c=t(302),r=t(49),b=t.n(r);const p=37,i=39;a.a=function(e){const{block:a,children:t,defaultValue:r,values:l,groupId:j}=e,{tabGroupChoices:o,setTabGroupChoices:O}=Object(s.a)(),[N,u]=Object(n.useState)(r),[g,h]=Object(n.useState)(!1);if(null!=j){const e=o[j];null!=e&&e!==N&&l.some((a=>a.value===e))&&u(e)}const d=e=>{u(e),null!=j&&O(j,e)},f=[],y=e=>{e.metaKey||e.altKey||e.ctrlKey||h(!0)},w=()=>{h(!1)};return Object(n.useEffect)((()=>{window.addEventListener("keydown",y),window.addEventListener("mousedown",w)}),[]),m.a.createElement("div",null,m.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a})},l.map((({value:e,label:a})=>m.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":N===e,className:Object(c.a)("tabs__item",b.a.tabItem,{"tabs__item--active":N===e}),style:g?{}:{outline:"none"},key:e,ref:e=>f.push(e),onKeyDown:e=>{((e,a,t)=>{switch(t.keyCode){case i:((e,a)=>{const t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()})(e,a);break;case p:((e,a)=>{const t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,a)}})(f,e.target,e),y(e)},onFocus:()=>d(e),onClick:()=>{d(e),h(!1)},onPointerDown:()=>h(!1)},a)))),m.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(t).filter((e=>e.props.value===N))[0]))}},306:function(e,a,t){"use strict";var n=t(0),m=t.n(n);a.a=function(e){return m.a.createElement("div",null,e.children)}}}]);