class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        start, end, subMax = 0, 0, 0
        temp_set = set()
        while end < len(s):
            if s[end] in temp_set:
                temp_set.remove(s[start])
                start += 1
            else:
                temp_set.add(s[end])
                end += 1
                subMax = max(subMax, end - start)
        return subMax
