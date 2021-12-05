import Value from "@dikac/t-value/value";
export default function UndefinedParameter({ value, error, }: Value & {
    error?: (value: unknown) => Error;
}): undefined;
