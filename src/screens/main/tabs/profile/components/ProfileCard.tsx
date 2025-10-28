import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '@/components/CustomText'
import ChevronSvg from '@/assets/icons/Chevron'

export default function ProfileCard({onEdit}: {onEdit: () => void}) {
    return (
        <View
            className='px-6 py-5 flex-row gap-2 bg-white'
            style={{
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowColor: "#606170",
                shadowOpacity: 0.1,
                shadowRadius: 2,
                elevation: 3,
            }}
        >
            <Image
                source={require('@/assets/images/avatar.png')}
                className='w-[54px] h-[54px] rounded-full'
            />
            <View className='flex-1 flex-row justify-between'>
                <View className='justify-between'>
                    <CustomText className='!font-manrope-bold !font-bold text-[19px] !text-[#1C1C28]'>Thandeka</CustomText>
                    <CustomText className='text-[13px] !text-[#8F90A6] tracking-wider'>+27 654 5678</CustomText>
                </View>
                <View className='justify-between'>
                    <Pressable
                        className='gap-1 flex-row items-center justify-end'
                        onPress={onEdit}
                    >
                        <CustomText className='!text-primary !font-manrope-bold !font-bold'>Edit</CustomText>
                        <ChevronSvg color='#D3862A' size={16} />
                    </Pressable>
                    <CustomText className='text-[13px] !text-[#8F90A6] tracking-wider'>ThandekaQ11@gmail.com</CustomText>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})