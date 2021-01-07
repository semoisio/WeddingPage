const sql = require('./weddingSQL');
test('testi', () =>{
    expect(sql.getAllQuests.length).toBe(21);
})