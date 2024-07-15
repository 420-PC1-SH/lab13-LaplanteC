function greet(name) {
    if (name === undefined || name === null || name === "") {
        name = "there";
    }
    if (name === name.toUpperCase()) {
        return "HELLO, " + name;
    }
    else {
        return "Hello, " + name;
    }    
}

module.exports = greet;