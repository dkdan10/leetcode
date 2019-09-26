class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        def sortByStart(interval):
            return interval[0]
        intervals.sort(key=sortByStart)

        merged = []
        for i, inteval in enumerate(intervals):
            if i == 0:
                merged.append(inteval)
            elif (inteval[0] <= merged[-1][1]
                  and inteval[1] > merged[-1][1]):
                merged[-1][1] = inteval[1]
            elif (inteval[0] > merged[-1][1]):
                merged.append(inteval)

        return merged