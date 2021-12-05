import Validator from "@dikac/t-validator/simple";
import UndefinedValidatable from "../validatable/undefined-parameters";
import Instance from "@dikac/t-validator/validatable/validatable";
import UndefinedMessage from "../assert/string/undefined-parameters";
import Simplest from "@dikac/t-validator/message/function/simple-parameters";
import Simple from "@dikac/t-validator/message/function/simple-parameters";

export default function UndefinedParameters() : Validator<unknown, undefined, Readonly<Instance<unknown, string>>>

export default function UndefinedParameters<MessageType>(
    message : Simplest<unknown, undefined, MessageType>
) : Validator<unknown, undefined, Readonly<Instance<unknown, MessageType>>>

export default function UndefinedParameters<MessageType>(
    message :  Simple<unknown, undefined, MessageType|string> = UndefinedMessage
) : Validator<unknown, undefined, Readonly<Instance<unknown, MessageType>>> {

    return function (value) {

        return UndefinedValidatable(value, message);

    } as Validator<unknown, undefined, Readonly<Instance<unknown, MessageType>>>
}
