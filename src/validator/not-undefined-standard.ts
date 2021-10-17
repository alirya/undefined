import NotUndefined from "./not-undefined";
import UndefinedMessage from "../validatable/string/not-undefined";
import ValidatorAbstract from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";

export default function NotUndefinedStandard() : ValidatorAbstract<unknown, undefined, true, false, Readonly<Instance<unknown, string>>> {

    return NotUndefined(UndefinedMessage)
}
