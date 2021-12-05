import NotUndefinedType from "../string/not-undefined-parameters";
import New from "@dikac/t-function/new";

export default function NotUndefinedParameters(
    value : unknown,
    error : (string : string)=>Error = New(Error),
    subject : string = ''
) : Error {

    return error(NotUndefinedType(value, false, subject))
}
