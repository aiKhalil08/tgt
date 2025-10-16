import { StyleSheet, Text as RNText, TextProps } from 'react-native'
import React from 'react'

export default function CustomText(props: TextProps & { children: React.ReactNode }) {
    return (
        <RNText
            {...props}
            className={`font-manrope-regular text-black ${props.className}`}
        >
            {props.children}
        </RNText>
    )
  }

const styles = StyleSheet.create({})