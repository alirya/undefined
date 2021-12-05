/**
 * string intended for not undefined message
 *
 * @param valid
 * @param value
 * @param subject
 * @param conversion
 */
export default function NotUndefinedParameters(value: unknown, valid: boolean, subject?: string, conversion?: (value: unknown) => string): string;
