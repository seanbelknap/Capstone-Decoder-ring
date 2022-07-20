describe('polybius() test', () => {
    const { expect } = require("chai");
const {polybius} = require("../src/polybius")

// Write your tests here!
describe('polybius() error handling', () => {
    it('should return false if the number of characters is odd', () => {
        const actual = polybius("324", false)
        expect(actual).to.be.false
    })
    it('should output a string', () => {
        const actual = polybius("thinkful")
        expect(actual).to.be.a.string
    })
})

describe('polybius() encoding', () => {
    it('should encode a message by changing each letter to number pairs', () =>{
        const actual = polybius("thinkful")
        const expected = "4432423352125413"
        expect(actual).to.equal(expected)
    })
    it('should maintain spaces throughout', () => {
        const actual = polybius("think ful")
        const expected = "4432423352 125413"
        expect(actual).to.equal(expected)
    })
    it('should ignore capital letters', () => {
        const actual = polybius("Thinkful")
        const expected = "4432423352125413"
        expect(actual).to.equal(expected)
    })
    it('should encode I or J to I/J(42)', () => {
        const actual = polybius("thinkful")
        const expected = "4432423352125413"
        expect(actual).to.equal(expected)
    })
    
})
describe('Deconding', () => {
    it('should out put a string', () => {
        const message = "3251131343 2543241341"
        const expected = 'hello world';
        const actual = polybius(message, false);
        expect(actual).to.equal(expected);
    })
    it("should decode 42 to I/J", () => {
        const expected = "i/j";
        const actual = polybius('42',false);
        expect(actual).equal(expected);
    });
}) 
})
    
