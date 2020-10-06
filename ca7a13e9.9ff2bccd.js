(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{252:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return i})),n.d(a,"metadata",(function(){return l})),n.d(a,"rightToc",(function(){return b})),n.d(a,"default",(function(){return u}));var t=n(2),s=n(7),r=(n(0),n(300)),c=n(304),m=n(305),i={title:"4Sum"},l={unversionedId:"linear-list/array/4sum",id:"linear-list/array/4sum",isDocsHomePage:!1,title:"4Sum",description:"\u63cf\u8ff0",source:"@site/docs/linear-list/array/4sum.md",slug:"/linear-list/array/4sum",permalink:"/linear-list/array/4sum",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/linear-list/array/4sum.md",version:"current",sidebar:"someSidebar",previous:{title:"3Sum Closest",permalink:"/linear-list/array/3sum-closest"},next:{title:"Remove Element",permalink:"/linear-list/array/remove-element"}},b=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u5de6\u53f3\u5939\u903c",id:"\u5de6\u53f3\u5939\u903c",children:[]},{value:"HashMap \u505a\u7f13\u5b58",id:"hashmap-\u505a\u7f13\u5b58",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],p={rightToc:b};function u(e){var a=e.components,n=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},p,n,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(r.b)("p",null,"Given an array ",Object(r.b)("inlineCode",{parentName:"p"},"S")," of ",Object(r.b)("inlineCode",{parentName:"p"},"n")," integers, are there elements ",Object(r.b)("inlineCode",{parentName:"p"},"a, b, c"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"d")," in ",Object(r.b)("inlineCode",{parentName:"p"},"S")," such that ",Object(r.b)("inlineCode",{parentName:"p"},"a + b + c + d = target"),"? Find all unique quadruplets in the array which gives the sum of target."),Object(r.b)("p",null,"Note:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Elements in a quadruplet ",Object(r.b)("inlineCode",{parentName:"li"},"(a,b,c,d)")," must be in non-descending order. (ie, ",Object(r.b)("span",Object(t.a)({parentName:"li"},{className:"math math-inline"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"katex"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"katex-mathml"}),Object(r.b)("math",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(r.b)("semantics",{parentName:"math"},Object(r.b)("mrow",{parentName:"semantics"},Object(r.b)("mi",{parentName:"mrow"},"a"),Object(r.b)("mo",{parentName:"mrow"},"\u2264"),Object(r.b)("mi",{parentName:"mrow"},"b"),Object(r.b)("mo",{parentName:"mrow"},"\u2264"),Object(r.b)("mi",{parentName:"mrow"},"c"),Object(r.b)("mo",{parentName:"mrow"},"\u2264"),Object(r.b)("mi",{parentName:"mrow"},"d")),Object(r.b)("annotation",Object(t.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"a \\leq b \\leq c \\leq d")))),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"base"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"strut",style:{height:"0.7719400000000001em",verticalAlign:"-0.13597em"}})),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mord mathnormal"}),"a"),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mrel"}),"\u2264"),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"base"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"strut",style:{height:"0.83041em",verticalAlign:"-0.13597em"}})),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mord mathnormal"}),"b"),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mrel"}),"\u2264"),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"base"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"strut",style:{height:"0.7719400000000001em",verticalAlign:"-0.13597em"}})),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mord mathnormal"}),"c"),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mrel"}),"\u2264"),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"base"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}})),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mord mathnormal"}),"d"))))),")"),Object(r.b)("li",{parentName:"ul"},"The solution set must not contain duplicate quadruplets.")),Object(r.b)("p",null,"For example, given array ",Object(r.b)("inlineCode",{parentName:"p"},"S = {1 0 -1 0 -2 2}"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"target = 0"),"."),Object(r.b)("p",null,"A solution set is:"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),"(-1,  0, 0, 1)\n(-2, -1, 1, 2)\n(-2,  0, 0, 2)\n")),Object(r.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(r.b)("p",null,"\u5148\u6392\u5e8f\uff0c\u7136\u540e\u5de6\u53f3\u5939\u903c\uff0c\u590d\u6742\u5ea6 ",Object(r.b)("span",Object(t.a)({parentName:"p"},{className:"math math-inline"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"katex"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"katex-mathml"}),Object(r.b)("math",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(r.b)("semantics",{parentName:"math"},Object(r.b)("mrow",{parentName:"semantics"},Object(r.b)("mi",{parentName:"mrow"},"O"),Object(r.b)("mo",Object(t.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(r.b)("msup",{parentName:"mrow"},Object(r.b)("mi",{parentName:"msup"},"n"),Object(r.b)("mn",{parentName:"msup"},"3")),Object(r.b)("mo",Object(t.a)({parentName:"mrow"},{stretchy:"false"}),")")),Object(r.b)("annotation",Object(t.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"O(n^3)")))),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"base"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"strut",style:{height:"1.064108em",verticalAlign:"-0.25em"}})),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.02778em"}}),"O"),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mopen"}),"("),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mord"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mord mathnormal"}),"n"),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"msupsub"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"vlist-t"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"vlist-r"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"vlist",style:{height:"0.8141079999999999em"}}),Object(r.b)("span",Object(t.a)({parentName:"span"},{style:{top:"-3.063em",marginRight:"0.05em"}}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mord mtight"}),"3")))))))),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mclose"}),")"))))),"\uff0c\u4f1a\u8d85\u65f6\u3002"),Object(r.b)("p",null,"\u53ef\u4ee5\u7528\u4e00\u4e2a hashmap \u5148\u7f13\u5b58\u4e24\u4e2a\u6570\u7684\u548c\uff0c\u6700\u7ec8\u590d\u6742\u5ea6",Object(r.b)("span",Object(t.a)({parentName:"p"},{className:"math math-inline"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"katex"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"katex-mathml"}),Object(r.b)("math",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(r.b)("semantics",{parentName:"math"},Object(r.b)("mrow",{parentName:"semantics"},Object(r.b)("mi",{parentName:"mrow"},"O"),Object(r.b)("mo",Object(t.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(r.b)("msup",{parentName:"mrow"},Object(r.b)("mi",{parentName:"msup"},"n"),Object(r.b)("mn",{parentName:"msup"},"3")),Object(r.b)("mo",Object(t.a)({parentName:"mrow"},{stretchy:"false"}),")")),Object(r.b)("annotation",Object(t.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"O(n^3)")))),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"base"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"strut",style:{height:"1.064108em",verticalAlign:"-0.25em"}})),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.02778em"}}),"O"),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mopen"}),"("),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mord"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mord mathnormal"}),"n"),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"msupsub"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"vlist-t"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"vlist-r"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"vlist",style:{height:"0.8141079999999999em"}}),Object(r.b)("span",Object(t.a)({parentName:"span"},{style:{top:"-3.063em",marginRight:"0.05em"}}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mord mtight"}),"3")))))))),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mclose"}),")"))))),"\u3002\u8fd9\u4e2a\u7b56\u7565\u4e5f\u9002\u7528\u4e8e 3Sum \u3002"),Object(r.b)("h3",{id:"\u5de6\u53f3\u5939\u903c"},"\u5de6\u53f3\u5939\u903c"),Object(r.b)(c.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(r.b)(m.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"// 4Sum\n// \u5148\u6392\u5e8f\uff0c\u7136\u540e\u5de6\u53f3\u5939\u903c\n// Time Complexity: O(n^3)\uff0cSpace Complexity: O(1)\npublic class Solution {\n    public List<List<Integer>> fourSum(int[] nums, int target) {\n        List<List<Integer>> result = new ArrayList<>();\n        if (nums.length < 4) return result;\n        Arrays.sort(nums);\n\n        for (int i = 0; i < nums.length - 3; ++i) {\n            if (i > 0 && nums[i] == nums[i-1]) continue;\n            for (int j = i + 1; j < nums.length - 2; ++j) {\n                if (j > i+1 && nums[j] == nums[j-1]) continue;\n                int k = j + 1;\n                int l = nums.length - 1;\n                while (k < l) {\n                    final int sum = nums[i] + nums[j] + nums[k] + nums[l];\n                    if (sum < target) {\n                        ++k;\n                        while(nums[k] == nums[k-1] && k < l) ++k;\n                    } else if (sum > target) {\n                        --l;\n                        while(nums[l] == nums[l+1] && k < l) --l;\n                    } else {\n                        result.add(Arrays.asList(nums[i], nums[j], nums[k], nums[l]));\n                        ++k;\n                        --l;\n                        while(nums[k] == nums[k-1] && k < l) ++k;\n                        while(nums[l] == nums[l+1] && k < l) --l;\n                    }\n                }\n            }\n        }\n        return result;\n    }\n}\n"))),Object(r.b)(m.a,{value:"cpp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-cpp"}),"// 4Sum\n// \u5148\u6392\u5e8f\uff0c\u7136\u540e\u5de6\u53f3\u5939\u903c\n// Time Complexity: O(n^3)\uff0cSpace Complexity: O(1)\nclass Solution {\npublic:\n    vector<vector<int>> fourSum(vector<int>& nums, int target) {\n        vector<vector<int>> result;\n        if (nums.size() < 4) return result;\n        sort(nums.begin(), nums.end());\n\n        for (int i = 0; i < nums.size() - 3; ++i) {\n            if (i > 0 && nums[i] == nums[i-1]) continue;\n            for (int j = i + 1; j < nums.size() - 2; ++j) {\n                if (j > i+1 && nums[j] == nums[j-1]) continue;\n                int k = j + 1;\n                int l = nums.size() - 1;\n                while (k < l) {\n                    const int sum = nums[i] + nums[j] + nums[k] + nums[l];\n                    if (sum < target) {\n                        ++k;\n                        while(nums[k] == nums[k-1] && k < l) ++k;\n                    } else if (sum > target) {\n                        --l;\n                        while(nums[l] == nums[l+1] && k < l) --l;\n                    } else {\n                        result.push_back({nums[i], nums[j], nums[k], nums[l]});\n                        ++k;\n                        --l;\n                        while(nums[k] == nums[k-1] && k < l) ++k;\n                        while(nums[l] == nums[l+1] && k < l) --l;\n                    }\n                }\n            }\n        }\n        return result;\n    }\n};\n")))),Object(r.b)("h3",{id:"hashmap-\u505a\u7f13\u5b58"},"HashMap \u505a\u7f13\u5b58"),Object(r.b)(c.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(r.b)(m.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"// 4Sum\n// \u5148\u6392\u5e8f\uff0c\u7136\u540e\u5de6\u53f3\u5939\u903c\n// Time Complexity: O(n^3)\uff0cSpace Complexity: O(1)\npublic class Solution {\n    public List<List<Integer>> fourSum(int[] nums, int target) {\n        List<List<Integer>> result = new ArrayList<>();\n        if (nums.length < 4) return result;\n        Arrays.sort(nums);\n\n        final HashMap<Integer, ArrayList<int[]>> cache = new HashMap<>();\n        for (int i = 0; i < nums.length; ++i) {\n            for (int j = i + 1; j < nums.length; ++j) {\n                ArrayList<int[]> value = cache.get(nums[i] + nums[j]);\n                if (value == null) {\n                    value = new ArrayList<>();\n                    cache.put(nums[i] + nums[j], value);\n                }\n                value.add(new int[]{i, j});\n            }\n        }\n\n        final HashSet<String> used = new HashSet<>(); // avoid duplicates\n        for (int i = 0; i < nums.length; ++i) {\n            if (i > 0 && nums[i] == nums[i-1]) continue;\n            for (int j = i + 1; j < nums.length - 2; ++j) {\n                if (j > i+1 && nums[j] == nums[j-1]) continue;\n                final ArrayList<int[]> list = cache.get(target - nums[i] - nums[j]);\n                if (list == null) continue;;\n                for (int[] pair : list) {\n                    if (j >= pair[0]) continue;  // overlap\n\n                    final Integer[] sol = new Integer[]{nums[i], nums[j], nums[pair[0]], nums[pair[1]]};\n                    Arrays.sort(sol);\n                    final String key = Arrays.toString(sol);\n\n                    if(!used.contains(key)){\n                        result.add(Arrays.asList(sol));\n                        used.add(key);\n                    }\n                }\n            }\n        }\n        return result;\n    }\n}\n"))),Object(r.b)(m.a,{value:"cpp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-cpp"}),"// 4Sum\n// \u7528\u4e00\u4e2ahashmap\u5148\u7f13\u5b58\u4e24\u4e2a\u6570\u7684\u548c\n// Time Complexity: \u5e73\u5747O(n^2)\uff0c\u6700\u574fO(n^4)\uff0cSpace Complexity: O(n^2)\nclass Solution {\npublic:\n    vector<vector<int> > fourSum(vector<int> &nums, int target) {\n        vector<vector<int>> result;\n        if (nums.size() < 4) return result;\n        sort(nums.begin(), nums.end());\n\n        unordered_map<int, vector<pair<int, int> > > cache;\n        for (size_t a = 0; a < nums.size(); ++a) {\n            for (size_t b = a + 1; b < nums.size(); ++b) {\n                cache[nums[a] + nums[b]].push_back(pair<int, int>(a, b));\n            }\n        }\n\n        for (int c = 0; c < nums.size(); ++c) {\n            for (size_t d = c + 1; d < nums.size(); ++d) {\n                const int key = target - nums[c] - nums[d];\n                if (cache.find(key) == cache.end()) continue;\n\n                const auto& vec = cache[key];\n                for (size_t k = 0; k < vec.size(); ++k) {\n                    if (c <= vec[k].second)\n                        continue; // \u6709\u91cd\u53e0\n\n                    result.push_back( { nums[vec[k].first],\n                            nums[vec[k].second], nums[c], nums[d] });\n                }\n            }\n        }\n        sort(result.begin(), result.end());\n        result.erase(unique(result.begin(), result.end()), result.end());\n        return result;\n    }\n};\n")))),Object(r.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"/linear-list/array/2sum"}),"2Sum")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"/linear-list/array/3sum"}),"3Sum")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"/linear-list/array/3sum-closest"}),"3Sum Closest"))))}u.isMDXComponent=!0},300:function(e,a,n){"use strict";n.d(a,"a",(function(){return p})),n.d(a,"b",(function(){return j}));var t=n(0),s=n.n(t);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function c(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function m(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?c(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,s=function(e,a){if(null==e)return{};var n,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),b=function(e){var a=s.a.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):m(m({},a),e)),n},p=function(e){var a=b(e.components);return s.a.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return s.a.createElement(s.a.Fragment,{},a)}},o=s.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=b(n),o=t,j=p["".concat(c,".").concat(o)]||p[o]||u[o]||r;return n?s.a.createElement(j,m(m({ref:a},l),{},{components:n})):s.a.createElement(j,m({ref:a},l))}));function j(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,c=new Array(r);c[0]=o;var m={};for(var i in a)hasOwnProperty.call(a,i)&&(m[i]=a[i]);m.originalType=e,m.mdxType="string"==typeof e?e:t,c[1]=m;for(var l=2;l<r;l++)c[l]=n[l];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},301:function(e,a,n){"use strict";function t(e){var a,n,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(n=t(e[a]))&&(s&&(s+=" "),s+=n);else for(a in e)e[a]&&(s&&(s+=" "),s+=a);return s}a.a=function(){for(var e,a,n=0,s="";n<arguments.length;)(e=arguments[n++])&&(a=t(e))&&(s&&(s+=" "),s+=a);return s}},302:function(e,a,n){"use strict";var t=n(0),s=Object(t.createContext)(void 0);a.a=s},303:function(e,a,n){"use strict";var t=n(0),s=n(302);a.a=function(){var e=Object(t.useContext)(s.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},304:function(e,a,n){"use strict";var t=n(0),s=n.n(t),r=n(303),c=n(301),m=n(49),i=n.n(m),l=37,b=39;a.a=function(e){var a=e.block,n=e.children,m=e.defaultValue,p=e.values,u=e.groupId,o=Object(r.a)(),j=o.tabGroupChoices,O=o.setTabGroupChoices,N=Object(t.useState)(m),h=N[0],d=N[1],f=Object(t.useState)(!1),g=f[0],y=f[1];if(null!=u){var v=j[u];null!=v&&v!==h&&p.some((function(e){return e.value===v}))&&d(v)}var w=function(e){d(e),null!=u&&O(u,e)},k=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},S=function(){y(!1)};return Object(t.useEffect)((function(){window.addEventListener("keydown",x),window.addEventListener("mousedown",S)}),[]),s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a})},p.map((function(e){var a=e.value,n=e.label;return s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===a,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":h===a}),style:g?{}:{outline:"none"},key:a,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,a,n){switch(n.keyCode){case b:!function(e,a){var n=e.indexOf(a)+1;e[n]?e[n].focus():e[0].focus()}(e,a);break;case l:!function(e,a){var n=e.indexOf(a)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,a)}}(k,e.target,e),x(e)},onFocus:function(){return w(a)},onClick:function(){w(a),y(!1)},onPointerDown:function(){return y(!1)}},n)}))),s.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},t.Children.toArray(n).filter((function(e){return e.props.value===h}))[0]))}},305:function(e,a,n){"use strict";var t=n(0),s=n.n(t);a.a=function(e){return s.a.createElement("div",null,e.children)}}}]);