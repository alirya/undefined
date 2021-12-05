import Callback from "@dikac/t-function/callback/callback";
import UndefinableParameters from "./undefinable-parameters";

export default function UndefinableParameter<Alternative>(
    value,
    {
        callback,
        error,
    } : Callback<(value:unknown) => asserts value is Alternative> & {
        error ?: (value:unknown)=>Error
    }
) : asserts value is undefined|Alternative {

    return UndefinableParameters(value, callback, error);

}
