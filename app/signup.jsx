import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const signup = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  

  const handleSignup = () => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill all the fields.");
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    router.push("./home");
  };

  return (
    <SafeAreaView>
      <View className="mx-8">
        <View className="mt-32 items-center text-black">
          <Text className="text-4xl font-bold">Sign Up</Text>
          <Text className="mt-4 text-[16px] text-[#5cc1a6]">
            Here you can create your account.
          </Text>
        </View>

        <View>
          <TextInput
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
            placeholderTextColor="#7a8582"
            className="px-2 text-[14px] border-b-[1px] border-gray-200 mt-10"
          />

          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor="#7a8582"
            className="px-2 text-[14px] border-b-[1px] border-gray-200 mt-10"
          />

          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#7a8582"
            className="px-2 text-[14px] border-b-[1px] border-gray-200 mt-10"
          />

          <TextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm Password"
            secureTextEntry
            placeholderTextColor="#7a8582"
            className="px-2 text-[14px] border-b-[1px] border-gray-200 mt-10"
          />
        </View>

        <View className="mt-20">
          <TouchableOpacity
            onPress={handleSignup}
            className="bg-black justify-center items-center h-12 rounded-xl"
          >
            <Text className="text-white text-[20px] font-semibold">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        <View className="mt-2 items-center">
          <View className="flex-row">
            <Text>Already have an account. </Text>
            <TouchableOpacity onPress={() => router.push("/login")}>
              <Text className="text-blue-800">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default signup;
