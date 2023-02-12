import Guard from '../boolean/undefined.js';
import {CallbackParameters} from '@alirya/function/assert/callback.js';
import UndefinedError from './throwable/undefined.js';

export default function Undefined(
    value : unknown,
    error : (value:unknown)=>Error = UndefinedError.Parameters
) : asserts value is undefined {

    CallbackParameters(value, Guard, error);
}
