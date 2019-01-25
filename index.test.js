const index = require('./index.js')
const res = {
    end: jest.fn()
};

const req = jest.fn();


test('something',()=>{
    index(req, res)

    expect(res.end).toHaveBeenCalledWith('Hello from Node.js on Now 2.0!');
});

