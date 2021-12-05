import Callback from "@dikac/t-validator/validatable/callback-function-parameters";
import NotUndefinedBoolean from "../boolean/not-undefined";
import NotUndefinedMessage from "../assert/string/not-undefined-parameters";
export default function NotUndefinedParameters(value, 
// message : (result:Readonly<Value<Argument> & Validatable>)=>MessageType|string = NotUndefinedMessage
message = NotUndefinedMessage) {
    return Callback(value, NotUndefinedBoolean, message);
}
//# sourceMappingURL=not-undefined-parameters.js.map