import Value from "@alirya/value/value";
import NotUndefinedParameters from "./not-undefined-parameters";

export default function NotUndefinedParameter(
    {
        value,
        error,
        subject,
    } : Value & {
        error ?: (string : string)=>Error,
        subject ?: string
    }
) : Error {

    return NotUndefinedParameters(value, error, subject);
}
