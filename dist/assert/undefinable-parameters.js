import Guard from "../boolean/undefined";
export default function UndefinableParameters(value, assert, error) {
    try {
        if (!Guard(value)) {
            assert(value);
        }
    }
    catch (e) {
        if (error) {
            throw error(value);
        }
        throw e;
    }
}
//# sourceMappingURL=undefinable-parameters.js.map