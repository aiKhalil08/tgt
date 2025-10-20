import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '@/components/CustomText'

export default function NameCard({
    name,
}: {
    name: string;
}) {
    return (
         <View className='gap-2'>
            <CustomText
                className='!text-grey-100 !font-bold !font-manrope-bold text-[24px]'
            >
                Hello, {name}
            </CustomText>
            <CustomText
                className='!text-grey-80 !font-nunito-sans-regular'
            >
                Relax, explore, and book your next haircare experience.
            </CustomText>
        </View>
    )
}

const styles = StyleSheet.create({})