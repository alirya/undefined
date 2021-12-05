import TypeUndefined from './undefined';
/**
 * check if value is undefined or delegate checking to given validator
 */
export default function Undefinable(value, notundefined) {
    return TypeUndefined(value) || notundefined(value);
}
//# sourceMappingURL=undefinable.js.map