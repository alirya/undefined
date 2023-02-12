import NotUndefined from '../../../dist/assert/not-undefined.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('union', () => {

    const target : undefined|number = <any>1;

    NotUndefined(target);

    const number : number = target;

    // @ts-expect-error
    const undefined : undefined = target;
});

it('unknown', () => {

    const target : any = 1;

    NotUndefined(target);

    const undefined : undefined = target;

});
