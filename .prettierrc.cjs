module.exports = {
  printWidth: 80,
  tabWidth: 2,
  // 不使用 tab 縮排，而使用空格
  useTabs: false,
  semi: false,
  // 使用單引號代替雙引號
  singleQuote: true,
  // 對象的 key 僅在必要時用引號
  quoteProps: 'as-needed',
  // jsx 不使用單引號，而使用雙引號
  jsxSingleQuote: false,
  // 末尾使用逗號
  trailingComma: 'all',
  // 大括號內的首尾需要空格 { foo: bar }
  bracketSpacing: true,
  // jsx 標籤的反尖括號需要換行
  jsxBracketSameLine: false,
  // 箭頭函數，只有一個參數的時候，也需要括號
  arrowParens: 'always',
  // 每個檔案格式化的範圍是檔案的全部內容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要寫檔案開頭的 @prettier
  requirePragma: false,
  // 不需要自動在檔案開頭插入 @prettier
  insertPragma: false,
  // 使用默認的折行標準
  proseWrap: 'preserve',
  // 根據顯示樣式決定 html 要不要折行
  htmlWhitespaceSensitivity: 'css',
  // 分行符號使用 lf
  endOfLine: 'auto',
};
