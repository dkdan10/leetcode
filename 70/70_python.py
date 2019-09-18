class Solution:
    def climbStairs(self, n: int) -> int:
        memo = {0: 0, 1: 1, 2: 2}
        return self.solveStairs(memo, n)
        
    def solveStairs(self, memo, n):
        if n in memo: return memo[n]
        memo[n-1] = self.solveStairs(memo, n - 1)
        return memo[n-1] + memo[n-2]