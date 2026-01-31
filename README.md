# @pfeiferio/check-primitives

Minimal, strict runtime type checks for JavaScript / TypeScript.

This package provides **primitive validation helpers** that:

- do not coerce values
- throw deterministic errors
- are framework-agnostic
- are designed for infrastructure and boundary validation

## Installation

```bash
npm install @pfeiferio/check-primitives
````

## Usage

### Checks (return value or throw)

```ts
import {checkString, checkNumber} from '@pfeiferio/check-primitives'

const name = checkString(input.name)
const age = checkNumber(input.age)
```

### Assertions (type narrowing)

```ts
import {assertObject, assertString} from '@pfeiferio/check-primitives'

assertObject(payload)
assertString(payload.name)

// payload is now typed safely
```

## Included checks

* `checkString`
* `checkNumber` (finite only)
* `checkBoolean`
* `checkArray`
* `checkObject` (plain object)
* `checkFunction`
* `checkNull`
* `checkUndefined`

Each check has a corresponding `assert*` variant.

## Errors

All checks throw a `ValidationError` with a stable error code.

```ts
try {
  checkNumber(value)
} catch (err) {
  if (err instanceof ValidationError) {
    console.log(err.code)
  }
}
```

## Philosophy

This package intentionally does **not** include:

* format validation
* length or range constraints
* coercion or defaults
* schemas or DSLs

It is meant to be used as a **low-level building block**.

## License

MIT

