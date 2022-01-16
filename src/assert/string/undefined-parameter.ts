import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import UndefinedParameters from './undefined-parameters';

/**
 * string intended for undefined message
 *
 * @param valid
 * @param value
 * @param subject
 * @param conversion
 */
export default function UndefinedParameter(
    {
        value,
        valid,
        subject,
        conversion,
    } : Value & Validatable & {
        subject ?: string,
        conversion ?: (value:unknown)=>string
    }
) : string {

    return UndefinedParameters(value, valid, subject, conversion);
}

