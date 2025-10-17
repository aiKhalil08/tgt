import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ScreenView({ children }: { children: React.ReactNode }) {
    return (
        <View className='flex-1'>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({})