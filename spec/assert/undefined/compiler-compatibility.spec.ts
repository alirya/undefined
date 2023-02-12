import Undefined from '../../../dist/assert/undefined.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


it('union', () => {


    const target : undefined|number = undefined;

    try {

        Undefined(target);

        // @ts-expect-error
        const number : number = target;
        const undefined : undefined = target;

    } catch (e) {

    }
});

it('unknown', () => {

    const target : unknown = undefined;

    try {

        Undefined(target);

        const undefined : undefined = target;

    } catch (e) {

    }

});
