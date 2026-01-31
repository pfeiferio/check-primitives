import {ValidationError} from '../errors/ValidationError.js'

/**
 * Ensures the given value is a plain object (no arrays, no null).
 *
 * @param value The value to validate
 * @returns The validated object
 * @throws ValidationError if the value is not a plain object
 */
export function checkObject(value: unknown): Record<string, unknown> {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) {
    throw new ValidationError('object.expected')
  }
  return value as Record<string, unknown>
}
