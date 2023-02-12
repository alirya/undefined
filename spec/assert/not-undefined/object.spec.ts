import NotUndefined from '../../../dist/assert/not-undefined.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`plain`, () => {
    expect(NotUndefined({})).toBeUndefined();
});

it(`instance`, () => {
    expect(NotUndefined(new Map())).toBeUndefined();
});


