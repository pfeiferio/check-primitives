import {checkString} from "../checks/checkString.js";

/**
 * Asserts that the given value is a string.
 *
 * @param value The value to validate
 */
export function assertString(value: unknown): asserts value is string {
  checkString(value)
}
