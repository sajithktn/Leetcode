function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
  let _array = []
  arr.forEach((item,i) => {
    if(fn(item, i)){
      _array.push(item);
    }
  })
  return _array;
};