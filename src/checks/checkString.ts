import {ValidationError} from '../errors/ValidationError.js'

/**
 * Ensures the given value is a string.
 *
 * @param value The value to validate
 * @returns The validated string
 * @throws ValidationError if the value is not a string
 */
export function checkString(value: unknown): string {
  if (typeof value !== 'string') {
    throw new ValidationError('string.expected')
  }
  return value
}
