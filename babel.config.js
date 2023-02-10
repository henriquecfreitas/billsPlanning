module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".tsx", "json", ".ts", ".js"],
          alias: {
            "@Components": "./src/components",
            "@Hooks": "./src/hooks",
            "@Pages": "./src/pages",
            "@Auth": "./src/modules/Auth/index.ts",
            "@Bill": "./src/modules/Bill/index.ts",
            "@Locale": "./src/modules/Locale/index.ts",
            "@User": "./src/modules/User/index.ts",
          },
        },
      ],
    ],
  }
}
