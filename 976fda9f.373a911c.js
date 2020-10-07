(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{214:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(2),a=(t(0),t(301));const i={title:"Repeated DNA Sequences"},c={unversionedId:"bitwise-operations/repeated-dna-sequences",id:"bitwise-operations/repeated-dna-sequences",isDocsHomePage:!1,title:"Repeated DNA Sequences",description:"\u63cf\u8ff0",source:"@site/docs/bitwise-operations/repeated-dna-sequences.md",slug:"/bitwise-operations/repeated-dna-sequences",permalink:"/bitwise-operations/repeated-dna-sequences",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/bitwise-operations/repeated-dna-sequences.md",version:"current",sidebar:"someSidebar",previous:{title:"Reverse Bits",permalink:"/bitwise-operations/reverse-bits"},next:{title:"Number of 1 Bits",permalink:"/bitwise-operations/number-of-1-bits"}},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u89e3\u6cd5 1 \u7b80\u5355\u7c97\u66b4",id:"\u89e3\u6cd5-1-\u7b80\u5355\u7c97\u66b4",children:[]},{value:"\u89e3\u6cd5 2 \u5b8c\u7f8e\u54c8\u5e0c",id:"\u89e3\u6cd5-2-\u5b8c\u7f8e\u54c8\u5e0c",children:[]}],o={rightToc:p};function s({components:e,...n}){return Object(a.b)("wrapper",Object(r.a)({},o,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(a.b)("p",null,'All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.'),Object(a.b)("p",null,"Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule."),Object(a.b)("p",null,"For example,"),Object(a.b)("p",null,"Given s = ",Object(a.b)("inlineCode",{parentName:"p"},'"AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"'),","),Object(a.b)("p",null,"Return:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'["AAAAACCCCC", "CCCCCAAAAA"]'),"."),Object(a.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(a.b)("p",null,"\u9996\u5148\u80fd\u60f3\u5230\u4e00\u4e2a\u7b80\u5355\u76f4\u63a5\u7684\u65b9\u6cd5\uff0c\u7528\u4e00\u4e2a\u957f\u5ea6\u4e3a 10 \u7684\u7a97\u53e3\uff0c\u4ece\u5de6\u5230\u53f3\u626b\u63cf\uff0c\u653e\u5165 HashMap\uff0c\u5e76\u628a\u8ba1\u6570\u5668\u589e\u4e00\u3002\u6700\u540e\uff0c\u628a HashMap \u4e2d\u6240\u6709\u8ba1\u6570\u5668\u5927\u4e8e 1 \u7684\u5b57\u7b26\u4e32\u8f93\u51fa\u6765\u3002\u65f6\u95f4\u590d\u6742\u5ea6 ",Object(a.b)("inlineCode",{parentName:"p"},"O(n)"),", \u7531\u4e8e HashMap \u4e2d\u5b58\u50a8\u4e86\u6240\u6709\u957f\u5ea6\u4e3a 10 \u7684\u5b50\u4e32\uff0c\u6240\u4ee5\u7a7a\u95f4\u590d\u6742\u5ea6",Object(a.b)("inlineCode",{parentName:"p"},"O(10n)"),"\u3002"),Object(a.b)("p",null,"\u7531\u4e8e\u5b57\u7b26\u4e32\u4e2d\u53ea\u5b58\u5728 A, C, G, T \u56db\u79cd\u5b57\u7b26\uff0c\u6211\u4eec\u53ef\u4ee5\u628a\u6bcf\u4e2a\u5b57\u7b26\u6620\u5c04\u4e3a 2 \u4e2a bit:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"A -> 00\nC -> 01\nG -> 10\nT -> 11\n")),Object(a.b)("p",null,"\u6bcf\u4e2a\u957f\u5ea6\u4e3a 10 \u7684\u5b57\u7b26\u4e32\uff0c\u53ef\u4ee5\u6620\u5c04\u4e3a 20 bits, \u5c0f\u4e8e 32 \u4f4d\uff0c\u56e0\u6b64\u53ef\u4ee5\u628a\u8fd9\u4e2a\u5b57\u7b26\u4e32\u6620\u5c04\u5230\u4e00\u4e2a\u6574\u6570\u3002\u8fd9\u4e2a\u65b9\u6cd5\u65f6\u95f4\u590d\u6742\u5ea6\u4f9d\u65e7\u662f",Object(a.b)("inlineCode",{parentName:"p"},"O(n)"),"\uff0c\u4f46\u7a7a\u95f4\u590d\u6742\u5ea6\u4e0b\u964d\u5230\u4e86",Object(a.b)("inlineCode",{parentName:"p"},"O(n)"),"\u3002"),Object(a.b)("h3",{id:"\u89e3\u6cd5-1-\u7b80\u5355\u7c97\u66b4"},"\u89e3\u6cd5 1 \u7b80\u5355\u7c97\u66b4"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Repeated DNA Sequences\n// Time Complexity: O(n), Space Complexity: O(10n)\npublic class Solution {\n    public List<String> findRepeatedDnaSequences(String s) {\n        final List<String> result = new ArrayList<>();\n        if (s.length() < 10) return result;\n\n        final Map<String, Integer> counter = new HashMap<>();\n\n        for (int i = 0; i < s.length() - 9; ++i) {\n            final String key = s.substring(i, i + 10);\n            int value = counter.getOrDefault(key, 0);\n            counter.put(key, value + 1);\n        }\n\n        for (Map.Entry<String, Integer> entry : counter.entrySet()) {\n            if (entry.getValue() > 1) {\n                result.add(entry.getKey());\n            }\n        }\n        return result;\n    }\n}\n")),Object(a.b)("h3",{id:"\u89e3\u6cd5-2-\u5b8c\u7f8e\u54c8\u5e0c"},"\u89e3\u6cd5 2 \u5b8c\u7f8e\u54c8\u5e0c"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Repeated DNA Sequences\n// Time Complexity: O(n), Space Complexity: O(n)\npublic class Solution {\n    public List<String> findRepeatedDnaSequences(String s) {\n        final List<String> result = new ArrayList<>();\n        if (s.length() < LEN) return result;\n\n        final Map<Character, Integer> charMap = new HashMap<>();\n        charMap.put('A', 0);\n        charMap.put('C', 1);\n        charMap.put('G', 2);\n        charMap.put('T', 3);\n\n        final Map<Integer, Character> intMap = new HashMap<>();\n        intMap.put(0, 'A');\n        intMap.put(1, 'C');\n        intMap.put(2, 'G');\n        intMap.put(3, 'T');\n\n        final Map<Integer, Integer> counter = new HashMap<>();\n\n        for (int i = 0; i < s.length() - LEN + 1; ++i) {\n            final String key = s.substring(i, i + 10);\n            final int hashValue = strToInt(key, charMap);\n            counter.put(hashValue, counter.getOrDefault(hashValue, 0) + 1);\n        }\n\n        for (Map.Entry<Integer, Integer> entry : counter.entrySet()) {\n            if (entry.getValue() > 1) {\n                result.add(intToStr(entry.getKey(), intMap));\n            }\n        }\n        return result;\n    }\n\n    // perfect hash, no collisions\n    private static int strToInt(String s, Map<Character, Integer> charMap) {\n        assert s.length() == LEN;\n        int x = 0;\n        for (int i = 0; i < LEN; ++i) {\n            final char ch = s.charAt(i);\n            x = (x << 2) + charMap.get(ch);\n        }\n        return x;\n    }\n    private String intToStr(int x, Map<Integer, Character> intMap) {\n        final StringBuilder sb = new StringBuilder();\n\n        while (x > 0) {\n            final char ch = intMap.get(x & 3);\n            sb.append(ch);\n            x >>= 2;\n        }\n        while (sb.length() < LEN) sb.append(intMap.get(0));\n        return sb.reverse().toString();\n    }\n    private static final int LEN = 10;\n}\n")))}s.isMDXComponent=!0},301:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,f=u["".concat(c,".").concat(d)]||u[d]||b[d]||i;return t?a.a.createElement(f,p(p({ref:n},s),{},{components:t})):a.a.createElement(f,p({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var s=2;s<i;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);