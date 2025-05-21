function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const mergedResult = merge({ email: 'john@example.com' }, { number: 1234567890 });
console.log(mergedResult);