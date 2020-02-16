## Introduction

A toy handwritten parser to parse type strings like:

```js
const testCase = [
  "Map<Map<string, bool>, bool>", 
  "Map<string, Map<string, bool>>", 
  "Map<string, Map<string, bool, int, bool>>", 
  "Array<Array<Array<int>>>",
  "Array<Array<int>>",
  "Array<int>",
  "bool",
  "string",
  "int",
  "Map<int, bool, int, string>",
]
```

## Usage

Please refer to the `runAndLog.js` something like below:

```js
//runAndLog.js

const {parse, testCase} = require('./parse')

testCase.map(parse).map((result) => {
  console.log('+++')
  console.log(result)
})
```

Which will output something like:

```text
+++
{ type: 'Map',
  typeArgs: [ { type: 'string' }, { type: 'Map', typeArgs: [Array] } ] }
+++
{ type: 'Array',
  typeArgs:
   { type: 'Array',
     typeArgs: { type: 'Array', typeArgs: [Object] } } }
+++
{ type: 'Array',
  typeArgs: { type: 'Array', typeArgs: { type: 'int' } } }
+++
{ type: 'Array', typeArgs: { type: 'int' } }
+++
{ type: 'bool' }
+++
{ type: 'string' }
+++
{ type: 'int' }
+++
{ type: 'Map',
  typeArgs:
   [ { type: 'int' },
     { type: 'bool' },
     { type: 'int' },
     { type: 'string' } ] }

```
