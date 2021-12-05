import UndefinedType from "../string/undefined-parameters";
import New from "@dikac/t-function/new";
export default function UndefinedParameters(value, error = New(Error), subject = '') {
    return error(UndefinedType(value, false, subject));
}
//# sourceMappingURL=undefined-parameters.js.map