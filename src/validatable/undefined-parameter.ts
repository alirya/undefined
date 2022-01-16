import Callback from '@alirya/validator/validatable/callback-function-parameters';
import UndefinedGuard from '../boolean/undefined';
import Value from '@alirya/value/value';
import Return from '@alirya/validator/validatable/simple';
import Instance from '@alirya/validator/validatable/validatable';
import UndefinedMessage from '../assert/string/undefined-parameter';
import Message from '@alirya/message/message';
import ValidatableMessage from '@alirya/validator/message/function/validatable-parameter';

export default function UndefinedParameter<Argument>(
    {
        value
    } : Value<Argument>
) : Return<Argument, undefined, Readonly<Instance<Argument, string>>>;

export default function UndefinedParameter<MessageType, Argument>(
    {
        value,
        message,
    } : Value<Argument> & Message<ValidatableMessage<Argument, MessageType>>
) : Return<Argument, undefined, Readonly<Instance<Argument, MessageType>>>;

export default function UndefinedParameter<MessageType, Argument>(
    {
        value,
        message = UndefinedMessage,
    } : Value<Argument> & Message<ValidatableMessage<Argument, MessageType|string>>
) : Return<Argument, undefined, Readonly<Instance<Argument, MessageType>>> {

    return <Return<Argument, undefined, Readonly<Instance<Argument, MessageType>>>> Callback(value, UndefinedGuard, message);
}
