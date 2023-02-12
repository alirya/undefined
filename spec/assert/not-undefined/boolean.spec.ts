import NotUndefined from '../../../dist/assert/not-undefined.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`true`, () => {

     expect(NotUndefined(true)).toBeUndefined();
});

it(`false`, () => {

     expect(NotUndefined(false)).toBeUndefined();
});

