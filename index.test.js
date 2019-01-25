const index = require('./index.js')
const res = {
    send: jest.fn()
};

const req = jest.fn();


test('something',()=>{
    index.main(req, res)

    expect(res.send).toHaveBeenCalledWith('Hello World!');
});

