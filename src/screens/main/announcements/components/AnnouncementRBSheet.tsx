import {StyleSheet, View} from 'react-native';
import React, {
  forwardRef,
  ForwardRefRenderFunction,
} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import AnnouncementList from './AnnouncementList';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type AnnouncementRBSheetProps = {
  onClose: () => void;
};

const AnnouncementRBSheet: ForwardRefRenderFunction<{open: () => void, close: () => void}, AnnouncementRBSheetProps> = (
  {onClose},
  ref,
) => {

    const insets = useSafeAreaInsets();

    return (
        <RBSheet
            ref={ref}
            customStyles={{
                container: {
                    height: "90%",
                    padding: 16,
                    paddingBottom: insets.bottom,
                },
            }}
            customModalProps={{
                animationType: 'slide',
                statusBarTranslucent: true,
            }}
            customAvoidingViewProps={{
                enabled: false,
            }}
        >
            <View className='flex-1'>
                {/* <ScreenHeader /> */}
                <AnnouncementList />
            </View>
        </RBSheet>
    );
};

export default forwardRef(AnnouncementRBSheet);

const styles = StyleSheet.create({});
