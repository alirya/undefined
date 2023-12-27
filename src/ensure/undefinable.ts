import {UndefinableParameters as AssertUndefinableParameters} from '../assert/undefinable.js';
import Value from '@axiona/value/value.js';
import Callback from '@axiona/function/callback/callback.js';

export function UndefinableParameters<Alternative>(
    value : unknown,
    ensure : (value:unknown)=>asserts value is Alternative,
    error ?: (value:unknown)=>Error
) : Alternative|undefined {

    AssertUndefinableParameters(value, ensure, error);

    return value as Alternative|undefined ;
}


export function UndefinableParameter<Alternative>(
    {
        value,
        callback,
        error,
    } : Value & Callback<(value:unknown) => asserts value is Alternative> & {
        error ?: (value:unknown)=>Error
    }
) : Alternative|undefined {

    return UndefinableParameters(value, callback, error);
}


namespace Undefinable {
    export const Parameters = UndefinableParameters;
    export const Parameter = UndefinableParameter;
}
export default Undefinable;
