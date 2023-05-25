export const deleteFieldWithNull = (anyObj: any) => {
  const objectWithoutNull = Object.keys(anyObj).reduce((accumulator: any, key) => {
    if (anyObj[key] !== null) {
      accumulator[key] = anyObj[key];
    }
  
    return accumulator;
  }, {});
  
  return objectWithoutNull;
};
