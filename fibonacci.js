
function fibs(num) {
  let result = [];
  let n1 = 0, n2 = 1, next;

  for (i = 0; i < num; i++) {
    result.push(n1);
    next = n1 + n2;
    n1 = n2
    n2 = next
  }

  return result
}

console.log(fibs(10))

function fibsRec(num) {
  if (num === 0) return [0];
  if (num === 1) return [0, 1];

  const arr = fibsRec(num - 1);
  return [...arr, arr[num - 1] + arr[num - 2]]
}

console.log(fibsRec(8))