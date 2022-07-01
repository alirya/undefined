import ValidatorAbstract from '@alirya/validator/validator';
import NotUndefinedValidatable from '../validatable/not-undefined';
import Instance from '@alirya/validator/validatable/validatable';
import NotUndefinedMessage from '../assert/string/not-undefined';
import {StaticParameters, StaticParameter} from '@alirya/validator/message/function/static';

export function NotUndefinedParameters() : ValidatorAbstract<unknown, undefined, true, false, Readonly<Instance<undefined, string>>>;

export function NotUndefinedParameters<Msg>(
    message : StaticParameters<unknown, undefined, true, false, Msg>
) : ValidatorAbstract<unknown, undefined, true, false, Readonly<Instance<undefined, string>>>;

export function NotUndefinedParameters<Msg>(
    message : StaticParameters<unknown, undefined, true, false, Msg|string> = NotUndefinedMessage.Parameters
) : ValidatorAbstract<unknown, undefined, true, false, Readonly<Instance<undefined, Msg>>> {

    return function(value) {

        return NotUndefinedValidatable.Parameters(value, message);

    } as ValidatorAbstract<unknown, undefined, true, false, Readonly<Instance<undefined, Msg>>>;
}




export function NotUndefinedParameter() : ValidatorAbstract<unknown, undefined, true, false, Readonly<Instance<undefined, string>>>;

export function NotUndefinedParameter<Msg>(
    message : StaticParameter<unknown, undefined, true, false, Msg>
) : ValidatorAbstract<unknown, undefined, true, false, Readonly<Instance<undefined, string>>>;

export function NotUndefinedParameter<Msg>(
    message : StaticParameter<unknown, undefined, true, false, Msg|string> = NotUndefinedMessage.Parameter
) : ValidatorAbstract<unknown, undefined, true, false, Readonly<Instance<undefined, Msg>>> {

    return function<Argument extends undefined, Type extends unknown>(value: Argument|Type) {

        return NotUndefinedValidatable.Parameter(value, message);

    } as ValidatorAbstract<unknown, undefined, true, false, Readonly<Instance<undefined, Msg>>>;
}



namespace NotUndefined {
    export const Parameters = NotUndefinedParameters;
    export const Parameter = NotUndefinedParameter;
}
export default NotUndefined;
