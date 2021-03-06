---
title: 2Sum II
---

### 描述

Based on [2Sum](2sum.md), the only change is that **array is sorted in ascending order**.

**Example 1:**

> **Input**: nums = [2,7,11,15], target = 9
>
> **Output**: [0,1]

**Example 2:**

> **Input**: nums = [2,3,4], target = 6
>
> **Output**: [0,2]

**Example 3:**

> **Input**: nums = [-1,0], target = -1
>
> **Output**: [0,1]

**Constraints:**

- 2 <= nums.length <= $3 * 10^4$
- -1000 <= nums[i] <= 1000
- `nums` is sorted in ascending order
- -1000 <= target <= 1000
- Only one valid answer exists.

### 分析

双指针，左右夹逼。

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="python"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="python">

```python
# 2Sum II
# Time Complexity: O(n)，Space Complexity: O(1)
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        low, high = 0, len(nums) - 1;
        while low < high:
            sum = nums[low] + nums[high]
            if sum < target:
                low += 1
            elif sum > target:
                high -= 1
            else:
                return [low + 1, high + 1]
        return [-1, -1]
```

</TabItem>
<TabItem value="java">

```java
// 2Sum II
// Time Complexity: O(n)，Space Complexity: O(1)
class Solution {
    public int[] twoSum(int[] nums, int target) {
        int low = 0, high = nums.length - 1;
        while (low < high) {
            int sum = nums[low] + nums[high];
            if (sum < target) {
                ++low;
            } else if (sum > target) {
                --high;
            } else {
                return new int[]{low + 1, high + 1};
            }
        }
        return new int[]{-1, -1};
    }
};
```

</TabItem>
<TabItem value="cpp">

```cpp
// 2Sum II
// Time Complexity: O(n)，Space Complexity: O(1)
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int low = 0, high = nums.size() - 1;
        while (low < high) {
            int sum = nums[low] + nums[high];
            if (sum < target) {
                ++low;
            } else if (sum > target) {
                --high;
            } else {
                return {low + 1, high + 1};
            }
        }
        return {-1, -1};
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [2Sum](2sum.md)
- [3Sum](3sum.md)
- [3Sum Closest](3sum-closest.md)
- [4Sum](4sum.md)
