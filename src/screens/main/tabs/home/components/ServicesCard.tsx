import { Image, ImageBackground, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '@/components/CustomText';
import CustomButton from '@/components/CustomButton';
import LinearGradient from 'react-native-linear-gradient';

type Service = {
    name: string;
    description: string;
    buttonText: string;
    image: ImageSourcePropType;
    onPress: () => void;
}

export default function ServicesCard({ onBookService }: { onBookService: () => void }) {
    const Services: Service[] = [
        {
            name: 'Book Appointment',
            description: 'Reserve your style in seconds',
            buttonText: 'Book Now',
            image: require('@/assets/images/services/book-appointment.png'),
            onPress: onBookService,
        },
        {
            name: 'Shop Products',
            description: 'Nourishment, care, gentle essentials',
            buttonText: 'Shop',
            image: require('@/assets/images/services/shop-products.png'),
            onPress: () => {},
        },
        {
            name: 'Aftercare Tips',
            description: 'Healthy hair starts with daily care.',
            buttonText: 'Read',
            image: require('@/assets/images/services/aftercare-tips.png'),
            onPress: () => {},
        },
    ];

    return (
        <View
            className='gap-[22px]'
        >
            {Services.map((service, index) => (
                <ServiceCard
                    key={index}
                    service={service}                />
            ))}
        </View>
    )
}

function ServiceCard({
    service,
}: {
    service: Service;
}) {
    return (
        <View className="rounded-[10px] h-[200px] overflow-hidden">
            <ImageBackground
                source={service.image}
                className='w-full h-[200px]'
            >
                <LinearGradient
                    colors={['#000000bb', '#00000000']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{
                        flex: 1,
                    }}
                >
                    <View className='flex-1 p-4 items-start justify-center'>
                        <CustomText
                            className='font-manrope-extrabold font-extrabold text-[24px] text-white'
                        >
                            {service.name}
                        </CustomText>
                        <CustomText
                            className='font-nunito-sans-regular text-[12px] text-white mt-[2px]'
                        >
                            {service.description}
                        </CustomText>
                        <CustomButton
                            title={service.buttonText}
                            onPress={service.onPress}
                            titleClassName='text-[12px] font-medium font-nunito-sans-medium'
                            className='mt-2 !py-2 !px-[10px]'
                        /> 
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({})