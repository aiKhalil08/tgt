import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { BookServiceStackParamList } from '../BookServiceStack'
import CustomText from '@/components/CustomText'
import ClockSvg from '@/assets/icons/Clock'
import Panel from '@/components/Panel'
import ChevronLeftSvg from '@/assets/icons/ChevronLeft'

type ServiceDetailsProps = NativeStackScreenProps<BookServiceStackParamList, 'ServiceDetails'>

export default function ServiceDetails({route, navigation}: ServiceDetailsProps) {
    const {service} = route.params;

    const navigateToTypes = (catName: string) => {
        navigation.navigate('SelectType', {
            categoryName: catName
        })
    }

    const categories = [
        {
            name: "Cornrows with Natural Hair",
            types: 4
        },
        {
            name: "Cornrows with Hair Piece",
            types: 5
        }
    ]

    return (
        <View className='flex-1 p-4'>
            <ScrollView>
                <View className="rounded-[24px] h-[228px] overflow-hidden">
                    <ImageBackground
                        source={service.previewImage}
                        className='w-full h-[228px] '
                    />
                </View>
                <View className='mt-6 gap-4'>
                    <CustomText className='!text-grey-100 !font-manrope-bold !font-bold !text-[24px]'>
                        {service.name}
                    </CustomText>
                    <View className='flex-row gap-2 items-center'>
                        <ClockSvg size={20} color="#50555C" />
                        <CustomText className='!font-nunito-sans-regular text-[16px] !text-grey-100 tracking-wider'>
                            Duration  | Painless 🌿 | Growth ✨ 
                        </CustomText>
                    </View>
                    <View>
                        <CustomText className='!font-manrope-bold !font-bold !text-grey-100 text-[16px]'>
                            About Service
                        </CustomText>
                        <CustomText className='mt-[14px] !font-nunito-sans-regular !text-grey-80 tracking-wider'>
                            A neat, painless protective style that promotes growth and lasts up to 3 weeks.
                        </CustomText>
                    </View>
                    <View className='mt-6 gap-5'>
                        {
                            categories.map((category) => (
                                <Panel
                                    key={category.name}
                                    onPress={() => navigateToTypes(category.name)}
                                    title={category.name}
                                    titleClassName='!font-manrope-medium !font-medium text-[16px] !text-[#0B0C15]'
                                    subTitle={`Types: ${category.types}`}
                                    subTitleClassName="!text-[#939393] !font-manrope-bold !font-bold text-[12px]"
                                    className='!rounded-[10px] !p-3'
                                    rightElement={
                                        <View className='rotate-180'>
                                            <ChevronLeftSvg color='#D3862A' size={24} />
                                        </View>
                                    }
                                />
                            ))
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})