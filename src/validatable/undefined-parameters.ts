import Callback from "@alirya/validator/validatable/callback-function-parameters";
import UndefinedGuard from "../boolean/undefined";
import Return from "@alirya/validator/validatable/simple";
import Instance from "@alirya/validator/validatable/validatable";
import Dynamic from "@alirya/validator/message/function/simple-parameters";
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
