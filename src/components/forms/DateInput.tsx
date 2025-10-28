import { StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import CustomTextInput from './CustomTextInput'
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function DateInput({value, onChange, placeholder}: {value: string, onChange: (value: string) => void, placeholder?: string}) {
   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const handleOpen = () => {
        setDatePickerVisibility(true);
    }

    const handleClose = () => {
        setDatePickerVisibility(false);
    }

    const handleChange = (date: Date) => {
        onChange(date.toISOString().split("T")[0]);
        handleClose();
    }
    
    return (
        <>
            <CustomTextInput
                placeholder={placeholder || "Select Date"}
                value={value}
                onPress={handleOpen}
                editable={false}
            />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleChange}
                onCancel={handleClose}
            />
        </>
    )
}

const styles = StyleSheet.create({})