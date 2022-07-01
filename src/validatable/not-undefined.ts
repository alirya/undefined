import ValidatableStatic from '@alirya/validator/validatable/static';
import NotUndefinedBoolean from '../boolean/not-undefined';
import NotUndefinedMessage from '../assert/string/not-undefined';
import ValidatableType from '@alirya/validator/validatable/validatable';
import {CallbackParameters} from '@alirya/validator/validatable/callback';
import {StaticParameters, StaticParameter} from '@alirya/validator/message/function/static';

export type NotUndefinedReturn<Argument, MessageType> = Readonly<ValidatableStatic<Argument, undefined, true, false, ValidatableType<Argument | undefined, MessageType>>>;

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
