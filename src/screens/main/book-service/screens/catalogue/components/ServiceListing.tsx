import { ImageBackground, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import CustomText from '@/components/CustomText'

type Item = {name: string, previewImage: ImageSourcePropType}

export default function ServiceListing({item, onPress}: {item: Item, onPress: (item: Item) => void}) {
    return (
        <Pressable
            onPress={() => onPress(item)}
        >
            <ImageBackground
                source={item.previewImage}
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
        </Pressable>
    )
}

const styles = StyleSheet.create({})