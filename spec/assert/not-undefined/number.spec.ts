import NotUndefined from '../../../dist/assert/not-undefined.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`integer`, () => {

    expect(NotUndefined(1)).toBeUndefined();

});

it(`float`, () => {
    expect(NotUndefined(1.1)).toBeUndefined();

});

it(`infinity`, () => {

    expect(NotUndefined(Infinity)).toBeUndefined();

});

it(`Nan`, () => {

    expect(NotUndefined(NaN)).toBeUndefined();

});

