import { Image, ImageSourcePropType, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import CustomText from '@/components/CustomText'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import ChevronLeftSvg from '@/assets/icons/ChevronLeft';
import MoreVerticalSvg from '@/assets/icons/MoreVertical';

export default function ChatRoomHeader({onGoBack, avatar, name, status}: {onGoBack: () => void, avatar: ImageSourcePropType, name: string, status: "Online" | "Offline"}) {

    const insets = useSafeAreaInsets();

    const handleOpenMore = () => {
        
    };

    const statusTextColor = status === "Online" ? "#D3862A" : "#ADB3BC";

    return (
        <View
            className='p-4 flex-row bg-white items-center'
            style={{
                paddingTop: insets.top,
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowColor: "#606170",
                shadowOpacity: 0.1,
                shadowRadius: 2,
                elevation: 3,
            }}
        >
            <Pressable
                onPress={onGoBack}
                className='mr-4'
            >
                <ChevronLeftSvg size={24} color='#1C1C28'/>
            </Pressable>
            <Image
                source={avatar}
                className='w-[32px] h-[32px] rounded-full bg-grey-40'
            />
            <View className='ml-2 flex-1'>
                <CustomText className='!font-manrope-bold !font-bold text-[16px] !text-grey-100'>{name}</CustomText>
                <CustomText
                    className='!font-nunito-sans-regular text-[12px] tracking-widest'
                    style={{
                        color: statusTextColor,
                    }}
                >
                    {status}
                </CustomText>
            </View>
            <Pressable
                onPress={handleOpenMore}
            >
                <MoreVerticalSvg size={24} color='#D3862A'/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({})