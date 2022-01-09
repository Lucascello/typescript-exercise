interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    company: string;
    location: string;
}

const oli: Employee = {
    name: "Oli",
    age: 29,
    company: "Spiced",
    location: "Berlin",
};
