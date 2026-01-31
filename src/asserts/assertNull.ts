import {checkNull} from "../checks/checkNull.js";

/**
 * Asserts that the given value is null.
 *
 * @param value The value to validate
 */
export function assertNull(value: unknown): asserts value is null {
  checkNull(value)
}
