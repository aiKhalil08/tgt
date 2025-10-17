import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput, { CustomTextInputProps } from './CustomTextInput'
import LockSvg from '@/assets/icons/Lock'
import EyeSvg from '@/assets/icons/Eye'

type PasswordInputProps = CustomTextInputProps;

export default function PasswordInput({ ...props }: PasswordInputProps) {
    const [showPassword, setShowPassword] = useState(false);
    
    const handleRightIconPress = () => {
        setShowPassword(!showPassword);
    }
    
    return (
        <CustomTextInput
            {...props}
            placeholder={props.placeholder || 'Password'}
            secureTextEntry={!showPassword}
            LeftIcon={LockSvg}
            RightIcon={EyeSvg}
            onRightIconPress={handleRightIconPress}
        />
    )
}

const styles = StyleSheet.create({})