import ValidatableStatic from '@axiona/validator/validatable/static.js';
import NotUndefinedBoolean from '../boolean/not-undefined.js';
import NotUndefinedMessage from '../assert/string/not-undefined.js';
import ValidatableType from '@axiona/validator/validatable/validatable.js';
import {CallbackParameters} from '@axiona/validator/validatable/callback.js';
import {StaticParameters, StaticParameter} from '@axiona/validator/message/function/static.js';

export type NotUndefinedReturn<Argument, MessageType> = Readonly<ValidatableStatic<Argument, undefined, true, false, MessageType>>;

export function NotUndefinedParameters<Argument>(
    value : Argument
) : NotUndefinedReturn<Argument, string>;

export function NotUndefinedParameters<Argument, MessageType>(
    value : Argument,
    message : StaticParameters<Argument, undefined, true, false, MessageType>
) : NotUndefinedReturn<Argument, MessageType>;

export function NotUndefinedParameters<Argument, MessageType>(
    value : Argument,
    message : StaticParameters<Argument, undefined, true, false, MessageType|string> = NotUndefinedMessage.Parameters
) : NotUndefinedReturn<Argument, MessageType> {

    return <NotUndefinedReturn<Argument, MessageType>> CallbackParameters(value, NotUndefinedBoolean, message);
}

export function NotUndefinedParameter<Argument>(
    value : Argument
) : NotUndefinedReturn<Argument, string>;

export function NotUndefinedParameter<Argument, MessageType>(
    value : Argument,
    message : StaticParameter<Argument, undefined, true, false, MessageType>
) : NotUndefinedReturn<Argument, MessageType>;

export function NotUndefinedParameter<Argument, MessageType>(
    value : Argument,
    message : StaticParameter<Argument, undefined, true, false, MessageType|string> = NotUndefinedMessage.Parameter
) : NotUndefinedReturn<Argument, MessageType> {

    return <NotUndefinedReturn<Argument, MessageType>> CallbackParameters(value, NotUndefinedBoolean, message);
}




namespace NotUndefined {
    export const Parameters = NotUndefinedParameters;
    export const Parameter = NotUndefinedParameter;
    export type Return<Argument, MessageType> = NotUndefinedReturn<Argument, MessageType>;
}
export default NotUndefined;
