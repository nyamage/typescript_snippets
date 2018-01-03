function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

//interface (required property)
interface LabelledValue {
  label: string;
}

function printLabel2(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}
printLabel2(myObj);

//interface (optional property)

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black"});
console.log(mySquare);

//readonly properties
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
//p1.x = 5;

(()=>{
  let a: number[] = [1, 2, 3, 4];
  let ro: ReadonlyArray<number> = a;
  //ro[0] = 12;
  //ro.push(5);
  //a = ro;
  a = ro as number[];
})();

// interface with string index signature
(()=>{
  interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
  }
  function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
  }  
  let mySquare2 = createSquare({ color: "black", hoge: 1});
})()


// function types

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string){
  let result = source.search(subString);
  return result > -1;
}

// indexable types
interface StringArray{
  [index: number]: string
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

// class types

interface ClockInterface {
  currentTime: Date;
}

class Clock implements ClockInterface {
  currentTime: Date;
  constructor(h: number, m: number) { }
}

interface ClockInterface2 {
  currentTime: Date;
  setTime(d: Date);
}

class Clock2 implements ClockInterface2 {
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) { }  
}
let clock = new Clock2(0, 0);
console.log(clock);

// extending interfaces

interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
console.log(square);