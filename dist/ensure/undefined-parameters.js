import AssertUndefined from "../assert/undefined";
import UndefinedError from "../assert/throwable/undefined-parameters";
export default function UndefinedParameters(value, error = UndefinedError) {
    AssertUndefined(value, error);
    return value;
}
//# sourceMappingURL=undefined-parameters.js.map