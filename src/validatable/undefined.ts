import UndefinedGuard from '../boolean/undefined.js';
import Return from '@alirya/validator/validatable/simple.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import Dynamic from '@alirya/validator/message/function/simple.js';
import UndefinedMessage from '../assert/string/undefined.js';
import {CallbackParameters} from '@alirya/validator/validatable/callback.js';
import Value from '@alirya/value/value.js';
import Message from '@alirya/message/message.js';
import ValidatableMessage from '@alirya/validator/message/function/validatable.js';

export function UndefinedParameters<Argument>(
    value : Argument
) : Return<Argument, undefined, Readonly<Instance<Argument, string>>>;

export function UndefinedParameters<MessageType, Argument>(
    value : Argument,
    message : Dynamic.Parameters</*unknown,*/ Argument, undefined, MessageType>
) : Return<Argument, undefined, Readonly<Instance<Argument, MessageType>>>;

export function UndefinedParameters<MessageType, Argument>(
    value : Argument,
    message : Dynamic.Parameters</*unknown,*/ Argument, undefined, MessageType|string> = UndefinedMessage.Parameters
) : Return<Argument, undefined, Readonly<Instance<Argument, MessageType>>> {

    return <Return<Argument, undefined, Readonly<Instance<Argument, MessageType>>>> CallbackParameters(value, UndefinedGuard, message);
}


export function UndefinedParameter<Argument>(
    {
        value
    } : Value<Argument>
) : Return<Argument, undefined, Readonly<Instance<Argument, string>>>;

export function UndefinedParameter<MessageType, Argument>(
    {
        value,
        message,
    } : Value<Argument> & Message<ValidatableMessage.Parameter<Argument, MessageType>>
) : Return<Argument, undefined, Readonly<Instance<Argument, MessageType>>>;

export function UndefinedParameter<MessageType, Argument>(
    {
        value,
        message = UndefinedMessage.Parameter,
    } : Value<Argument> & Message<ValidatableMessage.Parameter<Argument, MessageType|string>>
) : Return<Argument, undefined, Readonly<Instance<Argument, MessageType>>> {

    return <Return<Argument, undefined, Readonly<Instance<Argument, MessageType>>>> CallbackParameters(value, UndefinedGuard, message);
}


namespace Undefined {
    export const Parameters = UndefinedParameters;
    export const Parameter = UndefinedParameter;
}
export default Undefined;
