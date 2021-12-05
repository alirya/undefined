import Callback from "@dikac/t-validator/validatable/callback-function-parameters";
import UndefinedGuard from "../boolean/undefined";
import UndefinedMessage from "../assert/string/undefined-parameter";
export default function UndefinedParameter({ value, message = UndefinedMessage, }) {
    return Callback(value, UndefinedGuard, message);
}
//# sourceMappingURL=undefined-parameter.js.map