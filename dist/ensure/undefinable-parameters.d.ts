export default function UndefinableParameters<Alternative>(value: unknown, ensure: (value: unknown) => asserts value is Alternative, error?: (value: unknown) => Error): Alternative | undefined;
