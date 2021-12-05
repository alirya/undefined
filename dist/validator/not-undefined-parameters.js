import NotUndefinedValidatable from "../validatable/not-undefined-parameters";
import NotUndefinedMessage from "../assert/string/not-undefined-parameters";
export default function NotUndefinedParameters(message = NotUndefinedMessage) {
    return function (value) {
        return NotUndefinedValidatable(value, message);
    };
}
//# sourceMappingURL=not-undefined-parameters.js.map