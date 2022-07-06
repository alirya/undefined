import Guard from '../boolean/not-undefined.js';
import {CallbackParameters} from '@alirya/function/assert/callback.js';
import NotUndefinedError from './throwable/not-undefined.js';
import {Union} from 'ts-toolbelt';

export default function NotUndefined<Type>(
    value : Type,
    error : (value:unknown)=>Error = NotUndefinedError.Parameters
) : asserts value is Union.Exclude<Type, undefined> {

    CallbackParameters(value, Guard, error);
}
