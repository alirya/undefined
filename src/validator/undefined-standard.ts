import Undefined from "./undefined";
import UndefinedMessage from "../validatable/string/undefined";
import Validator from "@dikac/t-validator/simple";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";

export default function UndefinedStandard() : Validator<unknown, undefined, Readonly<ValidatorValidatable<unknown, string>>>  {

    return Undefined(UndefinedMessage)
}
