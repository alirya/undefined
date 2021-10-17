import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import UndefinedValidatable from "../validatable/undefined";
import Return from "@dikac/t-validator/validatable/simple";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";

export default function Undefined<MessageT>(
    message : (result:Readonly<Value & Validatable>)=>MessageT
) : Validator<unknown, undefined, Readonly<ValidatorValidatable<unknown, MessageT>>> {

    return function (value) {
        return  UndefinedValidatable(value, message);
    } as Validator<unknown, undefined, Readonly<ValidatorValidatable<unknown, MessageT>>>
}
