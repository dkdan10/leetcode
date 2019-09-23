class Solution:
    def isUgly(self, num: int) -> bool:
        if num == 1: return True
        if num == 0: return False
        for fact in range(2,6):
            if num % fact == 0:
                if ( fact in set([2, 3, 5]) ):
                    return self.isUgly(num / fact)
                else: return False
        return False