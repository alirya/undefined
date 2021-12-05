import AssertUndefined from "../assert/undefined";
import UndefinedError from "../assert/throwable/undefined-parameters";

export default function UndefinedParameters(
    value : unknown,
    error : (value:unknown)=>Error = UndefinedError
) : undefined {

    AssertUndefined(value, error);

    return value;
}
