import {describe, test} from 'node:test'
import assert from 'node:assert/strict'

import {
  assertArray,
  assertBoolean,
  assertFunction,
  assertNull,
  assertNumber,
  assertObject,
  assertString,
  assertUndefined,
  checkArray,
  checkBoolean,
  checkFunction,
  checkNull,
  checkNumber,
  checkObject,
  checkString,
  checkUndefined,
  ValidationError
} from '../dist/index.js'

/* -------------------------------------------------------------------------- */
/*                                   ASSERTS                                  */
/* -------------------------------------------------------------------------- */

describe('asserts', () => {
  test('assertString', () => {
    assert.doesNotThrow(() => assertString('abc'))
    assert.throws(() => assertString(123), ValidationError)
  })

  test('assertNumber', () => {
    assert.doesNotThrow(() => assertNumber(123))
    assert.throws(() => assertNumber(NaN), ValidationError)
  })

  test('assertBoolean', () => {
    assert.doesNotThrow(() => assertBoolean(true))
    assert.throws(() => assertBoolean('true'), ValidationError)
  })

  test('assertArray', () => {
    assert.doesNotThrow(() => assertArray([]))
    assert.throws(() => assertArray({}), ValidationError)
  })

  test('assertObject', () => {
    assert.doesNotThrow(() => assertObject({}))
    assert.throws(() => assertObject([]), ValidationError)
    assert.throws(() => assertObject(null), ValidationError)
  })

  test('assertFunction', () => {
    assert.doesNotThrow(() => assertFunction(() => {
    }))
    assert.throws(() => assertFunction(123), ValidationError)
  })

  test('assertNull', () => {
    assert.doesNotThrow(() => assertNull(null))
    assert.throws(() => assertNull(undefined), ValidationError)
  })

  test('assertUndefined', () => {
    assert.doesNotThrow(() => assertUndefined(undefined))
    assert.throws(() => assertUndefined(null), ValidationError)
  })
})

/* -------------------------------------------------------------------------- */
/*                                    CHECKS                                   */
/* -------------------------------------------------------------------------- */

describe('checks', () => {
  test('checkString', () => {
    assert.equal(checkString('abc'), 'abc')
    assert.throws(() => checkString(123), ValidationError)
  })

  test('checkNumber', () => {
    assert.equal(checkNumber(42), 42)
    assert.throws(() => checkNumber(Infinity), ValidationError)
  })

  test('checkBoolean', () => {
    assert.equal(checkBoolean(false), false)
    assert.throws(() => checkBoolean(0), ValidationError)
  })

  test('checkArray', () => {
    const arr = []
    assert.equal(checkArray(arr), arr)
    assert.throws(() => checkArray({}), ValidationError)
  })

  test('checkObject', () => {
    const obj = {}
    assert.equal(checkObject(obj), obj)
    assert.throws(() => checkObject([]), ValidationError)
    assert.throws(() => checkObject(null), ValidationError)
  })

  test('checkFunction', () => {
    const fn = () => {
    }
    assert.equal(checkFunction(fn), fn)
    assert.throws(() => checkFunction('fn'), ValidationError)
  })

  test('checkNull', () => {
    assert.equal(checkNull(null), null)
    assert.throws(() => checkNull(undefined), ValidationError)
  })

  test('checkUndefined', () => {
    assert.equal(checkUndefined(undefined), undefined)
    assert.throws(() => checkUndefined(null), ValidationError)
  })
})
