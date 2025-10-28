import { ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainStackParamList } from '@/navigation/MainStack'
import ChatRoomHeader from './components/ChatRoomHeader';
import ChatRoomFooter from './components/ChatRoomFooter';
import ChatRoomContent from './components/ChatRoomContent';

export type ChatRoomParams = {
    id: string,
    avatar: ImageSourcePropType,
    name: string,
};

export type Chat = {
    id: string,
    message: Message,
    sender: string,
    timestamp: Date,
    isRead: boolean,
}

export type Message = {
    text: string,
    file?: string,
}

type ChatRoomProps = NativeStackScreenProps<MainStackParamList, 'ChatRoom'>

export default function ChatRoom({route, navigation}: ChatRoomProps) {
    const {chat} = route.params;

    const [chats, setChats] = useState<Chat[]>([
        {
            id: '10',
            message: {
                text: 'Hello 1',
            },
            sender: 'me',
            timestamp: new Date("2025-10-26T15:26:00"),
            isRead: true,
        },
        {
            id: '22',
            message: {
                text: 'How are you? 2',
            },
            sender: 'other',
            timestamp: new Date("2025-10-27T11:26:00"),
            isRead: true,
        },
        {
            id: '1',
            message: {
                text: 'Hello 3',
            },
            sender: 'me',
            timestamp: new Date("2025-10-28T16:16:00"),
            isRead: true,
        },
        {
            id: '2',
            message: {
                text: 'How are you? 4',
            },
            sender: 'other',
            timestamp: new Date("2025-10-28T16:25:00"),
            isRead: true,
        },
    ]);

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleSendMessage = (message: Message) => {
        console.log(message);
    };

    return (
        <View className='flex-1'>
            <ChatRoomHeader
                onGoBack={handleGoBack}
                avatar={chat.avatar}
                name={chat.name}
                status="Online"
            />
            <ChatRoomContent
                chats={chats}
            />
            <ChatRoomFooter
                onSend={handleSendMessage}
            />
        </View>
    )
}

const styles = StyleSheet.create({})