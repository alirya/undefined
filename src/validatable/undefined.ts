import UndefinedGuard from '../boolean/undefined';
import Return from '@alirya/validator/validatable/simple';
import Instance from '@alirya/validator/validatable/validatable';
import Dynamic from '@alirya/validator/message/function/simple';
import UndefinedMessage from '../assert/string/undefined';
import {CallbackParameters} from '@alirya/validator/validatable/callback';
import Value from '@alirya/value/value';
import Message from '@alirya/message/message';
import ValidatableMessage from '@alirya/validator/message/function/validatable';

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
