(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{154:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return b})),t.d(a,"metadata",(function(){return r})),t.d(a,"rightToc",(function(){return p})),t.d(a,"default",(function(){return j}));var n=t(2),s=(t(0),t(301)),m=t(305),c=t(306);const b={title:"Unique Binary Search Trees"},r={unversionedId:"binary-tree/bst/unique-binary-search-trees",id:"binary-tree/bst/unique-binary-search-trees",isDocsHomePage:!1,title:"Unique Binary Search Trees",description:"\u63cf\u8ff0",source:"@site/docs/binary-tree/bst/unique-binary-search-trees.md",slug:"/binary-tree/bst/unique-binary-search-trees",permalink:"/binary-tree/bst/unique-binary-search-trees",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/binary-tree/bst/unique-binary-search-trees.md",version:"current",sidebar:"someSidebar",previous:{title:"Construct Binary Tree from Inorder and Postorder Traversal",permalink:"/binary-tree/construction/construct-binary-tree-from-inorder-and-postorder-traversal"},next:{title:"Unique Binary Search Trees II",permalink:"/binary-tree/bst/unique-binary-search-trees-ii"}},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],O={rightToc:p};function j({components:e,...a}){return Object(s.b)("wrapper",Object(n.a)({},O,a,{components:e,mdxType:"MDXLayout"}),Object(s.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(s.b)("p",null,"Given ",Object(s.b)("inlineCode",{parentName:"p"},"n"),", how many structurally unique BST's (binary search trees) that store values ",Object(s.b)("inlineCode",{parentName:"p"},"1...n"),"?"),Object(s.b)("p",null,"For example,\nGiven ",Object(s.b)("inlineCode",{parentName:"p"},"n = 3"),", there are a total of 5 unique BST's."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"   1         3     3      2      1\n    \\       /     /      / \\      \\\n     3     2     1      1   3      2\n    /     /       \\                 \\\n   2     1         2                 3\n")),Object(s.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(s.b)("p",null,"\u5982\u679c\u628a\u4e0a\u4f8b\u7684\u987a\u5e8f\u6539\u4e00\u4e0b\uff0c\u5c31\u53ef\u4ee5\u770b\u51fa\u89c4\u5f8b\u4e86\u3002"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{})," 1       1           2          3       3\n  \\       \\         / \\        /       /\n   3       2       1   3      2       1\n  /         \\                /         \\\n2            3              1           2\n")),Object(s.b)("p",null,"\u6bd4\u5982\uff0c\u4ee5 1 \u4e3a\u6839\u7684\u6811\u7684\u4e2a\u6570\uff0c\u7b49\u4e8e\u5de6\u5b50\u6811\u7684\u4e2a\u6570\u4e58\u4ee5\u53f3\u5b50\u6811\u7684\u4e2a\u6570\uff0c\u5de6\u5b50\u6811\u662f 0 \u4e2a\u5143\u7d20\u7684\u6811\uff0c\u53f3\u5b50\u6811\u662f 2 \u4e2a\u5143\u7d20\u7684\u6811\u3002\u4ee5 2 \u4e3a\u6839\u7684\u6811\u7684\u4e2a\u6570\uff0c\u7b49\u4e8e\u5de6\u5b50\u6811\u7684\u4e2a\u6570\u4e58\u4ee5\u53f3\u5b50\u6811\u7684\u4e2a\u6570\uff0c\u5de6\u5b50\u6811\u662f 1 \u4e2a\u5143\u7d20\u7684\u6811\uff0c\u53f3\u5b50\u6811\u4e5f\u662f 1 \u4e2a\u5143\u7d20\u7684\u6811\u3002\u4f9d\u6b64\u7c7b\u63a8\u3002"),Object(s.b)("p",null,"\u5f53\u6570\u7ec4\u4e3a ",Object(s.b)("inlineCode",{parentName:"p"},"1,2,3,...,n"),"\u65f6\uff0c\u57fa\u4e8e\u4ee5\u4e0b\u539f\u5219\u7684\u6784\u5efa\u7684 BST \u6811\u5177\u6709\u552f\u4e00\u6027\uff1a\n\\textbf{\u4ee5 i \u4e3a\u6839\u8282\u70b9\u7684\u6811\uff0c\u5176\u5de6\u5b50\u6811\u7531","[1, i-1]","\u6784\u6210\uff0c \u5176\u53f3\u5b50\u6811\u7531","[i+1, n]","\u6784\u6210\u3002}"),Object(s.b)("p",null,"\u5b9a\u4e49",Object(s.b)("inlineCode",{parentName:"p"},"f(i)"),"\u4e3a\u4ee5",Object(s.b)("inlineCode",{parentName:"p"},"[1,i]"),"\u80fd\u4ea7\u751f\u7684 Unique Binary Search Tree \u7684\u6570\u76ee\uff0c\u5219"),Object(s.b)("p",null,"\u5982\u679c\u6570\u7ec4\u4e3a\u7a7a\uff0c\u6beb\u65e0\u7591\u95ee\uff0c\u53ea\u6709\u4e00\u79cd BST\uff0c\u5373\u7a7a\u6811\uff0c",Object(s.b)("inlineCode",{parentName:"p"},"f(0)=1"),"\u3002"),Object(s.b)("p",null,"\u5982\u679c\u6570\u7ec4\u4ec5\u6709\u4e00\u4e2a\u5143\u7d20{1}\uff0c\u53ea\u6709\u4e00\u79cd BST\uff0c\u5355\u4e2a\u8282\u70b9\uff0c",Object(s.b)("inlineCode",{parentName:"p"},"f(1)=1"),"\u3002"),Object(s.b)("p",null,"\u5982\u679c\u6570\u7ec4\u6709\u4e24\u4e2a\u5143\u7d20{1,2}\uff0c \u90a3\u4e48\u6709\u5982\u4e0b\u4e24\u79cd\u53ef\u80fd"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"1             2\n  \\          /\n    2      1\n")),Object(s.b)("p",null,Object(s.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(s.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(s.b)("semantics",{parentName:"math"},Object(s.b)("mrow",{parentName:"semantics"},Object(s.b)("mi",{parentName:"mrow"},"f"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(s.b)("mn",{parentName:"mrow"},"2"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")"),Object(s.b)("mo",{parentName:"mrow"},"="),Object(s.b)("mi",{parentName:"mrow"},"f"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(s.b)("mn",{parentName:"mrow"},"0"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")"),Object(s.b)("mo",{parentName:"mrow"},"\u2217"),Object(s.b)("mi",{parentName:"mrow"},"f"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(s.b)("mn",{parentName:"mrow"},"1"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")"),Object(s.b)("mtext",{parentName:"mrow"},"\xa0,\xa0when\xa01\xa0as\xa0root")),Object(s.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"f(2) = f(0) * f(1) \\text{ , when 1 as root}")))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"2"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),"="),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"0"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mbin"}),"\u2217"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}}))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"1"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord text"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"\xa0,\xa0when\xa01\xa0as\xa0root"))))))),Object(s.b)("p",null,Object(s.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(s.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(s.b)("semantics",{parentName:"math"},Object(s.b)("mrow",{parentName:"semantics"},Object(s.b)("mo",{parentName:"mrow"},"+"),Object(s.b)("mi",{parentName:"mrow"},"f"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(s.b)("mn",{parentName:"mrow"},"1"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")"),Object(s.b)("mo",{parentName:"mrow"},"\u2217"),Object(s.b)("mi",{parentName:"mrow"},"f"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(s.b)("mn",{parentName:"mrow"},"0"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")"),Object(s.b)("mtext",{parentName:"mrow"},"\xa0,\xa0when\xa02\xa0as\xa0root")),Object(s.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"+ f(1) * f(0) \\text{ , when 2 as root}")))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"+"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"1"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mbin"}),"\u2217"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}}))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"0"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord text"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"\xa0,\xa0when\xa02\xa0as\xa0root"))))))),Object(s.b)("p",null,"\u518d\u770b\u4e00\u770b 3 \u4e2a\u5143\u7d20\u7684\u6570\u7ec4\uff0c\u53ef\u4ee5\u53d1\u73b0 BST \u7684\u53d6\u503c\u65b9\u5f0f\u5982\u4e0b\uff1a"),Object(s.b)("p",null,Object(s.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(s.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(s.b)("semantics",{parentName:"math"},Object(s.b)("mrow",{parentName:"semantics"},Object(s.b)("mi",{parentName:"mrow"},"f"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(s.b)("mn",{parentName:"mrow"},"3"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")"),Object(s.b)("mo",{parentName:"mrow"},"="),Object(s.b)("mi",{parentName:"mrow"},"f"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(s.b)("mn",{parentName:"mrow"},"0"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")"),Object(s.b)("mo",{parentName:"mrow"},"\u2217"),Object(s.b)("mi",{parentName:"mrow"},"f"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(s.b)("mn",{parentName:"mrow"},"2"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")"),Object(s.b)("mtext",{parentName:"mrow"},"\xa0,\xa0when\xa01\xa0as\xa0root")),Object(s.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"f(3) = f(0) * f(2) \\text{ , when 1 as root}")))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"3"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),"="),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"0"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mbin"}),"\u2217"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}}))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"2"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord text"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"\xa0,\xa0when\xa01\xa0as\xa0root"))))))),Object(s.b)("p",null,Object(s.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(s.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(s.b)("semantics",{parentName:"math"},Object(s.b)("mrow",{parentName:"semantics"},Object(s.b)("mo",{parentName:"mrow"},"+"),Object(s.b)("mi",{parentName:"mrow"},"f"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(s.b)("mn",{parentName:"mrow"},"1"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")"),Object(s.b)("mo",{parentName:"mrow"},"\u2217"),Object(s.b)("mi",{parentName:"mrow"},"f"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(s.b)("mn",{parentName:"mrow"},"1"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")"),Object(s.b)("mtext",{parentName:"mrow"},"\xa0,\xa0when\xa02\xa0as\xa0root")),Object(s.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"+ f(1) * f(1) \\text{ , when 2 as root}")))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"+"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"1"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mbin"}),"\u2217"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}}))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"1"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord text"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"\xa0,\xa0when\xa02\xa0as\xa0root"))))))),Object(s.b)("p",null,Object(s.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(s.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(s.b)("semantics",{parentName:"math"},Object(s.b)("mrow",{parentName:"semantics"},Object(s.b)("mo",{parentName:"mrow"},"+"),Object(s.b)("mi",{parentName:"mrow"},"f"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(s.b)("mn",{parentName:"mrow"},"2"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")"),Object(s.b)("mo",{parentName:"mrow"},"\u2217"),Object(s.b)("mi",{parentName:"mrow"},"f"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(s.b)("mn",{parentName:"mrow"},"0"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")"),Object(s.b)("mtext",{parentName:"mrow"},"\xa0,\xa0when\xa03\xa0as\xa0root")),Object(s.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"+ f(2) * f(0) \\text{ , when 3 as root}")))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"+"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"2"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mbin"}),"\u2217"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}}))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"0"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord text"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"\xa0,\xa0when\xa03\xa0as\xa0root"))))))),Object(s.b)("p",null,"\u6240\u4ee5\uff0c\u7531\u6b64\u89c2\u5bdf\uff0c\u53ef\u4ee5\u5f97\u51fa",Object(s.b)("inlineCode",{parentName:"p"},"f"),"\u7684\u9012\u63a8\u516c\u5f0f\u4e3a"),Object(s.b)("p",null,Object(s.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(s.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(s.b)("semantics",{parentName:"math"},Object(s.b)("mrow",{parentName:"semantics"},Object(s.b)("mi",{parentName:"mrow"},"f"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(s.b)("mi",{parentName:"mrow"},"i"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")"),Object(s.b)("mo",{parentName:"mrow"},"="),Object(s.b)("msubsup",{parentName:"mrow"},Object(s.b)("mo",{parentName:"msubsup"},"\u2211"),Object(s.b)("mrow",{parentName:"msubsup"},Object(s.b)("mi",{parentName:"mrow"},"k"),Object(s.b)("mo",{parentName:"mrow"},"="),Object(s.b)("mn",{parentName:"mrow"},"1")),Object(s.b)("mi",{parentName:"msubsup"},"i")),Object(s.b)("mi",{parentName:"mrow"},"f"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(s.b)("mi",{parentName:"mrow"},"k"),Object(s.b)("mo",{parentName:"mrow"},"\u2212"),Object(s.b)("mn",{parentName:"mrow"},"1"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")"),Object(s.b)("mo",{parentName:"mrow"},"\xd7"),Object(s.b)("mi",{parentName:"mrow"},"f"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(s.b)("mi",{parentName:"mrow"},"i"),Object(s.b)("mo",{parentName:"mrow"},"\u2212"),Object(s.b)("mi",{parentName:"mrow"},"k"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")")),Object(s.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"f(i) = \\sum_{k=1}^{i} f(k-1) \\times f(i-k)")))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"i"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),"="),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1.264274em",verticalAlign:"-0.29971000000000003em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mop"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mop op-symbol small-op",style:{position:"relative",top:"-0.0000050000000000050004em"}}),"\u2211"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"msupsub"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.964564em"}}),Object(s.b)("span",Object(n.a)({parentName:"span"},{style:{top:"-2.40029em",marginLeft:"0em",marginRight:"0.05em"}}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mtight"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal mtight",style:{marginRight:"0.03148em"}}),"k"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mrel mtight"}),"="),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mtight"}),"1")))),Object(s.b)("span",Object(n.a)({parentName:"span"},{style:{top:"-3.2029em",marginRight:"0.05em"}}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mtight"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal mtight"}),"i"))))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.29971000000000003em"}}),Object(s.b)("span",{parentName:"span"})))))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.03148em"}}),"k"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mbin"}),"\u2212"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}}))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"1"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mbin"}),"\xd7"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}}))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"i"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mbin"}),"\u2212"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}}))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.03148em"}}),"k"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")")))))),Object(s.b)("p",null,"\u81f3\u6b64\uff0c\u95ee\u9898\u5212\u5f52\u4e3a\u4e00\u7ef4\u52a8\u6001\u89c4\u5212\u3002"),Object(s.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(s.b)(m.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"java",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// Unique Binary Search Trees\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public int numTrees(int n) {\n        int[] f = new int[n + 1];\n\n        f[0] = 1;\n        f[1] = 1;\n        for (int i = 2; i <= n; ++i) {\n            for (int k = 1; k <= i; ++k)\n                f[i] += f[k-1] * f[i - k];\n        }\n\n        return f[n];\n    }\n}\n"))),Object(s.b)(c.a,{value:"cpp",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"// Unique Binary Search Trees\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    int numTrees(int n) {\n        vector<int> f(n + 1, 0);\n\n        f[0] = 1;\n        f[1] = 1;\n        for (int i = 2; i <= n; ++i) {\n            for (int k = 1; k <= i; ++k)\n                f[i] += f[k-1] * f[i - k];\n        }\n\n        return f[n];\n    }\n};\n")))),Object(s.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/binary-tree/bst/unique-binary-search-trees-ii"}),"Unique Binary Search Trees II"))))}j.isMDXComponent=!0},301:function(e,a,t){"use strict";t.d(a,"a",(function(){return j})),t.d(a,"b",(function(){return o}));var n=t(0),s=t.n(n);function m(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function b(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){m(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=s.a.createContext({}),O=function(e){var a=s.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):b(b({},a),e)),t},j=function(e){var a=O(e.components);return s.a.createElement(p.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return s.a.createElement(s.a.Fragment,{},a)}},i=s.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,m=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),j=O(t),i=n,o=j["".concat(c,".").concat(i)]||j[i]||l[i]||m;return t?s.a.createElement(o,b(b({ref:a},p),{},{components:t})):s.a.createElement(o,b({ref:a},p))}));function o(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var m=t.length,c=new Array(m);c[0]=i;var b={};for(var r in a)hasOwnProperty.call(a,r)&&(b[r]=a[r]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var p=2;p<m;p++)c[p]=t[p];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,t)}i.displayName="MDXCreateElement"},302:function(e,a,t){"use strict";function n(e){var a,t,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(s&&(s+=" "),s+=t);else for(a in e)e[a]&&(s&&(s+=" "),s+=a);return s}a.a=function(){for(var e,a,t=0,s="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(s&&(s+=" "),s+=a);return s}},303:function(e,a,t){"use strict";var n=t(0);const s=Object(n.createContext)(void 0);a.a=s},304:function(e,a,t){"use strict";var n=t(0),s=t(303);a.a=function(){const e=Object(n.useContext)(s.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},305:function(e,a,t){"use strict";var n=t(0),s=t.n(n),m=t(304),c=t(302),b=t(49),r=t.n(b);const p=37,O=39;a.a=function(e){const{block:a,children:t,defaultValue:b,values:j,groupId:l}=e,{tabGroupChoices:i,setTabGroupChoices:o}=Object(m.a)(),[N,h]=Object(n.useState)(b),[u,f]=Object(n.useState)(!1);if(null!=l){const e=i[l];null!=e&&e!==N&&j.some((a=>a.value===e))&&h(e)}const g=e=>{h(e),null!=l&&o(l,e)},y=[],d=e=>{e.metaKey||e.altKey||e.ctrlKey||f(!0)},w=()=>{f(!1)};return Object(n.useEffect)((()=>{window.addEventListener("keydown",d),window.addEventListener("mousedown",w)}),[]),s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a})},j.map((({value:e,label:a})=>s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":N===e,className:Object(c.a)("tabs__item",r.a.tabItem,{"tabs__item--active":N===e}),style:u?{}:{outline:"none"},key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,a,t)=>{switch(t.keyCode){case O:((e,a)=>{const t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()})(e,a);break;case p:((e,a)=>{const t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,a)}})(y,e.target,e),d(e)},onFocus:()=>g(e),onClick:()=>{g(e),f(!1)},onPointerDown:()=>f(!1)},a)))),s.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(t).filter((e=>e.props.value===N))[0]))}},306:function(e,a,t){"use strict";var n=t(0),s=t.n(n);a.a=function(e){return s.a.createElement("div",null,e.children)}}}]);