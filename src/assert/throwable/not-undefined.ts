import NotUndefinedType from '../string/not-undefined';
import New from '@alirya/function/new';
import Value from '@alirya/value/value';

export function NotUndefinedParameters(
    value : unknown,
    error : (string : string)=>Error = New(Error),
    subject : string = ''
) : Error {

    return error(NotUndefinedType.Parameters(value, false, subject));
}


export function NotUndefinedParameter(
    {
        value,
        error,
        subject,
    } : Value & {
        error ?: (string : string)=>Error,
        subject ?: string
    }
) : Error {

    return NotUndefinedParameters(value, error, subject);
}


namespace NotUndefined {
    export const Parameters = NotUndefinedParameters;
    export const Parameter = NotUndefinedParameter;
}
export default NotUndefined;
