import {UndefinableParameters} from '../../../dist/assert/undefinable.js';
import Boolean from '@alirya/boolean/assert/boolean.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('union', () => {


    let target : undefined|boolean = <any>true;

    try {

        UndefinableParameters(target, Boolean);

        let undefinable : boolean|undefined = target;
        // @ts-expect-error
        let undefined : undefined = target;
        // @ts-expect-error
        let boolean : boolean = target;

    } catch (e) {

    }
});
