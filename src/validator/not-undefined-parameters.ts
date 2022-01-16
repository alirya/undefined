import ValidatorAbstract from "@alirya/validator/validator";
import NotUndefinedValidatable from "../validatable/not-undefined-parameters";
import Instance from "@alirya/validator/validatable/validatable";
import NotUndefinedMessage from "../assert/string/not-undefined-parameters";
import Static from "@alirya/validator/message/function/static-parameters";

export default function NotUndefinedParameters() : ValidatorAbstract<unknown, undefined, true, false, Readonly<Instance<undefined, string>>>;

export default function NotUndefinedParameters<Msg>(
    message : Static<unknown, undefined, true, false, Msg>
) : ValidatorAbstract<unknown, undefined, true, false, Readonly<Instance<undefined, string>>>;

export default function NotUndefinedParameters<Msg>(
    message : Static<unknown, undefined, true, false, Msg|string> = NotUndefinedMessage
) : ValidatorAbstract<unknown, undefined, true, false, Readonly<Instance<undefined, Msg>>> {

    return function(value) {

        return NotUndefinedValidatable(value, message);

    } as ValidatorAbstract<unknown, undefined, true, false, Readonly<Instance<undefined, Msg>>>
}

