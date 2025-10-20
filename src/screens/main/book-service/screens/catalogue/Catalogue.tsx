import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '@/components/forms/SearchBar'
import CategoriesSlider from './components/CategoriesSlider'
import { Grid } from '@/components/GridView';
import CustomText from '@/components/CustomText';
import LinearGradient from 'react-native-linear-gradient';

export default function Catalogue() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Washes');

    const services: Record<string, { name: string; preview: string }[]> = {
        Washes: [
            {
                name: "Braids",
                preview: require('@/assets/images/hairstyles/braids.png'),
            },
            {
                name: "Cornrows",
                preview: require('@/assets/images/hairstyles/cornrows.png'),
            },
            {
                name: "Silk - Press",
                preview: require('@/assets/images/hairstyles/silk-press.png'),
            },
            {
                name: "Spring Twists",
                preview: require('@/assets/images/hairstyles/spring-twists.png'),
            },
            {
                name: "Bantu Knots",
                preview: require('@/assets/images/hairstyles/bantu-knots.png'),
            },
            {
                name: "Sew - In",
                preview: require('@/assets/images/hairstyles/sew-in.png'),
            },
        ],
        Treatments: [
            {
                name: "Braids Treatment",
                preview: require('@/assets/images/hairstyles/braids.png'),
            },
            {
                name: "Cornrows Treatment",
                preview: require('@/assets/images/hairstyles/cornrows.png'),
            },
            {
                name: "Silk - Press Treatment",
                preview: require('@/assets/images/hairstyles/silk-press.png'),
            },
            {
                name: "Spring Twists Treatment",
                preview: require('@/assets/images/hairstyles/spring-twists.png'),
            },
            {
                name: "Bantu Knots Treatment",
                preview: require('@/assets/images/hairstyles/bantu-knots.png'),
            },
            {
                name: "Sew - In Treatment",
                preview: require('@/assets/images/hairstyles/sew-in.png'),
            },
        ],
        Detangling: [
            {
                name: "Braids Detangling",
                preview: require('@/assets/images/hairstyles/braids.png'),
            },
            {
                name: "Cornrows Detangling",
                preview: require('@/assets/images/hairstyles/cornrows.png'),
            },
            {
                name: "Silk - Press Detangling",
                preview: require('@/assets/images/hairstyles/silk-press.png'),
            },
            {
                name: "Spring Twists Detangling",
                preview: require('@/assets/images/hairstyles/spring-twists.png'),
            },
            {
                name: "Bantu Knots Detangling",
                preview: require('@/assets/images/hairstyles/bantu-knots.png'),
            },
            {
                name: "Sew - In Detangling",
                preview: require('@/assets/images/hairstyles/sew-in.png'),
            },
        ],
    }

    const filteredServices = services[selectedCategory].filter((service) => service.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return (
        <View className='flex-1 p-4'>
            <SearchBar
                searchTerm={searchTerm}
                onChange={setSearchTerm}
            />
            <ScrollView
                className='mt-7'
                showsVerticalScrollIndicator={false}
            >
                <View className="rounded-[24px] h-[200px] overflow-hidden">
                    <ImageBackground
                        source={require('@/assets/images/catalogue-header.png')}
                        className='w-full h-[200px] '
                    />
                </View>
                <View className='mt-8'>
                    <CategoriesSlider
                        selectedCategory={selectedCategory}
                        onSelectCategory={setSelectedCategory}
                    />
                </View>
                <View className='mt-8'>
                    <Grid
                        items={
                            filteredServices
                        }
                        cols={2}
                        gap={16}
                        renderItem={(item: any) => {
                            return (
                                <ImageBackground
                                source={item.preview}
                                className='h-[220px] rounded-[18px] overflow-hidden justify-end'
                                >
                                    <LinearGradient
                                        colors={['#00000000', '#000000bb']}
                                        style={{
                                            height: "50%",
                                            justifyContent: "flex-end",
                                        }}
                                    >
                                        <CustomText
                                            className='text-white !font-nunito-sans-bold !font-bold text-[16px] p-4'
                                        >
                                            {item.name}
                                        </CustomText>
                                    </LinearGradient>
                                </ImageBackground>
                            )
                        }}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})