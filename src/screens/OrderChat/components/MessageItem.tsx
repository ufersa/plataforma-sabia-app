import { format, parseISO } from 'date-fns';
import React from 'react';
import * as S from '../styles';

export const TIME_FORMAT = 'HH:mm - dd/LL/yyyy';

interface MessageItemProps {
  isImSender: boolean;
  message: any;
}

export const MessageItem: React.FC<MessageItemProps> = ({ isImSender, message }) => (
  <S.MessageContainer style={{ justifyContent: isImSender ? 'flex-end' : 'flex-start' }}>
    <S.MessageWrapper>
      <S.Bubble style={{ backgroundColor: isImSender ? '#00A688' : '#E8E8E8' }}>
        <S.Message>
          {!isImSender && <S.Nickname>Responsável</S.Nickname>}
          <S.MessageText style={{ color: isImSender ? '#FFF' : '#262626' }}>
            {message.content.text}
          </S.MessageText>
        </S.Message>

      </S.Bubble>
      <S.Time style={{ alignItems: isImSender ? 'flex-end' : 'flex-start' }}>
        <S.TimeText>
          {format(parseISO(message.created_at), TIME_FORMAT)}
        </S.TimeText>
      </S.Time>
    </S.MessageWrapper>
  </S.MessageContainer>
);
