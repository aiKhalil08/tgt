import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainStackParamList } from '@/navigation/MainStack'
import FormGroup from '@/components/forms/FormGroup'
import CustomTextInput from '@/components/forms/CustomTextInput'
import CustomButton from '@/components/CustomButton'
import GenderInput from '@/components/forms/GenderInput'
import DateInput from '@/components/forms/DateInput'
import PhoneInput from '@/components/forms/PhoneInput'

type UpdateProfileProps = NativeStackScreenProps<MainStackParamList, 'UpdateProfile'>

export default function UpdateProfile({route, navigation}: UpdateProfileProps) {
    const [data, setData] = useState({
        fullName: "",
        emailAddress: "",
        mobileNumber: "",
        dob: "",
        gender: "",
        notes: "",
    });

    const handleChange = (key: string, value: string) => {
        setData({...data, [key]: value})
    }

    const handleSubmit = () => {
        console.log(data)
        navigation.goBack()
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                padding: 16,
                gap: 24,
                height: "100%",
            }}
        >
            <View className='items-center'>
                <Image
                    source={require("@assets/images/avatar.png")}
                    className='w-[80px] h-[80px] rounded-full'
                />
            </View>
            <FormGroup>
                <CustomTextInput
                    placeholder="Full Name"
                    value={data.fullName}
                    onChangeText={(text) => handleChange("fullName", text)}
                />
                <CustomTextInput
                    placeholder="Email Address"
                    value={data.emailAddress}
                    onChangeText={(text) => handleChange("emailAddress", text)}
                    keyboardType="email-address"
                />
                <PhoneInput
                    placeholder="Mobile Number"
                    value={data.mobileNumber}
                    onChangeText={(text) => handleChange("mobileNumber", text)}
                />
                <DateInput
                    placeholder="Date of Birth"
                    value={data.dob}
                    onChange={(text) => handleChange("dob", text)}
                />
                <GenderInput
                    value={data.gender}
                    onChange={(text) => handleChange("gender", text)}
                />
                <CustomTextInput
                    placeholder="Hair Type & Care Notes"
                    value={data.notes}
                    onChangeText={(text) => handleChange("notes", text)}
                    multiline
                    className='h-24 !rounded-none'
                />
            </FormGroup>
            <CustomButton
                title="Edit Profile"
                onPress={handleSubmit}
                className='mt-auto'
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({})