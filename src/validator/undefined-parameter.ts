import Validator from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import UndefinedMessage from "../assert/string/undefined-parameter";
import Simplest from "@dikac/t-validator/message/function/simple-parameter";
import UndefinedParameters from "./undefined-parameters";

export default function UndefinedParameter() : Validator<unknown, undefined, Readonly<Instance<unknown, string>>>

export default function UndefinedParameter<MessageType>(
    message : Simplest<unknown, undefined, MessageType>
) : Validator<unknown, undefined, Readonly<Instance<unknown, MessageType>>>

export default function UndefinedParameter<MessageType>(
    message :  Simplest<unknown, undefined, MessageType|string> = UndefinedMessage
) : Validator<unknown, undefined, Readonly<Instance<unknown, MessageType|string>>> {

    return UndefinedParameters((value, valid) => message({value, valid}));
}
