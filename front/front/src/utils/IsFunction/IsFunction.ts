import { AnyFunction } from './IsFunction.types';

export function isFunction(value: unknown): value is AnyFunction {
  return typeof value === 'function';
}
