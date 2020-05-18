const filter = (list, fn) => {
  const result = [];

  for (let i = 0; i < list.length; i++) {
    if (fn(list[i])) {
      result.push(list[i]);
    }
  }

  return result;
};

const a = [23, 12, 34, 45, 43];
console.log(filter(a, (x) => x >= 25));
