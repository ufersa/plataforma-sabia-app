const version = '1.2.0';
const buildNumber = 1;

const backgroundColor = '#00a688';

export default ({ config }) => ({
  ...config,
  name: 'Plataforma Sabiá',
  slug: 'plataforma-sabia',
  owner: 'plataformasabia',
  version,
  orientation: 'portrait',
  icon: './assets/icon.png',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor,
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    bundleIdentifier: 'com.plataformasabia.app',
    buildNumber: buildNumber.toString(),
    supportsTablet: false,
    config: {
      googleMapsApiKey: process.env.GOOGLE_MAPS_API,
    },
  },
  android: {
    package: 'com.plataformasabia.app',
    versionCode: buildNumber,
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor,
    },
    config: {
      googleMaps: {
        apiKey: process.env.GOOGLE_MAPS_API,
      },
    },
  },
});
