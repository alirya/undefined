import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import NotUndefinedMessage from "../../assert/string/not-undefined";

export default function NotUndefined(object : Readonly<Validatable>) : string {

    return NotUndefinedMessage(object.valid)
}
