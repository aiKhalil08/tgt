import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomTextInput from './CustomTextInput'
import PhoneCodeSvg from '@/assets/icons/PhoneCode';

interface PhoneInputProps {
    placeholder?: string;
    value: string;
    onChangeText: (value: string) => void;
}

export default function PhoneInput({
    placeholder,
    value,
    onChangeText,
}: PhoneInputProps) {
    return (
       <CustomTextInput
            placeholder={placeholder || 'Mobile number'}
            keyboardType='phone-pad'
            value={value}
            onChangeText={(value) => onChangeText(value)}
            LeftIcon={PhoneCodeSvg}
        />
    )
}

const styles = StyleSheet.create({})