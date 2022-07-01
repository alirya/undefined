import Guard from '../boolean/undefined';
import Callback from '@alirya/function/callback/callback';

export function UndefinableParameters<Alternative>(
    value : unknown,
    assert : (value:unknown) => asserts value is Alternative,
    error ?: (value:unknown)=>Error
) : asserts value is (undefined|Alternative) {

    try {

        if(!Guard(value)) {

            assert(value);
        }

    } catch (e) {

        if(error) {

            throw error(value);
        }

        throw e;
    }
}


export function UndefinableParameter<Alternative>(
    value,
    {
        callback,
        error,
    } : Callback<(value:unknown) => asserts value is Alternative> & {
        error ?: (value:unknown)=>Error
    }
) : asserts value is undefined|Alternative {

    return UndefinableParameters(value, callback, error);

}


namespace Undefinable {
    export const Parameters = UndefinableParameters;
    export const Parameter = UndefinableParameter;
}
export default Undefinable;
