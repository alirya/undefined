import AssertUndefinableParameters from "../assert/undefinable-parameters";

export default function UndefinableParameters<Alternative>(
    value : unknown,
    ensure : (value:unknown)=>asserts value is Alternative,
    error ?: (value:unknown)=>Error
) : Alternative|undefined {

    AssertUndefinableParameters(value, ensure, error);

    return value as Alternative|undefined ;
}
