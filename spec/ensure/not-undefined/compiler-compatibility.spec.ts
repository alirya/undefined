import {NotUndefinedParameters} from '../../../dist/ensure/not-undefined.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('union', () => {

    const target : undefined|number = <any>1;

    const result = NotUndefinedParameters(target);

    const number : number = result;

    // @ts-expect-error
    const undefined : undefined = result;
});

it('unknown', () => {

    const target : any = 1;

    NotUndefinedParameters(target);

    const undefined : undefined = target;

});
