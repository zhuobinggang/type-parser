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

`const {parse, testCase} = require('./parse')`

then

`testCase.map(parse).map(console.log)`