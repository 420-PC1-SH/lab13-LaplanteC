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
    });
});