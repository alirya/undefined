import {UndefinableParameters} from '../../../dist/ensure/undefinable.js';
import {BooleanParameters} from '@alirya/boolean/ensure/boolean.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('union', () => {

    const target : undefined|boolean = <any>true;

    try {

        UndefinableParameters(target, BooleanParameters);

        const undefinable : boolean|undefined = target;
        // @ts-expect-error
        const undefined : undefined = target;
        // @ts-expect-error
        const boolean : boolean = target;

    } catch (e) {

    }
});
