import {checkArray} from "../checks/checkArray.js";

/**
 * Asserts that the given value is an array.
 *
 * @param value The value to validate
 */
export function assertArray(value: unknown): asserts value is [] {
  checkArray(value)
}
