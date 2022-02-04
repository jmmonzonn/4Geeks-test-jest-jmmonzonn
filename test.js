const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.2 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2);
})

test("3 dollars should been 319.75 yens", function()
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(3)).toBe(319.75);
})

test("127.9 yens should been 0.8 pounds", function(){
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(127.9)).toBe(0.8);
})