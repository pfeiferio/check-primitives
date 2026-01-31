import {ValidationError} from '../errors/ValidationError.js'

/**
 * Ensures the given value is a finite number.
 * Excludes NaN, Infinity and -Infinity.
 *
 * @param value The value to validate
 * @returns The validated number
 * @throws ValidationError if the value is not a finite number
 */
export function checkNumber(value: unknown): number {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new ValidationError('number.expected')
  }
  return value
}
