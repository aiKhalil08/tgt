import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '@/components/CustomText'
import ChevronSvg from '@/assets/icons/Chevron'

export default function LocationCard({onSelectLocation}: {onSelectLocation: () => void}) {
    return (
        <View className='gap-1'>
            <CustomText
                className='!text-[#939393] !font-medium !font-manrope-medium'
            >
                Location
            </CustomText>
            <View className='flex-row items-center justify-between'>
                <CustomText
                    className='text-black !font-medium !font-manrope-medium text-[16px]'
                >
                    Woodstock,Cape Town
                </CustomText>
                <Pressable
                    className='rotate-90'
                    onPress={onSelectLocation}
                >
                    <ChevronSvg color='#939393' size={24} />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})


// sk.eyJ1IjoiYWlraGFsaWwwOCIsImEiOiJjbWd5MHQyNGQwZHFpMmlzOXJjb3VqaWVqIn0.mZVnwmcVXBIkdL5_4EhLCQ


// AIzaSyCjNBQnTOlcDGN3GV0ZHAeaJvmK7IYEwbg