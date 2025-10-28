import {Pressable, StyleSheet, View} from 'react-native';
import React, {
  forwardRef,
  ForwardRefRenderFunction,
} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CalendarList, DateData } from 'react-native-calendars';
import CustomText from '@/components/CustomText';
import { DayProps } from 'react-native-calendars/src/calendar/day';
import { format } from 'date-fns';

type CalendarRBSheetProps = {
    selected: string;
    onSelect: (date: DateData) => void;
    minDate?: string;
};

const CalendarRBSheet: ForwardRefRenderFunction<{open: () => void, close: () => void}, CalendarRBSheetProps> = (
  {selected, onSelect, minDate},
  ref,
) => {

    const insets = useSafeAreaInsets();

    return (
        <RBSheet
            ref={ref}
            customStyles={{
                container: {
                    height: "50%",
                    paddingBottom: insets.bottom,
                },
            }}
            customModalProps={{
                animationType: 'slide',
                statusBarTranslucent: true,
            }}
            draggable
        >
            <View className='flex-1 p-4'>
                <CalendarList
                    markedDates={{
                        [selected]: {selected: true}
                    }}
                    calendarStyle={{
                        width: "100%",
                    }}
                    dayComponent={(dayProps) => (
                        <DayComponent isSelected={dayProps.date?.dateString === selected} {...dayProps} />
                    )}
                    renderHeader={(date) => (
                        <View className='w-full flex-row'>
                            <CustomText
                                className='!font-manrope-semibold !font-semibold text-[16px] !text-[#636366]'
                            >{format(date, "MMMM yyyy")}</CustomText>
                            <View className='h-[1px] self-end bg-[#D9D9D9] flex-1 ml-4' />
                        </View>
                    )}
                    minDate={minDate}
                    onDayPress={onSelect}
                />
            </View>
        </RBSheet>
    );
};

const DayComponent = ({date, state, onPress, isSelected}: DayProps & {date?: DateData, isSelected: boolean}) => {

    return (
        <Pressable onPress={() => onPress && onPress(date)}>
            <CustomText className={`${isSelected ? '!text-primary border-primary' : (state === "disabled" ? '!text-[#939393] border-transparent' : '!text-[#0B0C15] border-transparent')} border p-2 text-[16px] !font-manrope-medium !font-medium`}>
                {date?.day}
            </CustomText>
        </Pressable>
    )
}

export default forwardRef(CalendarRBSheet);

const styles = StyleSheet.create({});
