var diffList = [];

function diffTree(root1, root2, diffList) {
  if (root1 === root2) return diffList;
  if (root1 === null && root2 !== null) {
    // 新增了节点
    diffList.push({ type: "新增", origin: null, now: root2 });
  } else if (root1 !== null && root2 === null) {
    // 删除了节点
    diffList.push({ type: "删除", origin: root1, now: null });
  } else if (root1.value !== root2.value) {
    // 相同位置的节点，值不相同，修改了节点
    diffList.push({ type: "修改", origin: root1, now: root2 });
    // 因为当前的节点变了，不代表所有的子节点都变了，所以修改了，也得向下继续递归
    diffTree(root1.left, root2.left, diffList);
    diffTree(root1.right, root2.right, diffList);
  } else {
    diffTree(root1.left, root2.left, diffList);
    diffTree(root1.right, root2.right, diffList);
  }
}

diffTree(a1, a2, diffList);
console.log(diffList);
