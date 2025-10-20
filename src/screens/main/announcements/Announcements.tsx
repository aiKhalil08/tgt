import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AnnouncementList from './components/AnnouncementList'

export default function Announcements() {
    return (
        <View className='flex-1 bg-white p-4'>
            <AnnouncementList />
        </View>
    )
}

const styles = StyleSheet.create({})