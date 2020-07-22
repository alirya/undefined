import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
export declare type Return<Msg, Argument> = Readonly<Validatable<false> & Message<Msg> & Value<Argument>> | Readonly<Validatable<true> & Message<Msg> & Value<undefined>>;
export default function Undefined<Msg, Argument>(value: Argument, message: Function<[Readonly<Value<Argument> & Validatable>], Msg>): Return<Msg, Argument>;
