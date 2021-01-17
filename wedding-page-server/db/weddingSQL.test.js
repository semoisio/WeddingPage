const {getAllQuests} = require("./weddingSQL");

test("Testaa hakeeka sql kaikki vieraat", () =>{
    expect(getAllQuests()).toBe(21);
})