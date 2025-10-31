import { ImageBackground, ImageSourcePropType, ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '@/components/forms/SearchBar'
import CategoriesSlider from './components/CategoriesSlider'
import { Grid } from '@/components/GridView';
import ServiceListing from './components/ServiceListing';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BookServiceStackParamList } from '../../BookServiceStack';

type CatalogueScreenProps = NativeStackScreenProps<BookServiceStackParamList, 'Catalogue'>

export default function Catalogue({navigation}: CatalogueScreenProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Washes');

    const handleServicePress = (service: { name: string; previewImage: ImageSourcePropType }) => {
        navigation.navigate('ServiceDetails', {service});
    }

    const services: Record<string, { name: string; previewImage: ImageSourcePropType }[]> = {
        Washes: [
            {
                name: "Braids",
                previewImage: require('@/assets/images/hairstyles/braids.png'),
            },
            {
                name: "Cornrows",
                previewImage: require('@/assets/images/hairstyles/cornrows.png'),
            },
            {
                name: "Silk - Press",
                previewImage: require('@/assets/images/hairstyles/silk-press.png'),
            },
            {
                name: "Spring Twists",
                previewImage: require('@/assets/images/hairstyles/spring-twists.png'),
            },
            {
                name: "Bantu Knots",
                previewImage: require('@/assets/images/hairstyles/bantu-knots.png'),
            },
            {
                name: "Sew - In",
                previewImage: require('@/assets/images/hairstyles/sew-in.png'),
            },
        ],
        Treatments: [
            {
                name: "Braids Treatment",
                previewImage: require('@/assets/images/hairstyles/braids.png'),
            },
            {
                name: "Cornrows Treatment",
                previewImage: require('@/assets/images/hairstyles/cornrows.png'),
            },
            {
                name: "Silk - Press Treatment",
                previewImage: require('@/assets/images/hairstyles/silk-press.png'),
            },
            {
                name: "Spring Twists Treatment",
                previewImage: require('@/assets/images/hairstyles/spring-twists.png'),
            },
            {
                name: "Bantu Knots Treatment",
                previewImage: require('@/assets/images/hairstyles/bantu-knots.png'),
            },
            {
                name: "Sew - In Treatment",
                previewImage: require('@/assets/images/hairstyles/sew-in.png'),
            },
        ],
        Detangling: [
            {
                name: "Braids Detangling",
                previewImage: require('@/assets/images/hairstyles/braids.png'),
            },
            {
                name: "Cornrows Detangling",
                previewImage: require('@/assets/images/hairstyles/cornrows.png'),
            },
            {
                name: "Silk - Press Detangling",
                previewImage: require('@/assets/images/hairstyles/silk-press.png'),
            },
            {
                name: "Spring Twists Detangling",
                previewImage: require('@/assets/images/hairstyles/spring-twists.png'),
            },
            {
                name: "Bantu Knots Detangling",
                previewImage: require('@/assets/images/hairstyles/bantu-knots.png'),
            },
            {
                name: "Sew - In Detangling",
                previewImage: require('@/assets/images/hairstyles/sew-in.png'),
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
                stickyHeaderIndices={[1]}
            >
                <View className="rounded-[24px] h-[200px] overflow-hidden mb-6">
                    <ImageBackground
                        source={require('@/assets/images/catalogue-header.png')}
                        className='w-full h-[200px]'
                    />
                </View>
                <View className='bg-white pb-4'>
                    <CategoriesSlider
                        selectedCategory={selectedCategory}
                        onSelectCategory={setSelectedCategory}
                    />
                </View>
                <View className='mt-2'>
                    <Grid
                        items={
                            filteredServices
                        }
                        cols={2}
                        gap={16}
                        renderItem={(item: any) => {
                            return <ServiceListing item={item} onPress={handleServicePress} />
                        }}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})