/**
 * Base error for all validation-related failures.
 * Carries a stable, machine-readable error code.
 */
export class ValidationError extends Error {

  /**
   * @param code Validation error code (e.g. "string.expected")
   * @param context Validation error context (e.g. "min_length: 3")
   */
  constructor(
    public readonly code: string,
    public readonly context: Record<string, unknown> = {},
  ) {
    super(code)
    this.name = 'ValidationError'
  }
}
