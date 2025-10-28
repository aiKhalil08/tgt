import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageSourcePropType } from 'react-native'
import CustomText from '@/components/CustomText';
import { format } from 'date-fns';
import { ChatRoomParams } from '@/screens/main/chat-room/ChatRoom';

type Chat = {
    id: string;
    avatar: ImageSourcePropType;
    name: string;
    lastMessage: string;
    timestamp: Date;
    unreadCount: number;
}

export default function ChatList({filter, onGoToChat}: {filter?: string, onGoToChat: (chat: ChatRoomParams) => void}) {
    const chats: Chat[] = [
        {
            id: "1",
            avatar: require('@/assets/images/tgt-avatar.png'),
            name: "The Gentle Touch Support",
            lastMessage: "Need quick help?",
            timestamp: new Date(),
            unreadCount: 1,
        },
        {
            id: "2",
            avatar: require('@/assets/images/avatar.png'),
            name: "Zama",
            lastMessage: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae inventore cum magni, quo deserunt temporibus soluta voluptatum quam animi optio similique ab, ea, odio excepturi ipsum incidunt expedita. Reprehenderit, assumenda?",
            timestamp: new Date(),
            unreadCount: 17,
        },
        {
            id: "3",
            avatar: require('@/assets/images/hairstyles/braids.png'),
            name: "Thandetta",
            lastMessage: "Heyyyy",
            timestamp: new Date(),
            unreadCount: 1,
        },
        {
            id: "4",
            avatar: require('@/assets/images/hairstyles/silk-press.png'),
            name: "Jane",
            lastMessage: "Where are you?",
            timestamp: new Date(),
            unreadCount: 2,
        },
    ];

    const filteredChats = filter ? chats.filter((chat) => chat.name.toLowerCase().includes(filter?.toLowerCase() || '')) : chats;

    return (
        <View className='border-b border-b-grey-20'>
            {
                filteredChats.map((chat, index) => (
                    <ChatListing key={index} chat={chat} onGoToChat={onGoToChat} />
                ))
            }
        </View>
    )
}

const ChatListing = ({chat, onGoToChat}: {chat: Chat, onGoToChat: (chat: ChatRoomParams) => void}) => {

    const handleOpenChat = () => {
        onGoToChat({
            id: chat.id,
            avatar: chat.avatar,
            name: chat.name,
        });
    }

    const formattedTime = format(chat.timestamp, "h:mm a");

    return (
        <Pressable
            className='py-4 flex-row gap-6'
            onPress={handleOpenChat}
        >
            <Image
                source={chat.avatar}
                className='w-[48px] h-[48px] rounded-full bg-grey-40'
            />
            <View className='justify-between flex-1'>
                <CustomText
                    numberOfLines={1}
                    className='!font-manrope-bold !font-bold text-[16px] !text-grey-100'
                >
                    {chat.name}
                </CustomText>
                <CustomText
                    numberOfLines={1}
                    className='!font-nunito-sans-regular !font-medium !text-[14px] !text-grey-80 tracking-wide'
                >
                    {chat.lastMessage}
                </CustomText>
            </View>
            <View className='justify-between items-end'>
                <CustomText className='!font-nunito-sans-regular !text-[12px] !text-grey-60 tracking-widest'>
                    {formattedTime}
                </CustomText>
                {
                    chat.unreadCount > 0 && (
                        <View className='bg-primary rounded-full min-w-[20px] min-h-[20px] p-1 items-center justify-center'>
                            <CustomText className='!text-white !font-manrope-bold !font-bold text-[10px]'>
                                {chat.unreadCount > 99 ? "99+" : chat.unreadCount}
                            </CustomText>
                        </View>
                    )
                }
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({})