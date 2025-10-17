import { StyleSheet } from 'react-native'
import React from 'react'
import { OtpInput as OtpField } from 'react-native-otp-entry'

export default function OtpInput({onChange} : {onChange: (text: string) => void}) {
  return (
    <OtpField
        numberOfDigits={6}
        focusColor="#0F67FE40"
        autoFocus={false}
        hideStick={true}
        // blurOnFilled={true}
        type="numeric"
        secureTextEntry={false}
        // onFocus={() => console.log("Focused")}
        // onBlur={() => console.log("Blurred")}
        onTextChange={onChange}
        // onFilled={(text) => console.log(`OTP is ${text}`)}
        textInputProps={{
            accessibilityLabel: "One-Time Password",
        }}
        textProps={{
            accessibilityRole: "text",
            accessibilityLabel: "OTP digit",
            allowFontScaling: false,
        }}
        theme={{
            // containerStyle: styles.container,
            pinCodeContainerStyle: styles.pinCodeContainer,
            pinCodeTextStyle: styles.pinCodeText,
            focusedPinCodeContainerStyle: styles.focusedPinCodeContainerStyle,
            // focusStickStyle: styles.focusStick,
            // placeholderTextStyle: styles.placeholderText,
            // filledPinCodeContainerStyle: styles.filledPinCodeContainer,
            // disabledPinCodeContainerStyle: styles.disabledPinCodeContainer,
        }}
    />
  )
}

const styles = StyleSheet.create({
    pinCodeContainer: {
        height: "auto",
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderWidth: 1,
        backgroundColor: "#F0F3F6",
        borderColor: "transparent"
    },
    focusedPinCodeContainerStyle: {
        borderColor: "#D3862A",
        backgroundColor: "#fff"
    },
    pinCodeText: {
        color: "#111111",
        fontSize: 16,
        fontFamily: 'PlusJakartaSans-SemiBold'
    },

})