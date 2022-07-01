import UndefinedType from '../string/undefined';
import New from '@alirya/function/new';
import Value from '@alirya/value/value';

export function UndefinedParameters(
    value : unknown,
    error : (string : string)=>Error = New(Error),
    subject : string = ''
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
