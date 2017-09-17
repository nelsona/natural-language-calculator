/*
1. nine over eight plus four times two divided-by three = 3.79
2. one plus six = 7
3. one plus two times three = 7
4. nine minus three times seven = -12
5. four minus eight plus six times nine = 50
6. seven over nine plus two = 2.78
 */

const test = require('tape')
const app = require('../app')

test('calculate is a usable function', (t) => {
  t.notEqual(undefined, app.calculate, 'Calculate is defined')
  t.true(typeof app.calculate === 'function', 'Calculate is a function')
  t.end()
})

test('calculate nine over eight plus four times two divided-by three', (t) => {
  const expected = 9 / 8 + 4 * 2 / 3
  t.equal(expected, app.calculate('nine over eight plus four times two divided-by three'), `Equals: ${expected}`)
  t.end()
})

test('calculate one add six', (t) => {
  const expected = 1 + 6
  t.equal(expected, app.calculate('one add six'), `Equals: ${expected}`)
  t.end()
})

test('calculate one plus two times three', (t) => {
  const expected = 1 + 2 * 3
  t.equal(expected, app.calculate('one plus two times three'), `Equals: ${expected}`)
  t.end()
})

test('calculate nine minus three times seven', (t) => {
  const expected = 9 - 3 * 7
  t.equal(expected, app.calculate('nine minus three times seven'), `Equals: ${expected}`)
  t.end()
})

test('calculate four minus eight plus six times nine', (t) => {
  const expected = 4 - 8 + 6 * 9
  t.equal(expected, app.calculate('four minus eight plus six times nine'), `Equals: ${expected}`)
  t.end()
})

test('calculate seven over nine plus two', (t) => {
  const expected = 7 / 9 + 2
  t.equal(expected, app.calculate('seven over nine plus two'), `Equals: ${expected}`)
  t.end()
})
