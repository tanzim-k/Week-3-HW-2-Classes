/*
 Define a new class called Circle with appropriate 
 attributes and instantiate a few Circle objects.
*/

class Circle {
    constructor(radius, sides) {
        this.radius = radius;
        this.sides = sides;
    }
    //Write a function called circle_area that returns 
    //the area of the object. 
    circle_area() {
        return 3.14*(this.radius ** 2);
    }
    //Write a function total_sides that returns the number
    // of sides of the object.
    total_sides() {
        return 'A circle has no sides.';
    }
}

const smallCircle = new Circle(1, 1);
const mediumCircle = new Circle(5, 0);
const largeCircle = new Circle(10, 0);

console.log(smallCircle.total_sides()); // A circle has no sides.
console.log(smallCircle.circle_area()); // 3.14
console.log(mediumCircle.circle_area()); // 78.5
console.log(largeCircle.circle_area()); // 314

/*
Define a new class called Rectangle with 
appropriate attributes and instantiate a few Rectangle objects.
*/

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.sides = arguments.length;
    }
    // Write a function called rectangle_area that 
    // returns the area of the given object.
    rectangle_area() {
        return this.width * this.height;
    }
    // Write a function total_sides that 
    // returns the number of sides of the object.
    total_sides () {
        return `This rectangle has ${this.sides * 2} sides.`;
    }
}

const smallRectangle = new Rectangle(1, 2);
const mediumRectangle = new Rectangle(3, 5);
const largeRectangle = new Rectangle(5, 10);

console.log(smallRectangle.total_sides()); // This rectangle has 4 sides.
console.log(smallRectangle.rectangle_area()); // 2
console.log(mediumRectangle.rectangle_area()); // 15
console.log(largeRectangle.rectangle_area()); // 50

/*
Define a new class called Square with 
appropriate attributes and instantiate a few Square objects.
*/

class Square extends Rectangle {
    constructor(length) {
        super(length, length);
        this.length = length;
        this.sides = arguments.length;
    }
    // Write a function called square_area that 
    // returns the area of the given object.
    square_area() {
        return this.length * this.length;
    }
    // Write a function total_sides that 
    // returns the number of sides of the object.

    total_sides() {
        return `This square has ${this.sides * 4} equal sides.`;
    }
}

const smallSquare = new Square(1);
const mediumSquare = new Square(5);
const largeSquare = new Square(10);

console.log(smallSquare.total_sides()); // This square has 4 equal sides.
console.log(smallSquare.square_area()); // 1
console.log(mediumSquare.square_area()); // 25
console.log(largeSquare.square_area()); // 100