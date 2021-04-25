import { format, parseISO } from 'date-fns';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const TIME_FORMAT = 'HH:mm - dd/LL/yyyy';

interface MessageItemProps {
  isImSender: boolean;
  message: any;
}

export const MessageItem: React.FC<MessageItemProps> = ({ isImSender, message }) => (
  <View style={[styles.container, { justifyContent: isImSender ? 'flex-end' : 'flex-start' }]}>
    <View style={styles.bubbleSize}>
      <View style={[styles.bubble, { backgroundColor: isImSender ? '#00A688' : '#E8E8E8' }]}>
        <View>
          {!isImSender && <Text style={styles.nickName}>Responsável</Text>}
          <Text style={[styles.messageText, { color: isImSender ? '#FFF' : '#262626' }]}>
            {message.content.text}
          </Text>
        </View>

      </View>
      <View style={[styles.bubbleTime, { alignItems: isImSender ? 'flex-end' : 'flex-start' }]}>
        <Text style={[styles.bubbleTimeText]}>
          {format(parseISO(message.created_at), TIME_FORMAT)}
        </Text>
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
    color: '#1d1d1d',
  },
  bubbleTime: {
    alignSelf: 'stretch',
    flexGrow: 1,
    alignItems: 'flex-end',
    textAlign: 'left',
  },
  bubbleTimeText: {
    top: 2,
    fontSize: 12,
    paddingLeft: 8,
    fontWeight: '400',
    color: '#777',
  },
  nickName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#4a4a4a',
    marginVertical: 10,
  },
});
