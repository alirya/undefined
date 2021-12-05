import TypeUndefined from './undefined';
/**
 * check if value is undefined or delegate checking to given validator
 */
export default function Undefinable<Alternative>(
    value : unknown,
    notundefined : (value : unknown) => value is Alternative
) : value is Alternative|undefined {

    return TypeUndefined(value) || notundefined(value);
}

