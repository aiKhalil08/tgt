import ChevronLeftSvg from "@/assets/icons/ChevronLeft";
import CustomText from "@/components/CustomText";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SelectTypeScreenHeader(props: NativeStackHeaderProps) {
    const insets = useSafeAreaInsets();

    const title = (props.route.params as any).categoryName;

    return (
        <View style={{ paddingTop: insets.top }} className='flex-row items-center gap-2 px-4 pb-2 bg-white'>
            <Pressable onPress={() => props.navigation.goBack()}>
                <ChevronLeftSvg size={24} color="#101010" />    
            </Pressable>
            <CustomText className='text-[16px] font-manrope-semibold font-semibold leading-normal'>{title}</CustomText>
        </View>
    )
}