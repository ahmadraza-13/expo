import Fontisto from "@expo/vector-icons/Fontisto";
import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const home = () => {
  return (
    <SafeAreaView>
      <View className="px-2">
        <View className="mt-6">
          <Text className="text-3xl text-center font-semibold">Templates</Text>
        </View>
        <View className="flex-row items-center mt-2 px-2 border-2 border-[#bbb8b8] rounded-xl">
          <View>
            <Fontisto name="search" size={18} color="#ABABAB" />
          </View>
          <TextInput
            placeholder="Search Template"
            placeholderTextColor="#ABABAB"
          />
        </View>
        <View  className="flex flex-row gap-2 w-full mt-4">
          <View className="border-2 border-[#bbb8b8] rounded-full px-2 py-2">
            <Text className="text-base">Resume</Text>
          </View>
          <View className="border-2 border-[#bbb8b8] rounded-full px-2 py-2">
            <Text className="text-base">Letters</Text>
          </View>
          <View className="border-2 border-[#bbb8b8] rounded-full px-2 py-2">
            <Text className="text-base">Cards</Text>
          </View>
          <View className="border-2 border-[#bbb8b8] rounded-full px-2 py-2">
            <Text className="text-base">Applications</Text>
          </View>
        </View>
        <View>
          
        </View>
      </View>
    </SafeAreaView>
  );
};

export default home;
