import Callback from "@dikac/t-validator/validatable/callback-function-parameters";
import UndefinedGuard from "../boolean/undefined";
import UndefinedMessage from "../assert/string/undefined-parameters";
export default function UndefinedParameters(value, message = UndefinedMessage) {
    return Callback(value, UndefinedGuard, message);
}
//# sourceMappingURL=undefined-parameters.js.map