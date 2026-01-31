import {ValidationError} from '../errors/ValidationError.js'

/**
 * Ensures the given value is a boolean.
 *
 * @param value The value to validate
 * @returns The validated boolean
 * @throws ValidationError if the value is not a boolean
 */
export function checkBoolean(value: unknown): boolean {
  if (typeof value !== 'boolean') {
    throw new ValidationError('boolean.expected')
  }
  return value
}
