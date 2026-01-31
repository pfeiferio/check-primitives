import {checkBoolean} from "../checks/checkBoolean.js";

/**
 * Asserts that the given value is a boolean.
 *
 * @param value The value to validate
 */
export function assertBoolean(value: unknown): asserts value is boolean {
  checkBoolean(value)
}
