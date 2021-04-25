/* eslint-disable react/style-prop-object */
import React, {
  useEffect, useState, useCallback, useRef,
} from 'react';
import {
  Platform,
  TouchableOpacity,
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
} from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory';
import { useAuth } from '../../hooks/useAuth';
import { MessageItem } from './components/MessageItem';
import { getChatInstance, getChatMessages, sendChatMessage } from '../../services/chat';
import { isIphoneX } from '../../utils/helper';
import { useKeyboard } from '../../hooks/useKeyboard';

interface OrderChatProps {
  route: {
    params: {
      orderId: number
    }
  }
}

const OrderChat = ({ route: { params: { orderId } } }: OrderChatProps): JSX.Element => {
  const { user } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);
  const [isVisibleKeyboard] = useKeyboard();

  const [chatInstance, setChatInstance] = useState(null);
  const [messages, setMessages] = useState([]);
  const [currentOffset, setCurrentoffset] = useState(10);

  const [inputValue, setInputValue] = useState('');
  const [refresh, setRefresh] = useState(true);
  const timer = useRef(null);

  const loadMessages = useCallback(
    async () => {
      setLoading(true);

      if (!chatInstance) {
        await getChatInstance({
          object_type: 'technology-order',
          object_id: orderId,
          target_user: user.id,
        }).then((chat) => {
          if (chat) setChatInstance(chat);
        });
      }

      if (!chatInstance) {
        return;
      }

      let m;

      await getChatMessages(chatInstance.id, { offset: 0 }).then((data) => {
        m = merge(messages, data, 'id');
        m = m.sort((a: any, b: any) => b.id - a.id);

        setMessages(m);
        setLoading(false);
      });

      timer.current = setTimeout(() => {
        setRefresh(!refresh);
      }, 5000);
    }, [user, messages, refresh, chatInstance, currentOffset],
  );

  const merge = (a: any, b: any, prop: string) => {
    const reduced = a.filter((aitem: any) => !b.find((bitem: any) => aitem[prop] === bitem[prop]));
    return reduced.concat(b);
  };

  const loadMore = useCallback(async () => {
    clearTimeout(timer.current);

    if (!chatInstance) {
      return;
    }

    let m: any;

    // get last 10 messages
    await getChatMessages(chatInstance.id, { offset: 0 }).then(async (lastMessages) => {
      m = merge(messages, lastMessages, 'id');

      // get olders 10 non fetched messages
      await getChatMessages(chatInstance.id, { offset: currentOffset }).then((olderMessages: any) => {
        m = merge(m, olderMessages, 'id');
        m = m.sort((a: any, b: any) => b.id - a.id);

        setMessages(m);
        setLoading(false);
        setCurrentoffset(messages.length + 10);

        timer.current = setTimeout(() => {
          setRefresh(!refresh);
        }, 5000);
      });
    });
  }, [messages, chatInstance, currentOffset, refresh]);

  const handleSubmit = () => {
    sendMessage({
      text: inputValue,
    });
    setInputValue('');
  };

  const sendMessage = useCallback(
    async ({ text }) => {
      await sendChatMessage(chatInstance.id, text);

      // setCurrentoffset(currentOffset);
      loadMore();
    },
    [user, messages, chatInstance, currentOffset, refresh],
  );

  useEffect(() => {
    loadMessages();

    return () => {
      clearTimeout(timer.current);
    };
  }, [user, refresh, chatInstance]);

  return (
    <>
      <View style={{ flex: 1, height: '100%', backgroundColor: '#F5F5F5' }}>
        <FlatList
          style={{ flex: 1, height: '100%' }}
          inverted
          onEndReached={loadMore}
          onEndReachedThreshold={0.7}
          ListFooterComponent={() => (
            <>
              <TouchableOpacity
                onPress={() => {
                  loadMore();
                }}
                style={[styles.loadMore]}
              >
                <Text style={styles.loadMoreText}>Carregar mais mensagens  </Text>
                <Feather name="refresh-ccw" size={24} color="#00A688" />
              </TouchableOpacity>
            </>
          )}
          data={messages}
          keyExtractor={(item, idx) => `${item.id}-${idx}`}
          renderItem={({ item }) => (
            <MessageItem
              key={`message-${item.id}`}
              message={item}
              isImSender={item.from_user_id === user.id}
            />
          )}
        />

        <KeyboardAccessoryView
          style={{ backgroundColor: '#FFF' }}
          alwaysVisible
          avoidKeyboard
          bumperHeight={30}
          hideBorder
        >

          <View style={styles.accessoryContainer}>
            <TextInput
              onChangeText={(text) => setInputValue(text)}
              onSubmitEditing={handleSubmit}
              value={inputValue}
              placeholder="Digite sua mensagem"
              placeholderTextColor="#9D9FA3"
              style={styles.input}
            />
            {loading && <ActivityIndicator size="small" style={{ marginBottom: 10 }} />}
            <TouchableOpacity
              onPress={handleSubmit}
              style={[styles.buttonSend, { opacity: inputValue ? 1 : 0.5 }]}
              disabled={!inputValue}
            >
              <Feather name="send" size={24} color="#00A688" />
            </TouchableOpacity>
          </View>
        </KeyboardAccessoryView>
        {isIphoneX && !isVisibleKeyboard && (
        <View style={{ height: 30 }} />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  accessoryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingVertical: 16,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    paddingBottom: Platform.OS === 'android' ? 6 : 9,
    paddingTop: Platform.OS === 'android' ? 5 : 8,
    paddingHorizontal: 12,
    fontSize: 17,
    flexGrow: 1,
    lineHeight: 20,
    maxHeight: 200,
    minHeight: 36,
    color: '#777777',
  },
  buttonSend: {
    marginLeft: 0,
    marginRight: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
    transform: [{ rotate: '45deg' }],
  },
  loadMore: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    alignSelf: 'center',
    alignItems: 'center',
    height: 32,
  },
  loadMoreText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#00A688',
  },
});

export default OrderChat;
