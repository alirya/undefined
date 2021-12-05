import Validator from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Simplest from "@dikac/t-validator/message/function/simple-parameters";
export default function UndefinedParameters(): Validator<unknown, undefined, Readonly<Instance<unknown, string>>>;
export default function UndefinedParameters<MessageType>(message: Simplest<unknown, undefined, MessageType>): Validator<unknown, undefined, Readonly<Instance<unknown, MessageType>>>;
