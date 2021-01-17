const {fetchAll} = require("./weddingControllers");

test("Testi", () => {
    expect(fetchAll().length()).toBe(21);
})