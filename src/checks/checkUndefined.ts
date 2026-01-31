import {ValidationError} from '../errors/ValidationError.js'

/**
 * Ensures the given value is undefined.
 *
 * @param value The value to validate
 * @returns undefined
 * @throws ValidationError if the value is not undefined
 */
export function checkUndefined(value: unknown): undefined {
  if (value !== undefined) {
    throw new ValidationError('undefined.expected')
  }
  return undefined
}
