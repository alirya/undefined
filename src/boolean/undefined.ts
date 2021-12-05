/**
 * check if value is undefined
 */
export default function Undefined (value : unknown) : value is undefined {

    return value === undefined;
}
