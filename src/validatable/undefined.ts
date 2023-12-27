import UndefinedGuard from '../boolean/undefined.js';
import Return from '@axiona/validator/validatable/simple.js';
import Instance from '@axiona/validator/validatable/validatable.js';
import Dynamic from '@axiona/validator/message/function/simple.js';
import UndefinedMessage from '../assert/string/undefined.js';
import {CallbackParameters} from '@axiona/validator/validatable/callback.js';
import Value from '@axiona/value/value.js';
import Message from '@axiona/message/message.js';
import ValidatableMessage from '@axiona/validator/message/function/validatable.js';

export function UndefinedParameters<Argument>(
    value : Argument
) : Return<Argument, undefined, string>;

export function UndefinedParameters<MessageType, Argument>(
    value : Argument,
    message : Dynamic.Parameters</*unknown,*/ Argument, undefined, MessageType>
) : Return<Argument, undefined, MessageType>;

export function UndefinedParameters<MessageType, Argument>(
    value : Argument,
    message : Dynamic.Parameters</*unknown,*/ Argument, undefined, MessageType|string> = UndefinedMessage.Parameters
) : Return<Argument, undefined, MessageType> {

    return <Return<Argument, undefined, MessageType>> CallbackParameters(value, UndefinedGuard, message);
}


export function UndefinedParameter<Argument>(
    {
        value
    } : Value<Argument>
) : Return<Argument, undefined, string>;

export function UndefinedParameter<MessageType, Argument>(
    {
        value,
        message,
    } : Value<Argument> & Message<ValidatableMessage.Parameter<Argument, MessageType>>
) : Return<Argument, undefined, MessageType>;

export function UndefinedParameter<MessageType, Argument>(
    {
        value,
        message = UndefinedMessage.Parameter,
    } : Value<Argument> & Message<ValidatableMessage.Parameter<Argument, MessageType|string>>
) : Return<Argument, undefined, MessageType|string> {

    return <Return<Argument, undefined, MessageType|string>> CallbackParameters(value, UndefinedGuard, message);
}


namespace Undefined {
    export const Parameters = UndefinedParameters;
    export const Parameter = UndefinedParameter;
}
export default Undefined;
