const greet = require('./greeting.js');

describe("greeting with name", function() {
    
    test("takes name as parameter, returns greeting", function() {
        let name = "Luke";
        let result = greet(name);
        expect(result).toEqual("Hello, Luke");
    });

});