const processor = require('./processor.js');

describe("transmission processor", function () {

    test("takes a string and returns an object", function () {
        let result = processor("9701::<489584872710>");
        expect(typeof result).toEqual("object");
    });

    test("throws error if '::' not found", function () {
        const expectedError = new Error('Data is invalid ; should contain "::"');
        expect(() => { processor("9701<489584872710>"); }).toThrow(expectedError);
    });

    test("returns id in object", function () {
        let result = processor("9701::<489584872710>");
        expect(result.id).not.toEqual(undefined);
    });

    test("converts id to a number", function () {
        let result = processor("9701::<489584872710>");
        expect(result.id).toEqual(9701);
    });

    test("returns rawData in object", function () {
        let result = processor("9701::<487297403495720912>");
        expect(result.rawData).not.toEqual(undefined);
    });

    describe("throws exception if rawData is missing < or >", function () {
        test("throws exception if rawData is missing < at start", function () {
            const expectedError = new Error('RawData is invalid ; should contain < at start');
            expect(() => { processor("1410::932829840830053761>"); }).toThrow(expectedError);
        });
        test("throws exception if rawData is missing > at end", function () {
            const expectedError = new Error('RawData is invalid ; should contain > at end');
            expect(() => { processor("1410::<932829840830053761"); }).toThrow(expectedError);
        });
        test("throws exception if rawData is missing < at start and > at end", function () {
            const expectedError = new Error('RawData is invalid ; should contain < at start and > at end');
            expect(() => { processor("1410::932829840830053761"); }).toThrow(expectedError);
        });
    });

    test("converts id to a number", function () {
        const expectedError = new Error('id cannot be converted to number');
        expect(() => { processor("idInStringFormat::<932829840830053761>"); }).toThrow(expectedError);
    });

});