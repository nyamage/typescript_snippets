// optional parameters

(()=>{
  function buildName(firstName: string, lastName?: string) {
    if(lastName)
      return firstName + " " + lastName
    else
      return firstName
  }

  let result1 = buildName("Bob");
  //let result2 = buildName("Bob", "Adams", "Sr.");
  let result3 = buildName("Bob", "Adams");
  console.log(result1, result3);
})();

let suits = ["hearts", "spades", "clubs", "diamonds"];

// overloading

function pickCard(x: number): {suit: string; card: number; };
function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x): any {
  if (typeof x == "object") {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  }
  else if (typeof x == "number") {
    let pickedSuit = Math.floor(x/13);
    return { suit: suits[pickedSuit], card: x % 13 }
  }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "heart", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit)

let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit)
