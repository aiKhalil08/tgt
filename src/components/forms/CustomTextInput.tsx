import { Pressable, StyleSheet, TextInput, View, ViewStyle } from 'react-native'
import React, { useState } from 'react'
import { TextInputProps } from 'react-native'
import IconProps from '@/assets/icons/IconProps'

export type CustomTextInputProps = TextInputProps & {
    label?: string,
    error?: string,
    LeftIcon?: React.FC<IconProps>,
    RightIcon?: React.FC<IconProps>,
    onRightIconPress?: () => void,
}

export default function CustomTextInput({ label, error, LeftIcon, RightIcon, onRightIconPress, ...props }: CustomTextInputProps) {
    const [isFocused, setIsFocused] = useState(false);

    const isEmpty = props.value?.trim() === '';

    return (
        <View className='gap-2'>
            {/* {
                label &&
                <CustomText className='!text-gray-80 !font-jakarta-extrabold tracking-tighter text-sm'>{label}</CustomText>
            } */}
            <View className='w-full h-[56px] rounded-[50px]'>
                <TextInput
                    {...props}
                    className={`w-full h-full rounded-[50px] py-4 px-6 text-black tracking-wide text-[13px] border ${LeftIcon ? 'pl-14' : ''} ${RightIcon ? 'pr-14' : ''} ${props.className} ${isFocused ? 'border-primary bg-primary/10' : 'border-[#F0F3F6] bg-[#F0F3F6]'}`}
                    placeholderTextColor='#ADB3BC'
                    autoFocus={false}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                {
                    LeftIcon && <View className='absolute left-6 top-1/2 -translate-y-1/2'>
                        {<LeftIcon size={18} color={isFocused ? '#D3862A' : isEmpty ? '#ADB3BC' : '#000'} />}
                    </View>
                }
                {
                    RightIcon && (
                        <Pressable
                            onPress={onRightIconPress}
                            className='absolute right-6 top-1/2 -translate-y-1/2'
                        >
                            <RightIcon
                                size={18}
                                color={isFocused ? '#D3862A' : isEmpty ? '#ADB3BC' : '#000'} />
                        </Pressable>
                    )
                }
            </View>
            {/* {
                error &&
                <ErrorAlert error={error} />
            } */}
        </View>
    )
}

const styles = StyleSheet.create({})