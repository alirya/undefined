import Undefined from '../../../dist/ensure/undefined-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('union', () => {

    let target : undefined|number = undefined;

    try {

        let result = Undefined(target);

        // @ts-expect-error
        let number : number = result;
        let undefined : undefined = result;

    } catch (e) {

    }
});

it('unknown', () => {

    let target : unknown = undefined;

    try {

        let result = Undefined(target);

        let undefined : undefined = result;

    } catch (e) {

    }

});
