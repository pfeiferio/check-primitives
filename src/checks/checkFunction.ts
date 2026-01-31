import {ValidationError} from '../errors/ValidationError.js'

/**
 * Ensures the given value is a function.
 *
 * @param value The value to validate
 * @returns The validated function
 * @throws ValidationError if the value is not a function
 */
export function checkFunction(value: unknown): Function {
  if (typeof value !== 'function') {
    throw new ValidationError('function.expected')
  }
  return value
}
