import ValidatorAbstract from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";
export default function NotUndefinedStandard(): ValidatorAbstract<unknown, undefined, true, false, Readonly<Instance<unknown, string>>>;
