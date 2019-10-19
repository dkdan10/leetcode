from typing import List

class Solution:
    def trap(self, height: List[int]) -> int:
        maxLeft = 0
        maxRight = 0
        totalWater = 0
        i = 0
        j = len(height) - 1
        
        while i < j:
            maxRight = max(maxRight, height[j])
            maxLeft = max(maxLeft, height[i])
            
            if maxLeft <= maxRight:
                totalWater += min(maxLeft, maxRight) - height[i]
                i+=1
            else:
                totalWater += min(maxLeft, maxRight) - height[j]
                j-=1
        
        return totalWater