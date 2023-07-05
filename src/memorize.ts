type FunctionType<T> = (...args: any[]) => T;

function memoize<T>(func: FunctionType<T>): FunctionType<T> {
  const cache: { [key: string]: T } = {};

  return (...args: any[]): T => {
    const key = JSON.stringify(args);

    if (cache.hasOwnProperty(key)) {
      console.log("getting from catch");
      return cache[key];
    }

    const result = func(...args);
    cache[key] = result;
    return result;
  };
}

// Example usage
function add(a: number, b: number): number {
  console.log("Performing addition...");
  return a + b;
}

export const memoizedAdd = memoize(add);

