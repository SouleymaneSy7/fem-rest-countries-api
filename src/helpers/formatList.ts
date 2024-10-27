const formatter = (array: string[], type: string): string => {
  return new Intl.ListFormat("en-GB", {
    style: "long",
    type: type,
  }).format(array);
};

export default formatter;
