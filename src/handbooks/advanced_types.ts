//union type
function getLength(obj: Array<any>|string): number {
  return obj.length;
}

console.log(getLength([1, 2, 3]));
console.log(getLength("hogehoge"))

//union type for user defined interface
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

class MyFish implements Fish {
  swim(): void {};
  layEggs(): void {};  
}

function getSmallPet(): Fish | Bird {
  return new MyFish();
}

let pet = getSmallPet();
pet.layEggs(); //ok!!!

/*  cause errors in compile time
if(pet.swim){
  pet.swim();
}
*/

if((<Fish>pet).swim){
  (<Fish>pet).swim();
}
else {
  (<Bird>pet).fly();
}

// type guards

function isFish(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined;
}

if(isFish(pet)) {
  pet.swim();
}

// instanceof

if(pet instanceof MyFish){
  pet.swim();
}

// nullable types
let s = "foo";
//s = null;
let sn: string | null = "bar";
sn = null;