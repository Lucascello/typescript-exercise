console.log("Hello, World!");
//
const number = 100;
//
let bigNumber: number;

// bigNumber = "10000";

bigNumber = 100000;
//
const images: string[] = ["https: /asdf", "asdfadf"];
//
function sum(a: number, b: number, c?: number) {
    return a + b + (c || 0);
}

// sum(2, 3, 4, 5);

sum(2, 3, 4);
//
let buttonText: "Make Friendship" | "Cancel Friendship" | "Accept Friendship";
//
type City = { name: string; country: string };

const city: City = {
    name: "Berlin",
    country: "Germany",
};
//
function waitThenRun(callback: (something: string) => undefined) {}
//
let something: any;
//
interface Animal {
    name: string;
    canFly: boolean;
    age: number;
}

const dog: Animal = {
    name: "Layla",
    canFly: false,
    age: 12,
};
