import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BasingSvg from '@/assets/icons/Basin';
import TreatmentSvg from '@/assets/icons/Treatment';
import IconProps from '@/assets/icons/IconProps';
import CustomText from '@/components/CustomText';

export default function CategoriesSlider({
    selectedCategory,
    onSelectCategory,
}: {
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
}) {
    const categories: { name: string; icon: React.FC<IconProps> }[] = [
        {
            name: 'Washes',
            icon: BasingSvg,
        },
        {
            name: 'Treatments',
            icon: TreatmentSvg,
        },
        {
            name: 'Detangling',
            icon: TreatmentSvg,
        },
    ];

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                gap: 16,
                flexDirection: 'row',
            }}
        >
            {
                categories.map((category, index) => (
                    <Pressable
                        key={index}
                        onPress={() => onSelectCategory(category.name)}
                        className={`rounded-[50px] py-3 px-6 border border-primary bg-[#D3862A1C] flex-row gap-2 items-center ${selectedCategory === category.name ? 'bg-[#D3862A1C]' : 'bg-[#D3862A]'}`}
                    >
                        <category.icon color={selectedCategory === category.name ? '#D3862A' : '#ffffff'} />
                        <CustomText
                            className={`${selectedCategory === category.name ? '!text-[#D3862A]' : '!text-[#ffffff]'} !font-semibold !font-manrope-semibold`}
                        >
                            {category.name}
                        </CustomText>
                    </Pressable>
                ))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({})