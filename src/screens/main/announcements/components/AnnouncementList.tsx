import { ImageBackground, ImageSourcePropType, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '@/components/CustomText'
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '@/components/CustomButton';

type Announcement = {
    name: string;
    description: string;
    buttonText: string;
    image: ImageSourcePropType;
    datePosted: string;
    onPress: () => void;
}

const Announcements: Announcement[] = [
    {
        name: 'Book Appointment',
        description: 'Reserve your style in seconds',
        buttonText: 'Book Now',
        image: require('@/assets/images/services/book-appointment.png'),
        datePosted: '30 min ago',
        onPress: () => {},
    },
    {
        name: 'Shop Products',
        description: 'Nourishment, care, gentle essentials',
        buttonText: 'Shop',
        image: require('@/assets/images/services/shop-products.png'),
        datePosted: 'a day ago',
        onPress: () => {},
    },
    {
        name: 'Aftercare Tips',
        description: 'Healthy hair starts with daily care.',
        buttonText: 'Read',
        image: require('@/assets/images/services/aftercare-tips.png'),
        datePosted: '2 days ago',
        onPress: () => {},
    },
]

export default function AnnouncementList() {
    return (
        <View className='flex-1'>
            <View className='flex-row justify-between items-center'>
                <CustomText
                    className='text-[16px] !font-manrope-semibold !font-semibold'
                >Recent</CustomText>
                <Pressable>
                    <CustomText
                        className='!font-nunito-sans-regular !text-grey-80'
                    >Mark all as read</CustomText>
                </Pressable>
            </View>
            <ScrollView
                className='mt-6 flex-1'
                contentContainerStyle={{
                    gap: 16
                }}
                showsVerticalScrollIndicator={false}
            >
                {
                    Announcements.map((announcement, index) => (
                        <AnnouncementCard
                            key={index}
                            announcement={announcement}
                        />
                    ))
                }
            </ScrollView>
        </View>
    )
}

function AnnouncementCard({
    announcement,
}: {
    announcement: Announcement;
}) {
    return (
        <View className="rounded-[10px] h-[200px] overflow-hidden">
            <ImageBackground
                source={announcement.image}
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
                            className='!font-nunito-sans-semibold !font-semibold !text-[16px] !text-white'
                        >
                            {announcement.name}
                        </CustomText>
                        <CustomText
                            className='!font-manrope-regular !text-[12px] !text-white mt-[10px]'
                        >
                            {announcement.description}
                        </CustomText>
                        <CustomButton
                            title={announcement.buttonText}
                            onPress={announcement.onPress}
                            titleClassName='text-[12px] font-medium font-nunito-sans-medium'
                            className='mt-[18px] !py-2 !px-[10px]'
                        />
                        <CustomText
                            className='absolute bottom-4 right-8 !font-nunito-sans-regular font-medium !text-[16px] !text-white tracking-wider'
                        >
                            {announcement.datePosted}
                        </CustomText>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({})