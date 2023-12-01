module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for expo-router
      'expo-router/babel',
      [
        "module-resolver",
        {
          alias: {
            components: "./src/components",
            api: "./src/api",
            assets: "./src/assets",
            constants: "./src/constants",
            types: "./src/types",
            utils: "./src/utils",
          },
        },
      ],
    ],
  };
};
