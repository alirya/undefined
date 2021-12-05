import Value from "@dikac/t-value/value";
import UndefinedParameters from "./undefined-parameters";

export default function UndefinedParameter(
    {
        value,
        error,
        subject,
    } : Value & {
        error ?: (string : string)=>Error,
        subject ?: string
    }
) : Error {

    return UndefinedParameters(value, error, subject);
}
