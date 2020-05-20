const reduce = <T>(
  list: Array<T>,
  fn: (acc: any, item: T, index: number, list: Array<T>) => any,
  initialValue: any,
) => {
  let acc = initialValue !== undefined ? initialValue : list[0];

  for (var i = 0; i < list.length; i++) {
    acc = fn(acc, list[i], i, list);
  }

  return acc;
};

export default reduce;
