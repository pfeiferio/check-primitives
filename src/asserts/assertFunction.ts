import {checkFunction} from "../checks/checkFunction.js";

/**
 * Asserts that the given value is a function.
 *
 * @param value The value to validate
 */
export function assertFunction(value: unknown): asserts value is Function {
  checkFunction(value)
}
