const greet = require('./greeting.js');

describe("greeting with name", function() {
    
    test("takes name as parameter, returns greeting", function() {
        let name = "Luke";
        let result = greet(name);
        expect(result).toEqual("Hello, Luke");
    });

    describe("returns «Hello, there» when name is undefined, null or empty", function() {
        test("when name is undefined, returns «Hello, there»", function() {
            let name
            let result = greet(name);
            expect(result).toEqual("Hello, there");
        });
        test("when name is null, returns «Hello, there»", function() {
            let result = greet(null);
            expect(result).toEqual("Hello, there");
        });
        test("when name is empty, returns «Hello, there»", function() {
            let name = "";
            let result = greet(name);
            expect(result).toEqual("Hello, there");
        });
    });

    test("returns greeting in uppercase if name in uppercase", function() {
        let name = "HAN";
        let result = greet(name);
        expect(result).toEqual("HELLO, HAN");
    });

    test("returns greeting to two people if an array of two elements is passed", function() {
        let name = ["Jango", "Boba"];
        let result = greet(name);
        expect(result).toEqual("Hello, Jango and Boba");
    });

    test("returns greeting to as many people if an array of 3 or more elements is passed", function() {
        let name = ["Jill", "Jane", "Leia"];
        let result = greet(name);
        expect(result).toEqual("Hello, Jill, Jane, and Leia");
    });
});