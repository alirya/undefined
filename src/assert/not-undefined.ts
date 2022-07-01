import Guard from '../boolean/not-undefined';
import {CallbackParameters} from '@alirya/function/assert/callback';
import NotUndefinedError from './throwable/not-undefined';
import {Union} from 'ts-toolbelt';

export default function NotUndefined<Type>(
    value : Type,
    error : (value:unknown)=>Error = NotUndefinedError.Parameters
) : asserts value is Union.Exclude<Type, undefined> {

    CallbackParameters(value, Guard, error);
}
