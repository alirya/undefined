import NotUndefinedValidatable from "../validatable/not-undefined-parameters";
import NotUndefinedMessage from "../assert/string/not-undefined-parameter";
export default function NotUndefinedParameter(message = NotUndefinedMessage) {
    return function (value) {
        return NotUndefinedValidatable(value, message);
    };
}
//# sourceMappingURL=not-undefined-parameter.js.map