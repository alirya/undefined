import ValidatorAbstract from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";
import Static from "@dikac/t-validator/message/function/static-parameters";
export default function NotUndefinedParameters(): ValidatorAbstract<unknown, undefined, true, false, Readonly<Instance<undefined, string>>>;
export default function NotUndefinedParameters<Msg>(message: Static<unknown, undefined, true, false, Msg>): ValidatorAbstract<unknown, undefined, true, false, Readonly<Instance<undefined, string>>>;
