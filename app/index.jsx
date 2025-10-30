import { Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  // FIX 1: Removed the incorrect 'const route = useRoute();' line.
  // FIX 2: Call the useRouter hook to make the 'router' object available for navigation.
  const router = useRouter(); 
  
  return (
    <View
   className="bg-red-400"
    >
      <Text className="text-center mb-4 text-xl font-bold text-purple-400">
        Edit app/index.tsx to edit this screen.
      </Text>
      
      <TouchableOpacity 
        onPress={() => router.push("/home")}
      >
        {/* FIX 3: Changed the invalid lowercase <text> tag to the correct React Native component <Text> */}
        <Text className="text-black text-[20px] font-semibold">
          Change Route
        </Text>
      </TouchableOpacity>
    </View>
  );
}
