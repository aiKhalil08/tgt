import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type SquircleButtonProps = {
    icon: React.ReactNode;
    onPress: () => void;
}

export default function SquircleButton({
    icon,
    onPress,
}: SquircleButtonProps) {
    return (
        <Pressable
            className='w-11 h-11 rounded-[10px] border border-[#F5F5F5] items-center justify-center'
            onPress={onPress}
        >
            {icon}
        </Pressable>
    )
}

const styles = StyleSheet.create({})