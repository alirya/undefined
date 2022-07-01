import Validator from '@alirya/validator/simple';
import UndefinedValidatable from '../validatable/undefined';
import Instance from '@alirya/validator/validatable/validatable';
import UndefinedMessage from '../assert/string/undefined';
import {SimpleParameter, SimpleParameters} from '@alirya/validator/message/function/simple';

export function UndefinedParameters() : Validator<unknown, undefined, Readonly<Instance<unknown, string>>>;

export function UndefinedParameters<MessageType>(
    message : SimpleParameters<unknown, undefined, MessageType>
) : Validator<unknown, undefined, Readonly<Instance<unknown, MessageType>>>;

export function UndefinedParameters<MessageType>(
    message :  SimpleParameters<unknown, undefined, MessageType|string> = UndefinedMessage.Parameters
) : Validator<unknown, undefined, Readonly<Instance<unknown, MessageType>>> {

    return function (value) {

        return UndefinedValidatable.Parameters(value, message);

    } as Validator<unknown, undefined, Readonly<Instance<unknown, MessageType>>>;
}


export function UndefinedParameter() : Validator<unknown, undefined, Readonly<Instance<unknown, string>>>;

export function UndefinedParameter<MessageType>(
    message : SimpleParameter<unknown, undefined, MessageType>
) : Validator<unknown, undefined, Readonly<Instance<unknown, MessageType>>>;

export function UndefinedParameter<MessageType>(
    message :  SimpleParameter<unknown, undefined, MessageType|string> = UndefinedMessage.Parameter
) : Validator<unknown, undefined, Readonly<Instance<unknown, MessageType|string>>> {

    return UndefinedParameters((value, valid) => message({value, valid}));
}


namespace Undefined {
    export const Parameters = UndefinedParameters;
    export const Parameter = UndefinedParameter;
}
export default Undefined;
