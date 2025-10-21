import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { BookServiceStackParamList } from '../../BookServiceStack'
import CustomButton from '@/components/CustomButton'
import CustomText from '@/components/CustomText'
import SelectDateCard from './components/SelectDate'
import SelectTimeCard from './components/SelectTime'

type SelectDateProps = NativeStackScreenProps<BookServiceStackParamList, 'SelectDate'>

export default function SelectDate({route, navigation}: SelectDateProps) {
    const handleConfirmAppointment = () => {
        navigation.navigate('BookingSummary')
    }

    return (
        <View className='flex-1 p-4'>
            <View className='flex-1 gap-8'>
                <SelectDateCard onSelect={() => {}} />
                <SelectTimeCard onSelect={() => {}} />
            </View>
            <CustomButton
                className='mt-4'
                title="Confirm Appointment"
                onPress={handleConfirmAppointment}
            />
        </View>
    )
}

const styles = StyleSheet.create({})