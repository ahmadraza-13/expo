import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  // FIX 1: Removed the incorrect 'const route = useRoute();' line.
  // FIX 2: Call the useRouter hook to make the 'router' object available for navigation.
  const router = useRouter(); 
  
  return (
    <View
   className="flex-1 justify-center items-center bg-green-600"
    >
      <Text className="text-center mb-4 text-xl font-semibold text-white">
        Edit app/index.tsx to edit this screen.
      </Text>
      
      <TouchableOpacity 
        onPress={() => router.push("/home")}
      >
        {/* FIX 3: Changed the invalid lowercase <text> tag to the correct React Native component <Text> */}
        <Text className="text-black text-2xl font-bold">
          Change Route
        </Text>
      </TouchableOpacity>
    </View>
  );
}
