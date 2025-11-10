import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert("Error! Please fill all the fields");
      return; 
    }

    router.push("/home");
  };

  const router = useRouter();

  return (
    <SafeAreaView>
      <View className="mx-8">
        <View className="mt-32 items-center text-black ">
          <Text className="text-4xl font-bold">Login</Text>
          <Text className="mt-4 text-[16px] text-[#5cc1a6]">
            Login to your Account
          </Text>
        </View>
        <View>
          <TextInput
           value={username}
            onChangeText={setUsername}
            placeholder="Email"
            placeholderTextColor="#7a8582"
            className="px-2 text-[14px] text-text border-b-[1px] border-gray-200 mt-20"
          />

          <TextInput
           value={password}
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor="#7a8582"
            className="px-2 text-[14px] text-text border-b-[1px] border-gray-200 mt-10"
          />
        </View>
        <View className="items-end mt-4">
          <Text className="text-blue-800">Forgot Password?</Text>
        </View>

        <View className="mt-24">
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-black justify-center items-center h-12 rounded-xl"
          >
            <Text className="text-white text-[20px] font-semibold">Login</Text>
          </TouchableOpacity>
        </View>
        <View className="mt-2 items-center">
          <View className="flex-row">
            <Text>Don't have an account.</Text>
            <TouchableOpacity onPress={() => router.push("/signup")}>
              <Text className="text-blue-800">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default login;
