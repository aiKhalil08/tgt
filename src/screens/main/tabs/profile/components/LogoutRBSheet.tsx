import { Pressable, StyleSheet, View } from 'react-native';
import React, {
  forwardRef,
  ForwardRefRenderFunction,
} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomText from '@/components/CustomText';
import CustomButton from '@/components/CustomButton';
import CancelSvg from '@/assets/icons/Cancel';

type LogoutRBSheetProps = {
    onCancel: () => void;
    onLogout: () => void;
};

const LogoutRBSheet: ForwardRefRenderFunction<{open: () => void, close: () => void}, LogoutRBSheetProps> = (
  {onCancel, onLogout},
  ref,
) => {

    const insets = useSafeAreaInsets();

    return (
        <RBSheet
            ref={ref}
            customStyles={{
                container: {
                    height: "25%",
                    paddingBottom: insets.bottom,
                    paddingTop: 16,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                },
            }}
            customModalProps={{
                animationType: 'slide',
                statusBarTranslucent: true,
            }}
        >
            <View className='p-4'>
                <View className='flex-row justify-between items-center'>
                    <CustomText className='text-[19px] !font-manrope-bold !font-bold !text-[#0B0C15]'>Logout?</CustomText>
                    <Pressable onPress={onCancel}>
                        <CancelSvg size={24} color='#1C1C28' />
                    </Pressable>
                </View>
                <CustomText className='!text-[#8F90A6] text-[15px] tracking-wider mt-2'>Are you sure want to logout from the app?</CustomText>
                <View className='gap-2 flex-row w-full mt-6'>
                    <CustomButton
                        title="Cancel"
                        theme="secondary"
                        className='!border-primary flex-1'
                        onPress={onCancel}
                    />
                    <CustomButton
                        title="Logout"
                        className='!bg-[#E53535] !border-[#E53535] flex-1'
                        onPress={onLogout}
                    />
                </View>
            </View>
        </RBSheet>
    );
};


export default forwardRef(LogoutRBSheet);

const styles = StyleSheet.create({});
