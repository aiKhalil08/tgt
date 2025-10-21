import ChevronLeftSvg from "@/assets/icons/ChevronLeft";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function DetailsScreenHeader(props: NativeStackHeaderProps) {
    const insets = useSafeAreaInsets();

    return (
        <View style={{ paddingTop: insets.top }} className='flex-row items-center gap-2 px-4 pb-2 bg-white'>
            <Pressable onPress={() => props.navigation.goBack()}>
                <ChevronLeftSvg size={24} color="#101010" />    
            </Pressable>
            
        </View>
    )
}