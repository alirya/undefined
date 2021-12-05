import ValidatableStatic from "@dikac/t-validator/validatable/static";
import Static from "@dikac/t-validator/message/function/static-parameters";
import ValidatableType from "@dikac/t-validator/validatable/validatable";
export declare type NotUndefinedParametersType<Argument, MessageType> = Readonly<ValidatableStatic<Argument, undefined, true, false, ValidatableType<Argument | undefined, MessageType>>>;
export default function NotUndefinedParameters<Argument>(value: Argument): NotUndefinedParametersType<Argument, string>;
export default function NotUndefinedParameters<Argument, MessageType>(value: Argument, message: Static<Argument, undefined, true, false, MessageType>): NotUndefinedParametersType<Argument, MessageType>;
