import { Pressable, PressableProps } from 'react-native'
import React from 'react'
import CustomText from './CustomText'

export default function CustomButton({ title, icon, theme="primary", ...props }: { title: string, icon?: React.ReactNode, theme?: "primary" | "secondary" } & PressableProps) {
    const bgColor = theme === "secondary" ? "bg-white" : "bg-primary";
    const borderColor = theme === "secondary" ? "border-white" : "border-primary";
    const textColor = theme === "secondary" ? "text-primary" : "text-white";

    return (
        <Pressable
            {...props}
            className={`w-full px-8 py-4 rounded-[50px] items-center justify-center flex-row gap-4 border ${bgColor} ${borderColor} ${props.className}`}
        >
            {icon}
            <CustomText className={`${textColor} font-semibold !font-manrope-semibold`}>{title}</CustomText>
        </Pressable>
    )
}