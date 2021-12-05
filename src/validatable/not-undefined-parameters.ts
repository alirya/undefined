import Callback from "@dikac/t-validator/validatable/callback-function-parameters";
import ValidatableStatic from "@dikac/t-validator/validatable/static";
import NotUndefinedBoolean from "../boolean/not-undefined";
import NotUndefinedMessage from "../assert/string/not-undefined-parameters";
import Static from "@dikac/t-validator/message/function/static-parameters";
import ValidatableType from "@dikac/t-validator/validatable/validatable";

export type NotUndefinedParametersType<Argument, MessageType> = Readonly<ValidatableStatic<Argument, undefined, true, false, ValidatableType<Argument | undefined, MessageType>>>;

export default function NotUndefinedParameters<Argument>(
    value : Argument
) : NotUndefinedParametersType<Argument, string>;

export default function NotUndefinedParameters<Argument, MessageType>(
    value : Argument,
    message : Static<Argument, undefined, true, false, MessageType>
) : NotUndefinedParametersType<Argument, MessageType>;

export default function NotUndefinedParameters<Argument, MessageType>(
    value : Argument,
   // message : (result:Readonly<Value<Argument> & Validatable>)=>MessageType|string = NotUndefinedMessage
    message : Static<Argument, undefined, true, false, MessageType|string> = NotUndefinedMessage
) : NotUndefinedParametersType<Argument, MessageType> {

    return <NotUndefinedParametersType<Argument, MessageType>> Callback(value, NotUndefinedBoolean, message);
}


