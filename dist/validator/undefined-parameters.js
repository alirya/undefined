import UndefinedValidatable from "../validatable/undefined-parameters";
import UndefinedMessage from "../assert/string/undefined-parameters";
export default function UndefinedParameters(message = UndefinedMessage) {
    return function (value) {
        return UndefinedValidatable(value, message);
    };
}
//# sourceMappingURL=undefined-parameters.js.map