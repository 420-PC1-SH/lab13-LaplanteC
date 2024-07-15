function greet(name) {
    if (name === undefined) {
        name = "there";
    }
    return "Hello, " + name;
}

module.exports = greet;