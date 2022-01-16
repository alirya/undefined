import NotUndefined from '../../../dist/assert/not-undefined';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`null`, () => {

    expect(NotUndefined(null)).toBeUndefined();
});





