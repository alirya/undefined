import ReplaceParameters from "@dikac/t-array/replace-parameters";
/**
 * string intended for undefined message
 *
 * @param valid
 * @param value
 * @param subject
 * @param conversion
 */
export default function UndefinedParameters(value, valid, subject = 'type', conversion = value => typeof value) {
    const strings = [];
    strings.push(subject);
    if (valid) {
        strings.push('is');
    }
    else {
        strings.push('must');
    }
    strings.push('undefined');
    if (!valid) {
        ReplaceParameters(strings, 2, v => v + ',');
        strings.push('actual', conversion(value));
    }
    return strings.join(' ') + '.';
}
//# sourceMappingURL=undefined-parameters.js.map