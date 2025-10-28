import { Platform, Pressable, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import ChevronLeftSvg from '@/assets/icons/ChevronLeft';
import MoreVerticalSvg from '@/assets/icons/MoreVertical';
import { Message } from '../ChatRoom';
import CustomTextInput from '@/components/forms/CustomTextInput';
import AttachmentSvg from '@/assets/icons/Attachment';
import SmileSvg from '@/assets/icons/Smile';
import PaperPlaneSvg from '@/assets/icons/PaperPlane';

export default function ChatRoomFooter({onSend}: {onSend: (message: Message) => void}) {
    const [text, setText] = useState('');
    const [file, setFile] = useState<string | null>(null);

    const handleSend = () => {
        const message: Message = {text};

        if (file) {
            message.file = file;
        }

        setText('');
        onSend(message);
    };

    const handlePickFile = () => {
        
    };

    return (
        <>
            {
                Platform.OS === "android" && (
                    <View
                        style={{
                            height: 2,
                            backgroundColor: "#60617088",
                            opacity: 0.1,
                        }}
                    />
                )
            }
            <View
                className='px-4 py-3 flex-row gap-4 bg-white items-center'
                style={
                    Platform.select({
                        ios: {
                            shadowOffset: {
                                width: 0,
                                height: -2,
                            },
                            shadowColor: "#606170",
                            shadowOpacity: 0.1,
                        }
                    })
                }
            >
                <Pressable
                    onPress={handlePickFile}
                >
                    <AttachmentSvg size={24} color='#ADB3BC'/>
                </Pressable>
                <View className='flex-1'>
                    <CustomTextInput
                        placeholder='Type a message'
                        onChangeText={setText}
                        className='!pl-4 !py-3 !font-nunito-sans-regular !text-[16px] !text-grey-80'
                        RightIcon={SmileSvg}
                        highlight={false}
                        multiline
                    />
                </View>
                <Pressable
                    onPress={handleSend}
                    className='w-[48px] h-[48px] rounded-full items-center justify-center bg-[#D3862A]'
                >
                    <PaperPlaneSvg size={24} color='#fff'/>
                </Pressable>
            </View>
        </>
    )
}

const styles = StyleSheet.create({})