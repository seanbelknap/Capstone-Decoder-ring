const { expect } = require("chai");
const {caesar} = require("../src/caesar");

describe("caesar", () => {
  // describe("shift parameter", () => {
    it("should return false if shift value below -25", () => {
      const actual = caesar('test', -27);
      expect(actual).to.be.false;
    });

    it("should return false if shift value above 25", () => {
      const actual = caesar("test", 26);
      expect(actual).to.be.false;
    });

    it("should return false if shift value is 0", () => {
      const actual = caesar("test", 0);
      expect(actual).to.be.false;
    });

    it("should return false if shift value is not present", () => {
      const actual = caesar('test');
      expect(actual).to.be.false;
    })

    it("should return true if shift value between -25 and 25 and does not equal 0", () => {
      const actual = caesar("test", 22);
      expect(actual).to.be.a.string;
     });
  });