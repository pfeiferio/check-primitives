import {ValidationError} from '../errors/ValidationError.js'

/**
 * Ensures the given value is null.
 *
 * @param value The value to validate
 * @returns null
 * @throws ValidationError if the value is not null
 */
export function checkNull(value: unknown): null {
  if (value !== null) {
    throw new ValidationError('null.expected')
  }
  return null
}
