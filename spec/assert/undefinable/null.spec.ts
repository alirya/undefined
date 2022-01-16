import Undefinable from '../../../dist/assert/undefinable-parameters';
import Boolean from '@alirya/boolean/assert/boolean';

it(`null`, () => {
    try {
        Undefinable(null, Boolean);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});
