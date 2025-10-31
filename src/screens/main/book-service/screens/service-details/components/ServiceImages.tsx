import { Image, ImageRequireSource, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PagerView from 'react-native-pager-view'
import { PageIndicator } from 'react-native-page-indicator'
import { useState } from 'react'

export default function ServiceImages({images}: {images: ImageRequireSource[]}) {
    const [currentImage, setCurrentImage] = useState(0);

    return (
        <View className="rounded-[24px] h-[228px] overflow-hidden">
            <PagerView
                style={{
                    flex: 1                            
                }}
                initialPage={0}
                onPageSelected={(e) => setCurrentImage(e.nativeEvent.position)}
            >
                {
                    images.map((image, index) => (
                        <View key={index}>
                            <Image
                                source={image}
                                className='w-full h-[228px]'
                            />
                        </View>
                    ))
                }
            </PagerView>
            <View className='absolute w-full bottom-8 items-center'>
                <PageIndicator
                    count={images.length}
                    current={currentImage}
                    color="#fff"
                    opacity={1}
                    activeColor="#000"
                    size={8}
                    dashSize={30}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})