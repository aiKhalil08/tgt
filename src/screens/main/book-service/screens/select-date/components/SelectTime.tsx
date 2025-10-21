import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomText from '@/components/CustomText'
import { add, format } from 'date-fns'
import Panel from '@/components/Panel';

export default function SelectTimeCard({onSelect}: {onSelect: () => void}) {

    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const handleSelectTime = (time: string) => {
        setSelectedTime(time);
    }

    const times = ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"];

    return (
        <View className='gap-6 flex-1'>
            <CustomText className='!font-manrope-semibold !font-semibold text-[18px]'>
                Select Time
            </CustomText>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    gap: 16
                }}
            >
                {
                    times.map((time) => (
                        <TimePanel
                            key={time}
                            time={time}
                            onSelect={() => handleSelectTime(time)}
                            isSelected={selectedTime === time}
                        />
                    ))
                }
            </ScrollView>
        </View>
    )
}

const TimePanel = ({time, onSelect, isSelected}: {time: string, onSelect: () => void, isSelected: boolean}) => {
    return (
        <Panel
            onPress={onSelect}
            title={time}
            titleClassName='!font-manrope-medium !font-medium !text-[14px] !text-[#0B0C15]'
            className={`!rounded-[10px] border !py-3 !px-4 ${isSelected ? 'border-primary' : 'border-white'}`}
            style={{
                shadowColor: "#00000014",
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.9,
                shadowRadius: 8,
                elevation: 2,
            }}
        />
    )
}