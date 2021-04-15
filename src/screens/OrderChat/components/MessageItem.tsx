import { format, parseISO } from 'date-fns';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const TIME_FORMAT = 'HH:mm';

interface MessageItemProps {
  isImSender: boolean;
  message: any;
}

export const MessageItem: React.FC<MessageItemProps> = ({ isImSender, message }) => (
  <View style={[styles.container, { justifyContent: isImSender ? 'flex-end' : 'flex-start' }]}>
    <View style={styles.bubbleSize}>
      <View style={[styles.bubble, { backgroundColor: isImSender ? '#00A688' : '#E8E8E8' }]}>
        <View style={{ flexShrink: 1 }}>
          <Text style={[styles.messageText, { color: isImSender ? '#FFF' : '#262626' }]}>
            {message.content.text}
          </Text>
        </View>

        <View style={styles.bubbleTime}>
          <Text style={[styles.bubbleTimeText, { color: isImSender ? '#8FC5FF' : '#9D9FA3' }]}>
            {format(parseISO(message.created_at), TIME_FORMAT)}
          </Text>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginVertical: 6,
    flexDirection: 'row',
  },
  bubble: {
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'stretch',
    flexWrap: 'wrap',
  },
  bubbleSize: {
    maxWidth: '80%',
    flexDirection: 'column',
  },
  senderName: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '500',
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '500',
  },
  bubbleTime: {
    alignSelf: 'stretch',
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  bubbleTimeText: {
    position: 'relative',
    lineHeight: 18,
    top: 2,
    fontSize: 13,
    paddingLeft: 8,
    fontWeight: '400',
  },
});
