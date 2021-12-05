import Value from "@dikac/t-value/value";
import Callback from "@dikac/t-function/callback/callback";
export default function UndefinableParameter<Alternative>({ value, callback, error, }: Value & Callback<(value: unknown) => asserts value is Alternative> & {
    error?: (value: unknown) => Error;
}): Alternative | undefined;
