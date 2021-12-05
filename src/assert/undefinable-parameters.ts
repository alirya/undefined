import Guard from "../boolean/undefined";

export default function UndefinableParameters<Alternative>(
    value : unknown,
    assert : (value:unknown) => asserts value is Alternative,
    error ?: (value:unknown)=>Error
) : asserts value is (undefined|Alternative) {

    try {

        if(!Guard(value)) {

            assert(value)
        }

    } catch (e) {

        if(error) {

            throw error(value)
        }

        throw e;
    }

}
