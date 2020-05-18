const map = <T>(
  list: Array<T>,
  fn: (item: T, index?: number, list?: Array<T>) => T,
): Array<T> => {
  const result: T[] = [];

  for (let i = 0; i < list.length; i++) {
    result[i] = fn(list[i], i, list);
  }

  return result;
};

export default map
