import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Panel from '@/components/Panel'
import LogoutSvg from '@/assets/icons/Logout'
import ChevronSvg from '@/assets/icons/Chevron'
import { useRef } from 'react'
import LogoutRBSheet from './LogoutRBSheet'

export default function LogoutPanel({ onPress }: { onPress: () => void }) {
    const rbSheetRef = useRef<{open: () => void, close: () => void}>(null);

    const handleLogout = () => {
        rbSheetRef.current?.close();
        onPress();
    }

    return (
        <>
            <Panel
                title="Logout"
                leftElement={<LogoutSvg size={24} color='#E53535' />}
                rightElement={
                <ChevronSvg size={16} color='#E53535'/>
                }
                onPress={() => rbSheetRef.current?.open()}
                className='!rounded-none !border-0 !gap-1'
                titleClassName='!text-[15px] !font-manrope-bold !font-bold !text-[#E53535]'
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
            <LogoutRBSheet 
                ref={rbSheetRef}
                onCancel={() => rbSheetRef.current?.close()}
                onLogout={handleLogout}
            />
        </>
    )
}

const styles = StyleSheet.create({})