import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
/**
 * string intended for not undefined message
 *
 * @param valid
 * @param value
 * @param subject
 * @param conversion
 */
export function NotUndefinedParameters(
    value : unknown,
    valid : boolean,
    subject : string = 'type',
    conversion : (value:unknown)=>string = value=>typeof value,
) : string {

    const strings: string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('is');

    } else {

        strings.push('must');
    }

    strings.push('not undefined');

    return strings.join(' ') + '.';
}


/**
 * string intended for undefined message
 *
 * @param valid
 * @param value
 * @param subject
 * @param conversion
 */
export function NotUndefinedParameter(
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

    return NotUndefinedParameters(value, valid, subject, conversion);
}



namespace NotUndefined {
    export const Parameters = NotUndefinedParameters;
    export const Parameter = NotUndefinedParameter;
}
export default NotUndefined;
