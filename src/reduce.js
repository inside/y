const reduce = (list, fn, initialValue) => {
  let acc = initialValue !== undefined ? initialValue : list[0];

  for (var i = 0; i < list.length; i++) {
    acc = fn(acc, list[i], i, list);
  }

  return acc;
};

const sum = reduce([1, 2, 3], (acc, curr, index, arr) => {
  return acc + curr;
}, 0);

console.log("sum: ", sum);
