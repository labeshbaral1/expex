def minS():
    class TreeNode():
        def __init__(self, value=None, left=None, right=None):
            self.value = value
            self.right = right
            self.left = left
        def __str__(self) -> str:
            return "Tree Node with a value of " + str(self.value)


    stack = [TreeNode(25)]
    level = 0

    while stack:

        for i in range(len(stack)):
            curr = stack.pop(0)
            if curr.value == 11:
                return level
            if ((curr.value) / 2.0) * 2.0 == curr.value:
                stack.append(TreeNode((curr.value) /2.0))
            stack.append(TreeNode(curr.value + 3))


        level+=1
    return False



print(minS())
        



