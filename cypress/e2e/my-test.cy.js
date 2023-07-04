let add = (a, b) => a + b;

describe("Unit testing for our dummy aplication", () => {
  it("should add positive number", () => {
    expect(add(1, 2)).to.equal(3);
  });
});
