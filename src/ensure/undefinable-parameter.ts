import Value from "@alirya/value/value";
import Callback from "@alirya/function/callback/callback";
import UndefinableParameters from "./undefinable-parameters";

export default function UndefinableParameter<Alternative>(
    {
        value,
        callback,
        error,
    } : Value & Callback<(value:unknown) => asserts value is Alternative> & {
        error ?: (value:unknown)=>Error
    }
) : Alternative|undefined {

    return UndefinableParameters(value, callback, error)
}
