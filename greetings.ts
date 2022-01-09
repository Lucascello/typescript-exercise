function greet(person: string | null | { name: string }) {
    if (typeof person === "object") {
        return `Hi ${person.name}`;
    } else if (typeof person === "string") {
        return `Hi ${person}`;
    } else {
        return `Hi anonimous!`;
    }
}
