const {parse, testCase} = require('./parser')

// testCase.map(parse).map(console.log)
testCase.map(parse).map((result) => {
  console.log('+++')
  console.log(result)
})

// console.log(parse('Map<int, bool, int, string>'))