import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MessagesSvg from '@/assets/icons/Messages';

export default function MessagesTabButton({color}: {color: string}) {
    const [unread, setUnread] = useState(false);
    
    return (
       <MessagesSvg color={color} unread={unread} />
    )
}

const styles = StyleSheet.create({})