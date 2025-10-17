import { ImageBackground, Pressable, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import CustomText from '@/components/CustomText'
import CustomButton from '@/components/CustomButton'
import { PageIndicator } from 'react-native-page-indicator'
import GoogleSvg from '@/assets/icons/Google.svg'
import Animated, { Easing, useSharedValue, withTiming } from 'react-native-reanimated'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AppStackParamList } from '@/navigation/AppNavigator'
import EnvelopeSvg from '@/assets/icons/Envelope'

type OnboardingScreenProps = NativeStackScreenProps<AppStackParamList, 'OnBoarding'>

export default function Onboarding({ navigation }: OnboardingScreenProps) {
    const [currentScreen, setCurrentScreen] = useState(0);

    const bgTranslateX = useSharedValue<string>("0%");
    const bgTranslateY = useSharedValue<string>("0%");
    const textTranslateX = useSharedValue<string>("-50%");
    const textTranslateY = useSharedValue<string>("-50%");
    const buttonTranslateY = useSharedValue<string>("100%");
    const buttonOpacity = useSharedValue<number>(0);

    const text2Opacity = useSharedValue<number>(0);
    const text3Opacity = useSharedValue<number>(0);
    const text4Opacity = useSharedValue<number>(0);

    const handleNext = () => {
        if (currentScreen < 3) {
            setCurrentScreen(currentScreen + 1);
        } else {
            navigateToSignIn();
        }
    };

    const navigateToSignIn = () => {
        navigation.navigate('AuthStack');
    };

    useEffect(() => {
        const animationDuration = 800;
        const config = {
            duration: animationDuration,
            easing: Easing.elastic(0.8),
        };
        const textOpacityConfig = { ...config, duration: 1600 };

        if (currentScreen === 0) {
            bgTranslateX.value = withTiming("0%", config);
            bgTranslateY.value = withTiming("0%", config);
            textTranslateX.value = withTiming("-50%", config);
            textTranslateY.value = withTiming("-50%", config);
            buttonTranslateY.value = withTiming("100%", config);
            buttonOpacity.value = withTiming(0, config);
        } else if (currentScreen === 1) {
            bgTranslateY.value = withTiming("-50%", config);
            textTranslateY.value = withTiming("0%", config);
            text2Opacity.value = withTiming(1, textOpacityConfig);
        } else if (currentScreen === 2) {
            bgTranslateX.value = withTiming("-50%", config);
            textTranslateX.value = withTiming("0%", config);
            text3Opacity.value = withTiming(1, textOpacityConfig);
        } else if (currentScreen === 3) {
            bgTranslateY.value = withTiming("0%", config);
            textTranslateY.value = withTiming("-50%", config);
            buttonTranslateY.value = withTiming("0%", config);
            buttonOpacity.value = withTiming(1, config);
            text4Opacity.value = withTiming(1, textOpacityConfig);
        }
    }, [currentScreen]);

    const bgImages = [
        require('@/assets/images/onboarding/onboarding-1.png'),
        require('@/assets/images/onboarding/onboarding-2.png'),
        require('@/assets/images/onboarding/onboarding-3.png'),
        require('@/assets/images/onboarding/onboarding-4.png'),
    ];

    const titles = [
        "Where natural beauty meets gentle care.",
        "A touch of elegance, tailored for your crown.",
        "Nurturing hair, inspiring confidence, celebrating you.",
        "Step into The Gentle Touch.",
    ];

    const subtitles = [
        "Clean, calm, and caring — your journey to healthy hair begins here.",
        "Every style is crafted with love.",
        "Together, we honor every texture",
        "Book your first appointment in minutes.",
    ];

    return (
        <View className='bg-black flex-1'>
            <Animated.View style={{ transform: [{ translateX: bgTranslateX }, { translateY: bgTranslateY }] }} className='h-[200%] w-[200%]'>
                <View className='flex-row h-1/2'>
                    <View className='h-full w-1/2'>
                        <ImageBackground 
                            source={bgImages[0]} 
                            className='flex-1'
                            resizeMode='cover'
                        />
                    </View>
                    <View className='h-full w-1/2'>
                        <ImageBackground 
                            source={bgImages[3]} 
                            className='flex-1'
                            resizeMode='cover'
                        />
                    </View>
                </View>
                <View className='flex-row h-1/2'>
                    <View className='h-full w-1/2'>
                        <ImageBackground 
                            source={bgImages[1]} 
                            className='flex-1'
                            resizeMode='cover'
                        />
                    </View>
                    <View className='h-full w-1/2'>
                        <ImageBackground 
                            source={bgImages[2]} 
                            className='flex-1'
                            resizeMode='cover'
                        />
                    </View>
                </View>
            </Animated.View>
            <LinearGradient
                colors={['#00000000', '#000000B5', '#000000ff']}
                style={{
                    width: '100%',
                    position: 'absolute',
                    top: "50%",
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
            >
                <View className='flex-1 p-4'>
                    <View className='flex-1 overflow-hidden'>
                        <Animated.View style={{ transform: [{ translateX: textTranslateX }, { translateY: textTranslateY }] }} className='h-[200%] w-[200%]'>
                            <View className='flex-row h-1/2'>
                                <Animated.View
                                    className='h-full w-1/2'
                                    style={{ opacity: text3Opacity }}
                                >
                                    <CustomText className='!text-white font-bold !font-manrope-bold text-center text-[24px] px-10'>
                                        {titles[2]}
                                    </CustomText>
                                    <CustomText className='!text-white !font-nunito-sans-regular text-center text-[16px] px-10 tracking-widest'>
                                        {subtitles[2]}
                                    </CustomText>
                                </Animated.View>
                                <Animated.View
                                    className='h-full w-1/2'
                                    style={{ opacity: text2Opacity }}
                                >
                                    <CustomText className='!text-white font-bold !font-manrope-bold text-center text-[24px] px-10'>
                                        {titles[1]}
                                    </CustomText>
                                    <CustomText className='!text-white !font-nunito-sans-regular text-center text-[16px] px-10 tracking-widest'>
                                        {subtitles[1]}
                                    </CustomText>
                                </Animated.View>
                            </View>
                            <View className='flex-row h-1/2'>
                                <Animated.View
                                    className='h-full w-1/2'
                                    style={{ opacity: text4Opacity }}
                                >
                                    <CustomText className='!text-white font-bold !font-manrope-bold text-center text-[24px] px-10'>
                                        {titles[3]}
                                    </CustomText>
                                    <CustomText className='!text-white !font-nunito-sans-regular text-center text-[16px] px-10 tracking-widest'>
                                        {subtitles[3]}
                                    </CustomText>
                                </Animated.View>
                                <View className='h-full w-1/2'>
                                    <CustomText className='!text-white font-bold !font-manrope-bold text-center text-[24px] px-10'>
                                        {titles[0]}
                                    </CustomText>
                                    <CustomText className='!text-white !font-nunito-sans-regular text-center text-[16px] px-10 tracking-widest'>
                                        {subtitles[0]}
                                    </CustomText>
                                </View>
                            </View>
                        </Animated.View>
                    </View>
                    {
                        currentScreen !== 3 && (
                            <View className='mt-[22px] flex-[.5] items-center justify-end'>
                                <PageIndicator
                                    count={3}
                                    current={currentScreen}
                                    color="#fff"
                                    opacity={1}
                                    activeColor="#D3862A"
                                    size={8}
                                    dashSize={30}
                                    duration={800}
                                />
                            </View>
                        )
                    }
                    <View
                        className={`justify-end h-[30%]`}
                    >
                        {
                            currentScreen === 3 && (
                                <Animated.View
                                    style={{ transform: [{ translateY: buttonTranslateY }], opacity: buttonOpacity }}
                                >
                                    <CustomButton
                                        icon={<GoogleSvg />}
                                        title="Join with Google"
                                        theme="secondary"
                                        className='mb-4'
                                        onPress={handleNext}
                                    />
                                </Animated.View>
                            )
                        }
                        <CustomButton
                            icon={currentScreen === 3 && <EnvelopeSvg />}
                            title={currentScreen === 3 ? "Join with Email" : currentScreen === 2 ? "Get Started" : "Next"}
                            onPress={handleNext}
                        />
                    </View>
                    <View className='mt-8 h-[12%] flex-row justify-center'>
                        <CustomText className='!text-white !font-nunito-sans-regular text-center tracking-widest'>
                            Already have an account?
                        </CustomText>
                        <Pressable 
                            onPress={navigateToSignIn}
                            className='ml-1'
                        >
                            <CustomText className='!text-primary font-semibold !font-manrope-semibold text-center'>
                                Sign In
                            </CustomText>
                        </Pressable>
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}