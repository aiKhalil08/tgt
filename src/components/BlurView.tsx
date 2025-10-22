import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BlurViewProps, BlurView as RNBlurView } from '@react-native-community/blur';

export default function BlurView({blurType = "dark", blurAmount = 1, children, style }: { blurType?: "dark" | "light", blurAmount?: number, children: React.ReactNode } & BlurViewProps) {
    return (
        <RNBlurView
            style={{
                flex: 1,
                ...style
            }}
            blurType={blurType}
            blurAmount={blurAmount}
        >
            {children}
        </RNBlurView>
    )
}

const styles = StyleSheet.create({})