import {ValidationError} from '../errors/ValidationError.js'

/**
 * Ensures the given value is an array.
 *
 * @param value The value to validate
 * @returns The validated array
 * @throws ValidationError if the value is not an array
 */
export function checkArray(value: unknown): unknown[] {
  if (!Array.isArray(value)) {
    throw new ValidationError('array.expected')
  }
  return value
}
