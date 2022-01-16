import NotUndefined from '../../../dist/ensure/not-undefined-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`true`, () => {

     NotUndefined(true);
});

it(`false`, () => {

     NotUndefined(false);
});

