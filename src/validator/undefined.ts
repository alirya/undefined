import Validator from '@alirya/validator/simple.js';
import UndefinedValidatable from '../validatable/undefined.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import UndefinedMessage from '../assert/string/undefined.js';
import {SimpleParameter, SimpleParameters} from '@alirya/validator/message/function/simple.js';

export function UndefinedParameters() : Validator<unknown, undefined, string>;

export function UndefinedParameters<MessageType>(
    message : SimpleParameters<unknown, undefined, MessageType>
) : Validator<unknown, undefined, MessageType>;

export function UndefinedParameters<MessageType>(
    message :  SimpleParameters<unknown, undefined, MessageType|string> = UndefinedMessage.Parameters
) : Validator<unknown, undefined, MessageType|string> {

    return function (value) {

        return UndefinedValidatable.Parameters(value, message);

    } as Validator<unknown, undefined, MessageType|string>;
}


export function UndefinedParameter() : Validator<unknown, undefined, string>;

export function UndefinedParameter<MessageType>(
    message : SimpleParameter<unknown, undefined, MessageType>
) : Validator<unknown, undefined, MessageType>;

export function UndefinedParameter<MessageType>(
    message :  SimpleParameter<unknown, undefined, MessageType|string> = UndefinedMessage.Parameter
) : Validator<unknown, undefined, MessageType|string> {

    return UndefinedParameters((value, valid) => message({value, valid}));
}


namespace Undefined {
    export const Parameters = UndefinedParameters;
    export const Parameter = UndefinedParameter;
}
export default Undefined;
