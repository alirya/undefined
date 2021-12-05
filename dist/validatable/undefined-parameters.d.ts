import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/simple-parameters";
export default function UndefinedParameters<Argument>(value: Argument): Return<Argument, undefined, Readonly<Instance<Argument, string>>>;
export default function UndefinedParameters<MessageType, Argument>(value: Argument, message: Dynamic</*unknown,*/ Argument, undefined, MessageType>): Return<Argument, undefined, Readonly<Instance<Argument, MessageType>>>;
