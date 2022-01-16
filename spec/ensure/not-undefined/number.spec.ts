import NotUndefined from '../../../dist/ensure/not-undefined-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`integer`, () => {

    let value = 1;
    expect(NotUndefined(value)).toBe(value);
});

it(`float`, () => {

    let value = 1.1;
    expect(NotUndefined(value)).toBe(value);
});

it(`infinity`, () => {

    let value = Infinity;
    expect(NotUndefined(value)).toBe(value);
});

it(`Nan`, () => {

    let value = NaN;
    expect(NotUndefined(value)).toEqual(value);
});

