import Value from "@dikac/t-value/value";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Message from "@dikac/t-message/message";
import ValidatableMessage from "@dikac/t-validator/message/function/validatable-parameter";
export default function UndefinedParameter<Argument>({ value }: Value<Argument>): Return<Argument, undefined, Readonly<Instance<Argument, string>>>;
export default function UndefinedParameter<MessageType, Argument>({ value, message, }: Value<Argument> & Message<ValidatableMessage<Argument, MessageType>>): Return<Argument, undefined, Readonly<Instance<Argument, MessageType>>>;
