import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
export default function Undefined<MessageT>(message: (result: Readonly<Value & Validatable>) => MessageT): Validator<unknown, undefined, Readonly<ValidatorValidatable<unknown, MessageT>>>;
