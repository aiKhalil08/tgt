import { StyleSheet } from 'react-native'
import React from 'react'
import CustomText from '@/components/CustomText'

export function Title({ children }: { children: string }) {
    return (
        <CustomText className='text-[24px] font-bold !font-manrope-bold'>
            {children}
        </CustomText>
    )
}

export function SubTitle({ children }: { children: string }) {
    return (
        <CustomText className='text-[14px] tracking-wider !font-nunito-sans-regular text-grey-80'>
            {children}
        </CustomText>
    )
}

const styles = StyleSheet.create({})