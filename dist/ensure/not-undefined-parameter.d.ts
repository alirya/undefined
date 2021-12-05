import { Union } from "ts-toolbelt";
import Value from "@dikac/t-value/value";
export default function NotUndefinedParameter<Type>({ error, value }: Value<Type> & {
    error?: (value: unknown) => Error;
}): Union.Exclude<Type, undefined>;
