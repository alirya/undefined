import Validator from '@alirya/validator/simple';
import UndefinedValidatable from '../validatable/undefined-parameters';
import Instance from '@alirya/validator/validatable/validatable';
import UndefinedMessage from '../assert/string/undefined-parameters';
import Simplest from '@alirya/validator/message/function/simple-parameters';
import Simple from '@alirya/validator/message/function/simple-parameters';

export default function UndefinedParameters() : Validator<unknown, undefined, Readonly<Instance<unknown, string>>>;

export default function UndefinedParameters<MessageType>(
    message : Simplest<unknown, undefined, MessageType>
) : Validator<unknown, undefined, Readonly<Instance<unknown, MessageType>>>;

export default function UndefinedParameters<MessageType>(
    message :  Simple<unknown, undefined, MessageType|string> = UndefinedMessage
) : Validator<unknown, undefined, Readonly<Instance<unknown, MessageType>>> {

    return function (value) {

        return UndefinedValidatable(value, message);

    } as Validator<unknown, undefined, Readonly<Instance<unknown, MessageType>>>;
}
