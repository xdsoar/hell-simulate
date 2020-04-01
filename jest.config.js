const {
  compilerOptions
} = require('./tsconfig');

const {
  resolve
} = require('path');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': resolve(__dirname, './src/$1'),
  },
};