module.exports = {
  testMatch: [
    '**/?(*.)+(spec|test|unit).[jt]s?(x)', // 匹配测试文件
  ],
  transform: {
    '^.+.[j|t]sx?$': 'babel-jest', // 支持esm，默认只支持cjs
    '^.+.tsx$': 'ts-jest', // 支持ts
  },
}
