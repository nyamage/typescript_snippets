// basic

function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("myString");
console.log(output);

let output2 = identity("myString");
console.log(output2);

function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

loggingIdentity<number>([1, 2]);

// generic types

interface GenericIdentityFn<T> {
  (arg: T): T;
}

let myIdentity: GenericIdentityFn<number> = identity;
console.log(myIdentity(5));

// Using Type Parameters in Generic Constraints

(()=>{
  function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }
  
  let x = { a: 1, b: 2, c: 3, d: 4};
  getProperty(x, "a");
  //getProperty(x, "m");  
})();

// Using Class Types in Generics

(()=>{
  class BeeKeeper {
    hasMask: boolean;
  }
  
  class ZooKeeper {
    nametag: boolean;
  }
  
  class Animal {
    numLegs: number;
  }

  class Bee extends Animal {
    keeper: BeeKeeper;
  }

  class Lion extends Animal {
    keeper: ZooKeeper;
  }

  function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
  }

  createInstance(Lion).keeper.nametag;
  createInstance(Bee).keeper.hasMask;
})()