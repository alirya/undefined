import NotUndefined from '../../../dist/assert/not-undefined.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`primitive`, () => {
    expect(NotUndefined('str')).toBeUndefined();
});

it(`object`, () => {
    expect(NotUndefined(new String('str'))).toBeUndefined();
});






