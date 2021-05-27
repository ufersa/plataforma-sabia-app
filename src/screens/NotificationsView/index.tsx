import React, { useCallback, useEffect } from 'react';
import { Platform, Linking } from 'react-native';
import { NavigatorScreenParams } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import Colors from '@utils/colors';
import { markAsRead } from '@services/notifications';

interface NotificationsViewProps {
  route: NavigatorScreenParams<any, any>;
}

const NotificationsView = ({ route }: NotificationsViewProps): JSX.Element => {
  const { params: { data } } = route;

  const readMessage = useCallback(async () => {
    await markAsRead({
      messages: [data.id],
    });
  }, [data.id]);

  useEffect(() => {
    if (data.status !== 'read') {
      readMessage();
    }
  }, []);

  return (
    <WebView
      originWhitelist={['*']}
      source={{
        html:
        `
          <style>
            html,
            body {
              background: ${Colors.background} !important;
              width: auto;
              height: 100%;
              margin: 0;
              padding: 0;
              overflow-x: hidden;
            }

            .wrapper,
            .container,
            hr {
              width: 100% !important;
              box-sizing: border-box;
            }

            .wrapper {
              background: ${Colors.background} !important;
              padding-left: 24px;
              padding-right: 24px;
            }
          </style>
          <meta name="viewport" content="width=device-width,user-scalable=0,initial-scale=1,minimum-scale=1,maximum-scale=1">
          ${data.body}
        `,
      }}
      scalesPageToFit={Platform.OS !== 'ios'}
      automaticallyAdjustContentInsets={false}
      style={{
        backgroundColor: Colors.background,
        flex: 1,
      }}
      onShouldStartLoadWithRequest={(event) => {
        if (!/^(?:data:text|about:blank)/.test(event.url) && !event.url.includes('embed')) {
          Linking.openURL(event.url);
          return false;
        }
        return true;
      }}
    />
  );
};

export default NotificationsView;
