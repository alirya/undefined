import ValidatorAbstract from '@alirya/validator/validator';
import NotUndefinedValidatable from '../validatable/not-undefined-parameters';
import Instance from '@alirya/validator/validatable/validatable';
import NotUndefinedMessage from '../assert/string/not-undefined-parameter';
import Static from '@alirya/validator/message/function/static-parameter';

export default function NotUndefinedParameter() : ValidatorAbstract<unknown, undefined, true, false, Readonly<Instance<undefined, string>>>;

export default function NotUndefinedParameter<Msg>(
    message : Static<unknown, undefined, true, false, Msg>
) : ValidatorAbstract<unknown, undefined, true, false, Readonly<Instance<undefined, string>>>;

export default function NotUndefinedParameter<Msg>(
    message : Static<unknown, undefined, true, false, Msg|string> = NotUndefinedMessage
) : ValidatorAbstract<unknown, undefined, true, false, Readonly<Instance<undefined, Msg>>> {

    return function<Argument extends undefined, Type extends unknown>(value: Argument|Type) {

        return NotUndefinedValidatable(value, message);

    } as ValidatorAbstract<unknown, undefined, true, false, Readonly<Instance<undefined, Msg>>>;
}

