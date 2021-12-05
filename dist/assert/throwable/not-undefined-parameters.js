import NotUndefinedType from "../string/not-undefined-parameters";
import New from "@dikac/t-function/new";
export default function NotUndefinedParameters(value, error = New(Error), subject = '') {
    return error(NotUndefinedType(value, false, subject));
}
//# sourceMappingURL=not-undefined-parameters.js.map