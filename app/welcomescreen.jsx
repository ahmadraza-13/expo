import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const WelcomeScreen = () => {

  const router = useRouter();

  return (
    <SafeAreaView className="flex-1">
      <LinearGradient
        // Gradient transition from solid blue → faded → white
        colors={["#000000", "#000000", "#FFFFFF"]}
        locations={[0, 0.3, 0.6, 1]}
        className="flex-1"
      >
        <View>
          <View className="mt-20 items-center">
            <Text className="text-white text-4xl font-bold border-b-2 border-white">
              Welcome
            </Text>
          </View>
          <View className="mt-96 items-center">
            <Text className="text-primary text-3xl font-bold">
              Login / Signup
            </Text>
          </View>
          <View className="mt-5">
            <Text className="text-cyan-300 mb-8 text-center text-[14px]">Here you can create your account.</Text>
            <TouchableOpacity
             onPress={() => router.push("/login")}
             className="py-4 rounded-full border-2 border-primary mx-4">
              <Text className="text-center text-primary font-semibold text-[16px]">
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <View className="mt-5">
            <TouchableOpacity 
             onPress={() => router.push("/signup")}
             className="py-4 rounded-full border-2 border-primary mx-4">
              <Text className="text-center text-primary font-semibold text-[16px]">
                Create an Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
