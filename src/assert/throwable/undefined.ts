import UndefinedType from '../string/undefined.js';
import New from '@alirya/function/new.js';
import Value from '@alirya/value/value.js';

export function UndefinedParameters(
    value : unknown,
    error : (string : string)=>Error = New(Error),
    subject  = ''
) : Error {

    return error(UndefinedType.Parameters(value, false, subject));
}


export function UndefinedParameter(
    {
        value,
        error,
        subject,
    } : Value & {
        error ?: (string : string)=>Error,
        subject ?: string
    }
) : Error {

    return UndefinedParameters(value, error, subject);
}


namespace Undefined {
    export const Parameters = UndefinedParameters;
    export const Parameter = UndefinedParameter;
}
export default Undefined;
