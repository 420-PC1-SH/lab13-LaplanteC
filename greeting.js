function greet(name) {
    if (name === undefined || name === null) {
        name = "there";
    }
    return "Hello, " + name;
}

module.exports = greet;