import AssertUndefined from '../assert/undefined';
import UndefinedError from '../assert/throwable/undefined';
import Value from '@alirya/value/value';

export function UndefinedParameters(
    value : unknown,
    error : (value:unknown)=>Error = UndefinedError.Parameters
) : undefined {

    AssertUndefined(value, error);

    return value;
}


export function UndefinedParameter(
    {
        value,
        error,
    } : Value & {
        error ?: (value:unknown)=>Error
    }
) : undefined {

    return UndefinedParameters(value, error);
}


namespace Undefined {
    export const Parameters = UndefinedParameters;
    export const Parameter = UndefinedParameter;
}
export default Undefined;
