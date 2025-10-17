import { Pressable, ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import ScreenView from './components/ScreenView'
import CustomText from '@/components/CustomText'
import FormGroup from '@/components/forms/FormGroup'
import CustomTextInput from '@/components/forms/CustomTextInput'
import EnvelopeSvg from '@/assets/icons/Envelope'
import PasswordInput from '@/components/forms/PasswordInput'
import CustomButton from '@/components/CustomButton'
import GoogleSvg from '@/assets/icons/Google.svg'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthStackParamList } from '@/navigation/AuthStack'
import { SubTitle, Title } from './components/PageTitle'

type SignInScreenProps = NativeStackScreenProps<AuthStackParamList, 'SignIn'>

export default function SignIn({ navigation }: SignInScreenProps) {
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const navigateToSignUp = () => {
        navigation.navigate('SignUp');
    }

    const handleSignIn = () => {
        console.log(data);
    }

    const handleGoogleSignIn = () => {
        console.log('Google Sign In');
    }

    const handleInputChange = (field: string, value: string) => {
        setData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    }

    return (
        <ScreenView>
            <ScrollView className='flex-1 px-4'>
                <View className='gap-4 mt-11'>
                    <Title>Ready for some gentle care?</Title>
                    <SubTitle>Sign in to browse services and book your next appointment</SubTitle>
                </View>
                <FormGroup
                    className='mt-14'
                >
                    <CustomTextInput
                        placeholder='Email'
                        keyboardType='email-address'
                        value={data.email}
                        onChangeText={(value) => handleInputChange('email', value)}
                        LeftIcon={EnvelopeSvg}
                    />
                    <PasswordInput
                        placeholder='Password'
                        value={data.password}
                        onChangeText={(value) => handleInputChange('password', value)}
                    />
                </FormGroup>
                <View className='mt-4 flex-row justify-end'>
                    <Pressable
                        onPress={() => navigation.navigate('ForgotPassword')}
                    >
                        <CustomText className='text-[14px] tracking-wider !font-nunito-sans-regular text-primary'>
                            Forgot Password?
                        </CustomText>
                    </Pressable>
                </View>
                <View className='mt-[108px] gap-4'>
                    <CustomButton
                        title='Sign In'
                        onPress={handleSignIn}
                    />
                    <View className='w-full'>
                        <View className="flex-row items-center my-4">
                            <View className={`flex-1 h-px border-grey-40 border-t`} />
                            <CustomText className={`mx-[34px] text-[16px] !font-nunito-sans-regular tracking-wider`}>
                                or
                            </CustomText>
                            <View className={`flex-1 h-px border-grey-40 border-t`} />
                        </View>
                    </View>
                    <CustomButton
                        icon={<GoogleSvg />}
                        onPress={handleGoogleSignIn}
                        title="Sign In with Google"
                        theme="secondary"
                        className='!border-primary'
                    />
                </View>
                <View className='mt-8 flex-row justify-center'>
                    <CustomText className='!text-grey-80 !font-nunito-sans-regular text-center tracking-widest'>
                        Don't have an account?
                    </CustomText>
                    <Pressable 
                        onPress={navigateToSignUp}
                        className='ml-1'
                    >
                        <CustomText className='!text-black font-semibold !font-manrope-semibold text-center'>
                            Join Now
                        </CustomText>
                    </Pressable>
                </View>
            </ScrollView>
        </ScreenView>
    )
}

const styles = StyleSheet.create({})