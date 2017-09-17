const readline = require('readline')
const app = require('./app')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Please enter a calculation: '
})

rl.prompt()

rl.on('line', (input) => {
  const response = app.calculate(input.trim())
  console.log(response)
  rl.prompt()
}).on('close', () => {
  console.log('')
  console.log('Thank you for your questions.')
  console.log('Have a nice day!')
  process.exit(0)
})
