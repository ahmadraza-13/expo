import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import User from "../../assets/images/Vector.png";
const history = () => {
  return (
    <SafeAreaView>
      <View className="px-6">
        <View className="flex-row mt-4">
          <View className="">
            <Text>
              <FontAwesome6 name="arrow-left" size={34} color="black" />
            </Text>
          </View>
          <View className="justify-center items-center">
            <Text className="text-center text-2xl font-semibold">
              Personal Information
            </Text>
          </View>
        </View>
        <View className="mt-9 justify-center items-center">
          <View className="w-24 h-24 justify-center items-center">
            <View className="border-2 rounded-full">
              <Image source={User} />
            </View>
          </View>
          <View className="">
            <TouchableOpacity className="bg-primary py-4 rounded-lg mt-2 mb-2 w-48">
              <Text className="text-white text-center">Add Your Picture</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row w-full gap-4 mt-4">
          <TextInput
            placeholder="Your First Name"
            placeholderTextColor="#ABABAB"
            className="border-2 rounded-md border-[#bbb8b8] w-[48%] px-4"
          />
          <TextInput
            placeholder="Your Last Name"
            placeholderTextColor="#ABABAB"
            className="border-2 rounded-md border-[#bbb8b8] w-[48%] px-4 py-2"
          />
        </View>
        <View className="mt-4">
          <TextInput
            placeholder="Your Email Address"
            placeholderTextColor="#ABABAB"
            className="border-2 rounded-md border-[#bbb8b8] px-4 py-2"
          />
        </View>
        <View className="flex-row mt-4 w-full gap-4">
          <TextInput
            placeholder="Your Contact Number"
            placeholderTextColor="#ABABAB"
            className="border-2 rounded-md border-[#bbb8b8] px-4 py-2 w-52"
          />
          <TextInput
            placeholder="Your Age"
            placeholderTextColor="#ABABAB"
            className="border-2 rounded-md border-[#bbb8b8] px-4 py-2 w-[140px]"
          />
        </View>
        <View className="mt-4">
          <TextInput
            placeholder="Your Location"
            placeholderTextColor="#ABABAB"
            className="border-2 rounded-md border-[#bbb8b8] px-4 py-2"
          />
        </View>
        <View className="mt-4">
          <TextInput
            placeholder="Your Website Portfolio URL"
            placeholderTextColor="#ABABAB"
            className="border-2 rounded-md border-[#bbb8b8] px-4 py-2"
          />
        </View>
        <View className="mt-4">
          <TextInput
            placeholder="Your LinkedIn Profile URL"
            placeholderTextColor="#ABABAB"
            className="border-2 rounded-md border-[#bbb8b8] px-4 py-2"
          />
        </View>
        <View className="mt-4">
          <TextInput
            placeholder="A highly motivated and detail-oriented professional with [X] years of experience in [Your Industry]. Proven ability to deliver results and [mention a key strength, e.g., streamline operations or build strong client relationships]. Eager to leverage a diverse skill set, including [Skill 1] and [Skill 2], to contribute immediately to a challenging and rewarding role at a growth-focused organization."
            placeholderTextColor="#ABABAB"
            className="border-2 rounded-md border-[#bbb8b8] px-4 py-2 h-40"
            multiline={true}
            textAlignVertical="top"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default history;
