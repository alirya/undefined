import ReplaceParameters from "@dikac/t-array/replace-parameters";
/**
 * string intended for not undefined message
 *
 * @param valid
 * @param value
 * @param subject
 * @param conversion
 */
export default function NotUndefinedParameters(value, valid, subject = 'type', conversion = value => typeof value) {
    const strings = [];
    strings.push(subject);
    if (valid) {
        strings.push('is');
    }
    else {
        strings.push('must');
    }
    strings.push('not undefined');
    if (!valid) {
        ReplaceParameters(strings, 2, v => v + ',');
        strings.push('actual', conversion(value));
    }
    return strings.join(' ') + '.';
}
//# sourceMappingURL=not-undefined-parameters.js.map