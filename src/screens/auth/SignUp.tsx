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
import UserSvg from '@/assets/icons/User'
import PhoneCodeSvg from '@/assets/icons/PhoneCode'
import { SubTitle, Title } from './components/PageTitle'

type SignUpScreenProps = NativeStackScreenProps<AuthStackParamList, 'SignUp'>

export default function SignUp({ navigation }: SignUpScreenProps) {
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
    });

    const navigateToSignIn = () => {
        navigation.popToTop();
    }

    const handleSignUp = () => {
        console.log(data);
    }

    const handleGoogleSignUp = () => {
        console.log('Google SignUp');
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
                    <Title>Join The Gentle Touch,</Title>
                    <SubTitle>Create your account to book services, track your hair journey, and enjoy exclusive care tips.</SubTitle>
                </View>
                <FormGroup
                    className='mt-9'
                >
                    <CustomTextInput
                        placeholder='Name'
                        value={data.name}
                        onChangeText={(value) => handleInputChange('name', value)}
                        LeftIcon={UserSvg}
                    />
                    <CustomTextInput
                        placeholder='Email address'
                        keyboardType='email-address'
                        value={data.email}
                        onChangeText={(value) => handleInputChange('email', value)}
                        LeftIcon={EnvelopeSvg}
                    />
                    <CustomTextInput
                        placeholder='Mobile number'
                        keyboardType='phone-pad'
                        value={data.phone}
                        onChangeText={(value) => handleInputChange('phone', value)}
                        LeftIcon={PhoneCodeSvg}
                    />
                    <PasswordInput
                        placeholder='Password'
                        value={data.password}
                        onChangeText={(value) => handleInputChange('password', value)}
                    />
                </FormGroup>
                <View className='mt-4 flex-row gap-1 flex-wrap'>
                    <CustomText className='text-[12px] tracking-widest !font-nunito-sans-regular text-grey-80'>
                        By signing up you agree to our
                    </CustomText>
                    <Pressable
                        onPress={() => console.log('Term of use and privacy')}
                    >
                        <CustomText className='text-[12px] text-primary font-manrope-bold font-bold'>
                        Term of use and privacy
                        </CustomText>
                    </Pressable>
                    <CustomText className='text-[12px] tracking-widest !font-nunito-sans-regular text-grey-80'>
                        notice
                    </CustomText>
                </View>
                <View className='mt-4 gap-4'>
                    <CustomButton
                        title='Join Now'
                        onPress={handleSignUp}
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
                        onPress={handleGoogleSignUp}
                        title="Join with Google"
                        theme="secondary"
                        className='!border-primary'
                    />
                </View>
                <View className='mt-8 flex-row justify-center'>
                    <CustomText className='!text-grey-80 !font-nunito-sans-regular text-center tracking-widest'>
                        Already have an account?
                    </CustomText>
                    <Pressable 
                        onPress={navigateToSignIn}
                        className='ml-1'
                    >
                        <CustomText className='!text-black font-semibold !font-manrope-semibold text-center'>
                            Sign In
                        </CustomText>
                    </Pressable>
                </View>
            </ScrollView>
        </ScreenView>
    )
}

const styles = StyleSheet.create({})