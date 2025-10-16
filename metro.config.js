const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require("nativewind/metro");

const { assetExts, sourceExts } = getDefaultConfig(__dirname).resolver;
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = mergeConfig(getDefaultConfig(__dirname), {
    transformer: {
        babelTransformerPath: require.resolve(
          "react-native-svg-transformer/react-native"
        )
    },
    resolver: {
        assetExts: assetExts.filter((ext) => ext !== "svg"),
        sourceExts: [...sourceExts, "svg"]
    },
    sourceMaps: true,
});

module.exports = withNativeWind(config, { input: "./global.css" });