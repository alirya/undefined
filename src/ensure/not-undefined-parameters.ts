import AssertNotUndefined from "../assert/not-undefined";
import NotUndefinedError from "../assert/throwable/not-undefined-parameters";
import {Union} from "ts-toolbelt"

export default function NotUndefinedParameters<Type>(
    value : Type,
    error : (value:unknown)=>Error = NotUndefinedError
) : Union.Exclude<Type, undefined>  {

    AssertNotUndefined(value, error);

    return value;
}
