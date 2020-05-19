const bind = <T>(
  fn: (...args: any[]) => any,
  context: T,
  ...args: any[]
): () => any => {
  return () => fn.call(context, ...args);
};

export default bind;
