import Callback from "@dikac/t-validator/validatable/callback-function-parameters";
import NotUndefinedBoolean from "../boolean/not-undefined";
import NotUndefinedMessage from "../assert/string/not-undefined-parameters";
import Static from "@dikac/t-validator/message/function/static-parameters";
import {NotUndefinedParametersType} from "./not-undefined-parameters";

export type {NotUndefinedParametersType};

export default function NotUndefinedParameters<Argument>(
    value : Argument
) : NotUndefinedParametersType<Argument, string>;

export default function NotUndefinedParameters<Argument, MessageType>(
    value : Argument,
    message : Static<Argument, undefined, true, false, MessageType>
) : NotUndefinedParametersType<Argument, MessageType>;

export default function NotUndefinedParameters<Argument, MessageType>(
    value : Argument,
    message : Static<Argument, undefined, true, false, MessageType|string> = NotUndefinedMessage
) : NotUndefinedParametersType<Argument, MessageType> {

    return <NotUndefinedParametersType<Argument, MessageType>> Callback(value, NotUndefinedBoolean, message);
}


