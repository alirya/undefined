import ValidatorAbstract from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NotUndefinedValidatable from "../validatable/not-undefined";
import Instance from "@dikac/t-validator/validatable/validatable";

export default function NotUndefined<MessageType>(
    message : (result:Readonly<Value> & Readonly<Validatable>)=>MessageType
) : ValidatorAbstract<unknown, undefined, true, false, Readonly<Instance<unknown, MessageType>>> {

    return function (value) {

        return NotUndefinedValidatable(value, message);

    } as ValidatorAbstract<unknown, undefined, true, false, Readonly<Instance<unknown, MessageType>>>
}
