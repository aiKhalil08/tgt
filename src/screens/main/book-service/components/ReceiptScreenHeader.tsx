import CustomText from "@/components/CustomText";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ReceiptScreenHeader(props: NativeStackHeaderProps) {
    const insets = useSafeAreaInsets();

    return (
        <View style={{ paddingTop: insets.top }} className='flex-row items-center gap-2 px-4 pb-2 bg-white'>
            <CustomText className='text-[16px] font-manrope-semibold font-semibold leading-normal'>Receipt</CustomText>
        </View>
    )
}