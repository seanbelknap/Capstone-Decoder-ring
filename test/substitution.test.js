const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() cipher", () => {
  it("should return false if the given alphabet isn't 26 characters", () => {
    const actual = substitution("jigsaw", "zyxvtuv");
    const expected = false;
    expect(actual).to.equal(expected);
  });
  
  it("should return false if there are any duplicate characters in the substitution alphabet", () => {
    const actual = substitution("424222341125", "abcabcabcabcabcabcabcabcyz");
    const expected = false;
    expect(actual).to.equal(expected);
  });
  
  it("it ignores capital letters", () => {
    const actual = substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    const expected = "elp xhm xf mbymwwmfj dne";
    expect(actual).to.equal(expected);
  });
  
  it("should maintain spaces in messages", () => {
    const actual = substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev"
    ); 
    const expected = "elp xhm xf mbymwwmfj dne";
    expect(actual).to.equal(expected);
  });
  
  it("correctly translates the given phrase based on the alphabet given to the function", () => {
    const actual = substitution(
      "I love it when my code works",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    
    const expected = "u wlzm uj irmf ae ylqm ilhsd";
    expect(actual).to.equal(expected);
  });
});