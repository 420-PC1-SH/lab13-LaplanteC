function greet(name) {
    if (name === undefined || name === null || name === "") {
        name = "there";
    }
    return "Hello, " + name;
}

module.exports = greet;