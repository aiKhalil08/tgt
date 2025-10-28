import { StyleSheet, View } from 'react-native'
import React from 'react'
import CheckBox from '@/components/forms/CheckBox'
import CustomText from '@/components/CustomText';
import IconProps from '@/assets/icons/IconProps';

export default function SectionWrapper({title, logo, isSelected, onPress, children}: {title: string, logo?: React.FC<IconProps>, isSelected: boolean, onPress: () => void, children?: React.ReactNode}) {    
    return (
        <View
            className='rounded-[10px] bg-white p-4 border border-[#00000011]'
            style={{
                shadowColor: "#00000014",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 1,
                shadowRadius: 8,
                elevation: 2,
            }}
        >
            <View className='gap-4 flex-row items-center'>
                <CheckBox
                    isChecked={isSelected}
                    onPress={onPress}
                />
                <CustomText className='!text-black !font-manrope-medium !font-medium !text-[16px]'>
                    {title}
                </CustomText>
            </View>
            {children && isSelected && <View className='mt-6'>{children}</View>}
        </View>
    )
}

const styles = StyleSheet.create({})