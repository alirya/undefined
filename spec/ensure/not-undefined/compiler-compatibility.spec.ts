import {NotUndefinedParameters} from '../../../dist/ensure/not-undefined.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('union', () => {

    let target : undefined|number = <any>1;

    let result = NotUndefinedParameters(target);

    let number : number = result;

    // @ts-expect-error
    let undefined : undefined = result;
});

it('unknown', () => {

    let target : any = 1;

    NotUndefinedParameters(target);

    let undefined : undefined = target;

});
