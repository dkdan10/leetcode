# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    
    def _minDepth(self, root: TreeNode):
        if root is None: return float('inf')
        if root.left is None and root.right is None:
            return 1

        return 1 + min(
            self._minDepth(root.left),
            self._minDepth(root.right)
        )
        
    def minDepth(self, root: TreeNode) -> int:
        if root is None: return 0
        return self._minDepth(root)

a = TreeNode(0)
b = TreeNode(1)
c = TreeNode(2)
a.left = b
a.right = c

sol = Solution()
print(sol.minDepth(a))