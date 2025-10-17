import { StyleSheet, View, ViewProps } from 'react-native'
import React from 'react'

export default function FormGroup({ children, ...props }: { children: React.ReactNode } & ViewProps) {
    return (
        <View
            {...props}
            className={`gap-4 ${props.className}`}
        >
            {children}
        </View>
    )
}

const styles = StyleSheet.create({})