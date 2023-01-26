import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      {/* Header */}
      <View>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1584225064536-d0fbc0a10f18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
      </View>
    </SafeAreaView>
  );
}
