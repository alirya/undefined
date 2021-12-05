import UndefinedMessage from "../assert/string/undefined-parameter";
import UndefinedParameters from "./undefined-parameters";
export default function UndefinedParameter(message = UndefinedMessage) {
    return UndefinedParameters((value, valid) => message({ value, valid }));
}
//# sourceMappingURL=undefined-parameter.js.map