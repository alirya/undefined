import ValidatorAbstract from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/validatable";
export default function NotUndefined<MessageType>(message: (result: Readonly<Value> & Readonly<Validatable>) => MessageType): ValidatorAbstract<unknown, undefined, true, false, Readonly<Instance<unknown, MessageType>>>;
