//https://www.typescriptlang.org/docs/handbook/basic-types.html

// boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// string
let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Heelo, my name is ${fullName}.

I'll be ${age+1} years old next months.`;

console.log(sentence);

// Array

let list: number[] = [1, 2, 3];

let list2: Array<number> = [1, 2, 3];

console.log(list, list2);

// Tuple

let x: [string, number];

x = ["hello", 10];

let x2: [string, number, number];
x2 = ["hello", 1, 2];

console.log(x, x2);

// Enum

enum Color {Red, Green, Blue}
let c: Color = Color.Red;
console.log(c);

enum Color2 {Red = 1, Green = 2, Blue = 4}
let c2: Color2 = Color2.Blue;
console.log(c2);

let colorName: string = Color[2];
console.log(colorName);

// Any

let notSure: any = 4;

// Void

function warnUser(): void {
  console.log("this is warning message.");
}

console.log(warnUser());

// Type assertion

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
console.log(strLength);

// Destructuring

let input = [1, 2];
let [first, second] = input;
console.log(first, second);

// swapg value
[first, second] = [second, first];
console.log(first, second);

// destruct in function arguments

function f([first, second]: [number, number]) {
  console.log(first);
  console.log(second);
}

f([1, 2]);

(()=>{
  let [first, ...rest] = [1, 2, 3, 4];
  console.log(first);
  console.log(rest);
})();

(()=>{
  //extract only first item from array;
  let [first] = [1, 2, 3, 4];
  console.log(first);
})();

let o = {
  a: "foo",
  b: 12,
  c: "bar"
};

// extract some of properties
let {a, ...passthrough} = o;
console.log(a, passthrough);

//property renaming

let { a: newName1, b: newName2 }: { a: string, b: number } = o;
console.log(newName1, newName2);

// destructing in function declarations

type C = { a: string, b?: number }
function f2({a, b}: C): void {
  console.log(a, b);
}

f2({ a: "a" });
f2({ a: "a", b: 1 });

// spread array

(() => {
  let first = [1, 2];
  let second = [3, 4];
  let bothPlus = [0, ...first, ...second, 5];
  console.log(bothPlus);
})();

// spread object

(() => {
  let defaults = { food: "spicy", price: "$$", ambiance: "noisy"};
  //properties that come later in the spread object overwrite properties that come earlier. 
  let search = { ...defaults, food: "rich"};
  console.log(search);
})();

(() => {
  class C {
    p = 12;
    m() {

    }
  }
  let c = new C();
  let clone = { ...c };
  console.log(clone);
})();