function greet(name) {
    if (Array.isArray(name)) {
        let length = name.length;
        if (length === 2) {
            return "Hello, " + name[0] + " and " + name[1];
        }
        else {
            let greeting = "Hello, ";
            for (let i = 0; i < length-1; i++) {
                greeting = greeting + name[i] + ", ";
            }
            return greeting + "and " + name[length-1];
        }
    }
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