enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

// enum members also become types as well! 

enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let c1: Circle = {
  //kind: ShapeKind.Square,
  kind: ShapeKind.Circle,
  radius: 100
}