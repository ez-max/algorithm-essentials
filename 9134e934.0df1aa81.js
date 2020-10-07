(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{206:function(n,t,e){"use strict";e.r(t),e.d(t,"frontMatter",(function(){return s})),e.d(t,"metadata",(function(){return o})),e.d(t,"rightToc",(function(){return u})),e.d(t,"default",(function(){return g}));var i=e(2),r=(e(0),e(301)),a=e(305),l=e(306);const s={title:"Multiply Strings"},o={unversionedId:"simulation/multiply-strings",id:"simulation/multiply-strings",isDocsHomePage:!1,title:"Multiply Strings",description:"\u63cf\u8ff0",source:"@site/docs/simulation/multiply-strings.md",slug:"/simulation/multiply-strings",permalink:"/simulation/multiply-strings",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/simulation/multiply-strings.md",version:"current",sidebar:"someSidebar",previous:{title:"Minimum Window Substring",permalink:"/simulation/minimum-window-substring"},next:{title:"Substring with Concatenation of All Words",permalink:"/simulation/substring-with-concatenation-of-all-words"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801 1",id:"\u4ee3\u7801-1",children:[]},{value:"\u4ee3\u7801 2",id:"\u4ee3\u7801-2",children:[]}],c={rightToc:u};function g({components:n,...t}){return Object(r.b)("wrapper",Object(i.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(r.b)("p",null,"Given two numbers represented as strings, return multiplication of the numbers as a string."),Object(r.b)("p",null,"Note: The numbers can be arbitrarily large and are non-negative."),Object(r.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(r.b)("p",null,"\u9ad8\u7cbe\u5ea6\u4e58\u6cd5\u3002"),Object(r.b)("p",null,"\u5e38\u89c1\u7684\u505a\u6cd5\u662f\u5c06\u5b57\u7b26\u8f6c\u5316\u4e3a\u4e00\u4e2a int\uff0c\u4e00\u4e00\u5bf9\u5e94\uff0c\u5f62\u6210\u4e00\u4e2a int \u6570\u7ec4\u3002\u4f46\u662f\u8fd9\u6837\u5f88\u6d6a\u8d39\u7a7a\u95f4\uff0c\u4e00\u4e2a int32 \u7684\u6700\u5927\u503c\u662f",Object(r.b)("inlineCode",{parentName:"p"},"2^{31}-1=2147483647"),"\uff0c\u53ef\u4ee5\u4e0e 9 \u4e2a\u5b57\u7b26\u5bf9\u5e94\uff0c\u7531\u4e8e\u6709\u4e58\u6cd5\uff0c\u51cf\u534a\uff0c\u5219\u81f3\u5c11\u53ef\u4ee5\u4e0e 4 \u4e2a\u5b57\u7b26\u4e00\u4e00\u5bf9\u5e94\u3002\u4e00\u4e2a int64 \u53ef\u4ee5\u4e0e 9 \u4e2a\u5b57\u7b26\u5bf9\u5e94\u3002"),Object(r.b)("h3",{id:"\u4ee3\u7801-1"},"\u4ee3\u7801 1"),Object(r.b)(a.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"// Multiply Strings\n// \u4e00\u4e2a\u5b57\u7b26\u5bf9\u5e94\u4e00\u4e2aint\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n*m)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n+m)\npublic class Solution {\n    public String multiply(String num1, String num2) {\n        BigInt bigInt1 = new BigInt(num1);\n        BigInt bigInt2 = new BigInt(num2);\n        BigInt result = BigInt.multiply(bigInt1, bigInt2);\n        return result.toString();\n    }\n\n    // \u4e00\u4e2a\u5b57\u7b26\u5bf9\u5e94\u4e00\u4e2aint\n    static class BigInt {\n        private final int[] d;\n\n        public BigInt(String s) {\n            this.d = fromString(s);\n        }\n        public BigInt(int[] d) {\n            this.d = d;\n        }\n\n        private static int[] fromString(String s) {\n            int[] d = new int[s.length()];\n            for (int i = s.length() - 1, j = 0; i >= 0; --i)\n                d[j++] = Character.getNumericValue(s.charAt(i));\n            return d;\n        }\n\n        @Override\n        public String toString() {\n            final StringBuilder sb = new StringBuilder();\n            for (int i = d.length - 1; i >= 0; --i) {\n                sb.append(Character.forDigit(d[i], 10));\n            }\n            return sb.toString();\n        }\n\n        public static BigInt multiply(BigInt x, BigInt y) {\n            int[] z = new int[x.d.length + y.d.length];\n            for (int i = 0; i < x.d.length; ++i) {\n                for (int j = 0; j < y.d.length; ++j) {\n                    z[i + j] += x.d[i] * y.d[j];\n                    z[i + j + 1] += z[i + j] / 10;\n                    z[i + j] %= 10;\n                }\n            }\n            // find the first 0 from right to left\n            int i = z.length - 1;\n            for (; i > 0 && z[i] == 0; --i) /* empty */;\n\n            if (i == z.length - 1) {\n                return new BigInt(z);\n            } else { // make a copy\n                int[] tmp = new int[i + 1];\n                System.arraycopy(z, 0, tmp, 0, i + 1);\n                return new BigInt(tmp);\n            }\n        }\n    }\n}\n"))),Object(r.b)(l.a,{value:"cpp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),"// Multiply Strings\n// @author \u8fde\u57ce (http://weibo.com/lianchengzju)\n// \u4e00\u4e2a\u5b57\u7b26\u5bf9\u5e94\u4e00\u4e2aint\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n*m)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n+m)\ntypedef vector<int> bigint;\n\nbigint make_bigint(string const& repr) {\n    bigint n;\n    transform(repr.rbegin(), repr.rend(), back_inserter(n),\n            [](char c) { return c - '0'; });\n    return n;\n}\n\nstring to_string(bigint const& n) {\n    string str;\n    transform(find_if(n.rbegin(), prev(n.rend()),\n            [](char c) { return c > '\\0'; }), n.rend(), back_inserter(str),\n            [](char c) { return c + '0'; });\n    return str;\n}\n\nbigint operator*(bigint const& x, bigint const& y) {\n    bigint z(x.size() + y.size());\n\n    for (size_t i = 0; i < x.size(); ++i)\n        for (size_t j = 0; j < y.size(); ++j) {\n            z[i + j] += x[i] * y[j];\n            z[i + j + 1] += z[i + j] / 10;\n            z[i + j] %= 10;\n        }\n\n    return z;\n}\n\nclass Solution {\npublic:\n    string multiply(string num1, string num2) {\n        return to_string(make_bigint(num1) * make_bigint(num2));\n    }\n};\n")))),Object(r.b)("h3",{id:"\u4ee3\u7801-2"},"\u4ee3\u7801 2"),Object(r.b)(a.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),'// Multiply Strings\n// 9\u4e2a\u5b57\u7b26\u5bf9\u5e94\u4e00\u4e2a long\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n*m)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n+m)\npublic class Solution {\n    public String multiply(String num1, String num2) {\n        BigInt bigInt1 = BigInt.fromString(num1);\n        BigInt bigInt2 = BigInt.fromString(num2);\n        BigInt result = BigInt.multiply(bigInt1, bigInt2);\n        return result.toString();\n    }\n\n    // 9\u4e2a\u5b57\u7b26\u5bf9\u5e94\u4e00\u4e2a long\n    static class BigInt {\n        /** \u4e00\u4e2a\u6570\u7ec4\u5143\u7d20\u5bf9\u5e949\u4e2a\u5341\u8fdb\u5236\u4f4d\uff0c\u5373\u6570\u7ec4\u662f\u4ebf\u8fdb\u5236\u7684\n         * \u56e0\u4e3a 1000000000 * 1000000000 \u6ca1\u6709\u8d85\u8fc7 2^63-1\n         */\n        final static int BIGINT_RADIX = 1000000000;\n        final static int RADIX_LEN = 9;\n        /** \u4e07\u8fdb\u5236\u6574\u6570. */\n        private final long[] digits;\n\n        public BigInt(long[] digits) {\n            this.digits = digits;\n        }\n\n        private static BigInt fromString(String s) {\n            long[] digits;\n            if (s.length() % RADIX_LEN == 0) {\n                digits = new long[s.length() / RADIX_LEN];\n            } else {\n                digits = new long[s.length() / RADIX_LEN + 1];\n            }\n            for (int i = s.length(), k = 0; i > 0; i -= RADIX_LEN) {\n                long tmp = 0;\n                for (int j = Math.max(0, i - RADIX_LEN); j < i; ++j) {\n                    tmp = tmp * 10 + Character.getNumericValue(s.charAt(j));\n                }\n                digits[k++] = tmp;\n            }\n            return new BigInt(digits);\n        }\n\n        @Override\n        public String toString() {\n            final StringBuilder sb = new StringBuilder(\n                    Long.toString(digits[digits.length-1]));\n\n            for (int i = digits.length - 2; i >= 0; --i) {\n                sb.append(String.format("%0" + RADIX_LEN + "d", digits[i]));\n            }\n            return sb.toString();\n        }\n\n        public static BigInt multiply(BigInt x, BigInt y) {\n            long[] z = new long[x.digits.length + y.digits.length];\n            for (int i = 0; i < x.digits.length; ++i) {\n                for (int j = 0; j < y.digits.length; ++j) {\n                    z[i + j] += x.digits[i] * y.digits[j];\n                    z[i + j + 1] += z[i + j] / BIGINT_RADIX;\n                    z[i + j] %= BIGINT_RADIX;\n                }\n            }\n            // find the first 0 from right to left\n            int i = z.length - 1;\n            for (; i > 0 && z[i] == 0; --i) /* empty */;\n\n            if (i == z.length - 1) {\n                return new BigInt(z);\n            } else { // make a copy\n                long[] tmp = new long[i + 1];\n                System.arraycopy(z, 0, tmp, 0, i + 1);\n                return new BigInt(tmp);\n            }\n        }\n    }\n}\n'))),Object(r.b)(l.a,{value:"cpp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),"// Multiply Strings\n// 9\u4e2a\u5b57\u7b26\u5bf9\u5e94\u4e00\u4e2aint64_t\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n*m/81)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O((n+m)/9)\n/** \u5927\u6574\u6570\u7c7b. */\nclass BigInt {\npublic:\n    /**\n     * @brief \u6784\u9020\u51fd\u6570\uff0c\u5c06\u5b57\u7b26\u4e32\u8f6c\u5316\u4e3a\u5927\u6574\u6570.\n     * @param[in] s \u8f93\u5165\u7684\u5b57\u7b26\u4e32\n     * @return \u65e0\n     */\n    BigInt(string s) {\n        vector<int64_t> result;\n        result.reserve(s.size() / RADIX_LEN + 1);\n\n        for (int i = s.size(); i > 0; i -= RADIX_LEN) {  // [i-RADIX_LEN, i)\n            int temp = 0;\n            const int low = max(i - RADIX_LEN, 0);\n            for (int j = low; j < i; j++) {\n                temp = temp * 10 + s[j] - '0';\n            }\n            result.push_back(temp);\n        }\n        elems = result;\n    }\n    /**\n     * @brief \u5c06\u6574\u6570\u8f6c\u5316\u4e3a\u5b57\u7b26\u4e32.\n     * @return \u5b57\u7b26\u4e32\n     */\n    string toString() {\n        stringstream result;\n        bool started = false; // \u7528\u4e8e\u8df3\u8fc7\u524d\u5bfc0\n        for (auto i = elems.rbegin(); i != elems.rend(); i++) {\n            if (started) { // \u5982\u679c\u591a\u4f59\u76840\u5df2\u7ecf\u90fd\u8df3\u8fc7\uff0c\u5219\u8f93\u51fa\n                result << setw(RADIX_LEN) << setfill('0') << *i;\n            } else {\n                result << *i;\n                started = true; // \u78b0\u5230\u7b2c\u4e00\u4e2a\u975e0\u7684\u503c\uff0c\u5c31\u8bf4\u660e\u591a\u4f59\u76840\u5df2\u7ecf\u90fd\u8df3\u8fc7\n            }\n        }\n\n        if (!started) return \"0\"; // \u5f53x\u5168\u4e3a0\u65f6\n        else return result.str();\n    }\n\n    /**\n     * @brief \u5927\u6574\u6570\u4e58\u6cd5.\n     * @param[in] x x\n     * @param[in] y y\n     * @return \u5927\u6574\u6570\n     */\n    static BigInt multiply(const BigInt &x, const BigInt &y) {\n        vector<int64_t> z(x.elems.size() + y.elems.size(), 0);\n\n        for (size_t i = 0; i < y.elems.size(); i++) {\n            for (size_t j = 0; j < x.elems.size(); j++) { // \u7528y[i]\u53bb\u4e58\u4ee5x\u7684\u5404\u4f4d\n                //  \u4e24\u6570\u7b2ci, j\u4f4d\u76f8\u4e58\uff0c\u7d2f\u52a0\u5230\u7ed3\u679c\u7684\u7b2ci+j\u4f4d\n                z[i + j] += y.elems[i] * x.elems[j];\n\n                if (z[i + j] >= BIGINT_RADIX) { //  \u770b\u662f\u5426\u8981\u8fdb\u4f4d\n                    z[i + j + 1] += z[i + j] / BIGINT_RADIX; //  \u8fdb\u4f4d\n                    z[i + j] %= BIGINT_RADIX;\n                }\n            }\n        }\n        while (z.back() == 0) z.pop_back();  // \u6ca1\u6709\u8fdb\u4f4d\uff0c\u53bb\u6389\u6700\u9ad8\u4f4d\u76840\n        return BigInt(z);\n    }\n\nprivate:\n    typedef long long int64_t;\n    /** \u4e00\u4e2a\u6570\u7ec4\u5143\u7d20\u5bf9\u5e949\u4e2a\u5341\u8fdb\u5236\u4f4d\uff0c\u5373\u6570\u7ec4\u662f\u4ebf\u8fdb\u5236\u7684\n     * \u56e0\u4e3a 1000000000 * 1000000000 \u6ca1\u6709\u8d85\u8fc7 2^63-1\n     */\n    const static int BIGINT_RADIX = 1000000000;\n    const static int RADIX_LEN = 9;\n    /** \u4e07\u8fdb\u5236\u6574\u6570. */\n    vector<int64_t> elems;\n    BigInt(const vector<int64_t> num) : elems(num) {}\n};\n\n\nclass Solution {\npublic:\n    string multiply(string num1, string num2) {\n        BigInt x(num1);\n        BigInt y(num2);\n        return BigInt::multiply(x, y).toString();\n    }\n};\n")))))}g.isMDXComponent=!0},301:function(n,t,e){"use strict";e.d(t,"a",(function(){return g})),e.d(t,"b",(function(){return b}));var i=e(0),r=e.n(i);function a(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function l(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function s(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?l(Object(e),!0).forEach((function(t){a(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function o(n,t){if(null==n)return{};var e,i,r=function(n,t){if(null==n)return{};var e,i,r={},a=Object.keys(n);for(i=0;i<a.length;i++)e=a[i],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)e=a[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var u=r.a.createContext({}),c=function(n){var t=r.a.useContext(u),e=t;return n&&(e="function"==typeof n?n(t):s(s({},t),n)),e},g=function(n){var t=c(n.components);return r.a.createElement(u.Provider,{value:t},n.children)},m={inlineCode:"code",wrapper:function(n){var t=n.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(n,t){var e=n.components,i=n.mdxType,a=n.originalType,l=n.parentName,u=o(n,["components","mdxType","originalType","parentName"]),g=c(e),p=i,b=g["".concat(l,".").concat(p)]||g[p]||m[p]||a;return e?r.a.createElement(b,s(s({ref:t},u),{},{components:e})):r.a.createElement(b,s({ref:t},u))}));function b(n,t){var e=arguments,i=t&&t.mdxType;if("string"==typeof n||i){var a=e.length,l=new Array(a);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=n,s.mdxType="string"==typeof n?n:i,l[1]=s;for(var u=2;u<a;u++)l[u]=e[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,e)}p.displayName="MDXCreateElement"},302:function(n,t,e){"use strict";function i(n){var t,e,r="";if("string"==typeof n||"number"==typeof n)r+=n;else if("object"==typeof n)if(Array.isArray(n))for(t=0;t<n.length;t++)n[t]&&(e=i(n[t]))&&(r&&(r+=" "),r+=e);else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var n,t,e=0,r="";e<arguments.length;)(n=arguments[e++])&&(t=i(n))&&(r&&(r+=" "),r+=t);return r}},303:function(n,t,e){"use strict";var i=e(0);const r=Object(i.createContext)(void 0);t.a=r},304:function(n,t,e){"use strict";var i=e(0),r=e(303);t.a=function(){const n=Object(i.useContext)(r.a);if(null==n)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return n}},305:function(n,t,e){"use strict";var i=e(0),r=e.n(i),a=e(304),l=e(302),s=e(49),o=e.n(s);const u=37,c=39;t.a=function(n){const{block:t,children:e,defaultValue:s,values:g,groupId:m}=n,{tabGroupChoices:p,setTabGroupChoices:b}=Object(a.a)(),[d,f]=Object(i.useState)(s),[y,j]=Object(i.useState)(!1);if(null!=m){const n=p[m];null!=n&&n!==d&&g.some((t=>t.value===n))&&f(n)}const I=n=>{f(n),null!=m&&b(m,n)},h=[],v=n=>{n.metaKey||n.altKey||n.ctrlKey||j(!0)},O=()=>{j(!1)};return Object(i.useEffect)((()=>{window.addEventListener("keydown",v),window.addEventListener("mousedown",O)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t})},g.map((({value:n,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":d===n,className:Object(l.a)("tabs__item",o.a.tabItem,{"tabs__item--active":d===n}),style:y?{}:{outline:"none"},key:n,ref:n=>h.push(n),onKeyDown:n=>{((n,t,e)=>{switch(e.keyCode){case c:((n,t)=>{const e=n.indexOf(t)+1;n[e]?n[e].focus():n[0].focus()})(n,t);break;case u:((n,t)=>{const e=n.indexOf(t)-1;n[e]?n[e].focus():n[n.length-1].focus()})(n,t)}})(h,n.target,n),v(n)},onFocus:()=>I(n),onClick:()=>{I(n),j(!1)},onPointerDown:()=>j(!1)},t)))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},i.Children.toArray(e).filter((n=>n.props.value===d))[0]))}},306:function(n,t,e){"use strict";var i=e(0),r=e.n(i);t.a=function(n){return r.a.createElement("div",null,n.children)}}}]);