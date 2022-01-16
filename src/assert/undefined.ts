import Guard from "../boolean/undefined";
import Callback from "@alirya/function/assert/callback-parameters";
import UndefinedError from "./throwable/undefined-parameters";

export default function Undefined(
    value : unknown,
    error : (value:unknown)=>Error = UndefinedError
) : asserts value is undefined {

    Callback(value, Guard, error);
}
