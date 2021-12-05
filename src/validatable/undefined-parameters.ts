import Callback from "@dikac/t-validator/validatable/callback-function-parameters";
import UndefinedGuard from "../boolean/undefined";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/simple-parameters";
import UndefinedMessage from "../assert/string/undefined-parameters";

export default function UndefinedParameters<Argument>(
    value : Argument
) : Return<Argument, undefined, Readonly<Instance<Argument, string>>>;

export default function UndefinedParameters<MessageType, Argument>(
    value : Argument,
    message : Dynamic</*unknown,*/ Argument, undefined, MessageType>
) : Return<Argument, undefined, Readonly<Instance<Argument, MessageType>>>;

export default function UndefinedParameters<MessageType, Argument>(
    value : Argument,
    message : Dynamic</*unknown,*/ Argument, undefined, MessageType|string> = UndefinedMessage
) : Return<Argument, undefined, Readonly<Instance<Argument, MessageType>>> {

    return <Return<Argument, undefined, Readonly<Instance<Argument, MessageType>>>> Callback(value, UndefinedGuard, message);
}
