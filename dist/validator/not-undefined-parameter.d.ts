import ValidatorAbstract from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";
import Static from "@dikac/t-validator/message/function/static-parameter";
export default function NotUndefinedParameter(): ValidatorAbstract<unknown, undefined, true, false, Readonly<Instance<undefined, string>>>;
export default function NotUndefinedParameter<Msg>(message: Static<unknown, undefined, true, false, Msg>): ValidatorAbstract<unknown, undefined, true, false, Readonly<Instance<undefined, string>>>;
