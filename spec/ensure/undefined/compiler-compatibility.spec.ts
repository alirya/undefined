import {UndefinedParameters} from '../../../dist/ensure/undefined.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('union', () => {

    const target : undefined|number = undefined;

    try {

        const result = UndefinedParameters(target);

        // @ts-expect-error
        const number : number = result;
        const undefined : undefined = result;

    } catch (e) {

    }
});

it('unknown', () => {

    const target : unknown = undefined;

    try {

        const result = UndefinedParameters(target);

        const undefined : undefined = result;

    } catch (e) {

    }

});
