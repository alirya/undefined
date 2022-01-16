import UndefinedType from "../string/undefined-parameters";
import New from "@alirya/function/new";

export default function UndefinedParameters(
    value : unknown,
    error : (string : string)=>Error = New(Error),
    subject : string = ''
) : Error {

    return error(UndefinedType(value, false, subject))
}
