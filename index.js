const encapsulator = require('./encapsulator');

let janeDoe = encapsulator();
janeDoe.setName('Jane Doe');
janeDoe.setPhone('123-456-7890')

let johnDoe = encapsulator();
johnDoe.setName('John Doe');
johnDoe.setPhone('123-867-5309');


console.log(janeDoe.getName()); // Jane Doe
console.log(janeDoe.getPhone()); // 123-456-7890

console.log(johnDoe.getName()); // John Doe
console.log(johnDoe.getPhone()); // 123-867-5309

// But we can do better than that.
// Let's use a constructor function
const Person = require('./person');


let Batman = new Person("Bruce Wayne", "unknown call ID");
let SuperMan = new Person("Clarke Kent", "456-812-9230");

console.log(Batman.getName()); // Bruce Wayne (oops)
console.log(SuperMan.getPhone()); // Clarke Kent (double oops)

console.log(Batman.privateProperty); // undefined