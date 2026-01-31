import {checkNumber} from "../checks/checkNumber.js";

/**
 * Asserts that the given value is a finite number.
 *
 * @param value The value to validate
 */
export function assertNumber(value: unknown): asserts value is number {
  checkNumber(value)
}
