import { Pressable, StyleSheet, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import CustomText from '@/components/CustomText'
import { add, format } from 'date-fns'
import CalendarSvg from '@/assets/icons/Calendar';
import CalendarRBSheet from './Calendar';
import { DateData } from 'react-native-calendars';

export default function SelectDateCard({onSelect}: {onSelect: () => void}) {

    const [selectedDate, setSelectedDate] = useState<string>("");
    const [showCalendar, setShowCalendar] = useState<boolean>(false);

    const calendarRef = useRef<{open: () => void, close: () => void}>(null);

    useEffect(() => {
        if (showCalendar) {
            calendarRef.current?.open();
        }
    }, [showCalendar]);

    const handlePressDate = (date: string) => {
        setShowCalendar(false);
        setSelectedDate(date);
    }

    const handlePressCalendar = () => {
        setSelectedDate("");
        setShowCalendar(!showCalendar);
    }

    const handleCalendarDateSelect = (date: DateData) => {
        setSelectedDate(date.dateString);
    }

    const dates = [
        new Date(),
        add(new Date(), {days: 1}),
        add(new Date(), {days: 2})
    ].map((date) => ({day: format(date, "EEE"), month: format(date, "MMM d"), date: date.toLocaleDateString()}));

    const duration = "45 mins";

    console.log("selected date is ", selectedDate)

    return (
        <View className='gap-6'>
            <CustomText className='!font-manrope-semibold !font-semibold text-[18px]'>
                Select Date
            </CustomText>
            <View className='flex-row gap-4'>
                {
                    dates.map((date) => (
                        <DateCard
                            key={date.date}
                            date={{day: date.day, month: date.month}}
                            duration={duration}
                            onSelect={() => handlePressDate(date.date)}
                            isSelected={selectedDate === date.date}
                        />
                    ))
                }
                <CalendarButton
                    isSelected={showCalendar}
                    onPress={handlePressCalendar}
                />
            </View>
            <CalendarRBSheet
                selected={selectedDate}
                onSelect={handleCalendarDateSelect}
                onClose={() => setShowCalendar(false)}
                ref={calendarRef}
            />
        </View>
    )
}

const DateCard = ({date, duration, onSelect, isSelected}: {date: {day: string, month: string}, duration: string, onSelect: () => void, isSelected: boolean}) => {
    return (
        <PressableWrapper
            onPress={onSelect}
            isSelected={isSelected}
        >
            <CustomText className={`!font-manrope-semibold uppercase !font-semibold ${isSelected ? 'text-primary' : 'text-[#939393]'}`}>
                {date.day}
            </CustomText>
            <CustomText className={`!font-manrope-medium !font-medium ${isSelected ? 'text-primary' : 'text-[#0B0C15]'}`}>
                {date.month}
            </CustomText>
            <CustomText className={`!font-manrope-semibold text-[12px] !font-semibold ${isSelected ? 'text-primary' : 'text-[#939393]'}`}>
                {duration}
            </CustomText>
        </PressableWrapper>
    )
}

const CalendarButton = ({isSelected, onPress}: {isSelected: boolean, onPress: () => void}) => {
    return (
        <PressableWrapper
            onPress={onPress}
            isSelected={isSelected}
        >
            <CalendarSvg color={isSelected ? '#D3862A' : '#000'} />
            <CustomText className={`!font-manrope-medium !font-medium text-center ${isSelected ? 'text-primary' : 'text-[#0B0C15]'}`}>
                More dates
            </CustomText>
        </PressableWrapper>
    );
}

const PressableWrapper = ({onPress, isSelected, children}: {onPress: () => void, isSelected: boolean, children: React.ReactNode}) => {
    return (
        <Pressable
            onPress={onPress}
            className={`rounded-[6px] bg-white p-3 gap-1 border items-center flex-1 ${isSelected ? 'bg-white border-primary' : 'bg-white border-white'}`}
            style={{
                shadowColor: isSelected ? "#235AFF14" : "#00000014",
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.9,
                shadowRadius: 8,
                elevation: 2,
            }}
        >
            {children}
        </Pressable>
    );
}

const styles = StyleSheet.create({})