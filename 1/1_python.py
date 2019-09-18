
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        indexNumRef = {}
        for i in range(len(nums)):
            comp = target - nums[i]
            if comp in indexNumRef: 
                return [indexNumRef[comp], i]
            indexNumRef[nums[i]] = i