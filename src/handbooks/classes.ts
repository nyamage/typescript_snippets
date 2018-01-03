// simple class
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello " + this.greeting;
  }
}

let greeter = new Greeter("world");

// inheritance
class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof! Woof!');
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

// more complex example

(() => {
  class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
      console.log(`Animal moved ${distanceInMeters}m.`);
    }
  }
  
  class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
      console.log("Slithering...");
      super.move(distanceInMeters);
    }
  }
  
  class Horse extends Animal {
    constructor(name: string) {
      super(name);
    }
    move(distanceInMeters = 45){
      console.log("Gallopping...");
      super.move(distanceInMeters);
    }
  }
  
  let sam = new Snake("Sammy the Python");
  let tom: Animal = new Horse("Tommy the Palomino");

  sam.move();
  tom.move(34);
})();

// multiple constructor is not allowed

class People {
  protected name: string;
  protected constructor() { this.name = "default"; }  
  //protected constructor(theName: string) { this.name = theName; }
}

// protected consturctor

class Person {
  protected name: string;
  protected constructor(theName: string) { this.name = theName; }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string){
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}`;
  }
}

let howard = new Employee("Howard", "Sales");
//let john = new Person("john");


// Readonly modifier

class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor (theName: string) {
    // readonly property is only allowed to modify in constructor
    this.name = theName; 
  }
}

let dad = new Octopus("Man with the 8 strong legs");
//dad.name = "Man width the 3-piece suit";

// Parameter properties

(()=>{
  class Octopus {
    readonly numberOfLedge: number = 8;
    constructor(readonly name: string) {}
  }  
})();

// Getter/Setter
(()=>{
  let passcode = "secret passcode";
  
  class Employee {
    private _fullName: string;
  
    get fullName(): string {
      return this._fullName;
    }
  
    set fullName(newName: string) {
      if (passcode && passcode == "secret passcode") {
        this._fullName = newName;
      }
      else {
        console.log("Error: Unauthorized update of employee!")
      }
    }
  }

  let employee = new Employee();
  employee.fullName = "Bob Smith";
  if (employee.fullName) {
    console.log(employee.fullName);
  }
})();

// Constructor functions
(()=>{
  class Greeter {
    static standardGreeting = "Hello, there";
    greet(){
      return Greeter.standardGreeting;
    }
  }

  let greeterMaker: typeof Greeter = Greeter;
  greeterMaker.standardGreeting = "Hey there!";
  let greeter = new greeterMaker();
  console.log(greeter.greet());
})();

// using class as an interface
(()=>{
  class Point {
    x: number;
    y: number;
  }
  
  interface Point3d extends Point {
    z: number;
  }
  
  let point3d: Point3d = { x: 1, y: 2, z: 3};
  
})();

