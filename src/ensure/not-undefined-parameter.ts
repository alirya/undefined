import {Union} from "ts-toolbelt"
import Value from "@dikac/t-value/value";
import NotUndefinedParameters from "./not-undefined-parameters";

export default function NotUndefinedParameter<Type>(
    {
        error,
        value
    } : Value<Type> & {
        error ?: (value:unknown)=>Error
    }
) : Union.Exclude<Type, undefined>  {

    return NotUndefinedParameters(value, error);
}
