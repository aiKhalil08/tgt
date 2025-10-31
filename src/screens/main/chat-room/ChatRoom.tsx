import { ImageSourcePropType, ScrollView, StyleSheet, View } from 'react-native'
import React, { createContext, RefObject, useEffect, useRef, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainStackParamList } from '@/navigation/MainStack'
import ChatRoomHeader from './components/ChatRoomHeader';
import ChatRoomFooter from './components/ChatRoomFooter';
import ChatRoomMain from './components/ChatRoomMain';
import ChatRoomContext from './ChatRoomContext';


export type ChatRoomParams = {
    id: string,
    avatar: ImageSourcePropType,
    name: string,
};

export type Message = {
    id: string,
    content: Content,
    sender: string,
    timestamp: Date,
    isRead: boolean,
}

export type Content = {
    text: string,
    file?: string,
}

type ChatRoomProps = NativeStackScreenProps<MainStackParamList, 'ChatRoom'>

export default function ChatRoom({route, navigation}: ChatRoomProps) {
    const {chat} = route.params;

    const [messages, setMessages] = useState<Message[]>([
        {
            id: '10',
            content: {
                text: 'Hello 1',
            },
            sender: 'me',
            timestamp: new Date("2025-10-26T15:26:00"),
            isRead: true,
        },
        {
            id: '22',
            content: {
                text: 'How are you? 2',
            },
            sender: 'other',
            timestamp: new Date("2025-10-27T11:26:00"),
            isRead: true,
        },
        {
            id: '1',
            content: {
                text: 'Hello 3 lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit',
            },
            sender: 'me',
            timestamp: new Date("2025-10-28T16:16:00"),
            isRead: true,
        },
        {
            id: '3',
            content: {
                text: 'Hello 3 lorem ipsum dolor sit amet consectetur adipiscing elit',
            },
            sender: 'me',
            timestamp: new Date("2025-10-28T16:17:00"),
            isRead: true,
        },
        {
            id: '4',
            content: {
                text: 'Hello 3 lorem ipsum dolor sit amet consectetur adipiscing elit',
            },
            sender: 'me',
            timestamp: new Date("2025-10-28T16:23:00"),
            isRead: true,
        },
        {
            id: '2',
            content: {
                text: 'How are you? 4',
            },
            sender: 'other',
            timestamp: new Date("2025-10-28T16:25:00"),
            isRead: true,
        },
    ]);
    const [otherIsTyping, setOtherIsTyping] = useState(false);

    const scrollRef = useRef<ScrollView>(null);

    useEffect(() => {
        const lastMessage = messages[messages.length - 1];
        
        if (lastMessage.sender === 'me') {
            simulateOtherSend();
        }
    }, [messages])

    useEffect(() => {
        scrollRef.current?.scrollToEnd({animated: true});
    }, [messages]);

    const simulateOtherSend = async () => {
        const randomMessages = [
            "Hello",
            "How are you?",
            "I'm good, thanks!",
            "Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipiscing elit",
        ]

        const randomMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];

        setOtherIsTyping(true);

        await new Promise((resolve) => setTimeout(() => resolve(""), 3000));

        handleSendMessage({
            text: randomMessage,
        }, true);

        setOtherIsTyping(false);
    };

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleSendMessage = (content: Content, isOther?: boolean) => {
        console.log(content);
        setMessages((prev) => [...prev, {
            id: Date.now().toString(),
            content,
            sender: isOther ? 'other' : 'me',
            timestamp: new Date(),
            isRead: true,
        }]);
    };

    return (
        <ChatRoomContext.Provider value={{
            messages,
            otherIsTyping,
            scrollRef,
            handleSendMessage,
        }}>
            <View className='flex-1'>
                <ChatRoomHeader
                    onGoBack={handleGoBack}
                    avatar={chat.avatar}
                    name={chat.name}
                    status="Online"
                />
                <ChatRoomMain />
                <ChatRoomFooter
                    onSend={handleSendMessage}
                />
            </View>
        </ChatRoomContext.Provider>
    )
}

const styles = StyleSheet.create({})