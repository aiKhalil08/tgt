import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Announcements from '@/screens/main/announcements/Announcements'

export default function AnnouncementsTab() {
    return (
        <View className='flex-1'>
            <Announcements />
        </View>
    )
}

const styles = StyleSheet.create({})