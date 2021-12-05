import Callback from "@dikac/t-validator/validatable/callback-function-parameters";
import NotUndefinedBoolean from "../boolean/not-undefined";
import NotUndefinedMessage from "../assert/string/not-undefined-parameters";
export default function NotUndefinedParameters(value, message = NotUndefinedMessage) {
    return Callback(value, NotUndefinedBoolean, message);
}
//# sourceMappingURL=not-undefined-parameter.js.map