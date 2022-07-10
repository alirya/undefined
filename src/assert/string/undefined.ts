import {ReplaceParameters} from '@alirya/array/replace';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';

/**
 * string intended for undefined message
 *
 * @param valid
 * @param value
 * @param subject
 * @param conversion
 */
export function UndefinedParameters(
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

    strings.push('undefined');

    if(!valid) {

        ReplaceParameters(strings, 2, v=>v + ',');

        strings.push('actual', conversion(value));
    }

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
export function UndefinedParameter(
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



namespace Undefined {
    export const Parameters = UndefinedParameters;
    export const Parameter = UndefinedParameter;
}
export default Undefined;
