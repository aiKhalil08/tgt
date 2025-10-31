import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Animated, { interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, Extrapolation } from 'react-native-reanimated';

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

export default function ScreenLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const insets = useSafeAreaInsets();

    const scrollY = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollY.value = event.contentOffset.y;
        },
    });

    const imageStyle = useAnimatedStyle(() => {
        const size = interpolate(
          scrollY.value,
          [0, 100],
          [104, 52],
          Extrapolation.CLAMP
        );
    
        return {
          width: size,
          height: size,
        };
      });

    return (
        <View
            className='flex-1'
            style={{
                paddingTop: insets.top,
            }}
        >
            <View className='items-center'>
                <Animated.Image
                    style={imageStyle}  
                    source={require('@/assets/images/logo.png')}
                />
            </View>
            <AnimatedScrollView
                onScroll={scrollHandler}
                scrollEventThrottle={16}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
                showsVerticalScrollIndicator={false}
            >
                {children}
            </AnimatedScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})