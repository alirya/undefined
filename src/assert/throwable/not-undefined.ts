import NotUndefinedType from '../string/not-undefined.js';
import New from '@axiona/function/new.js';
import Value from '@axiona/value/value.js';

export function NotUndefinedParameters(
    value : unknown,
    error : (string : string)=>Error = New(Error),
    subject  = ''
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
