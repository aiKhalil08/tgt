import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Panel from '@/components/Panel'
import { ProfileAction } from '../Profile'
import ChevronSvg from '@/assets/icons/Chevron'

export default function ActionList({ actions }: { actions: ProfileAction[] }) {
    return (
        <View className='gap-8'>
        {
            actions.map((action, index) => (
                <Panel
                    key={index}
                    title={action.title}
                    subTitle={action.subtitle}
                    leftElement={<View className=''>
                    {action.icon}
                    </View>}
                    rightElement={
                    <ChevronSvg size={16} color='#8F90A6'/>
                    }
                    onPress={action.onPress}
                    className='!rounded-none !border-0 !gap-1'
                    titleClassName='!text-[15px] !font-manrope-bold !font-bold !text-[#1C1C28]'
                    subTitleClassName='!text-[#8F90A6] !text-[12px]'
                    style={{
                        shadowOffset: {
                            width: 0,
                            height: 0,
                        },
                        shadowOpacity: 0,
                        shadowRadius: 0,
                        elevation: 0,
                    }}
                />
            ))
        }
        </View>
    )
}

const styles = StyleSheet.create({})