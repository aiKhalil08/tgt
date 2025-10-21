import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { BookServiceStackParamList } from '../BookServiceStack'
import Panel from '@/components/Panel'
import CustomButton from '@/components/CustomButton'
import CheckSvg from '@/assets/icons/Check'
import PlusSvg from '@/assets/icons/Plus'

type SelectTypeProps = NativeStackScreenProps<BookServiceStackParamList, 'SelectType'>

export default function SelectType({route, navigation}: SelectTypeProps) {
    const [selectedType, setSelectedType] = useState<number | null>(null);

    const handleContinue = () => {
        navigation.navigate('SelectDate')
    }

    const types = [
        {
            id: 1,
            name: "6 - 10 Big lines",
            price: "R400"
        },
        {
            id: 2,
            name: "11 - 14 Big lines",
            price: "R480"
        },
        {
            id: 3,
            name: "15 - 20 Big lines",
            price: "R560"
        },
        {
            id: 4,
            name: "20+ Big lines",
            price: "R640"
        },
    ]

    return (
        <View className='flex-1 p-4'>
            <ScrollView
                contentContainerStyle={{
                    gap: 28
                }}
            >
                {
                    types.map((type) => (
                        <TypePanel
                            key={type.name}
                            type={type}
                            isSelected={type.id === selectedType}
                            onSelect={() => setSelectedType(type.id)}
                        />
                    ))
                }
            </ScrollView>
            <CustomButton
                onPress={handleContinue}
                className='mt-auto'
                title="Continue"
            />
        </View>
    )
}

const TypePanel = ({type, isSelected, onSelect}: {type: {name: string, price: string}, isSelected: boolean, onSelect: () => void}) => {
    const rightElement = isSelected ? (
        <View className='w-5 h-5 items-center justify-center bg-primary rounded-full border-2 border-primary'>
            <CheckSvg size={14} color='#fff' />
        </View>
    ) : (
        <View className='w-5 h-5 items-center justify-center bg-white rounded-full border border-black'>
            <PlusSvg size={14} color='#000' />
        </View>
    );

    return (
        <Panel
            onPress={onSelect}
            title={type.name}
            titleClassName='!font-manrope-medium !font-medium text-[16px] !text-[#0B0C15]'
            subTitle={`Types: ${type.price}`}
            subTitleClassName="!text-[#939393] !font-manrope-bold !font-bold text-[12px]"
            className='!rounded-[10px] !p-3'
            rightElement={rightElement}
        />
    )
}

const styles = StyleSheet.create({})