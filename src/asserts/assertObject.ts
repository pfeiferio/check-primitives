import {checkObject} from "../checks/checkObject.js";

/**
 * Asserts that the given value is a plain object.
 *
 * @param value The value to validate
 */
export function assertObject(
  value: unknown
): asserts value is Record<string, unknown> {
  checkObject(value)
}
