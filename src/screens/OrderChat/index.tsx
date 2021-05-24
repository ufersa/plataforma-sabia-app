/* eslint-disable react/style-prop-object */
import React, {
  useEffect, useState, useCallback, useRef,
} from 'react';
import {
  View,
  ActivityIndicator,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FlatList } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory';
import { useAuth } from '@hooks/useAuth';
import { getChatInstance, getChatMessages, sendChatMessage } from '@services/chat';
import { isIphoneX } from '@utils/helper';
import { useKeyboard } from '@hooks/useKeyboard';
import { MessageItem } from './components/MessageItem';
import * as S from './styles';

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

      let currentMessages = [...messages];

      await getChatMessages(chatInstance.id, { offset: 0 }).then((lastMessages) => {
        currentMessages = mergeUnique(lastMessages, currentMessages);
        currentMessages = currentMessages.sort((a: any, b: any) => b.id - a.id);

        setMessages(currentMessages);
        setLoading(false);
      });

      timer.current = setTimeout(() => {
        setRefresh(!refresh);
      }, 5000);
    }, [user, messages, refresh, chatInstance, currentOffset],
  );

  const mergeUnique = (newMessages: any, currentMessages: any) => newMessages.filter((newMessage: any) => !currentMessages.find((message: any) => newMessage.id === message.id)).concat(currentMessages);

  const loadMore = useCallback(async () => {
    clearTimeout(timer.current);

    if (!chatInstance) {
      return;
    }

    let currentMessages = [...messages];

    await getChatMessages(chatInstance.id, { offset: 0 }).then(async (lastMessages) => {
      currentMessages = mergeUnique(lastMessages, currentMessages);

      await getChatMessages(chatInstance.id, { offset: currentOffset }).then((olderMessages: any) => {
        currentMessages = mergeUnique(olderMessages, currentMessages);
        currentMessages = currentMessages.sort((a: any, b: any) => b.id - a.id);

        setMessages(currentMessages);
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
      <StatusBar style="dark" />
      <S.Wrapper>
        <FlatList
          style={{ flex: 1, height: '100%' }}
          inverted
          onEndReached={loadMore}
          onEndReachedThreshold={0.7}
          ListFooterComponent={() => (
            messages.length !== 0 && (
              <S.LoadMore
                onPress={() => loadMore()}
              >
                <S.LoadMoreText>Carregar mais mensagens  </S.LoadMoreText>
                <Feather name="refresh-ccw" size={24} color="#00A688" />
              </S.LoadMore>
            )
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

          <S.KeyboardContainer>
            <S.InputText
              onChangeText={(text) => setInputValue(text)}
              onSubmitEditing={handleSubmit}
              value={inputValue}
              placeholder="Digite sua mensagem"
              placeholderTextColor="#9D9FA3"
            />
            {loading && <ActivityIndicator size="small" />}
            <S.SendButton
              onPress={handleSubmit}
              disabled={!inputValue}
            >
              <Feather name="send" size={24} color="#00A688" style={{ transform: [{ rotate: '45deg' }] }} />
            </S.SendButton>
          </S.KeyboardContainer>
        </KeyboardAccessoryView>
        {isIphoneX && !isVisibleKeyboard && (
        <View style={{ height: 30 }} />
        )}
      </S.Wrapper>
    </>
  );
};

export default OrderChat;
