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
    googleServicesFile: './GoogleService-Info.plist',
    buildNumber: buildNumber.toString(),
    supportsTablet: false,
    config: {
      googleMapsApiKey: process.env.GOOGLE_MAPS_API,
    },
  },
  android: {
    package: 'com.plataformasabia.app',
    googleServicesFile: './google-services.json',
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
  web: {
    config: {
      firebase: {
        appId: process.env.FIREBASE_APP_ID,
        apiKey: process.env.FIREBASE_API_KEY,
        projectId: process.env.FIREBASE_PROJECT_ID,
        measurementId: `G-${process.env.FIREBASE_MEASUREMENT_ID}`,
      },
    },
  },
});
