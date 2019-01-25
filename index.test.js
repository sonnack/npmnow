const index = require('./index.js')
const res = {
    send: jest.fn()
};

const req = jest.fn();


test('something',()=>{
    index(req, res)

    expect(res.send).toHaveBeenCalledWith('Hello World!');
});

