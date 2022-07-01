import AssertNotUndefined from '../assert/not-undefined';
import NotUndefinedError from '../assert/throwable/not-undefined';
import {Union} from 'ts-toolbelt';
import Value from '@alirya/value/value';

export function NotUndefinedParameters<Type>(
    value : Type,
    error : (value:unknown)=>Error = NotUndefinedError.Parameters
) : Union.Exclude<Type, undefined>  {

    AssertNotUndefined(value, error);

    return value;
}


export function NotUndefinedParameter<Type>(
    {
        error,
        value
    } : Value<Type> & {
        error ?: (value:unknown)=>Error
    }
) : Union.Exclude<Type, undefined>  {

    return NotUndefinedParameters(value, error);
}


namespace NotUndefined {
    export const Parameters = NotUndefinedParameters;
    export const Parameter = NotUndefinedParameter;
}
export default NotUndefined;
