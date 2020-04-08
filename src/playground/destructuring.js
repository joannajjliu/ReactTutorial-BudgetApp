/* Contents: Object destructuring, Array destructuring */

//ES6 Object Destructuring:

console.log("destructuring");

/* Practice 1 */

const person = {
    // name: "Mojo",
    age: 9,
    location: {
        city: "Toronto",
        temp: 92
    }
};

const { name: firstName = "Anonymous", age } = person;

console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`);
};

/* Practice 2 */

const book = {
    title: "Green eggs and ham",
    author: "Seuss",
    publisher: {
        name: "Penguin"
    }
};

const { name: publisherName = "Self-Published" } = book.publisher;

console.log(publisherName);

//ES6 Array Destructuring

/* Practice 1 */

const address = ["1299 Juniper Avenue", "Philadelphia", "Pennsylvania", "19147"];

const [ , cityAddress, state = "New York" ] = address;

console.log(`You're in ${cityAddress}, ${state}.`);

/* Practice 2 */

const item = ["coffee", "$2.00", "$2.50", "$2.75"];

const [menuItem, ,mediumCost = "$5.00"] = item;

console.log(`A ${menuItem} costs ${mediumCost}`);