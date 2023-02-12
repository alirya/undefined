import {UndefinableParameters} from '../../../dist/assert/undefinable.js';
import Boolean from '@alirya/boolean/assert/boolean.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('union', () => {


    const target : undefined|boolean = <any>true;

    try {

        UndefinableParameters(target, Boolean);

        const undefinable : boolean|undefined = target;
        // @ts-expect-error
        const undefined : undefined = target;
        // @ts-expect-error
        const boolean : boolean = target;

    } catch (e) {

    }
});
