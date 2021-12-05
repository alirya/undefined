import AssertNotUndefined from "../assert/not-undefined";
import NotUndefinedError from "../assert/throwable/not-undefined-parameters";
export default function NotUndefinedParameters(value, error = NotUndefinedError) {
    AssertNotUndefined(value, error);
    return value;
}
//# sourceMappingURL=not-undefined-parameters.js.map