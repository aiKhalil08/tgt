import { Pressable, PressableProps, StyleSheet, View } from 'react-native'
import React from 'react'

export default function CheckBox({isChecked, ...props}: {isChecked: boolean} & PressableProps) {
    return (
        <Pressable
            className={`rounded-full border-2 p-[2px] w-5 h-5 ${isChecked ? 'border-primary' : 'border-grey-60'}`}
            {...props}
        >
            <View className={`rounded-full bg-primary w-full h-full ${isChecked ? 'bg-primary' : 'bg-grey-60'}`} />
        </Pressable>
    )
}

const styles = StyleSheet.create({})