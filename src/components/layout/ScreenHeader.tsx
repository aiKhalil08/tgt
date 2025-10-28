import { Image, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import CustomText from '../CustomText'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import ChevronLeftSvg from '@/assets/icons/ChevronLeft'
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'

export default function ScreenHeader(props: NativeStackHeaderProps | BottomTabHeaderProps) {
    const insets = useSafeAreaInsets();
    
    // const hasBackButton = props.navigation.getState().index > 0;
    const title = props.options.title || props.route.name;

    // const isFormSheet = props.options.presentation === "formSheet";

    return (
        <View style={{ paddingTop: insets.top }} className='flex-row items-center gap-2 px-4 pb-2 bg-white'>
            {/* {
                hasBackButton && (
                )
            } */}
            <Pressable onPress={() => props.navigation.goBack()}>
                <ChevronLeftSvg size={24} color="#101010" />
            </Pressable>
            <CustomText className='text-[16px] font-manrope-semibold font-semibold leading-normal'>{title}</CustomText>
        </View>
    )
}

const styles = StyleSheet.create({})