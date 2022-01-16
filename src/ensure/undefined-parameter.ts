import Value from "@alirya/value/value";
import UndefinedParameters from "./undefined-parameters";

export default function UndefinedParameter(
    {
        value,
        error,
    } : Value & {
        error ?: (value:unknown)=>Error
    }
) : undefined {

    return UndefinedParameters(value, error);
}
