import Undefined from './undefined.js';
import {Union} from 'ts-toolbelt';

export default function NotUndefined<Type extends unknown>(value: Type): value is Union.Exclude<Type, undefined> {

    return !Undefined(value);
}

export {NotUndefined as IsNotUndefined};