import React from "react";
import { ScrollView, Text, View, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function DetailsScreen() {
  const router = useRouter();

  return (
    <ScrollView
      className="flex-1 mb-20"
      contentContainerClassName="p-5"
      showsVerticalScrollIndicator={false}
    >
      <Text className="text-2xl font-bold mb-4">Details Screen</Text>

      <Text className="text-base text-gray-500 mb-5">
        This is another screen in the nested Stack navigator. The issue persists
        here as well.
      </Text>

      <View className="bg-amber-100 p-4 rounded-lg mb-6 border-l-4 border-amber-500">
        <Text className="font-bold mb-2">ℹ️ Same Issue Here</Text>
        <Text className="leading-6">
          Try to click the blue button at the bottom. It's still not clickable
          even though we're on a different screen within the same Stack
          navigator.
        </Text>
      </View>

      <Pressable
        onPress={() => router.back()}
        className="bg-gray-500 p-4 rounded-lg mb-6"
      >
        <Text className="text-white text-center font-bold text-base">
          ← Go Back
        </Text>
      </Pressable>
    </ScrollView>
  );
}
