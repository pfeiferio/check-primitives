import {checkUndefined} from "../checks/checkUndefined.js";

/**
 * Asserts that the given value is undefined.
 *
 * @param value The value to validate
 */
export function assertUndefined(value: unknown): asserts value is undefined {
  checkUndefined(value)
}
