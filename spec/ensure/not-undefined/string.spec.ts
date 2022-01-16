import NotUndefined from '../../../dist/ensure/not-undefined-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`primitive`, () => {

    let value = 'str';
    expect(NotUndefined(value)).toBe(value);
});

it(`object`, () => {

    let value = new String('str');
    expect(NotUndefined(value)).toBe(value);
});






