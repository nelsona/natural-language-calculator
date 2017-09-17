const numbers = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10
}

const operators = {
  add: '+',
  plus: '+',
  subtract: '-',
  minus: '-',
  less: '-',
  'multiplied-by': '*',
  times: '*',
  'divided-by': '/',
  over: '/'
}

const calculate = (sumInWords) => {
  const sum = sumInWords
    .toLowerCase()
    .split(' ')
    .map((string) => {
      let returnValue = numbers[string]
      if (returnValue) return returnValue
      return operators[string]
    })
    .join('')
  return eval(sum)
}

module.exports = { calculate }
