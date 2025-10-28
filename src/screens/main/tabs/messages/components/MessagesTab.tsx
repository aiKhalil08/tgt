import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '@/components/forms/SearchBar'
import ChatList from './ChatList';
import { ChatRoomParams } from '@/screens/main/chat-room/ChatRoom';

export default function MessagesTab({onGoToChat}: {onGoToChat: (chat: ChatRoomParams) => void}) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (text: string) => {
        setSearchTerm(text);
    };

    return (
        <View className='flex-1 p-4'>
            <View className='border-b border-b-grey-20 pb-[18px] pt-[10px]'>
                <SearchBar
                    searchTerm={searchTerm}
                    onChange={handleSearchChange}
                    hideFilterIcon
                />
            </View>
            <ChatList
                filter={searchTerm}
                onGoToChat={onGoToChat}
            />
        </View>
    )
}

const styles = StyleSheet.create({})