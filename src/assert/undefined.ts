import Guard from '../boolean/undefined';
import {CallbackParameters} from '@alirya/function/assert/callback';
import UndefinedError from './throwable/undefined';

export default function Undefined(
    value : unknown,
    error : (value:unknown)=>Error = UndefinedError.Parameters
) : asserts value is undefined {

    CallbackParameters(value, Guard, error);
}
