import { Pressable, PressableProps, StyleSheet, View } from 'react-native'
import React from 'react'
import CustomText from './CustomText';

type PanelProps = {
    title: string,
    subTitle?: string,
    leftElement?: React.ReactNode,
    rightElement?: React.ReactNode,
    titleClassName?: string,
    subTitleClassName?: string,
} & PressableProps;

export default function Panel({ title, subTitle, leftElement, rightElement=null, titleClassName="", subTitleClassName="", ...props }: PanelProps) {

    return (
        <Pressable
            {...props}
            className={`p-4 rounded-[50px] border border-grey-20 flex-row items-center justify-between gap-4 bg-white ${props.className}`}
            style={[
                {
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.05,
                    shadowRadius: 8,
                    elevation: 2,
                },
                props.style as object
            ]}
        >
            <View className='flex-row gap-3 items-center flex-1'>
                {leftElement &&
                <View>
                    {leftElement}
                </View>
                }
                <View className='gap-2'>
                        <CustomText className={`!font-jakarta-extrabold !text-gray-80 text-[16px] tracking-tighter ${titleClassName}`}>
                            {title}
                        </CustomText>
                    {
                        subTitle &&
                            <CustomText className={`!font-jakarta-medium !text-gray-60 text-[14px] ${subTitleClassName}`}>
                                {subTitle}
                            </CustomText>
                    }
                </View>
            </View>
            <View>{rightElement}</View>
        </Pressable>
    )
}

const styles = StyleSheet.create({})