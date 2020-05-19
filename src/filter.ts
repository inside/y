const filter = <T>(list: Array<T>, fn: (item: T) => boolean): Array<T> => {
  const result: T[] = [];

  for (let i = 0; i < list.length; i++) {
    if (fn(list[i])) {
      result.push(list[i]);
    }
  }

  return result;
};

export default filter;
