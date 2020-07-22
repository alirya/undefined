import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
export declare type Return<Msg> = Readonly<Validatable<true> & Message<Msg> & Value<unknown>> | Readonly<Validatable<false> & Message<Msg> & Value<undefined>>;
export default class NotUndefined<Msg> implements Validator<number, Return<Msg>>, Message<Function<[Readonly<Value> & Readonly<Validatable>], Msg>> {
    message: Function<[Readonly<Value> & Readonly<Validatable>], Msg>;
    constructor(message: Function<[Readonly<Value> & Readonly<Validatable>], Msg>);
    validate(value: unknown): Return<Msg>;
}
